import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const T = '#00A19C';
const T_DARK = '#007F7B';
const AMBER = '#A17900';
const ROSE = '#A10053';

const FAQS = [
  {
    q: 'Is Vewr HIPAA compliant?',
    a: `IPFS itself isn't HIPAA compliant out of the box — and we won't pretend otherwise. But Vewr's architecture is designed so that PHI never reaches IPFS in any readable form.\n\nHere's how: your file is encrypted with AES-256-GCM directly in your browser before anything leaves your device. What gets pinned to IPFS is encrypted ciphertext — mathematically unreadable without the decryption key that only you hold. The IPFS network sees a blob of scrambled data, not a medical record.\n\nThis is exactly the architectural approach HIPAA requires for cloud-stored health data: heavy encryption of PHI before it touches any external network. Full technical documentation is available on request for compliance review.`,
    tag: 'HIPAA',
  },
  {
    q: 'What if I lose access to my account or forget my password?',
    a: `This works more like a regular account than you might expect. Vewr uses Privy for authentication, which means you sign in with your email and recover access the same way — email + one-time code, no seed phrase required.\n\nUnder the hood, Privy uses MPC (Multi-Party Computation): your encryption key is mathematically split between your device and Privy's infrastructure. Neither half alone can decrypt anything, and neither half alone can be stolen. Recovery just means Privy helps reconstruct your key after verifying your identity via email.\n\nThink of it like MetaMask but without the part where you have to write down 12 words and hope you don't lose them. If you want to export your full recovery phrase for self-custody, you can — but most users never need to.`,
    tag: 'Access',
  },
  {
    q: 'Can a doctor access my records in an emergency if I\'m unconscious?',
    a: `Honestly, no — not without your prior action. That's the real tradeoff with end-to-end encryption: nobody can read your records without access you've granted.\n\nThe way to handle this is to pre-share access with a trusted provider or emergency contact before you need it. In Vewr, you can give your primary care physician standing access to your full record — they sign in with their own account and it's there. You can revoke it anytime.\n\nWe're also working on a time-locked emergency access model. But we'd rather be honest about the current limitation than promise something the encryption doesn't support.`,
    tag: 'Emergency',
  },
  {
    q: 'What is IPFS and why does Vewr use it?',
    a: `IPFS (InterPlanetary File System) is a decentralized storage network — instead of your files sitting on one company's server, they're distributed across many independent nodes worldwide.\n\nWe use it for one reason: your records shouldn't depend on Vewr staying in business. If we disappeared tomorrow, your encrypted files remain on the IPFS network, accessible to anyone with your CID (content address) and your decryption key. You're not locked into us the way you're locked into Dropbox or a hospital portal.`,
    tag: 'Technology',
  },
  {
    q: 'How is this different from MyChart or my hospital\'s patient portal?',
    a: `MyChart and hospital portals give you a *view* of your records — the data still lives on their servers, under their control. They decide what you can see, who else can access it, and you lose that access the moment you change providers or they shut down the portal.\n\nVerw gives you a copy that's cryptographically yours. It doesn't replace your hospital's portal — it gives you a sovereign backup that travels with you across every provider, every insurer, every state you ever live in.`,
    tag: 'Comparison',
  },
  {
    q: 'Who can actually see my records?',
    a: `Only someone you've explicitly granted access to. Not the IPFS nodes storing your file. Not your insurance company. Not anyone else.\n\nWhen you upload a file, it's encrypted in your browser with a key tied to your Vewr account via Privy's MPC infrastructure. The key is never stored whole in one place — not on our servers, not on IPFS. We can't read your data even if we wanted to — or were compelled to.`,
    tag: 'Privacy',
  },
  {
    q: 'What file types can I upload?',
    a: `Currently: PDF, PNG, JPG, and JPEG. These cover the vast majority of medical documents — lab results, imaging reports, prescriptions, vaccination records, and insurance documents.\n\nSupport for DICOM (raw medical imaging), HL7, and FHIR formats is on the roadmap for the provider-facing version.`,
    tag: 'Files',
  },
  {
    q: 'Is Vewr a HIPAA-compliant platform?',
    a: `No — and for most people using Vewr, that's completely fine. Here's why.\n\nHIPAA governs covered entities: hospitals, insurers, doctors, and the vendors they hire to handle patient data on their behalf. It was written to protect you from institutions mishandling your information — not to regulate what you do with your own records.\n\nWhen you use Vewr, you're an individual storing files you already own. You are not a covered entity. We are not acting as a Business Associate under HIPAA. None of our infrastructure providers (Pinata, Supabase, Privy) have signed BAAs with us, because for a consumer tool, that's not the right legal framework.\n\nWhat Vewr does instead is arguably stronger than what HIPAA requires: your files are encrypted in your browser before they leave your device, and we never hold a key that could decrypt them. HIPAA requires encryption of PHI in transit and at rest — we do that, but the key is yours, not ours. A covered entity with a BAA can still technically read your data. We can't.\n\nIf you're a clinic, hospital, or health system looking at Vewr as infrastructure for storing patient records — that's a different conversation, and we'd need BAAs in place before that could happen. But if you're a patient who wants a private, encrypted copy of your own health history, you don't need HIPAA to protect you. The encryption does.`,
    tag: 'HIPAA',
  },
  {
    q: 'If I delete a record, is it actually gone?',
    a: `Not in the way you're probably thinking — and we'd rather tell you that upfront.\n\nWhen you delete a record, two things happen: we remove it from your Vewr account and we unpin it from our storage node, which means we stop paying to keep it alive on IPFS. But IPFS is a decentralized network — if any other node cached your file in the brief window it was live, that node could theoretically hold it indefinitely.\n\nHere's why that's less scary than it sounds: what's on IPFS is never your actual medical record. It's AES-256-GCM encrypted ciphertext — a mathematically scrambled blob that is completely unreadable without your decryption key. The key never touched IPFS. So even in the worst case where a cached copy persists somewhere on the network forever, anyone who finds it sees random noise. There's no medical data to expose.\n\nTrue deletion of plaintext isn't a concern because plaintext never left your device in the first place. What you're really deleting is the only key that makes the file meaningful — and that stays yours.`,
    tag: 'Deletion',
  },
];

