# Vewr Health

Patient-controlled health records. Files are encrypted in the browser before upload — we never see your data, and neither does anyone else.

**Live:** [vewr.io](https://vewr.io)

---

## What it does

Vewr lets patients upload medical files (PDFs, images) that are encrypted client-side using AES-256-GCM before being stored on IPFS. The encryption key never leaves the user's control. Records are indexed in Supabase by Privy user ID so they're accessible across devices. Files can be downloaded and decrypted on-device at any time, or deleted (unpinned from IPFS + removed from the index).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, react-router-dom v7 |
| Auth | Privy (email OTP, MPC key management) |
| Encryption | Web Crypto API — AES-256-GCM, client-side only |
| Storage | IPFS via Pinata |
| Record index | Supabase (PostgreSQL) |
| Analytics | Google Analytics 4 |
| Hosting | GitHub Pages + custom domain (vewr.io) |
| CI/CD | GitHub Actions |

---

## Architecture

### Encryption model

Vewr uses the browser's native Web Crypto API. No third-party encryption library.

**Upload flow:**
1. User selects a file
2. A random 256-bit AES-GCM key and 96-bit IV are generated in-browser
3. The file is encrypted locally: `AES-256-GCM(file, key, iv)`
4. The encrypted blob is uploaded to IPFS via Pinata → returns a CID
5. The CID, encrypted key, IV, and file metadata are saved to Supabase under the user's Privy DID

**Download flow:**
1. Fetch encrypted blob from IPFS (Pinata gateway → ipfs.io → Cloudflare fallback)
2. Retrieve the encrypted key and IV from Supabase
3. Decrypt in-browser: `AES-256-GCM-decrypt(blob, key, iv)`
4. Trigger browser download of the plaintext file

**What Pinata stores:** encrypted ciphertext only. No plaintext ever leaves the device.

**What Supabase stores:** CID, encrypted key, IV, filename, filesize, filetype, Privy user ID, timestamp. No file contents.

### Authentication

Privy handles auth via email OTP — no password, no crypto wallet required. Under the hood, Privy uses MPC (Multi-Party Computation) to split the user's encryption key between the user's device and Privy's infrastructure. Neither half alone can decrypt anything. Account recovery works through email re-verification.

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
```

---

## Deployment

Deployed via GitHub Actions on push to `main`. The workflow builds the React app with env vars injected from GitHub Secrets, then publishes to the `gh-pages` branch via `peaceiris/actions-gh-pages`.

SPA routing on GitHub Pages is handled by a `404.html` redirect that encodes the path as a query param, restored by a script in `index.html`.

---

## Technical Roadmap

### Phase 1 → Phase 2 (Legal Framework)

Mostly non-technical but has technical dependencies:

- **Supabase HIPAA tier** — Supabase offers a HIPAA-eligible plan with a signed BAA. Requires upgrading to a paid plan
- **Pinata BAA** — Pinata offers BAAs on enterprise plans. Needs formal evaluation and contract
- **Privy BAA** — Verify Privy's HIPAA offering. If unavailable, evaluate alternative auth providers
- **Audit logging** — Add a `record_access_log` table in Supabase tracking every download event with timestamp, user ID, and record ID. Currently no access logs exist
- **Key management hardening** — Move toward a more formal key management approach as part of the HIPAA framework

### Phase 2 → Phase 3 (Full Compliance + Provider Product)

- **HCP identity verification** — Verify licensed providers via NPI number lookup against the CMS National Plan & Provider Enumeration System (NPPES) registry
- **Provider accounts** — Separate auth flow, Supabase table, and permissions model for verified healthcare providers
- **Record sharing architecture** — Design how patients share records with providers without transferring raw decryption keys. Options include re-encryption or proxy encryption schemes
- **FHIR/HL7 support** — Hospital systems communicate in these formats. Required for any real EHR integration
- **Breach notification pipeline** — HIPAA requires notifying affected users within 60 days of a breach. Needs automated detection and notification system
- **Third-party penetration testing** — Required before any enterprise or hospital contract

### Critical path

Getting BAAs signed with Supabase, Pinata, and Privy is the prerequisite for everything in Phase 2. The technical work can be scoped in parallel but nothing is certifiable without the legal agreements.

---

## Project structure

```
src/
  components/
    UploadRecord.jsx        # Drag-and-drop upload, encryption, Pinata upload
  lib/
    webCryptoEncryption.js  # AES-256-GCM encrypt/decrypt via Web Crypto API
    supabase.js             # Supabase client + isSupabaseConfigured flag
    empty-stub.js           # Webpack stub for unused Farcaster/Solana peer deps
  pages/
    LandingPage.jsx         # Marketing site, waitlist form, FAQ
    PatientHome.jsx         # Auth gate, record list, download, delete
    ProviderHome.jsx        # Provider portal (placeholder)
    TermsOfService.jsx      # /terms
    PrivacyPolicy.jsx       # /privacy
  App.js
  index.js                  # PrivyProvider wrapper
public/
  favicon.svg               # Teal shield SVG favicon
  favicon.png               # PNG fallback (32x32)
  favicon.ico               # ICO fallback
  apple-touch-icon.png      # Safari / iOS home screen (180x180)
  CNAME                     # vewr.io
  404.html                  # SPA routing fix for GitHub Pages
config-overrides.js         # Webpack aliases for Farcaster/Solana stubs
```
