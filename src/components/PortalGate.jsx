import React, { useState } from 'react';

const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';
const T = '#00A19C';
const SESSION_KEY = 'vewr_portal_access';
// Simple beta gate — not a security control, just keeps randos out
const GATE_HASH = 'Get0ut123!@#';

function check(val) { return val === GATE_HASH; }
function isUnlocked() {
  try { return sessionStorage.getItem(SESSION_KEY) === '1'; } catch { return false; }
}
function unlock() {
  try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
}

export default function PortalGate({ children }) {
  const [open, setOpen] = useState(!isUnlocked());
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  if (!open) return children;

  const submit = (e) => {
    e.preventDefault();
    if (check(value)) {
      unlock();
      setOpen(false);
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: '#060b14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT, padding: '24px',
    }}>
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        .gate-shake { animation: shake 0.45s ease; }
      `}</style>

      <div className={shake ? 'gate-shake' : ''} style={{
        background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px', padding: '48px 44px',
        width: '100%', maxWidth: '380px', textAlign: 'center',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60px', height: '3px', background: T, borderRadius: '0 0 4px 4px',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '9px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 20px ${T}50`,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span style={{ fontSize: '18px', fontWeight: '700', color: 'white', letterSpacing: '-0.3px' }}>
            Vewr Health
          </span>
        </div>

        <h1 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.4px' }}>
          Beta Access
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: '0 0 28px 0', lineHeight: '1.5' }}>
          Enter your access code to continue.
        </p>

        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="Access code"
            value={value}
            autoFocus
            onChange={e => { setValue(e.target.value); setError(false); }}
            style={{
              width: '100%', padding: '13px 16px',
              background: '#161b22',
              border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '10px', color: 'white', fontSize: '15px',
              fontFamily: FONT, outline: 'none', boxSizing: 'border-box',
              transition: 'border-color 0.2s', letterSpacing: '2px',
            }}
            onFocus={e => { if (!error) e.target.style.borderColor = T; }}
            onBlur={e => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          />
          {error && (
            <p style={{ color: '#f87171', fontSize: '12px', margin: '8px 0 0 0' }}>
              Incorrect code. Try again.
            </p>
          )}
          <button type="submit" style={{
            width: '100%', marginTop: '16px', padding: '13px',
            background: T, color: 'white', border: 'none',
            borderRadius: '10px', fontSize: '15px', fontWeight: '600',
            cursor: 'pointer', fontFamily: FONT,
            boxShadow: `0 4px 16px ${T}40`,
          }}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
