import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShareLink, recordShareLinkView } from '../lib/shareLinks';
import { decryptFile, decryptFileWithShareKey } from '../lib/webCryptoEncryption';
import { logAccess } from '../lib/auditLog';

const T = '#00A19C';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';

const IPFS_GATEWAYS = [
  'https://gateway.pinata.cloud/ipfs/',
  'https://ipfs.io/ipfs/',
  'https://cloudflare-ipfs.com/ipfs/',
];

async function fetchFromIPFS(cid) {
  for (const gateway of IPFS_GATEWAYS) {
    try {
      const res = await fetch(`${gateway}${cid}`);
      if (res.ok) return res.arrayBuffer();
    } catch (e) {}
  }
  throw new Error('Could not retrieve file. Try again in a moment.');
}

function ShieldIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function formatExpiry(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  });
}

function fileIcon(fileType) {
  const isImage = fileType?.startsWith('image/');
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {isImage ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </>
      ) : (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </>
      )}
    </svg>
  );
}

export default function ShareView() {
  const { token } = useParams();
  const [status, setStatus] = useState('loading'); // loading | valid | invalid | fetching | decrypting | done | error
  const [link, setLink] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    async function load() {
      const { link: l, error } = await getShareLink(token);
      if (error) {
        setErrorMsg(error);
        setStatus('invalid');
      } else {
        setLink(l);
        setIsImage(l.file_type?.startsWith('image/'));
        setStatus('valid');
        // Record the view — fire and forget
        recordShareLinkView(l.id, l.view_count || 0);
      }
    }
    load();
  }, [token]);

  const handleView = async () => {
    if (!link) return;
    setErrorMsg('');

    try {
      setStatus('fetching');
      const encryptedData = await fetchFromIPFS(link.cid);

      setStatus('decrypting');

      // v2 share link: share key in URL fragment, file key wrapped server-side
      // v1 share link: plain file key stored in DB (legacy, backward compat)
      const shareKeyB64 = new URLSearchParams(window.location.search).get('k');
      const decryptedData = shareKeyB64
        ? await decryptFileWithShareKey(encryptedData, link.encrypted_key, link.iv, shareKeyB64)
        : await decryptFile(encryptedData, link.encrypted_key, link.iv);

      logAccess({ action: 'share_viewed', shareToken: token, fileName: link.file_name, fileType: link.file_type });
      const blob = new Blob([decryptedData], { type: link.file_type || 'application/octet-stream' });

      if (isImage) {
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
        setStatus('done');
      } else {
        // PDF / other — trigger download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = link.file_name || 'vewr-record';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setStatus('done');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to retrieve the file. Please try again.');
      setStatus('error');
    }
  };

  const busy = status === 'fetching' || status === 'decrypting';

  return (
    <div style={{
      minHeight: '100vh', background: '#0d1117',
      fontFamily: FONT, display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '40px 20px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: `radial-gradient(ellipse at center, ${T}14 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Nav */}
      <div style={{
        width: '100%', maxWidth: '560px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '40px', position: 'relative',
      }}>
        <a href="/" style={{
          display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '9px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 20px ${T}50`,
          }}>
            <ShieldIcon size={18} />
          </div>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '16px', letterSpacing: '-0.3px' }}>
            Vewr Health
          </span>
        </a>
        <span style={{
          fontSize: '11px', color: T, background: `${T}18`,
          border: `1px solid ${T}40`, padding: '3px 10px',
          borderRadius: '100px', fontWeight: '600',
        }}>
          Shared Record
        </span>
      </div>

      {/* Card */}
      <div style={{
        width: '100%', maxWidth: '560px',
        background: '#161b22', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px', overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        position: 'relative',
      }}>
        {/* Top accent */}
        <div style={{ height: '3px', background: T }} />

        <div style={{ padding: '36px' }}>
          {/* Loading */}
          {status === 'loading' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.4)', justifyContent: 'center', padding: '40px 0' }}>
              <div style={{
                width: '18px', height: '18px', borderRadius: '50%',
                border: `2px solid ${T}`, borderTopColor: 'transparent',
                animation: 'spin 0.8s linear infinite',
              }} />
              Verifying link…
            </div>
          )}

          {/* Invalid */}
          {status === 'invalid' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h2 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '0 0 10px 0' }}>
                Link unavailable
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', margin: '0 0 28px 0', lineHeight: '1.6' }}>
                {errorMsg}
              </p>
              <a href="/" style={{
                display: 'inline-block', padding: '11px 24px',
                background: T, color: 'white', textDecoration: 'none',
                borderRadius: '9px', fontSize: '14px', fontWeight: '600',
              }}>
                Go to Vewr Health
              </a>
            </div>
          )}

          {/* Valid / ready to view */}
          {(status === 'valid' || status === 'fetching' || status === 'decrypting' || status === 'error' || status === 'done') && link && (
            <>
              {/* File info header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: `${T}18`, border: `1px solid ${T}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {fileIcon(link.file_type)}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    color: 'white', fontWeight: '700', fontSize: '17px',
                    marginBottom: '4px', whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {link.file_name}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>
                    {link.file_type?.split('/')[1]?.toUpperCase() || 'FILE'} · Encrypted medical record
                  </div>
                </div>
              </div>

              {/* Info pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {[
                  { icon: '🔐', label: 'AES-256-GCM encrypted' },
                  { icon: '⏳', label: `Expires ${formatExpiry(link.expires_at)}` },
                ].map(pill => (
                  <div key={pill.label} style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '5px 12px', borderRadius: '8px',
                    fontSize: '12px', color: 'rgba(255,255,255,0.45)',
                  }}>
                    <span>{pill.icon}</span>
                    {pill.label}
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div style={{
                background: `${T}0C`, border: `1px solid ${T}25`,
                borderRadius: '10px', padding: '14px 16px',
                marginBottom: '24px',
                display: 'flex', gap: '12px', alignItems: 'flex-start',
              }}>
                <ShieldIcon size={16} color={T} />
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                  This file is decrypted directly in your browser. It never travels over the internet in readable form — not even Vewr can see it.
                </p>
              </div>

              {/* Image preview */}
              {status === 'done' && isImage && previewUrl && (
                <div style={{ marginBottom: '20px' }}>
                  <img
                    src={previewUrl}
                    alt={link.file_name}
                    style={{
                      width: '100%', borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      maxHeight: '500px', objectFit: 'contain', background: '#0d1117',
                    }}
                  />
                </div>
              )}

              {/* Done confirmation for non-image */}
              {status === 'done' && !isImage && (
                <div style={{
                  background: `${T}12`, border: `1px solid ${T}30`,
                  borderRadius: '10px', padding: '14px 16px', marginBottom: '20px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: T, fontSize: '14px', fontWeight: '600' }}>
                    File downloaded and decrypted successfully.
                  </span>
                </div>
              )}

              {/* Action button */}
              {status !== 'done' && (
                <button
                  onClick={handleView}
                  disabled={busy}
                  style={{
                    width: '100%', padding: '15px 24px',
                    background: busy ? `${T}50` : T,
                    color: 'white', border: 'none', borderRadius: '10px',
                    fontSize: '15px', fontWeight: '600', cursor: busy ? 'not-allowed' : 'pointer',
                    fontFamily: FONT, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '8px',
                    boxShadow: busy ? 'none' : `0 4px 20px ${T}50`,
                    transition: 'all 0.2s',
                  }}
                >
                  {busy ? (
                    <>
                      <div style={{
                        width: '14px', height: '14px', borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.4)', borderTopColor: 'white',
                        animation: 'spin 0.8s linear infinite',
                      }} />
                      {status === 'fetching' ? 'Fetching from IPFS…' : 'Decrypting in browser…'}
                    </>
                  ) : (
                    <>
                      {isImage ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          View File
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download & Decrypt
                        </>
                      )}
                    </>
                  )}
                </button>
              )}

              {/* Re-download for done state */}
              {status === 'done' && (
                <button
                  onClick={handleView}
                  style={{
                    width: '100%', padding: '12px 24px',
                    background: 'transparent', color: 'rgba(255,255,255,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
                    fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: FONT,
                  }}
                >
                  {isImage ? 'Re-load image' : 'Download again'}
                </button>
              )}

              {/* Error */}
              {status === 'error' && errorMsg && (
                <div style={{
                  marginTop: '14px', padding: '12px 16px',
                  background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)',
                  borderRadius: '8px', fontSize: '13px', color: '#f87171',
                }}>
                  {errorMsg}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', margin: '0 0 6px 0' }}>
          Shared via
        </p>
        <a href="/" style={{
          color: 'rgba(255,255,255,0.35)', fontSize: '13px', fontWeight: '600',
          textDecoration: 'none', letterSpacing: '-0.2px',
        }}>
          Vewr Health — Patient-controlled records
        </a>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
