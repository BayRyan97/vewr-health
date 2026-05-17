import React, { useState, useRef } from 'react';
import { encryptFile } from '../lib/webCryptoEncryption';

const T = '#00A19C';
const T_DARK = '#007F7B';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';

const inputStyle = {
  width: '100%', padding: '10px 14px',
  border: '1px solid #e5e7eb', borderRadius: '9px',
  fontSize: '14px', color: '#111827', background: 'white',
  fontFamily: FONT, outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

function UploadRecord({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [stage, setStage] = useState('idle'); // idle | encrypting | uploading | done | error
  const [cid, setCid] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  // User-provided metadata
  const [recordName, setRecordName] = useState('');
  const [recordDate, setRecordDate] = useState('');
  const [recordNotes, setRecordNotes] = useState('');

  const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
  const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

  const handleFile = (f) => {
    if (!f) return;
    if (!validTypes.includes(f.type)) {
      setErrorMsg('Please select a PDF or image file (PNG, JPG, JPEG).');
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setErrorMsg(`File is too large. Maximum size is 25MB. Your file is ${(f.size / (1024 * 1024)).toFixed(1)}MB.`);
      setFile(null);
      return;
    }
    setFile(f);
    setErrorMsg('');
    setStage('idle');
    setCid(null);
  };

  const handleFileChange = (e) => handleFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const jwt = process.env.REACT_APP_PINATA_JWT;
    if (!jwt) {
      setErrorMsg('Pinata JWT not configured. Check your .env file.');
      return;
    }

    setErrorMsg('');
    setCid(null);

    try {
      setStage('encrypting');
      const { encryptedFile, metadata } = await encryptFile(file, 'vewr-user');

      setStage('uploading');
      const formData = new FormData();
      formData.append('file', encryptedFile);

      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: { Authorization: `Bearer ${jwt}` },
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Upload failed (${response.status}): ${text}`);
      }

      const data = await response.json();
      const uploadedCid = data.IpfsHash;
      if (!uploadedCid) throw new Error('No CID returned from Pinata');

      const fullMetadata = {
        ...metadata,
        ipfsCid: uploadedCid,
        recordName: recordName.trim() || null,
        recordDate: recordDate || null,
        recordNotes: recordNotes.trim() || null,
      };

      setCid(uploadedCid);
      setStage('done');

      const record = {
        id: Date.now(),
        cid: uploadedCid,
        metadata: fullMetadata,
        uploadedAt: new Date().toISOString(),
      };

      if (typeof onUploadSuccess === 'function') onUploadSuccess(record);

    } catch (err) {
      setErrorMsg(err.message || 'Upload failed. Please try again.');
      setStage('error');
    }
  };

  const reset = () => {
    setFile(null);
    setStage('idle');
    setCid(null);
    setErrorMsg('');
    setRecordName('');
    setRecordDate('');
    setRecordNotes('');
    if (inputRef.current) inputRef.current.value = '';
  };

  const busy = stage === 'encrypting' || stage === 'uploading';

  return (
    <div style={{ fontFamily: FONT }}>
      <div style={{
        background: 'white', borderRadius: '16px',
        border: '1px solid #e5e7eb', padding: '36px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}>
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            color: '#111827', fontSize: '19px', fontWeight: '700',
            margin: '0 0 6px 0', letterSpacing: '-0.3px',
          }}>
            Upload a Record
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
            Your file is encrypted with AES-256-GCM in your browser before it ever leaves your device.
          </p>
        </div>

        {/* Drop zone */}
        <div
          onClick={() => !busy && inputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', padding: '40px 24px',
            border: `2px dashed ${dragging ? T : file ? T + '60' : '#d1d5db'}`,
            borderRadius: '12px', cursor: busy ? 'default' : 'pointer',
            background: dragging ? `${T}08` : file ? '#f0fdfb' : '#fafafa',
            transition: 'all 0.2s',
            opacity: busy ? 0.7 : 1,
          }}
        >
          {!file ? (
            <>
              <div style={{
                width: '52px', height: '52px', borderRadius: '13px',
                background: '#f0fdfb', border: `1px solid ${T}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                {dragging ? 'Drop it here' : 'Click or drag to upload'}
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>
                PDF, PNG, JPG, or JPEG · Max 25MB
              </p>
            </>
          ) : (
            <>
              <div style={{
                width: '52px', height: '52px', borderRadius: '13px',
                background: '#f0fdfb', border: `1px solid ${T}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                {file.name}
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>
                {(file.size / 1024).toFixed(1)} KB
                {!busy && (
                  <span
                    style={{ color: T, marginLeft: '8px', cursor: 'pointer' }}
                    onClick={e => { e.stopPropagation(); reset(); }}
                  >
                    × Remove
                  </span>
                )}
              </p>
            </>
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
          disabled={busy}
          style={{ display: 'none' }}
        />

        {/* Metadata fields — shown once a file is selected */}
        {file && stage !== 'done' && (
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              fontSize: '12px', fontWeight: '600', color: '#6b7280',
              textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px',
            }}>
              Record details <span style={{ color: '#d1d5db', fontWeight: '400', textTransform: 'none', letterSpacing: 0 }}>— optional</span>
            </div>

            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '5px' }}>
                Record name
              </label>
              <input
                type="text"
                placeholder="e.g. Blood test, MRI scan, Vaccination"
                value={recordName}
                onChange={e => setRecordName(e.target.value)}
                disabled={busy}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = T}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Date */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '5px' }}>
                Date of record
              </label>
              <input
                type="date"
                value={recordDate}
                onChange={e => setRecordDate(e.target.value)}
                disabled={busy}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = T}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Notes */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '5px' }}>
                Notes
              </label>
              <textarea
                placeholder="e.g. Follow-up required, fasting required before next test…"
                value={recordNotes}
                onChange={e => setRecordNotes(e.target.value)}
                disabled={busy}
                rows={3}
                style={{
                  ...inputStyle,
                  resize: 'vertical', minHeight: '72px', lineHeight: '1.5',
                }}
                onFocus={e => e.target.style.borderColor = T}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>
        )}

        {/* Progress steps */}
        {busy && (
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0 0 0' }}>
            {[
              { id: 'encrypting', label: 'Encrypting' },
              { id: 'uploading', label: 'Uploading' },
            ].map((step, i) => {
              const active = stage === step.id;
              const done = stage === 'uploading' && step.id === 'encrypting';
              return (
                <React.Fragment key={step.id}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      background: done ? T : active ? `${T}20` : '#e5e7eb',
                      border: `2px solid ${done || active ? T : '#e5e7eb'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s',
                    }}>
                      {done ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : active ? (
                        <div style={{
                          width: '8px', height: '8px', borderRadius: '50%',
                          background: T, animation: 'pulse 1s ease-in-out infinite',
                        }} />
                      ) : null}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: active ? '600' : '400', color: active ? '#111827' : '#9ca3af' }}>
                      {step.label}
                    </span>
                  </div>
                  {i < 1 && (
                    <div style={{ flex: 1, height: '2px', background: done ? T : '#e5e7eb', margin: '0 12px', transition: 'background 0.3s' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Upload button */}
        {stage !== 'done' && (
          <button
            onClick={handleUpload}
            disabled={!file || busy}
            style={{
              width: '100%', marginTop: '20px', padding: '15px 24px',
              background: !file || busy ? '#f3f4f6' : T,
              color: !file || busy ? '#9ca3af' : 'white',
              border: 'none', borderRadius: '10px',
              fontSize: '15px', fontWeight: '600', cursor: !file || busy ? 'not-allowed' : 'pointer',
              fontFamily: FONT, transition: 'background 0.2s',
              boxShadow: file && !busy ? `0 4px 14px ${T}40` : 'none',
            }}
            onMouseEnter={e => { if (file && !busy) e.currentTarget.style.background = T_DARK; }}
            onMouseLeave={e => { if (file && !busy) e.currentTarget.style.background = T; }}
          >
            {stage === 'encrypting' ? 'Encrypting your file…'
              : stage === 'uploading' ? 'Uploading to secure storage…'
              : '🔒 Encrypt & Store Securely'}
          </button>
        )}

        {/* Error */}
        {errorMsg && (
          <div style={{
            marginTop: '16px', padding: '14px 16px',
            background: '#fef2f2', border: '1px solid #fecaca',
            borderRadius: '10px', fontSize: '14px', color: '#dc2626', lineHeight: '1.5',
          }}>
            {errorMsg}
          </div>
        )}

        {/* Success */}
        {stage === 'done' && cid && (
          <div style={{
            marginTop: '20px', padding: '24px',
            background: '#f0fdfb', border: `1px solid ${T}30`,
            borderRadius: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#111827', fontSize: '15px' }}>Stored securely</div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>Encrypted & pinned to IPFS</div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Content ID (CID)
              </div>
              <div style={{
                padding: '10px 14px', background: 'white',
                borderRadius: '8px', fontSize: '12px',
                fontFamily: 'monospace', wordBreak: 'break-all',
                color: '#374151', border: `1px solid ${T}20`,
              }}>
                {cid}
              </div>
            </div>

            <a
              href={`https://ipfs.io/ipfs/${cid}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                width: '100%', padding: '11px 24px', marginBottom: '10px',
                background: 'white', color: T,
                border: `1px solid ${T}40`, borderRadius: '8px',
                fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                fontFamily: FONT, textDecoration: 'none', boxSizing: 'border-box',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Verify encryption on IPFS
            </a>

            <button
              onClick={reset}
              style={{
                width: '100%', padding: '11px 24px',
                background: 'transparent', color: '#6b7280',
                border: '1px solid #e5e7eb', borderRadius: '8px',
                fontSize: '14px', fontWeight: '500', cursor: 'pointer',
                fontFamily: FONT,
              }}
            >
              Upload another file
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}

export default UploadRecord;
