import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import UploadRecord from '../components/UploadRecord';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { decryptFile } from '../lib/webCryptoEncryption';

const T = '#00A19C';
const T_DARK = '#007F7B';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';
const PRIVY_CONFIGURED = !!process.env.REACT_APP_PRIVY_APP_ID;

// ─── Shield icon ─────────────────────────────────────────────────────────────
function ShieldIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d1117',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT,
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: `radial-gradient(ellipse at center, ${T}18 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div style={{ marginBottom: '48px', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '10px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 24px ${T}60`,
          }}>
            <ShieldIcon size={22} />
          </div>
          <span style={{ fontSize: '22px', fontWeight: '700', color: 'white', letterSpacing: '-0.5px' }}>
            Vewr Health
          </span>
        </div>
      </div>

      {/* Card */}
      <div style={{
        background: '#161b22',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '48px 44px',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}>
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60px', height: '3px', background: T, borderRadius: '0 0 4px 4px',
        }} />

        <h1 style={{
          color: 'white', fontSize: '26px', fontWeight: '700',
          margin: '0 0 12px 0', letterSpacing: '-0.5px',
        }}>
          Sign in to your vault
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.45)', fontSize: '15px',
          margin: '0 0 36px 0', lineHeight: '1.65',
        }}>
          We'll send a one-time code to your email.<br />No password, no crypto wallet needed.
        </p>

        <button
          onClick={onLogin}
          style={{
            width: '100%', padding: '15px 24px',
            background: T, color: 'white', border: 'none',
            borderRadius: '10px', fontSize: '15px', fontWeight: '600',
            cursor: 'pointer', letterSpacing: '0.2px',
            transition: 'background 0.2s, transform 0.1s',
            boxShadow: `0 4px 20px ${T}50`,
            fontFamily: FONT,
          }}
          onMouseEnter={e => e.currentTarget.style.background = T_DARK}
          onMouseLeave={e => e.currentTarget.style.background = T}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Continue with Email →
        </button>

        {/* Trust pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px', flexWrap: 'wrap' }}>
          {['Browser-encrypted', 'No password', 'No crypto wallet'].map(pill => (
            <span key={pill} style={{
              fontSize: '12px', color: 'rgba(255,255,255,0.35)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '4px 10px', borderRadius: '100px',
            }}>
              {pill}
            </span>
          ))}
        </div>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', marginTop: '32px', textAlign: 'center', maxWidth: '340px', lineHeight: '1.6' }}>
        Your files are encrypted before they leave your device. Not even we can read them.
      </p>

      <a href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        marginTop: '24px', color: 'rgba(255,255,255,0.25)', fontSize: '13px',
        textDecoration: 'none', transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
      >
        ← Back to home
      </a>
    </div>
  );
}

// ─── Setup Notice (no Privy App ID) ──────────────────────────────────────────
function SetupNotice() {
  return (
    <div style={{
      minHeight: '100vh', background: '#0d1117',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT, padding: '24px',
    }}>
      <div style={{
        background: '#161b22', border: '1px solid rgba(255,165,0,0.3)',
        borderRadius: '16px', padding: '40px', maxWidth: '460px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚙️</div>
        <h2 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
          Privy App ID Required
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
          Add your Privy App ID to <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>.env</code> to enable authentication:
        </p>
        <div style={{
          background: '#0d1117', borderRadius: '8px', padding: '14px 16px',
          fontFamily: 'monospace', fontSize: '13px', color: T, textAlign: 'left',
        }}>
          REACT_APP_PRIVY_APP_ID=your-app-id-here
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', marginTop: '16px', marginBottom: 0 }}>
          Get your App ID at <span style={{ color: T }}>dashboard.privy.io</span>
        </p>
      </div>
    </div>
  );
}

// ─── Records List ─────────────────────────────────────────────────────────────
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
  throw new Error('Could not retrieve file from IPFS. Try again in a moment.');
}

function RecordsList({ records, onDelete }) {
  const [downloading, setDownloading] = useState({}); // { [recordId]: 'fetching' | 'decrypting' | null }
  const [dlError, setDlError] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(null); // record id awaiting confirmation
  const [deleting, setDeleting] = useState({}); // { [recordId]: true }

  const handleDownload = async (record) => {
    const { id, cid, metadata } = record;
    const { encryptedKey, iv, originalFileName, originalFileType } = metadata || {};

    if (!encryptedKey || !iv) {
      setDlError(prev => ({ ...prev, [id]: 'Missing encryption key — this record cannot be decrypted.' }));
      return;
    }

    setDlError(prev => ({ ...prev, [id]: null }));

    try {
      setDownloading(prev => ({ ...prev, [id]: 'fetching' }));
      const encryptedData = await fetchFromIPFS(cid);

      setDownloading(prev => ({ ...prev, [id]: 'decrypting' }));
      const decryptedData = await decryptFile(encryptedData, encryptedKey, iv);

      // Trigger browser download
      const blob = new Blob([decryptedData], { type: originalFileType || 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = originalFileName || `vewr-record-${cid.slice(0, 8)}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      setDlError(prev => ({ ...prev, [id]: err.message }));
    } finally {
      setDownloading(prev => ({ ...prev, [id]: null }));
    }
  };

  const handleDeleteClick = (record) => {
    if (confirmDelete === record.id) {
      // Second click — execute delete
      setDeleting(prev => ({ ...prev, [record.id]: true }));
      setConfirmDelete(null);
      onDelete(record).finally(() => {
        setDeleting(prev => ({ ...prev, [record.id]: false }));
      });
    } else {
      // First click — arm confirmation
      setConfirmDelete(record.id);
      // Auto-cancel after 3 s if user doesn't confirm
      setTimeout(() => setConfirmDelete(id => id === record.id ? null : id), 3000);
    }
  };

  if (records.length === 0) {
    return (
      <div style={{
        background: 'white', borderRadius: '16px',
        border: '1px solid #e5e7eb', padding: '72px 32px', textAlign: 'center',
      }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '16px',
          background: '#f0fdfb', border: `1px solid ${T}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <h3 style={{ color: '#111827', fontSize: '17px', fontWeight: '600', margin: '0 0 8px 0' }}>
          No records yet
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
          Upload your first medical file to get started.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .dl-btn:hover { background: #f0fdfb !important; border-color: ${T} !important; color: ${T} !important; }
        .del-btn:hover { background: #fef2f2 !important; border-color: #fca5a5 !important; color: #dc2626 !important; }
        .del-confirm:hover { background: #dc2626 !important; color: white !important; }
      `}</style>
      {records.map(record => {
        const name = record.metadata?.originalFileName || 'Medical Record';
        const date = new Date(record.uploadedAt).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric',
        });
        const size = record.metadata?.originalFileSize
          ? `${(record.metadata.originalFileSize / 1024).toFixed(1)} KB`
          : '';
        const dlState = downloading[record.id];
        const err = dlError[record.id];
        const isConfirming = confirmDelete === record.id;
        const isDeletingThis = deleting[record.id];

        return (
          <div key={record.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{
              background: 'white', borderRadius: '12px',
              border: `1px solid ${isConfirming ? '#fca5a5' : err ? '#fecaca' : '#e5e7eb'}`,
              padding: '18px 24px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '16px',
              transition: 'border-color 0.2s',
            }}>
              {/* Left: file info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: '#f0fdfb', border: `1px solid ${T}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontWeight: '600', color: '#111827', fontSize: '14px',
                    marginBottom: '3px', whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                    {date}{size ? ` · ${size}` : ''}
                  </div>
                </div>
              </div>

              {/* Right: badge + download */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <span style={{
                  background: '#f0fdfb', color: T,
                  border: `1px solid ${T}30`,
                  padding: '3px 10px', borderRadius: '6px',
                  fontSize: '12px', fontWeight: '600',
                }}>
                  🔐 Encrypted
                </span>

                <button
                  className="dl-btn"
                  onClick={() => handleDownload(record)}
                  disabled={!!dlState || isDeletingThis}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '7px 14px', borderRadius: '8px',
                    border: '1px solid #e5e7eb', background: 'white',
                    color: '#374151', fontSize: '13px', fontWeight: '500',
                    cursor: (dlState || isDeletingThis) ? 'not-allowed' : 'pointer',
                    fontFamily: FONT, transition: 'all 0.15s',
                    opacity: (dlState || isDeletingThis) ? 0.7 : 1,
                  }}
                >
                  {dlState ? (
                    <>
                      <div style={{
                        width: '12px', height: '12px', borderRadius: '50%',
                        border: `2px solid ${T}`, borderTopColor: 'transparent',
                        animation: 'spin 0.7s linear infinite', flexShrink: 0,
                      }} />
                      {dlState === 'fetching' ? 'Fetching…' : 'Decrypting…'}
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download
                    </>
                  )}
                </button>

                {/* Delete button — two-click confirmation */}
                <button
                  className={isConfirming ? 'del-confirm' : 'del-btn'}
                  onClick={() => handleDeleteClick(record)}
                  disabled={isDeletingThis || !!dlState}
                  title={isConfirming ? 'Click again to confirm deletion' : 'Delete record'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '7px 12px', borderRadius: '8px',
                    border: `1px solid ${isConfirming ? '#fca5a5' : '#e5e7eb'}`,
                    background: isConfirming ? '#fee2e2' : 'white',
                    color: isConfirming ? '#dc2626' : '#9ca3af',
                    fontSize: '13px', fontWeight: isConfirming ? '600' : '400',
                    cursor: (isDeletingThis || dlState) ? 'not-allowed' : 'pointer',
                    fontFamily: FONT, transition: 'all 0.15s',
                    opacity: isDeletingThis ? 0.5 : 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isDeletingThis ? (
                    <div style={{
                      width: '12px', height: '12px', borderRadius: '50%',
                      border: '2px solid #dc2626', borderTopColor: 'transparent',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                  ) : isConfirming ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Confirm?
                    </>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {err && (
              <div style={{
                padding: '10px 16px', background: '#fef2f2',
                border: '1px solid #fecaca', borderRadius: '8px',
                fontSize: '13px', color: '#dc2626',
              }}>
                {err}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function Dashboard({ userEmail, userId, onLogout }) {
  const [activeTab, setActiveTab] = useState('upload');
  const [records, setRecords] = useState([]);

  // Namespace by user ID for localStorage fallback
  const storageKey = `vewr_records_${userId}`;

  useEffect(() => {
    const loadRecords = async () => {
      if (isSupabaseConfigured) {
        // Fetch from Supabase — works across all devices
        const { data, error } = await supabase
          .from('records')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });
        if (!error && data) {
          setRecords(data.map(row => ({
            id: row.id,
            cid: row.cid,
            metadata: row.metadata,
            uploadedAt: row.created_at,
          })));
        }
      } else {
        // Fallback: browser localStorage (device-only)
        try {
          const stored = localStorage.getItem(storageKey);
          if (stored) setRecords(JSON.parse(stored));
        } catch (e) {}
      }
    };
    loadRecords();
  }, [userId, storageKey]);

  const handleDelete = async (record) => {
    const { id, cid } = record;

    // 1. Unpin from Pinata (best-effort — don't block on failure)
    const pinataJwt = process.env.REACT_APP_PINATA_JWT;
    if (pinataJwt && cid) {
      try {
        await fetch(`https://api.pinata.cloud/pinning/unpin/${cid}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${pinataJwt}` },
        });
      } catch (e) {
        // Non-fatal — file may already be unpinned or network issue
      }
    }

    // 2. Delete from Supabase or localStorage
    if (isSupabaseConfigured) {
      await supabase.from('records').delete().eq('id', id);
    } else {
      const updated = records.filter(r => r.id !== id);
      try { localStorage.setItem(storageKey, JSON.stringify(updated)); } catch (e) {}
    }

    // 3. Remove from UI
    setRecords(prev => prev.filter(r => r.id !== id));
  };

  const handleUploadSuccess = async (record) => {
    if (isSupabaseConfigured) {
      // Save to Supabase
      const { data, error } = await supabase
        .from('records')
        .insert({
          user_id: userId,
          cid: record.cid,
          metadata: record.metadata,
        })
        .select()
        .single();
      if (!error && data) {
        setRecords(prev => [{
          id: data.id,
          cid: data.cid,
          metadata: data.metadata,
          uploadedAt: data.created_at,
        }, ...prev]);
      }
    } else {
      // Fallback: localStorage
      const updated = [record, ...records];
      setRecords(updated);
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (e) {}
    }
    setActiveTab('records');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7f9', fontFamily: FONT }}>
      {/* Top Nav */}
      <nav style={{
        background: '#0d1117', padding: '0 32px',
        height: '60px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldIcon size={16} />
          </div>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '16px', letterSpacing: '-0.3px' }}>
            Vewr Health
          </span>
          <span style={{
            fontSize: '11px', color: T, background: `${T}18`,
            border: `1px solid ${T}40`, padding: '2px 8px',
            borderRadius: '100px', marginLeft: '4px', fontWeight: '600',
          }}>
            Patient Portal
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {userEmail && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: `${T}30`, border: `1px solid ${T}60`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '700', color: T,
              }}>
                {userEmail[0]?.toUpperCase()}
              </div>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>
                {userEmail}
              </span>
            </div>
          )}
          <button
            onClick={onLogout}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)',
              padding: '6px 14px', borderRadius: '8px',
              fontSize: '13px', cursor: 'pointer', fontFamily: FONT,
            }}
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* Main */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Page header */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{
            fontSize: '28px', fontWeight: '700', color: '#111827',
            margin: '0 0 8px 0', letterSpacing: '-0.5px',
          }}>
            Your Health Vault
          </h1>
          <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
            Files are encrypted on your device before upload. Only you can access them.
          </p>
        </div>

        {/* Stats strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px', marginBottom: '36px',
        }}>
          {[
            {
              label: 'Records stored', value: records.length.toString(),
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              ),
            },
            {
              label: 'Encryption', value: 'AES-256-GCM',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
            },
            {
              label: 'Stored on', value: 'IPFS',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              ),
            },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'white', borderRadius: '12px',
              padding: '20px 22px', border: '1px solid #e5e7eb',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: '#f0fdfb', border: `1px solid ${T}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827', letterSpacing: '-0.3px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', gap: '4px', marginBottom: '20px',
          background: '#e5e7eb', borderRadius: '10px',
          padding: '4px', width: 'fit-content',
        }}>
          {[
            { id: 'upload', label: 'Upload New' },
            { id: 'records', label: `My Records (${records.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px', borderRadius: '7px', border: 'none',
                cursor: 'pointer', fontSize: '14px', fontWeight: '500', fontFamily: FONT,
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#111827' : '#6b7280',
                boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'upload' && <UploadRecord onUploadSuccess={handleUploadSuccess} />}
        {activeTab === 'records' && <RecordsList records={records} onDelete={handleDelete} />}
      </div>
    </div>
  );
}

// ─── Privy-gated portal (hook must be called unconditionally inside here) ─────
function PrivyGatedPortal() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0d1117',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.4)' }}>
          <div style={{
            width: '20px', height: '20px', borderRadius: '50%',
            border: `2px solid ${T}`, borderTopColor: 'transparent',
            animation: 'spin 0.8s linear infinite',
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          Loading…
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onLogin={login} />;
  }

  const userEmail =
    user?.email?.address ||
    user?.linkedAccounts?.find(a => a.type === 'email')?.address ||
    '';

  return <Dashboard userEmail={userEmail} userId={user?.id || 'anonymous'} onLogout={logout} />;
}

// ─── Main export ──────────────────────────────────────────────────────────────
function PatientHome() {
  if (!PRIVY_CONFIGURED) {
    return <SetupNotice />;
  }
  return <PrivyGatedPortal />;
}

export default PatientHome;
