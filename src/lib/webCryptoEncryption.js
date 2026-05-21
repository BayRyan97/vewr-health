/**
 * Web Crypto API Encryption for Vewr Health
 *
 * Key hierarchy:
 *
 *   KEK  (Key Encryption Key)
 *     ↑  derived via PBKDF2 from the user's Privy embedded-wallet signature
 *     ↑  never stored anywhere — re-derived fresh each session, lives in memory only
 *     │
 *     ├─ wraps → File Key  (AES-256-GCM, unique per file)
 *     │            stored as an opaque blob in records.metadata.encryptedKey (keyVersion: 2)
 *     │
 *     └─ wraps → ECDH Private Key  (P-256, one per user)
 *                  stored wrapped in users/providers table
 *                  used for cross-user file key exchange (patient ↔ HCP)
 *
 *   Share Key  (AES-256-KW, unique per share link)
 *     ↑  random, placed in the URL as ?k= — never reaches any server
 *     ↑  the file key is wrapped with this share key and stored in share_links.encrypted_key
 *     ↑  revoking a share link deletes the server's copy of the wrapped file key
 *
 *   Cross-user file key exchange (ECDH):
 *     Sender generates ephemeral P-256 key pair
 *     ECDH(ephemeral_private, recipient_public) → shared secret
 *     HKDF(shared_secret) → AES-256-KW key
 *     Wrap file key with AES-256-KW key → stored in provider_access / patient_inbox
 *     Ephemeral public key stored alongside — recipient re-derives the same shared secret
 *     Revocation: delete the provider_access row — recipient can no longer decrypt
 *
 *  Legacy (keyVersion: 1 / no keyVersion):
 *     Plain base64 file key stored in Supabase — migrated to v2 automatically on login.
 */

// ─── Constants ────────────────────────────────────────────────────────────────

const KEK_SIGN_MESSAGE = 'Vewr Key Derivation v1';

// ─── Session KEK cache ────────────────────────────────────────────────────────
// The KEK lives in memory only. It is cleared whenever the page is reloaded.
// The embedded-wallet signature is requested at most once per session.
let _kekCache = null; // { userId: string, kek: CryptoKey }

// ─── KEK derivation ───────────────────────────────────────────────────────────

/**
 * Return the session KEK, deriving it if not yet cached.
 * Signs a fixed message with the user's Privy embedded wallet and runs
 * PBKDF2 over the signature to produce a 256-bit AES-KW key.
 *
 * @param {object} wallet  - Privy embedded wallet object (from useWallets())
 * @param {string} userId  - Privy user ID (used as PBKDF2 salt input)
 * @returns {Promise<CryptoKey>}
 */
export async function getOrDeriveKEK(wallet, userId) {
  if (_kekCache && _kekCache.userId === userId) {
    return _kekCache.kek;
  }

  const provider = await wallet.getEthereumProvider();
  const signature = await provider.request({
    method: 'personal_sign',
    params: [KEK_SIGN_MESSAGE, wallet.address],
  });

  const kek = await _deriveKEKFromSignature(signature, userId);
  _kekCache = { userId, kek };
  return kek;
}

async function _deriveKEKFromSignature(signature, userId) {
  const sigBytes = new TextEncoder().encode(signature);
  const keyMaterial = await crypto.subtle.importKey(
    'raw', sigBytes, 'PBKDF2', false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: new TextEncoder().encode(`vewr-kek-v1-${userId}`),
      iterations: 200000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-KW', length: 256 },
    false, // KEK is never extractable
    ['wrapKey', 'unwrapKey']
  );
}

// ─── File key wrap / unwrap (with KEK) ───────────────────────────────────────

/**
 * Wrap a file CryptoKey with the user's KEK.
 * Result is stored in Supabase — opaque without the KEK.
 */
export async function wrapFileKey(fileKey, kek) {
  const wrapped = await crypto.subtle.wrapKey('raw', fileKey, kek, 'AES-KW');
  return _bufToB64(wrapped);
}

/**
 * Unwrap a file key that was wrapped with the KEK.
 * Returns an extractable CryptoKey so it can be re-wrapped for share links.
 */