function FaqItem({ faq, index, T, AMBER, ROSE }) {
  const [open, setOpen] = React.useState(false);
  const accent = [T, AMBER, ROSE][index % 3];
  return (
    <div
      style={{
        borderBottom: '1px solid #e8ecf0',
        transition: 'all 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none',
          padding: '24px 0', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '16px', textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <span style={{
            fontSize: '10px', fontWeight: '700', letterSpacing: '0.8px',
            color: accent,
            background: `${accent}12`,
            border: `1px solid ${accent}25`,
            padding: '3px 8px', borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {faq.tag.toUpperCase()}
          </span>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#0a0f1a', lineHeight: '1.4' }}>
            {faq.q}
          </span>
        </div>
        <div style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: open ? accent : '#f1f5f9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'all 0.2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={open ? 'white' : '#64748b'} strokeWidth="2.5"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
      {open && (
        <div style={{ paddingBottom: '24px', paddingLeft: '0' }}>
          {faq.a.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontSize: '15px', color: '#4a5568', lineHeight: '1.75',
              margin: i === 0 ? '0 0 14px 0' : '14px 0 0 0', maxWidth: '680px',
            }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function FaqSection({ T, AMBER, ROSE }) {
  return (
    <section className="vw-section" style={{ padding: '120px 40px', background: '#f8fafc' }}>
      <div className="vw-faq-grid" style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <div className="vw-faq-sticky" style={{ position: 'sticky', top: '80px' }}>
          <p style={{ color: AMBER, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', margin: '0 0 12px 0' }}>
            FAQ
          </p>
          <h2 style={{
            fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '800',
            letterSpacing: '-1px', margin: '0 0 16px 0', color: '#0a0f1a', lineHeight: '1.15',
          }}>
            The questions you should be asking.
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
            We'd rather answer the hard ones upfront than bury them in a terms of service.
          </p>
        </div>
        <div>
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} T={T} AMBER={AMBER} ROSE={ROSE} />
          ))}
        </div>
      </div>
    </section>
  );
}


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
      <style>{`
        @media (max-width: 768px) {
          .vw-nav { padding: 0 20px !important; }
          .vw-hero-section { padding: 90px 20px 60px !important; }
          .vw-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .vw-hero-vault { display: none !important; }
          .vw-section { padding: 60px 20px !important; }
          .vw-stats-grid { grid-template-columns: 1fr !important; border-radius: 12px !important; }
          .vw-stats-grid > div { padding: 28px 24px !important; }
          .vw-steps-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .vw-steps-line { display: none !important; }
          .vw-steps-grid > div { padding: 0 !important; }
          .vw-cards-grid { grid-template-columns: 1fr !important; }
          .vw-providers-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .vw-providers-card { display: none !important; }
          .vw-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .vw-faq-sticky { position: static !important; }
          .vw-footer-cta { padding: 72px 20px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="vw-nav" style={{
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
      <section className="vw-hero-section" style={{
        minHeight: '100vh', background: '#060b14',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '100px 40px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* dot grid background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />
        {/* teal glow left */}
        <div style={{
          position: 'absolute', top: '20%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: `radial-gradient(circle, ${T}18 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        {/* rose glow right */}
        <div style={{
          position: 'absolute', bottom: '15%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: `radial-gradient(circle, ${ROSE}14 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        {/* two-column layout */}
        <div className="vw-hero-grid" style={{
          maxWidth: '1080px', margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center', position: 'relative',
        }}>
          {/* LEFT: copy + form */}
          <div>
            {/* badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: `${T}12`, border: `1px solid ${T}30`,
              color: T, padding: '6px 14px', borderRadius: '100px',
              fontSize: '11px', fontWeight: '700', letterSpacing: '1px',
              marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T, boxShadow: `0 0 8px ${T}` }} />
              YOUR RECORDS. YOUR KEYS.
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: '800',
              lineHeight: '1.1', letterSpacing: '-2px',
              color: 'white', margin: '0 0 12px 0',
            }}>
              One place for every
              <br />record of your life.
              <br />
              <span style={{
                background: `linear-gradient(90deg, ${T}, #4dd9d5)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Under your control.
              </span>
            </h1>

            <p style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.5)',
              lineHeight: '1.75', margin: '0 0 36px 0', maxWidth: '520px',
            }}>
              Your medical history is scattered across hospitals, portals, and providers
              you can barely log into. Vewr brings it together in one place — and only
              you hold the key.
            </p>

            {submitState === 'success' ? (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: `${T}15`, border: `1px solid ${T}40`,
                padding: '14px 20px', borderRadius: '12px',
                color: T, fontSize: '14px', fontWeight: '500',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                You're on the list — we'll be in touch.
              </div>
            ) : (
              <div>
                <form onSubmit={handleWaitlist} style={{
                  display: 'flex', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px', padding: '5px', gap: '6px',
                  maxWidth: '400px',
                }}>
                  <input
                    type="email" required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1, background: 'transparent', border: 'none', outline: 'none',
                      padding: '10px 14px', fontSize: '14px', color: 'white', minWidth: 0,
                    }}
                  />
                  <button type="submit" disabled={submitState === 'loading'} style={{
                    padding: '10px 20px', background: T, color: 'white',
                    border: 'none', borderRadius: '8px', cursor: 'pointer',
                    fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap',
                    opacity: submitState === 'loading' ? 0.7 : 1, flexShrink: 0,
                  }}>
                    {submitState === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
                {submitState === 'error' && (
                  <p style={{ color: '#fc8181', fontSize: '13px', marginTop: '8px' }}>Something went wrong — try again.</p>
                )}
                <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', marginTop: '12px' }}>No spam. Early access only.</p>
              </div>
            )}

            {/* trust pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '32px' }}>
              {[
                { label: 'Sign in with email', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label: 'Browser-encrypted', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                { label: 'No crypto wallet needed', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> },
              ].map(({ label, icon }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '100px', padding: '5px 11px',
                  color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: '500',
                }}>
                  {icon}{label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: vault mockup */}
          <div className="vw-hero-vault" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px', height: '300px', borderRadius: '50%',
              background: `radial-gradient(circle, ${T}20 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            <div style={{
              background: '#0d1117', borderRadius: '20px', padding: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)`,
              position: 'relative',
            }}>
              {/* vault header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '9px',
                    background: `${T}20`, border: `1px solid ${T}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'white' }}>Your Health Vault</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>End-to-end encrypted</div>
                  </div>
                </div>
                <div style={{
                  background: `${T}18`, color: T, border: `1px solid ${T}30`,
                  padding: '3px 9px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                }}>
                  🔒 Locked
                </div>
              </div>

              <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.25)', letterSpacing: '1px', marginBottom: '10px' }}>
                YOUR RECORDS
              </div>

              {[
                { name: 'Blood Panel — Jan 2025', type: 'PDF', color: T },
                { name: 'MRI Scan — Dec 2024', type: 'IMG', color: AMBER },
                { name: 'Vaccination Record', type: 'PDF', color: T },
                { name: 'Prescription — Nov 2024', type: 'PDF', color: AMBER },
              ].map((r, i) => (
                <div key={r.name} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 12px', borderRadius: '9px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: '6px',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '7px',
                    background: `${r.color}18`, border: `1px solid ${r.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={r.color} strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(255,255,255,0.8)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</div>
                  </div>
                  <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '3px' }}>{r.type}</span>
                </div>
              ))}

              <div style={{
                marginTop: '16px', padding: '12px',
                background: `${T}08`, border: `1px solid ${T}20`,
                borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.4' }}>
                  Only you can decrypt these files. Not even Vewr can read them.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="vw-section" style={{ padding: '80px 40px', background: '#0d1117' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="vw-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
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
      <section className="vw-section" style={{ padding: '120px 40px', background: '#ffffff' }}>
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

          <div className="vw-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
            {/* connecting line */}
            <div className="vw-steps-line" style={{
              position: 'absolute', top: '28px', left: 'calc(12.5%)', right: 'calc(12.5%)',
              height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent)',
              zIndex: 0,
            }} />

            {[
              {
                n: '01', title: 'Upload', desc: 'Sign in with your email — no crypto wallet or seed phrase needed. Then select any medical file from your device.',
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

      {/* ── FOR YOU ── */}
      <section className="vw-section" style={{ padding: '120px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <p style={{ color: T, fontSize: '12px', fontWeight: '700', letterSpacing: '2px', margin: '0 0 12px 0' }}>
              FOR YOU
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
              letterSpacing: '-1.5px', margin: '0 0 16px 0', color: '#0a0f1a', lineHeight: '1.1',
            }}>
              Your records, finally<br />
              <span style={{ color: '#94a3b8' }}>working for you.</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', margin: 0, maxWidth: '520px', lineHeight: '1.7' }}>
              Not for your insurer. Not for your hospital's IT department. Not for data brokers.
            </p>
          </div>

          <div className="vw-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
                title: 'Everything in one place',
                desc: 'Five hospitals. Three apps. A filing cabinet. Vewr pulls it all into a single encrypted vault that\'s actually yours.',
                accent: T,
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                title: 'Only you can read it',
                desc: 'Encrypted in your browser before it ever leaves your device. Not your hospital\'s IT team. Not your insurer. Not a data broker. Yours.',
                accent: T,
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Share on your terms',
                desc: 'Give a new specialist exactly what they need — and nothing else. Revoke it the moment you\'re done.',
                accent: AMBER,
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                title: 'Yours forever',
                desc: 'Switch insurers. Change doctors. Move across the country. Your records travel with you, not with your last provider.',
                accent: AMBER,
              },
            ].map(({ icon, title, desc, accent }) => (
              <div key={title} style={{
                padding: '32px',
                border: '1px solid #e8ecf0',
                borderRadius: '16px',
                background: '#fafbfc',
                borderTop: `3px solid ${accent}`,
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${accent}10`, border: `1px solid ${accent}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0a0f1a', margin: '0 0 10px 0', letterSpacing: '-0.3px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.65' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR PROVIDERS ── */}
      <section className="vw-section" style={{ padding: '120px 40px', background: '#f8fafc' }}>
        <div className="vw-providers-grid" style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
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
              Patients share access through Vewr — cryptographically verified, not through a fax or a broken portal.
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
          <div className="vw-providers-card" style={{
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

      {/* ── FAQ ── */}
      <FaqSection T={T} AMBER={AMBER} ROSE={ROSE} />

      {/* ── FOOTER CTA ── */}
      <section className="vw-footer-cta" style={{
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', margin: 0 }}>
            © {new Date().getFullYear()} Vewr Health · Your data, your keys.
          </p>
          <a href="/terms" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = T}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
            Terms of Service
          </a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = T}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
            Privacy Policy
          </a>
        </div>
      </footer>


    </div>
  );
}

export default LandingPage;
