import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const T = '#00A19C';
const T_DARK = '#007F7B';
const AMBER = '#A17900';
const ROSE = '#A10053';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState('idle');
  const navigate = useNavigate();

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitState('loading');
    try {
      const res = await fetch('https://formspree.io/f/meenbyyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitState(res.ok ? 'success' : 'error');

      if (res.ok) setEmail('');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <div style={{ fontFamily: '"Gotham SSm", "Gotham", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', margin: 0 }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
        background: 'rgba(6,11,20,0.7)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '7px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span style={{ fontSize: '16px', fontWeight: '700', color: 'white', letterSpacing: '-0.3px' }}>
            Vewr Health
          </span>
        </div>
        <button onClick={() => navigate('/patient')} style={{
          padding: '7px 18px', background: 'rgba(0,161,156,0.15)',
          color: T, border: `1px solid ${T}50`,
          borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600',
          transition: 'all 0.2s',
        }}>
          Patient Portal →
        </button>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', background: '#060b14',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        {/* glow orbs */}
        <div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: `radial-gradient(circle, ${ROSE}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, ${AMBER}14 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '800',
          lineHeight: '1.12', letterSpacing: '-2px',
          color: 'white', margin: '0 0 28px 0',
          maxWidth: '860px', position: 'relative',
        }}>
          Every year, over 133 million Americans have their health records exposed.{' '}
          <span style={{
            background: `linear-gradient(90deg, ${ROSE}, #d4547a)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Not hacked — just bought, sold, and shared without their knowledge.
          </span>
        </h1>

        <p style={{
          fontSize: '18px', color: 'rgba(255,255,255,0.55)',
          maxWidth: '520px', lineHeight: '1.75', margin: '0 0 52px 0',
          position: 'relative',
        }}>
          Vewr gives your health data back to you — encrypted in your browser
          before it ever touches a server, stored on IPFS, under your control alone.
        </p>

        {/* Waitlist form */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
          {submitState === 'success' ? (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              background: `${T}15`, border: `1px solid ${T}40`,
              padding: '16px 24px', borderRadius: '14px',
              color: T, fontSize: '15px', fontWeight: '500',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              You're on the list — we'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleWaitlist} style={{
              display: 'flex', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px', padding: '6px', gap: '6px',
            }}>
              <input
                type="email" required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  padding: '10px 14px', fontSize: '14px',
                  color: 'white', minWidth: 0,
                }}
              />
              <button type="submit" disabled={submitState === 'loading'} style={{
                padding: '10px 22px', background: T,
                color: 'white', border: 'none', borderRadius: '9px',
                cursor: 'pointer', fontSize: '14px', fontWeight: '600',
                whiteSpace: 'nowrap', opacity: submitState === 'loading' ? 0.7 : 1,
                flexShrink: 0,
              }}>
                {submitState === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
          {submitState === 'error' && (
            <p style={{ color: '#fc8181', fontSize: '13px', marginTop: '8px' }}>
              Something went wrong — try again.
            </p>
          )}
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', marginTop: '14px' }}>
            No spam. Early access only.
          </p>
        </div>

        {/* trust strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '18px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Browser-only encryption', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
            { label: 'You hold the keys', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg> },
            { label: 'Stored on IPFS', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
            { label: 'Zero-knowledge', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> },
          ].map(({ label, icon }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '100px', padding: '6px 13px',
              color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: '500',
            }}>
              {icon}
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: '80px 40px', background: '#0d1117' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
            {[
              { stat: '50+', label: 'companies profit from your medical data every year', color: ROSE },
              { stat: '0×', label: 'you were asked for permission', color: AMBER },
              { stat: '1', label: 'place your records should live — with you', color: T },
            ].map(({ stat, label, color }) => (
              <div key={stat} style={{ padding: '40px 32px', background: '#0d1117' }}>
                <div style={{
                  fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800',
                  letterSpacing: '-2px', color, lineHeight: 1, marginBottom: '12px',
                }}>
                  {stat}
                </div>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: '1.6' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '120px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ marginBottom: '72px' }}>
            <p style={{ color: AMBER, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', margin: '0 0 12px 0' }}>
              HOW IT WORKS
            </p>
            <h2 style={{
              fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: '800',
              letterSpacing: '-1.5px', margin: '0', color: '#0a0f1a', lineHeight: '1.1',
            }}>
              Built so even we<br />
              <span style={{ color: '#94a3b8' }}>can't read your files.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
            {/* connecting line */}
            <div style={{
              position: 'absolute', top: '28px', left: 'calc(12.5%)', right: 'calc(12.5%)',
              height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent)',
              zIndex: 0,
            }} />

            {[
              {
                n: '01', title: 'Upload', desc: 'Select any medical file — labs, scans, prescriptions — directly from your device.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              },
              {
                n: '02', title: 'Encrypt', desc: 'AES-256-GCM encryption runs in your browser. The server never sees your plaintext file.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              },
              {
                n: '03', title: 'Store', desc: 'Your encrypted file is pinned to the decentralized IPFS network. No central point of failure.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              },
              {
                n: '04', title: 'Share', desc: 'Grant a provider cryptographic access to specific records. Revoke it any time.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              },
            ].map(({ n, title, desc, icon }) => (
              <div key={n} style={{ padding: '0 24px 0 0', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: '#f8fafc', border: '1px solid #e2e8f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  {icon}
                </div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: AMBER, letterSpacing: '1.5px', marginBottom: '8px' }}>
                  {n}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', margin: '0 0 10px 0', color: '#0a0f1a', letterSpacing: '-0.3px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.65' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR PROVIDERS ── */}
      <section style={{ padding: '120px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <p style={{ color: ROSE, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', margin: '0 0 16px 0' }}>
              FOR HEALTHCARE PROVIDERS
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800',
              letterSpacing: '-1.5px', margin: '0 0 20px 0', color: '#0a0f1a', lineHeight: '1.15',
            }}>
              Records patients<br />actually trust you with.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.75', margin: '0 0 36px 0' }}>
              Patients share records via their wallet — cryptographically, not through a fax or broken portal.
              You get exactly what they choose to share, and they can take it back at any time.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'No logins or portals to manage',
                'Access is cryptographically granted, not just permission-checked',
                'Patients can revoke access at any time',
                'Full audit trail patients control',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: T, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Provider card */}
          <div style={{
            background: '#0a0f1a', borderRadius: '20px', padding: '28px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
          }}>
            {/* header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${T}, ${T_DARK})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: 'white' }}>Dr. Sarah Chen</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Primary Care · Stanford Health</div>
              </div>
              <div style={{
                background: `${T}20`, color: T,
                padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                border: `1px solid ${T}30`,
              }}>
                Active
              </div>
            </div>

            <p style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', margin: '0 0 12px 0' }}>
              SHARED RECORDS
            </p>

            {[
              { name: 'Blood Panel — Jan 2025', type: 'PDF', ago: '3 days ago' },
              { name: 'MRI Scan — Dec 2024', type: 'IMG', ago: '3 days ago' },
              { name: 'Vaccination Record', type: 'PDF', ago: '3 days ago' },
            ].map((r) => (
              <div key={r.name} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '11px 12px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '8px',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: `${T}18`, border: `1px solid ${T}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{r.ago}</div>
                </div>
                <span style={{
                  fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.35)',
                  background: 'rgba(255,255,255,0.06)', padding: '2px 7px', borderRadius: '4px',
                }}>
                  {r.type}
                </span>
              </div>
            ))}

            <button style={{
              width: '100%', marginTop: '12px', padding: '11px',
              background: `${ROSE}10`, border: `1px solid ${ROSE}35`,
              borderRadius: '10px', color: ROSE,
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Revoke all access
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section style={{
        padding: '120px 40px', background: '#060b14',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: `radial-gradient(ellipse, ${T}14 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800',
            letterSpacing: '-2px', color: 'white', margin: '0 0 16px 0', lineHeight: '1.1',
          }}>
            Own your health data.
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.45)', margin: '0 0 44px 0' }}>
            Early access coming soon.
          </p>
          {submitState === 'success' ? (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: `${T}15`, border: `1px solid ${T}40`,
              padding: '14px 24px', borderRadius: '12px',
              color: T, fontSize: '15px', fontWeight: '500',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              You're on the list.
            </div>
          ) : (
            <form onSubmit={handleWaitlist} style={{
              display: 'flex', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px', padding: '6px', gap: '6px',
              maxWidth: '440px', margin: '0 auto',
            }}>
              <input
                type="email" required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  padding: '10px 14px', fontSize: '14px', color: 'white', minWidth: 0,
                }}
              />
              <button type="submit" disabled={submitState === 'loading'} style={{
                padding: '10px 22px', background: T, color: 'white',
                border: 'none', borderRadius: '9px', cursor: 'pointer',
                fontSize: '14px', fontWeight: '600', flexShrink: 0,
                opacity: submitState === 'loading' ? 0.7 : 1,
              }}>
                {submitState === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '24px 40px', background: '#060b14',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '22px', height: '22px', borderRadius: '5px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Vewr Health</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', margin: 0 }}>
          © {new Date().getFullYear()} Vewr Health · Your data, your keys.
        </p>
      </footer>

    </div>
  );
}

export default LandingPage;
