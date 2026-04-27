/**
 * Web Crypto API Encryption for Vewr Health
 * Uses AES-256-GCM for file encryption
 */

/**
 * Generate a random encryption key
 * TODO: Replace with key derived from wallet signature
 * @returns {Promise<CryptoKey>} AES-256-GCM key
 */
async function generateKey() {
  return await window.crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true, // extractable
    ['encrypt', 'decrypt']
  );
}

/**
 * Derive encryption key from wallet signature
 * TODO: Implement with Privy wallet signature
 * @param {string} walletAddress - The wallet address
 * @param {string} signature - Signature from wallet.signMessage()
 * @returns {Promise<CryptoKey>} Derived encryption key
 */
async function deriveKeyFromSignature(walletAddress, signature) {
  // Convert signature to bytes
  const signatureBytes = new TextEncoder().encode(signature);
  
  // Import as raw key material
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    signatureBytes,
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );
  
  // Derive AES key using PBKDF2
  const key = await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: new TextEncoder().encode(walletAddress),
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
  
  return key;
}

/**
 * Export key to storable format
 * @param {CryptoKey} key - The crypto key to export
 * @returns {Promise<string>} Base64-encoded key
 */
async function exportKey(key) {
  const exported = await window.crypto.subtle.exportKey('raw', key);
  const exportedKeyBuffer = new Uint8Array(exported);
  const base64Key = btoa(String.fromCharCode(...exportedKeyBuffer));
  return base64Key;
}

/**
 * Import key from storable format
 * @param {string} base64Key - Base64-encoded key
 * @returns {Promise<CryptoKey>} Imported crypto key
 */
async function importKey(base64Key) {
  const keyBuffer = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));
  return await window.crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt a file using AES-256-GCM
 * @param {File} file - The file to encrypt
 * @param {string} walletAddress - The wallet address (for now, placeholder)
 * @returns {Promise<Object>} Encrypted file and metadata
 */
export async function encryptFile(file, walletAddress) {
  try {
    console.log('🔐 Starting Web Crypto encryption...');
    
    // TODO: Replace with actual wallet signature
    // For now, generate a random key
    const key = await generateKey();
    
    // Read file as ArrayBuffer
    const fileBuffer = await file.arrayBuffer();
    const fileData = new Uint8Array(fileBuffer);
    
    // Generate random IV (initialization vector)
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    
    // Encrypt the file
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      fileData
    );
    
    console.log('✅ File encrypted successfully');
    
    // Export key for storage
    const exportedKey = await exportKey(key);
    
    // Create encrypted blob
    const encryptedBlob = new Blob([encryptedData], { type: 'application/octet-stream' });
    const encryptedFile = new File(
      [encryptedBlob],
      `encrypted_${file.name}`,
      { type: 'application/octet-stream' }
    );
    
    // Return encrypted file and metadata
    return {
      encryptedFile,
      metadata: {
        originalFileName: file.name,
        originalFileType: file.type,
        originalFileSize: file.size,
        encryptedKey: exportedKey,
        iv: btoa(String.fromCharCode(...iv)), // Base64 encode IV
        walletAddress: walletAddress,
        encryptedAt: new Date().toISOString(),
        algorithm: 'AES-256-GCM',
        encrypted: true,
      },
    };
  } catch (error) {
    console.error('❌ Encryption error:', error);
    throw new Error(`Encryption failed: ${error.message}`);
  }
}

/**
 * Decrypt a file using AES-256-GCM
 * @param {ArrayBuffer} encryptedData - The encrypted file data
 * @param {string} base64Key - Base64-encoded encryption key
 * @param {string} base64Iv - Base64-encoded IV
 * @returns {Promise<ArrayBuffer>} Decrypted file data
 */
export async function decryptFile(encryptedData, base64Key, base64Iv) {
  try {
    console.log('🔓 Starting decryption...');
    
    // Import the key
    const key = await importKey(base64Key);
    
    // Decode IV
    const iv = Uint8Array.from(atob(base64Iv), c => c.charCodeAt(0));
    
    // Decrypt
    const decryptedData = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      encryptedData
    );
    
    console.log('✅ File decrypted successfully');
    return decryptedData;
  } catch (error) {
    console.error('❌ Decryption error:', error);
    throw new Error(`Decryption failed: ${error.message}`);
  }
}

/**
 * Re-encrypt a file key for a provider
 * TODO: Implement when adding grant access feature
 * @param {string} encryptedKey - The original encrypted key
 * @param {string} providerPublicKey - Provider's public key
 * @returns {Promise<string>} Re-encrypted key for provider
 */
export async function reEncryptKeyForProvider(encryptedKey, providerPublicKey) {
  // This will use RSA-OAEP to encrypt the symmetric key with provider's public key
  // Implementation coming in grant access feature
  throw new Error('Not implemented yet - coming in grant access feature');
}
