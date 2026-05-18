import React from 'react';
import { useNavigate } from 'react-router-dom';

const T = '#00A19C';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';
const EFFECTIVE_DATE = 'May 17, 2026';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using Vewr Health ("Vewr," "we," "us," or "our") at vewr.io, you agree to be bound by these Terms of Service. If you do not agree, do not use the service. We may update these terms from time to time — continued use of the service after changes constitutes acceptance.`,
  },
  {
    title: '2. What Vewr Is (and Isn\'t)',
    body: `Vewr is a personal health record storage tool. It allows you to encrypt files on your device and store the encrypted output on IPFS (InterPlanetary File System).\n\nVewr is not a medical device, a medical provider, or a covered entity under HIPAA. Vewr does not provide medical advice, diagnosis, or treatment. Nothing in this service should be interpreted as a substitute for professional medical judgment.\n\nVewr is not a Business Associate under HIPAA because we never have access to your unencrypted health information. Your files are encrypted client-side before they leave your device. We cannot read them.`,
  },
  {
    title: '3. Eligibility',
    body: `You must be at least 18 years old to use Vewr. By using the service, you represent that you meet this requirement. If you are using Vewr to store records on behalf of a minor, you represent that you are that minor's parent or legal guardian.`,
  },
  {
    title: '4. Your Account',
    body: `You sign in using your email address via a one-time code (provided by Privy). You are responsible for maintaining access to your email account. We are not responsible for loss of access resulting from loss of email account access.\n\nYour encryption key is managed by Privy's MPC (Multi-Party Computation) infrastructure. If you choose to export and self-custody your key, you accept full responsibility for its security.`,
  },
  {
    title: '5. Your Data',
    body: `You own your data. Vewr does not claim any rights over the files you upload.\n\nWhen you upload a file, it is encrypted in your browser and stored on IPFS via Pinata. Vewr stores a record index (filename, file size, IPFS content identifier) in our database so your records are accessible across devices. This index contains no file contents.\n\nYou may delete records at any time. Deletion removes the record from your account and unpins the encrypted file from our IPFS node. Due to the decentralized nature of IPFS, cached copies may persist on other nodes — however, all data on IPFS is encrypted ciphertext that cannot be read without your decryption key.`,
  },
  {
    title: '6. Acceptable Use',
    body: `You agree not to:\n• Upload files you do not own or have the right to store\n• Attempt to circumvent encryption or access other users' records\n• Use Vewr for any illegal purpose\n• Attempt to reverse-engineer, scrape, or overload our systems\n• Upload files containing malware or malicious code\n\nWe reserve the right to suspend accounts that violate these terms.`,
  },
  {
    title: '7. Service Availability',
    body: `We aim to keep Vewr available but do not guarantee uptime. The service is provided on an "as is" basis. We may modify, suspend, or discontinue any part of the service at any time.\n\nBecause your encrypted files are stored on IPFS (a decentralized network), they remain accessible via any IPFS gateway even if Vewr's infrastructure is unavailable — as long as you have your content identifier (CID) and decryption key.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    body: `TO THE FULLEST EXTENT PERMITTED BY LAW, VEWR IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, UNINTERRUPTED, OR THAT DEFECTS WILL BE CORRECTED.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `TO THE FULLEST EXTENT PERMITTED BY LAW, VEWR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n\nOUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED $100.`,
  },
  {
    title: '10. Governing Law',
    body: `These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. Any disputes will be resolved in the state or federal courts located in New York County, New York.`,
  },
  {
    title: '11. Contact',
    body: `Questions about these Terms? Email us at legal@vewr.io.`,
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

export function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" subtitle="Please read these terms carefully before using Vewr Health">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {sections.map((s, i) => (
          <div key={i}>
            <h2 style={{
              color: 'white', fontSize: '17px', fontWeight: '600',
              margin: '0 0 14px 0', letterSpacing: '-0.2px',
            }}>
              {s.title}
            </h2>
            {s.body.split('\n').map((para, j) => (
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
            ))}
          </div>
        ))}
      </div>
    </LegalPage>
  );
}

export default TermsOfService;
