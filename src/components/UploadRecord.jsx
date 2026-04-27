import React, { useState } from 'react';
import { encryptFile } from '../lib/webCryptoEncryption';

function UploadRecord() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [encrypting, setEncrypting] = useState(false);
  const [cid, setCid] = useState(null);
  const [encryptionMetadata, setEncryptionMetadata] = useState(null);
  const [error, setError] = useState(null);
  const [uploadedRecords, setUploadedRecords] = useState([]);

  // For now, use a placeholder wallet address
  // TODO: Replace with actual user wallet from Privy
  const walletAddress = '0x0000000000000000000000000000000000000000';

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('Please select a PDF or image file (PNG, JPG, JPEG)');
        setFile(null);
      }
    }
  };

  const uploadToIPFS = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    const jwt = process.env.REACT_APP_PINATA_JWT;
    if (!jwt) {
      setError('Pinata JWT not found. Please check your .env file');
      return;
    }

    setError(null);
    setCid(null);
    setEncryptionMetadata(null);

    try {
      // Step 1: Encrypt the file with Web Crypto API
      setEncrypting(true);
      console.log('🔐 Encrypting file with Web Crypto API (AES-256-GCM)...');
      
      const { encryptedFile, metadata } = await encryptFile(file, walletAddress);
      
      console.log('✅ File encrypted successfully');
      console.log('📊 Original size:', file.size, 'bytes');
      console.log('📊 Encrypted size:', encryptedFile.size, 'bytes');
      console.log('📊 Metadata:', metadata);
      setEncrypting(false);

      // Step 2: Upload encrypted file to IPFS
      setUploading(true);
      console.log('📤 Uploading encrypted file to IPFS...');
      console.log('JWT available:', jwt ? 'Yes' : 'No');

      const formData = new FormData();
      formData.append('file', encryptedFile);

      // Use Pinata v2 pinning API (has CORS support for localhost)
      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwt}`,
        },
        body: formData,
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Upload failed:', errorText);
        throw new Error(`Upload failed (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      console.log('Upload response:', data);
      
      // Pinata v2 returns CID in IpfsHash
      const uploadedCid = data.IpfsHash;
      
      if (!uploadedCid) {
        throw new Error('No CID returned from Pinata');
      }

      console.log('✅ Encrypted file uploaded to IPFS');
      console.log('CID:', uploadedCid);

      // Create full metadata with CID
      const fullMetadata = {
        ...metadata,
        ipfsCid: uploadedCid,
      };

      setCid(uploadedCid);
      setEncryptionMetadata(fullMetadata);

      // Store in local state (will be replaced with database later)
      const newRecord = {
        id: Date.now(),
        cid: uploadedCid,
        metadata: fullMetadata,
        uploadedAt: new Date().toISOString(),
      };
      
      setUploadedRecords(prev => [newRecord, ...prev]);
      
      console.log('📝 Record stored locally:', newRecord);
      console.log('💾 All records:', uploadedRecords.length + 1);

    } catch (err) {
      setError(err.message || 'Failed to encrypt and upload file');
      console.error('Upload error:', err);
    } finally {
      setEncrypting(false);
      setUploading(false);
    }
  };

  return (
    <div style={{ 
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{
          color: '#212529',
          fontSize: '20px',
          marginTop: 0,
          marginBottom: '4px',
          fontWeight: '600',
          letterSpacing: '-0.3px'
        }}>
          Upload New Record
        </h2>
        <p style={{
          color: '#6c757d',
          fontSize: '14px',
          marginTop: 0,
          marginBottom: 0,
          lineHeight: '1.5'
        }}>
          Files are encrypted in your browser with AES-256-GCM before upload
        </p>
      </div>
      
      <div style={{ marginBottom: '24px' }}>
        <label 
          htmlFor="file-upload"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 24px',
            border: '2px dashed #dee2e6',
            borderRadius: '8px',
            cursor: uploading || encrypting ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            background: file ? '#f8f9fa' : 'transparent',
            opacity: uploading || encrypting ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (!uploading && !encrypting) {
              e.currentTarget.style.borderColor = '#0085ff';
              e.currentTarget.style.background = '#f8f9ff';
            }
          }}
          onMouseLeave={(e) => {
            if (!uploading && !encrypting) {
              e.currentTarget.style.borderColor = '#dee2e6';
              e.currentTarget.style.background = file ? '#f8f9fa' : 'transparent';
            }
          }}
        >
          {!file ? (
            <>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#e3f2fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0085ff" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '500', color: '#212529' }}>
                Click to upload file
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#6c757d' }}>
                PDF, PNG, JPG, or JPEG
              </p>
            </>
          ) : (
            <>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#d4edda',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '500', color: '#212529' }}>
                {file.name}
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#6c757d' }}>
                {(file.size / 1024).toFixed(2)} KB • Click to change
              </p>
            </>
          )}
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
          disabled={uploading || encrypting}
          style={{ display: 'none' }}
        />
      </div>

      <button
        onClick={uploadToIPFS}
        disabled={!file || uploading || encrypting}
        style={{
          width: '100%',
          padding: '14px 24px',
          backgroundColor: uploading || encrypting || !file ? '#e9ecef' : '#0085ff',
          color: uploading || encrypting || !file ? '#6c757d' : 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: uploading || encrypting || !file ? 'not-allowed' : 'pointer',
          fontSize: '15px',
          fontWeight: '600',
          transition: 'all 0.2s',
          letterSpacing: '0.3px'
        }}>
        {encrypting ? '🔐 Encrypting...' : uploading ? '📤 Uploading...' : '🔒 Encrypt & Upload to IPFS'}
      </button>

      {error && (
        <div style={{ 
          marginTop: '16px', 
          padding: '14px 16px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c2c7',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#842029',
          lineHeight: '1.5'
        }}>
          {error}
        </div>
      )}

      {cid && encryptionMetadata && (
        <div style={{ 
          marginTop: '24px',
          padding: '20px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '8px'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#28a745',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '600'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {encryptionMetadata.encrypted ? 'Encrypted & Uploaded' : 'Uploaded'}
            </div>
          </div>
          
          {encryptionMetadata.encrypted && (
            <div style={{ 
              padding: '12px',
              backgroundColor: '#fff',
              borderRadius: '6px',
              marginBottom: '12px',
              border: '1px solid #c3e6cb'
            }}>
              <div style={{ fontSize: '13px', color: '#155724', fontWeight: '500', marginBottom: '4px' }}>
                🔐 End-to-End Encrypted (AES-256-GCM)
              </div>
              <div style={{ fontSize: '12px', color: '#155724', lineHeight: '1.5' }}>
                Your file was encrypted in your browser with Web Crypto API before upload. Only you can decrypt it.
              </div>
            </div>
          )}
          
          <div style={{ marginTop: '12px' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#155724', fontWeight: '500' }}>
              IPFS CID:
            </p>
            <div style={{ 
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontSize: '13px',
              fontFamily: 'monospace',
              wordBreak: 'break-all',
              color: '#212529',
              border: '1px solid #c3e6cb'
            }}>
              {cid}
            </div>
          </div>
          <p style={{ 
            margin: '16px 0 0 0', 
            fontSize: '13px', 
            color: '#155724',
            lineHeight: '1.6'
          }}>
            Save this CID to access your {encryptionMetadata.encrypted ? 'encrypted' : ''} file later.
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadRecord;

