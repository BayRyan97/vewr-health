import React from 'react';
import { useNavigate } from 'react-router-dom';

const T = '#00A19C';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';
const EFFECTIVE_DATE = 'May 15, 2026';

const sections = [
  {
    title: 'Overview',
    body: `Vewr Health is built on a simple principle: we should know as little about your medical data as technically possible. This policy explains exactly what we collect, what we don't, and why.`,
  },
  {
    title: '1. What We Collect',
    subsections: [
      {
        heading: 'Account information',
        body: `When you sign in, we collect your email address via Privy (our authentication provider). This is used solely to identify your account and send you one-time login codes. We do not store your email on our own servers — Privy manages this.`,
      },
      {
        heading: 'Record index',
        body: `When you upload a file, we store a record in our database (Supabase) containing: your account ID, the IPFS content identifier (CID) of your encrypted file, and your file's metadata — name, type, and size. This is what lets us show your records list across devices.\n\nWe do not store your file contents. Files are encrypted on your device before upload. We receive only encrypted ciphertext, which we pin to IPFS. We cannot decrypt it.`,
      },
      {
        heading: 'Usage analytics',
        body: `We use Google Analytics 4 to understand how people use our landing page — page views, session duration, general geographic region (country/city level), device type, and referral source. This data is anonymized and aggregated. No personally identifiable information is sent to Google Analytics.`,
      },
    ],
  },
  {
    title: '2. What We Don\'t Collect',
    body: `We do not collect:\n• The contents of any file you upload (they're encrypted before leaving your device)\n• Your full IP address (anonymized by GA4)\n• Payment information (we have no paid tier yet)\n• Any data from inside the patient portal for analytics purposes\n• Health information in any readable form`,
  },
  {
    title: '3. How Your Data Is Stored',
    body: `Your encrypted files are stored on IPFS via Pinata, a decentralized storage service. Your record index is stored in Supabase (a PostgreSQL-based cloud database). Your authentication is managed by Privy. Each of these providers has their own privacy policy and security practices — we encourage you to review them:\n\n• Pinata: pinata.cloud/privacy\n• Supabase: supabase.com/privacy\n• Privy: privy.io/privacy\n• Google: policies.google.com/privacy`,
  },
  {
    title: '4. How We Use Your Data',
    body: `We use the data we collect only to:\n• Authenticate you and maintain your session\n• Display your record list across devices\n• Understand overall usage patterns to improve the product\n\nWe do not sell your data. We do not share your data with advertisers, insurers, employers, or any third party for commercial purposes.`,
  },
  {
    title: '5. Your Rights',
    body: `You can:\n• Delete any record at any time from the patient portal\n• Request deletion of your account and all associated data by emailing privacy@vewr.io\n• Export your record index by contacting us\n\nWhen you delete your account, we will remove your email from Privy, delete all rows in our database associated with your account, and unpin all your files from our IPFS node within 30 days.`,
  },
  {
    title: '6. Cookies',
    body: `We use cookies for two purposes:\n\n• Authentication: Privy sets a session cookie to keep you logged in. This is strictly necessary for the service to function.\n• Analytics: Google Analytics 4 sets cookies (_ga, _ga_*) to distinguish users and sessions. These are analytics cookies.\n\nWe do not use advertising cookies, tracking pixels, or third-party retargeting.`,
  },
  {
    title: '7. Children\'s Privacy',
    body: `Vewr is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at privacy@vewr.io.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update this policy as the product evolves. We'll note the effective date at the top. Continued use of Vewr after changes means you accept the updated policy.`,
  },
  {
    title: '9. Contact',
    body: `Privacy questions or data requests: privacy@vewr.io\n\nWe aim to respond within 5 business days.`,
  },
];

function LegalPage({ title, subtitle, children }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', fontFamily: FONT }}>
      {/* Nav */}
      <nav style={{
        background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 40px', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: FONT,
            transition: 'color 0.2s', padding: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          ← Back to home
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '7px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>Vewr Health</span>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 40px 48px',
        maxWidth: '760px', margin: '0 auto',
      }}>
        <div style={{
          display: 'inline-block',
          background: `${T}18`, border: `1px solid ${T}40`,
          color: T, fontSize: '12px', fontWeight: '600',
          padding: '4px 12px', borderRadius: '100px',
          marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase',
        }}>
          Legal
        </div>
        <h1 style={{
          color: 'white', fontSize: '36px', fontWeight: '700',
          margin: '0 0 16px 0', letterSpacing: '-0.8px', lineHeight: 1.2,
        }}>
          {title}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>
          {subtitle} · Effective {EFFECTIVE_DATE}
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 40px 80px' }}>
        {children}
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '24px',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>
          © {new Date().getFullYear()} Vewr Health
        </span>
        <a href="/terms" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = T}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
          Terms
        </a>
        <a href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = T}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
          Privacy
        </a>
      </footer>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" subtitle="We built Vewr so we'd have nothing to sell. Here's what that looks like in practice.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{
              color: 'white', fontSize: '17px', fontWeight: '600',
              margin: '0 0 14px 0', letterSpacing: '-0.2px',
            }}>
              {s.title}
            </h2>
            {s.subsections ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {s.subsections.map((sub, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px', padding: '20px 22px',
                  }}>
                    <div style={{
                      color: T, fontSize: '13px', fontWeight: '600',
                      marginBottom: '10px', letterSpacing: '0.2px',
                    }}>
                      {sub.heading}
                    </div>
                    {sub.body.split('\n').map((para, k) => (
                      <p key={k} style={{
                        color: 'rgba(255,255,255,0.55)', fontSize: '15px',
                        lineHeight: '1.75', margin: '0 0 8px 0',
                      }}>
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              s.body.split('\n').map((para, j) => (
                para.startsWith('•') ? (
                  <div key={j} style={{
                    display: 'flex', gap: '10px', marginBottom: '6px',
                    color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: '1.7',
                  }}>
                    <span style={{ color: T, flexShrink: 0 }}>•</span>
                    <span>{para.slice(1).trim()}</span>
                  </div>
                ) : (
                  <p key={j} style={{
                    color: 'rgba(255,255,255,0.55)', fontSize: '15px',
                    lineHeight: '1.75', margin: '0 0 10px 0',
                  }}>
                    {para}
                  </p>
                )
              ))
            )}
          </div>
        ))}
      </div>
    </LegalPage>
  );
}

export default PrivacyPolicy;