export async function unwrapFileKey(wrappedKeyB64, kek) {
  return crypto.subtle.unwrapKey(
    'raw',
    _b64ToBuf(wrappedKeyB64),
    kek,
    'AES-KW',
    { name: 'AES-GCM', length: 256 },
    true,                    // extractable — needed for re-wrapping into share links
    ['encrypt', 'decrypt']
  );
}

// ─── Share key (in URL fragment) ──────────────────────────────────────────────

/**
 * Generate a random one-time share key.
 * shareKeyB64 goes in the URL fragment; shareKey is used to wrap the file key.
 */
export async function generateShareKey() {
  const shareKey = await crypto.subtle.generateKey(
    { name: 'AES-KW', length: 256 },
    true,
    ['wrapKey', 'unwrapKey']
  );
  const raw = await crypto.subtle.exportKey('raw', shareKey);
  return { shareKey, shareKeyB64: _bufToB64(raw) };
}

/** Import a raw share key from its base64 representation (read from URL fragment). */
export async function importShareKey(shareKeyB64) {
  return crypto.subtle.importKey(
    'raw',
    _b64ToBuf(shareKeyB64),
    { name: 'AES-KW' },
    false,
    ['wrapKey', 'unwrapKey']
  );
}

/** Wrap a file key with the share key for storage in share_links. */
export async function wrapFileKeyWithShareKey(fileKey, shareKey) {
  const wrapped = await crypto.subtle.wrapKey('raw', fileKey, shareKey, 'AES-KW');
  return _bufToB64(wrapped);
}

/** Unwrap a file key that was wrapped with a share key. */
export async function unwrapFileKeyWithShareKey(wrappedKeyB64, shareKey) {
  return crypto.subtle.unwrapKey(
    'raw',
    _b64ToBuf(wrappedKeyB64),
    shareKey,
    'AES-KW',
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

// ─── v1 backward-compat key import ───────────────────────────────────────────

/**
 * Import a plain base64 file key (v1 records stored the key unprotected).
 * Returns extractable CryptoKey so it can be wrapped during migration.
 */
export async function importPlainKey(base64Key) {
  return crypto.subtle.importKey(
    'raw',
    _b64ToBuf(base64Key),
    { name: 'AES-GCM', length: 256 },
    true,                    // extractable so migration can re-wrap with KEK
    ['encrypt', 'decrypt']
  );
}

// ─── Encrypt ──────────────────────────────────────────────────────────────────

/**
 * v1 legacy — Encrypt a file and store the raw file key as plain base64 in metadata.
 * Used as a fallback when the embedded wallet is unavailable (e.g. GitHub Pages
 * without COOP headers). Records created this way carry keyVersion: 1 and will be
 * migrated to v2 automatically once the host supports COOP/COEP.
 *
 * @param {File} file
 * @returns {Promise<{ encryptedFile: File, metadata: object }>}
 */
export async function encryptFileLegacy(file) {
  const fileKey = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    fileKey,
    await file.arrayBuffer()
  );

  // Export the raw key as base64 — stored unprotected (v1 scheme)
  const rawKey = await crypto.subtle.exportKey('raw', fileKey);

  return {
    encryptedFile: new File(
      [encryptedData],
      `encrypted_${file.name}`,
      { type: 'application/octet-stream' }
    ),
    metadata: {
      originalFileName: file.name,
      originalFileType: file.type,
      originalFileSize: file.size,
      encryptedKey: _bufToB64(rawKey),   // plain base64 — v1
      iv: _bufToB64(iv),
      encryptedAt: new Date().toISOString(),
      algorithm: 'AES-256-GCM',
      keyVersion: 1,                     // v1 = plain key stored in Supabase
      encrypted: true,
    },
  };
}

/**
 * Encrypt a file and wrap its key with the user's KEK.
 *
 * @param {File}      file - The file to encrypt
 * @param {CryptoKey} kek  - The user's Key Encryption Key (from getOrDeriveKEK)
 * @returns {Promise<{ encryptedFile: File, metadata: object }>}
 */
export async function encryptFile(file, kek) {
  // Generate a unique random file key
  const fileKey = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,  // extractable so we can wrap it
    ['encrypt', 'decrypt']
  );

  // Random IV
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Encrypt the file
  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    fileKey,
    await file.arrayBuffer()
  );

  // Wrap the file key with the KEK before storing
  const wrappedKey = await wrapFileKey(fileKey, kek);

  return {
    encryptedFile: new File(
      [encryptedData],
      `encrypted_${file.name}`,
      { type: 'application/octet-stream' }
    ),
    metadata: {
      originalFileName: file.name,
      originalFileType: file.type,
      originalFileSize: file.size,
      encryptedKey: wrappedKey,        // KEK-wrapped — not a plain key
      iv: _bufToB64(iv),
      encryptedAt: new Date().toISOString(),
      algorithm: 'AES-256-GCM',
      keyVersion: 2,                   // v2 = KEK-wrapped scheme
      encrypted: true,
    },
  };
}

