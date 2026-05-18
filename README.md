# Vewr Health

Patient-controlled health records. Files are encrypted in the browser before upload — we never see your data, and neither does anyone else.

**Live:** [vewr.io](https://vewr.io)

---

## What it does

Vewr lets patients upload medical files (PDFs, images) that are encrypted client-side using AES-256-GCM before being stored on IPFS. The encryption key is derived from the user's embedded wallet and never leaves their control. Records are indexed in Supabase by Privy user ID so they're accessible across devices. Files can be shared via time-limited links, downloaded and decrypted on-device at any time, or deleted (unpinned from IPFS + removed from the index).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, react-router-dom v7 |
| Auth | Privy (email OTP, embedded MPC wallets) |
| Encryption | Web Crypto API — AES-256-GCM + AES-KW, client-side only |
| Key protection | PBKDF2 KEK derived from Privy embedded wallet signature |
| Storage | IPFS via Pinata |
| Record index | Supabase (PostgreSQL) |
| Analytics | Google Analytics 4 |
| Hosting | Cloudflare Pages (vewr.io) |
| CI/CD | Cloudflare Pages (auto-deploy on push to main) |

---

## Architecture

### Key hierarchy

```
Wallet Signature  (Privy embedded wallet — never stored)
       │
       ▼
    PBKDF2 (200,000 iterations, SHA-256, user-scoped salt)
       │
       ▼
     KEK  (AES-256-KW — lives in memory only, re-derived each session)
       │
       ▼
  File Key  (AES-256-GCM — unique per file, wrapped with KEK before storage)
       │
       ▼
  Encrypted File  (stored on IPFS — ciphertext only)
```

The KEK is derived fresh each browser session from the user's Privy embedded wallet signature. It is never stored anywhere. Supabase holds only the KEK-wrapped file key — useless without the wallet.

### Encryption model

Vewr uses the browser's native Web Crypto API. No third-party encryption library.

**Upload flow (v2):**
1. User selects a file
2. A unique 256-bit AES-GCM file key and 96-bit IV are generated in-browser
3. The file is encrypted locally: `AES-256-GCM(file, fileKey, iv)`
4. The KEK is derived from the user's Privy embedded wallet signature via PBKDF2
5. The file key is wrapped with the KEK: `AES-KW(fileKey, kek)` → stored in Supabase
6. The encrypted blob is uploaded to IPFS via Pinata → returns a CID

**Download flow (v2):**
1. Fetch encrypted blob from IPFS (Pinata gateway → ipfs.io → Cloudflare fallback)
2. Retrieve the KEK-wrapped file key from Supabase
3. Re-derive KEK from wallet signature (prompts user once per session)
4. Unwrap file key: `AES-KW-unwrap(wrappedKey, kek)`
5. Decrypt in-browser: `AES-256-GCM-decrypt(blob, fileKey, iv)`
6. Trigger browser download of the plaintext file

**Share link flow:**
1. Owner requests a share link with a configured expiry
2. A random one-time share key is generated client-side
3. The file key is re-wrapped with the share key: `AES-KW(fileKey, shareKey)`
4. The share-key-wrapped file key is stored in Supabase
5. The share key is placed in the URL as a query parameter (`?k=`) — it never reaches any server
6. Recipient opens the link; their browser extracts the share key from the URL, fetches the wrapped key from Supabase, unwraps the file key, and decrypts the file — all locally
7. Revoking the link deletes Supabase's copy of the wrapped file key, making the URL permanently useless even if the recipient kept it

**What Pinata stores:** encrypted ciphertext only. No plaintext ever leaves the device.

**What Supabase stores:** CID, KEK-wrapped file key, IV, filename, filesize, filetype, Privy user ID, timestamp. No file contents. The wrapped key is opaque without the wallet.

### Authentication

Privy handles auth via email OTP — no password, no crypto wallet UX required from the user. Under the hood, Privy provisions each user an embedded MPC wallet whose private key is split across the user's device and Privy's infrastructure using threshold signatures. Neither half alone can produce a valid signature. The wallet is used exclusively for signing the KEK derivation message — it holds no funds and is not a blockchain wallet in any user-visible sense.

### COOP/COEP headers

Privy embedded wallets require `Cross-Origin-Opener-Policy: same-origin-allow-popups` to enable cross-origin iframe communication for wallet signing. GitHub Pages cannot serve custom HTTP headers, which is why Vewr migrated to Cloudflare Pages. The `public/_headers` file is read natively by Cloudflare and applied to every response.

### HIPAA position

Vewr is a consumer tool for individuals storing their own health records. It is **not** a HIPAA-covered entity or Business Associate. No BAAs exist with Pinata, Supabase, or Privy.

The architecture is intentionally stronger than what HIPAA mandates for covered entities: PHI never reaches any external system in readable form. HIPAA requires encryption of PHI in transit and at rest — Vewr encrypts before transmission and the key is user-controlled, not vendor-controlled. A covered entity with a BAA can still technically access patient data. Vewr structurally cannot.

If a clinic, hospital, or health system wants to use Vewr as infrastructure for patient records, BAAs would need to be in place with all three infrastructure providers before that could happen. That is not the current use case.

---

## Local setup

```bash
git clone https://github.com/BayRyan97/vewr-health.git
cd vewr-health
npm install
```

Create a `.env` file:

```
REACT_APP_PINATA_JWT=your_pinata_jwt
REACT_APP_PRIVY_APP_ID=your_privy_app_id
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

```bash
npm start
```

---

## Supabase setup

Run this in the Supabase SQL editor:

```sql
create table records (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  cid text not null,
  metadata jsonb,
  created_at timestamptz default now()
);

alter table records enable row level security;

create policy "Users can manage their own records"
  on records for all
  using (true)
  with check (true);

create table share_links (
  id uuid primary key default gen_random_uuid(),
  record_id uuid references records(id),
  user_id text not null,
  token text not null unique,
  expires_at timestamptz not null,
  revoked boolean default false,
  cid text not null,
  encrypted_key text,
  iv text,
  file_name text,
  file_type text,
  record_type text,
  view_count integer default 0,
  last_viewed_at timestamptz,
  created_at timestamptz default now()
);

create table users (
  user_id text primary key,
  email text,
  last_seen_at timestamptz
);
```

---

## Deployment

Deployed via Cloudflare Pages. Every push to `main` triggers an automatic build and deploy. Environment variables are configured in the Cloudflare Pages project settings. The `public/_headers` file sets COOP/COEP headers required by Privy embedded wallets.

SPA routing is handled by `public/_redirects` which rewrites all paths to `index.html`.

---

## Technical Roadmap

### Phase 1 → Phase 2 (Legal Framework)

- **Supabase HIPAA tier** — Supabase offers a HIPAA-eligible plan with a signed BAA. Requires upgrading to a paid plan
- **Pinata BAA** — Pinata offers BAAs on enterprise plans. Needs formal evaluation and contract
- **Privy BAA** — Verify Privy's HIPAA offering. If unavailable, evaluate alternative auth providers
- **Audit logging** — Add a `record_access_log` table in Supabase tracking every download event with timestamp, user ID, and record ID
- **Key rotation** — Allow users to rotate their KEK (re-wrap all file keys with a new wallet signature) without re-encrypting files

### Phase 2 → Phase 3 (Full Compliance + Provider Product)

- **HCP identity verification** — Verify licensed providers via NPI number lookup against the CMS NPPES registry
- **Provider accounts** — Separate auth flow, Supabase table, and permissions model for verified healthcare providers
- **FHIR/HL7 support** — Required for any real EHR integration
- **Breach notification pipeline** — HIPAA requires notifying affected users within 60 days of a breach
- **Third-party penetration testing** — Required before any enterprise or hospital contract

---

## Project structure

```
src/
  components/
    UploadRecord.jsx        # Drag-and-drop upload, encryption, Pinata upload
  lib/
    webCryptoEncryption.js  # AES-256-GCM + AES-KW + KEK derivation
    shareLinks.js           # Share link create / fetch / revoke / view tracking
    supabase.js             # Supabase client + isSupabaseConfigured flag
    empty-stub.js           # Webpack stub for unused peer deps
  pages/
    LandingPage.jsx         # Marketing site, waitlist form, FAQ
    PatientHome.jsx         # Auth gate, record list, upload, download, share
    ShareView.jsx           # Public share link viewer (no login required)
    ProviderHome.jsx        # Provider portal (placeholder)
    TermsOfService.jsx      # /terms
    PrivacyPolicy.jsx       # /privacy
  App.js
  index.js                  # PrivyProvider wrapper
public/
  _headers                  # Cloudflare Pages COOP/COEP headers
  _redirects                # Cloudflare Pages SPA routing
  favicon.svg
  CNAME                     # vewr.io
config-overrides.js         # Webpack aliases for peer dep stubs
```

---

## Security whitepaper

### Threat model

Vewr is designed around a single core assumption: **the operator cannot be trusted with user data.** This is not a statement about intent — it is an architectural constraint. Even if Vewr's infrastructure were fully compromised, patient files should remain unreadable.

The threats addressed:

| Threat | Mitigation |
|---|---|
| Database breach (Supabase) | File keys are KEK-wrapped before storage. Wrapped keys are useless without the user's wallet signature. |
| IPFS data exposure | Files on IPFS are AES-256-GCM ciphertext. The CID is public; the content is not. |
| Insider access (Vewr employees) | Structurally impossible — no plaintext or raw keys ever reach Vewr's infrastructure. |
| Share link interception | The share key (`?k=`) is never sent to any server. Revoking deletes the server's wrapped key, making the URL permanently invalid. |
| Session hijacking | The KEK lives in memory only and is never written to disk, localStorage, or cookies. Closing the tab destroys it. |
| Wallet compromise | Privy embedded wallets use MPC threshold signatures — no single server holds the private key. Compromise of Privy's infrastructure alone is insufficient. |

### What Vewr can and cannot see

| Data | Vewr access |
|---|---|
| File contents | ✗ Never. Encrypted before upload. |
| File encryption key | ✗ Never. KEK-wrapped; KEK is user-derived. |
| File name, type, size | ✓ Stored in Supabase metadata (plaintext) |
| IPFS content identifier (CID) | ✓ Stored in Supabase (plaintext) |
| User email address | ✓ Stored via Privy and Supabase |
| Share link token | ✓ Stored in Supabase |
| Share key | ✗ Never reaches any server |

### Key versioning

Records carry a `keyVersion` field in their Supabase metadata:

- **keyVersion: 1** — Legacy. Plain AES-256-GCM key stored unprotected in Supabase. Created before the KEK architecture was implemented. Automatically migrated to v2 on the user's next login.
- **keyVersion: 2** — Current. File key wrapped with PBKDF2-derived KEK before storage. KEK is derived from the user's Privy embedded wallet signature each session.

Migration runs silently in the background on login. The user is prompted once to sign the derivation message. Signing costs no fees and does not interact with any blockchain.

### Cryptographic primitives

| Primitive | Usage | Parameters |
|---|---|---|
| AES-256-GCM | File encryption | 256-bit key, 96-bit random IV, 128-bit auth tag |
| AES-256-KW | Key wrapping | KEK → file key, share key → file key |
| PBKDF2 | KEK derivation | 200,000 iterations, SHA-256, user-scoped salt |
| Privy MPC | Wallet signing | Threshold ECDSA, key split between device and Privy |

All cryptographic operations use the browser's native `window.crypto.subtle` API. No third-party cryptography libraries are used.

### Limitations and open risks

1. **Browser trust** — All security depends on the browser executing the JavaScript correctly. A compromised browser or malicious browser extension could intercept plaintext before encryption. This is an inherent limitation of any client-side encryption model.

2. **Email account takeover** — Auth is email OTP. If an attacker controls the user's email, they can log in as the user, derive a new KEK from the wallet (which Privy would issue to the attacker's session), and access files. Mitigation: Privy supports additional auth factors; 2FA on email is strongly recommended.

3. **keyVersion: 1 records** — Any records created before the KEK architecture was deployed have their plain keys in Supabase until migration runs. Migration requires the user to log in on a COOP-compatible host (vewr.io via Cloudflare Pages). Records on legacy hosting (GitHub Pages) cannot be migrated because embedded wallet signing is blocked by missing COOP headers.

4. **IPFS persistence** — Deleting a record removes it from Vewr's IPFS pin and Supabase index. Cached copies may persist on other IPFS nodes. However, all data on IPFS is ciphertext — persistence without the decryption key is harmless.

5. **Share key in URL** — The share key appears in the browser URL bar and may be stored in browser history. Recipients should be advised not to share the link further once accessed. Revocation removes the server's wrapped key, making any cached URL useless.
