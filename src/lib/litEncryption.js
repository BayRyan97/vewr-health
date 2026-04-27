import { LitNodeClient } from '@lit-protocol/lit-node-client';

let litNodeClient = null;
let isConnecting = false;

/**
 * Initialize Lit Protocol client with retry logic
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {Function} onRetry - Callback for retry attempts
 */
async function initWithRetry(maxRetries = 3, onRetry = null) {
  let lastError = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Connection attempt ${attempt}/${maxRetries}...`);
      
      if (onRetry) {
        onRetry(attempt, maxRetries);
      }
      
      litNodeClient = new LitNodeClient({
        litNetwork: 'datil-dev',
        debug: attempt === 1, // Only debug first attempt
        alertWhenUnauthorized: false,
        checkNodeAttestation: false,
      });

      // 30-second timeout per attempt
      const connectWithTimeout = Promise.race([
        litNodeClient.connect(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection timeout')), 30000)
        )
      ]);

      await connectWithTimeout;
      
      if (litNodeClient.ready) {
        console.log(`✅ Connected successfully on attempt ${attempt}`);
        return litNodeClient;
      }
    } catch (error) {
      lastError = error;
      console.error(`❌ Attempt ${attempt} failed:`, error.message);
      litNodeClient = null;
      
      // Wait before retry (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
        console.log(`⏳ Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(`Failed to connect after ${maxRetries} attempts: ${lastError?.message || 'Unknown error'}`);
}

/**
 * Initialize the Lit Protocol client
 * This should be called once when the app starts
 */
export async function initLitClient(onRetry = null) {
  // If already initialized and connected, return it
  if (litNodeClient && litNodeClient.ready) {
    return litNodeClient;
  }

  // If currently connecting, wait for it
  if (isConnecting) {
    let attempts = 0;
    while (isConnecting && attempts < 100) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    if (litNodeClient && litNodeClient.ready) {
      return litNodeClient;
    }
  }

  try {
    isConnecting = true;
    return await initWithRetry(3, onRetry);
  } catch (error) {
    console.error('❌ Failed to initialize Lit Protocol:', error);
    litNodeClient = null;
    throw error;
  } finally {
    isConnecting = false;
  }
}

/**
 * Get the current Lit client instance
 */
export function getLitClient() {
  return litNodeClient;
}

/**
 * Create access control conditions for a wallet address
 * @param {string} walletAddress - The wallet address that should have access
 * @returns {Array} Access control conditions for Lit Protocol
 */
export function createAccessControlConditions(walletAddress) {
  return [
    {
      contractAddress: '',
      standardContractType: '',
      chain: 'ethereum',
      method: '',
      parameters: [':userAddress'],
      returnValueTest: {
        comparator: '=',
        value: walletAddress.toLowerCase(),
      },
    },
  ];
}

/**
 * Encrypt a file using Lit Protocol
 * @param {File} file - The file to encrypt
 * @param {string} walletAddress - The wallet address that should have access
 * @returns {Object} Encrypted data and metadata needed for decryption
 */
export async function encryptFile(file, walletAddress) {
  try {
    // Ensure Lit client is initialized and ready
    if (!litNodeClient || !litNodeClient.ready) {
      console.log('Initializing Lit client...');
      await initLitClient();
    }

    // Double-check the client is ready
    if (!litNodeClient.ready) {
      throw new Error('Lit Protocol client failed to connect');
    }

    console.log('Lit client ready, proceeding with encryption');

    // Read file as ArrayBuffer
    const fileBuffer = await file.arrayBuffer();
    const dataToEncrypt = new Uint8Array(fileBuffer);

    // Create access control conditions
    const accessControlConditions = createAccessControlConditions(walletAddress);

    console.log('Encrypting with access control conditions:', accessControlConditions);

    // Encrypt the file using the v7 API
    const { ciphertext, dataToEncryptHash } = await litNodeClient.encrypt({
      accessControlConditions,
      dataToEncrypt,
    });

    console.log('Encryption successful, ciphertext length:', ciphertext.length);

    // Create a Blob from the encrypted data
    const encryptedBlob = new Blob([ciphertext], { type: 'application/octet-stream' });

    // Create a File object from the Blob
    const encryptedFile = new File(
      [encryptedBlob],
      `encrypted_${file.name}`,
      { type: 'application/octet-stream' }
    );

    return {
      encryptedFile,
      metadata: {
        originalFileName: file.name,
        originalFileType: file.type,
        originalFileSize: file.size,
        accessControlConditions,
        dataToEncryptHash,
        encryptedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error('Error encrypting file with Lit Protocol:', error);
    throw error;
  }
}

/**
 * Decrypt a file using Lit Protocol
 * @param {string} ciphertext - The encrypted data
 * @param {Array} accessControlConditions - The access control conditions used for encryption
 * @param {string} dataToEncryptHash - The hash of the original data
 * @returns {ArrayBuffer} The decrypted file data
 */
export async function decryptFile(ciphertext, accessControlConditions, dataToEncryptHash) {
  try {
    // Ensure Lit client is initialized
    if (!litNodeClient) {
      await initLitClient();
    }

    // Decrypt the file using v7 API
    const decryptedData = await litNodeClient.decrypt({
      accessControlConditions,
      ciphertext,
      dataToEncryptHash,
      chain: 'ethereum',
    });

    return decryptedData;
  } catch (error) {
    console.error('Error decrypting file with Lit Protocol:', error);
    throw error;
  }
}

/**
 * Update access control conditions to add a new wallet address
 * @param {Array} currentConditions - Current access control conditions
 * @param {string} newWalletAddress - New wallet address to grant access to
 * @returns {Array} Updated access control conditions
 */
export function addWalletToAccessControl(currentConditions, newWalletAddress) {
  // For multiple wallets, we need to change the structure to use "or" operator
  // This is a simplified example - in production you'd want more sophisticated logic
  return [
    {
      operator: 'or',
      conditions: [
        ...currentConditions,
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: '',
          parameters: [':userAddress'],
          returnValueTest: {
            comparator: '=',
            value: newWalletAddress.toLowerCase(),
          },
        },
      ],
    },
  ];
}