// ─── Decrypt ──────────────────────────────────────────────────────────────────

/** Internal: decrypt with a resolved CryptoKey. */
async function _decryptWithKey(encryptedData, fileKey, base64Iv) {
  return crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: _b64ToBuf(base64Iv) },
    fileKey,
    encryptedData
  );
}

/**
 * v1 — decrypt using a plain base64 key stored in Supabase.
 * Kept for backward compatibility with records uploaded before this change.
 */
export async function decryptFile(encryptedData, base64Key, base64Iv) {
  const key = await importPlainKey(base64Key);
  return _decryptWithKey(encryptedData, key, base64Iv);
}

/**
 * v2 — decrypt using a KEK-wrapped file key (owner download).
 */
export async function decryptFileV2(encryptedData, wrappedKeyB64, base64Iv, kek) {
  const key = await unwrapFileKey(wrappedKeyB64, kek);
  return _decryptWithKey(encryptedData, key, base64Iv);
}

/**
 * Share link v2 — decrypt using a share-key-wrapped file key.
 * The share key comes from the URL fragment and never touched any server.
 */
export async function decryptFileWithShareKey(encryptedData, wrappedKeyB64, base64Iv, shareKeyB64) {
  const shareKey = await importShareKey(shareKeyB64);
  const fileKey = await unwrapFileKeyWithShareKey(wrappedKeyB64, shareKey);
  return _decryptWithKey(encryptedData, fileKey, base64Iv);
}

// ─── ECDH P-256 key pair (cross-user file key exchange) ──────────────────────
//
// Each user (patient and HCP) has a P-256 ECDH key pair stored in Supabase:
//   - Public key:  plaintext base64 — anyone can fetch it to encrypt for that user
//   - Private key: wrapped with the user's KEK — only the user can unwrap it
//
// To share a file key with another user:
//   1. Fetch their P-256 public key from Supabase
//   2. Call wrapFileKeyForRecipient() → { ephemeralPublicKeyB64, wrappedFileKeyB64 }
//   3. Store both values in provider_access / patient_inbox
//
// To decrypt a file key wrapped for you:
//   1. Unwrap your ECDH private key with your KEK
//   2. Call unwrapFileKeyFromSender() with the ephemeral public key + wrapped file key

/**
 * Generate a new P-256 ECDH key pair for a user.
 * Call once on first login; store results in Supabase.
 *
 * @returns {Promise<{ publicKeyB64: string, privateKey: CryptoKey }>}
 */
export async function generateECDHKeyPair() {
  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveKey', 'deriveBits']
  );

  const publicKeyRaw = await crypto.subtle.exportKey('raw', keyPair.publicKey);
  return {
    publicKeyB64: _bufToB64(publicKeyRaw),
    privateKey: keyPair.privateKey,
  };
}

/**
 * Wrap a P-256 ECDH private key with the user's KEK for Supabase storage.
 *
 * @param {CryptoKey} ecdhPrivateKey
 * @param {CryptoKey} kek
 * @returns {Promise<string>} base64-encoded wrapped private key
 */
export async function wrapECDHPrivateKey(ecdhPrivateKey, kek) {
  const wrapped = await crypto.subtle.wrapKey('pkcs8', ecdhPrivateKey, kek, 'AES-KW');
  return _bufToB64(wrapped);
}

/**
 * Unwrap a P-256 ECDH private key from Supabase using the user's KEK.
 *
 * @param {string} wrappedB64
 * @param {CryptoKey} kek
 * @returns {Promise<CryptoKey>}
 */
export async function unwrapECDHPrivateKey(wrappedB64, kek) {
  return crypto.subtle.unwrapKey(
    'pkcs8',
    _b64ToBuf(wrappedB64),
    kek,
    'AES-KW',
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    ['deriveKey', 'deriveBits']
  );
}

/**
 * Import a P-256 public key from its base64 raw representation.
 *
 * @param {string} publicKeyB64
 * @returns {Promise<CryptoKey>}
 */
async function _importECDHPublicKey(publicKeyB64) {
  return crypto.subtle.importKey(
    'raw',
    _b64ToBuf(publicKeyB64),
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    []
  );
}

/**
 * Derive a one-time AES-256-KW key from an ECDH shared secret.
 * Uses HKDF with SHA-256.
 *
 * @param {CryptoKey} ecdhPrivateKey  - sender's ephemeral OR recipient's stored private key
 * @param {CryptoKey} ecdhPublicKey   - the other party's public key
 * @returns {Promise<CryptoKey>}      - AES-256-KW key for wrapping/unwrapping file keys
 */
async function _deriveSharedAESKey(ecdhPrivateKey, ecdhPublicKey) {
  const sharedBits = await crypto.subtle.deriveBits(
    { name: 'ECDH', public: ecdhPublicKey },
    ecdhPrivateKey,
    256
  );

  // Run through HKDF to get a proper AES key
  const hkdfKey = await crypto.subtle.importKey('raw', sharedBits, 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: new TextEncoder().encode('vewr-ecdh-v1'),
      info: new Uint8Array(0),
    },
    hkdfKey,
    { name: 'AES-KW', length: 256 },
    false,
    ['wrapKey', 'unwrapKey']
  );
}

/**
 * Wrap a file key for a specific recipient using their P-256 public key.
 * The sender generates an ephemeral key pair — the private half is discarded immediately.
 *
 * @param {CryptoKey} fileKey             - AES-256-GCM file key to wrap
 * @param {string}    recipientPublicKeyB64 - recipient's P-256 public key (from Supabase)
 * @returns {Promise<{ ephemeralPublicKeyB64: string, wrappedFileKeyB64: string }>}
 *   Store both values in Supabase. The ephemeral public key lets the recipient re-derive
 *   the shared secret; the wrapped file key is the locked file key.
 */
export async function wrapFileKeyForRecipient(fileKey, recipientPublicKeyB64) {
  // Generate throwaway key pair — private half used once then gone
  const ephemeral = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveKey', 'deriveBits']
  );

  const recipientPub = await _importECDHPublicKey(recipientPublicKeyB64);
  const sharedKey = await _deriveSharedAESKey(ephemeral.privateKey, recipientPub);
  const wrappedFileKey = await crypto.subtle.wrapKey('raw', fileKey, sharedKey, 'AES-KW');

  const ephemeralPubRaw = await crypto.subtle.exportKey('raw', ephemeral.publicKey);
  return {
    ephemeralPublicKeyB64: _bufToB64(ephemeralPubRaw),
    wrappedFileKeyB64: _bufToB64(wrappedFileKey),
  };
}

/**
 * Unwrap a file key that was wrapped for this user using ECDH.
 *
 * @param {string}    wrappedFileKeyB64    - from Supabase (provider_access / patient_inbox)
 * @param {string}    ephemeralPublicKeyB64 - from Supabase (stored alongside wrapped key)
 * @param {CryptoKey} myECDHPrivateKey     - this user's unwrapped P-256 private key
 * @returns {Promise<CryptoKey>}           - AES-256-GCM file key, ready for decryption
 */
export async function unwrapFileKeyFromSender(wrappedFileKeyB64, ephemeralPublicKeyB64, myECDHPrivateKey) {
  const ephemeralPub = await _importECDHPublicKey(ephemeralPublicKeyB64);
  const sharedKey = await _deriveSharedAESKey(myECDHPrivateKey, ephemeralPub);
  return crypto.subtle.unwrapKey(
    'raw',
    _b64ToBuf(wrappedFileKeyB64),
    sharedKey,
    'AES-KW',
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function _bufToB64(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

function _b64ToBuf(base64) {
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}
