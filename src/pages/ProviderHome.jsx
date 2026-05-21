import React, { useState, useEffect, useRef } from 'react';
import { usePrivy, useWallets, useCreateWallet } from '@privy-io/react-auth';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { getOrDeriveKEK, generateECDHKeyPair, wrapECDHPrivateKey } from '../lib/webCryptoEncryption';
import PortalGate from '../components/PortalGate';

const T = '#00A19C';
const T_DARK = '#007F7B';
const FONT = '"Gotham SSm A", "Gotham SSm B", system-ui, -apple-system, sans-serif';

// ─── NPPES helpers ────────────────────────────────────────────────────────────
async function lookupNPI(npi) {
  // Call our Pages Function proxy — the NPPES API blocks direct browser requests (CORS)
  const res = await fetch(`/api/npi?number=${encodeURIComponent(npi)}`);
  if (!res.ok) throw new Error('NPPES proxy error');
  const data = await res.json();
  if (!data.result_count || data.result_count === 0) return null;
  return data.results[0];
}

function parseNPIResult(result) {
  const basic = result.basic || {};
  const isOrg = result.enumeration_type === 'NPI-2';
  const primaryTaxonomy =
    (result.taxonomies || []).find(t => t.primary) || result.taxonomies?.[0] || {};
  return {
    npi: result.number,
    firstName: isOrg ? null : (basic.first_name || null),
    lastName: isOrg ? null : (basic.last_name || null),
    organizationName: isOrg ? (basic.organization_name || null) : null,
    credential: basic.credential || null,
    taxonomy: primaryTaxonomy.desc || null,
    status: basic.status || null,
    isOrg,
  };
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function ShieldIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CheckCircleIcon({ size = 20, color = T }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function StethoscopeIcon({ size = 20, color = T }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  return (
    <div style={{
      minHeight: '100vh', background: '#0d1117',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT, padding: '24px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: `radial-gradient(ellipse at center, ${T}18 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

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
        <div style={{
          marginTop: '8px', display: 'inline-block',
          background: `${T}20`, border: `1px solid ${T}40`,
          borderRadius: '20px', padding: '4px 14px',
          fontSize: '12px', color: T, fontWeight: '600', letterSpacing: '0.5px',
        }}>
          PROVIDER PORTAL
        </div>
      </div>

      <div style={{
        background: '#161b22', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px', padding: '48px 44px',
        width: '100%', maxWidth: '420px', textAlign: 'center',
        position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60px', height: '3px', background: T, borderRadius: '0 0 4px 4px',
        }} />

        <div style={{
          width: '56px', height: '56px', borderRadius: '14px',
          background: `${T}15`, border: `1px solid ${T}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <StethoscopeIcon size={26} />
        </div>

        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
          Provider Sign In
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: '0 0 32px 0', lineHeight: '1.5' }}>
          Sign in to access records shared with you by patients.
        </p>

        <button onClick={onLogin} style={{
          width: '100%', padding: '14px 24px',
          background: T, color: 'white',
          border: 'none', borderRadius: '12px',
          fontSize: '15px', fontWeight: '600', cursor: 'pointer',
          letterSpacing: '-0.2px',
          boxShadow: `0 4px 20px ${T}40`,
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.background = T_DARK; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.background = T; e.target.style.transform = 'translateY(0)'; }}
        >
          Sign in with email
        </button>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', margin: '24px 0 0 0', lineHeight: '1.6' }}>
          NPI verification required after sign-in.<br />
          Patient data is never accessible without explicit sharing.
        </p>
      </div>
    </div>
  );
}

// ─── NPI Verification Form ────────────────────────────────────────────────────
function NPIVerificationFlow({ userId, embeddedWallet, onVerified }) {
  // Check if the landing page modal already verified an NPI and passed it via sessionStorage
  const pendingNpi = (() => {
    try {
      const raw = sessionStorage.getItem('vewr_pending_npi');
      if (raw) { sessionStorage.removeItem('vewr_pending_npi'); return JSON.parse(raw); }
    } catch {}
    return null;
  })();

  const [step, setStep] = useState(pendingNpi ? 'confirm' : 'enter');
  const [npiInput, setNpiInput] = useState('');
  const [npiData, setNpiData] = useState(pendingNpi || null);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleLookup(e) {
    e.preventDefault();
    const cleaned = npiInput.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      setErrorMsg('NPI must be exactly 10 digits.');
      return;
    }
    setErrorMsg('');
    setStep('looking');
    try {
      const result = await lookupNPI(cleaned);
      if (!result) {
        setErrorMsg('No provider found for that NPI. Please check the number and try again.');
        setStep('enter');
        return;
      }
      const parsed = parseNPIResult(result);
      if (parsed.status !== 'A') {
        setErrorMsg('This NPI is not active. Only active NPIs can be verified.');
        setStep('enter');
        return;
      }
      setNpiData(parsed);
      setStep('confirm');
    } catch (err) {
      setErrorMsg('Could not reach the NPPES registry. Please try again.');
      setStep('enter');
    }
  }

  async function handleConfirm() {
    setStep('saving');
    try {
      // Save NPI credentials now — ECDH keys are generated separately once
      // the embedded wallet is ready (same pattern as the patient portal).
      const { error } = await supabase.from('providers').upsert({
        user_id: userId,
        npi: npiData.npi,
        first_name: npiData.firstName,
        last_name: npiData.lastName,
        organization: npiData.organizationName,
        credential: npiData.credential,
        taxonomy: npiData.taxonomy,
        verified_at: new Date().toISOString(),
      }, { onConflict: 'user_id' });

      if (error) throw error;
      onVerified(npiData);
    } catch (err) {
      setErrorMsg('Something went wrong saving your verification. Please try again.');
      setStep('confirm');
    }
  }

  const displayName = npiData
    ? npiData.isOrg
      ? npiData.organizationName
      : `${npiData.firstName || ''} ${npiData.lastName || ''}`.trim()
    : '';

  return (
    <div style={{
      minHeight: '100vh', background: '#0d1117',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT, padding: '24px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: `radial-gradient(ellipse at center, ${T}15 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div style={{ marginBottom: '40px', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '9px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldIcon size={19} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: '700', color: 'white', letterSpacing: '-0.5px' }}>
            Vewr Health
          </span>
        </div>
      </div>

      <div style={{
        background: '#161b22', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px', padding: '44px',
        width: '100%', maxWidth: '460px',
        position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '60px', height: '3px', background: T, borderRadius: '0 0 4px 4px',
        }} />

        {/* Step: enter NPI */}
        {(step === 'enter' || step === 'looking') && (
          <>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
              Verify your NPI
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: '0 0 28px 0', lineHeight: '1.5' }}>
              Enter your 10-digit National Provider Identifier to confirm your credentials.
            </p>

            <form onSubmit={handleLookup}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.5px' }}>
                NPI NUMBER
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="1234567890"
                value={npiInput}
                onChange={e => setNpiInput(e.target.value.replace(/\D/g, '').slice(0, 10))}
                maxLength={10}
                style={{
                  width: '100%', padding: '13px 16px',
                  background: '#0d1117', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px', color: 'white', fontSize: '16px',
                  fontFamily: FONT, letterSpacing: '2px', outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = T; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                disabled={step === 'looking'}
              />

              {errorMsg && (
                <p style={{ color: '#f87171', fontSize: '13px', margin: '10px 0 0 0', lineHeight: '1.4' }}>
                  {errorMsg}
                </p>
              )}

              <button type="submit" disabled={step === 'looking' || npiInput.length < 10} style={{
                width: '100%', marginTop: '20px', padding: '14px',
                background: step === 'looking' || npiInput.length < 10 ? 'rgba(0,161,156,0.4)' : T,
                color: 'white', border: 'none', borderRadius: '12px',
                fontSize: '15px', fontWeight: '600', cursor: step === 'looking' ? 'not-allowed' : 'pointer',
                fontFamily: FONT, transition: 'all 0.2s',
              }}>
                {step === 'looking' ? 'Looking up NPI…' : 'Look up NPI'}
              </button>
            </form>

            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', margin: '20px 0 0 0', textAlign: 'center', lineHeight: '1.5' }}>
              Verified against the CMS NPPES registry.
            </p>
          </>
        )}

        {/* Step: confirm identity */}
        {(step === 'confirm' || step === 'saving') && npiData && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: `${T}20`, border: `2px solid ${T}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <CheckCircleIcon size={24} />
              </div>
              <h2 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
                Is this you?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: 0 }}>
                Found in the NPPES registry
              </p>
            </div>

            {/* Provider info card */}
            <div style={{
              background: '#0d1117', border: `1px solid ${T}30`,
              borderRadius: '14px', padding: '20px 22px', marginBottom: '24px',
            }}>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.8px', marginBottom: '4px' }}>
                  NAME
                </div>
                <div style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>
                  {displayName}{npiData.credential ? `, ${npiData.credential}` : ''}
                </div>
              </div>
              {npiData.taxonomy && (
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.8px', marginBottom: '4px' }}>
                    SPECIALTY
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    {npiData.taxonomy}
                  </div>
                </div>
              )}
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.8px', marginBottom: '4px' }}>
                  NPI
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: 'monospace' }}>
                  {npiData.npi}
                </div>
              </div>
            </div>

            {errorMsg && (
              <p style={{ color: '#f87171', fontSize: '13px', margin: '0 0 16px 0', lineHeight: '1.4' }}>
                {errorMsg}
              </p>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => { setStep('enter'); setNpiData(null); setErrorMsg(''); }}
                disabled={step === 'saving'}
                style={{
                  flex: 1, padding: '13px',
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px', color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: FONT,
                }}
              >
                Not me
              </button>
              <button
                onClick={handleConfirm}
                disabled={step === 'saving'}
                style={{
                  flex: 2, padding: '13px',
                  background: step === 'saving' ? `${T}60` : T,
                  border: 'none', borderRadius: '12px', color: 'white',
                  fontSize: '14px', fontWeight: '600',
                  cursor: step === 'saving' ? 'not-allowed' : 'pointer',
                  fontFamily: FONT, boxShadow: `0 4px 16px ${T}40`,
                }}
              >
                {step === 'saving' ? 'Verifying…' : 'Yes, that\'s me'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Provider Dashboard ───────────────────────────────────────────────────────
function ProviderDashboard({ providerData, providerId, userEmail, onSignOut }) {
  const displayName = providerData.isOrg
    ? providerData.organization
    : `${providerData.first_name || ''} ${providerData.last_name || ''}`.trim();

  const [connections, setConnections] = useState([]);
  const [loadingConnections, setLoadingConnections] = useState(true);
  const [patientEmail, setPatientEmail] = useState('');
  const [sendingRequest, setSendingRequest] = useState(false);
  const [requestMsg, setRequestMsg] = useState(null); // { type: 'success'|'error', text }

  const loadConnections = async () => {
    setLoadingConnections(true);
    const { data } = await supabase
      .from('connections')
      .select('*')
      .eq('provider_id', providerId)
      .order('requested_at', { ascending: false });
    setConnections(data || []);
    setLoadingConnections(false);
  };

  useEffect(() => { loadConnections(); }, [providerId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSendRequest = async (e) => {
    e.preventDefault();
    const email = patientEmail.trim().toLowerCase();
    if (!email) return;
    setSendingRequest(true);
    setRequestMsg(null);

    // Check if already connected or pending
    const existing = connections.find(c => c.patient_email === email);
    if (existing) {
      setRequestMsg({
        type: 'error',
        text: existing.status === 'accepted'
          ? 'You are already connected with this patient.'
          : 'A pending request already exists for this email.',
      });
      setSendingRequest(false);
      return;
    }

    const { error } = await supabase.from('connections').insert({
      provider_id: providerId,
      patient_email: email,
      status: 'pending',
    });

    if (error) {
      setRequestMsg({ type: 'error', text: 'Could not send request. Please try again.' });
    } else {
      setRequestMsg({ type: 'success', text: `Request sent to ${email}. They'll see it when they log in.` });
      setPatientEmail('');
      await loadConnections();
    }
    setSendingRequest(false);
  };

  const accepted = connections.filter(c => c.status === 'accepted');
  const pending = connections.filter(c => c.status === 'pending');

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafb', fontFamily: FONT }}>
      {/* Header */}
      <div style={{
        background: 'white', borderBottom: '1px solid #e5e7eb',
        padding: '0 32px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: T, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldIcon size={16} />
          </div>
          <span style={{ fontWeight: '700', fontSize: '16px', color: '#111', letterSpacing: '-0.3px' }}>
            Vewr Health
          </span>
          <span style={{
            background: `${T}15`, color: T, fontSize: '11px',
            fontWeight: '700', padding: '3px 8px', borderRadius: '20px',
            letterSpacing: '0.5px',
          }}>
            PROVIDER
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircleIcon size={15} />
            <span style={{ fontSize: '13px', color: T, fontWeight: '600' }}>NPI Verified</span>
          </div>
          <div style={{ width: '1px', height: '20px', background: '#e5e7eb' }} />
          <span style={{ fontSize: '13px', color: '#6b7280' }}>{userEmail}</span>
          <button onClick={onSignOut} style={{
            padding: '7px 14px', background: 'transparent',
            border: '1px solid #e5e7eb', borderRadius: '8px',
            color: '#6b7280', fontSize: '13px', cursor: 'pointer', fontFamily: FONT,
          }}>
            Sign out
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Welcome */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            {displayName ? `${displayName}${providerData.credential ? `, ${providerData.credential}` : ''}` : 'Provider Dashboard'}
          </h1>
          <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>
            {providerData.taxonomy || 'Healthcare Provider'} · NPI {providerData.npi}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { label: 'Connected Patients', value: accepted.length },
            { label: 'Pending Requests', value: pending.length },
            { label: 'Records Shared', value: '—', note: 'Coming in next update' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'white', border: '1px solid #e5e7eb',
              borderRadius: '16px', padding: '24px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#374151', fontWeight: '600', marginBottom: stat.note ? '2px' : 0 }}>
                {stat.label}
              </div>
              {stat.note && <div style={{ fontSize: '11px', color: '#9ca3af' }}>{stat.note}</div>}
            </div>
          ))}
        </div>

        {/* Send connection request */}
        <div style={{
          background: 'white', border: '1px solid #e5e7eb',
          borderRadius: '20px', padding: '28px 32px', marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#111', margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
            Connect with a patient
          </h2>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 20px 0', lineHeight: '1.5' }}>
            Enter the patient's email address. They'll see your request when they next log into Vewr and can choose to accept or decline.
          </p>
          <form onSubmit={handleSendRequest} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <input
              type="email"
              placeholder="patient@email.com"
              value={patientEmail}
              onChange={e => { setPatientEmail(e.target.value); setRequestMsg(null); }}
              style={{
                flex: 1, padding: '11px 16px',
                border: '1px solid #e5e7eb', borderRadius: '10px',
                fontSize: '14px', fontFamily: FONT, color: '#111', outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = T; }}
              onBlur={e => { e.target.style.borderColor = '#e5e7eb'; }}
              disabled={sendingRequest}
            />
            <button type="submit" disabled={sendingRequest || !patientEmail.trim()} style={{
              padding: '11px 22px', background: T, color: 'white',
              border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600',
              cursor: sendingRequest || !patientEmail.trim() ? 'not-allowed' : 'pointer',
              fontFamily: FONT, whiteSpace: 'nowrap',
              opacity: !patientEmail.trim() ? 0.5 : 1,
              boxShadow: `0 2px 8px ${T}30`,
            }}>
              {sendingRequest ? 'Sending…' : 'Send request'}
            </button>
          </form>
          {requestMsg && (
            <p style={{
              marginTop: '12px', fontSize: '13px', lineHeight: '1.4',
              color: requestMsg.type === 'success' ? '#059669' : '#dc2626',
            }}>
              {requestMsg.text}
            </p>
          )}
        </div>

        {/* Connection list */}
        <div style={{
          background: 'white', border: '1px solid #e5e7eb',
          borderRadius: '20px', padding: '28px 32px',
        }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#111', margin: '0 0 20px 0', letterSpacing: '-0.3px' }}>
            Patients
          </h2>

          {loadingConnections ? (
            <div style={{ color: '#9ca3af', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
              Loading…
            </div>
          ) : connections.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🩺</div>
              <div style={{ color: '#374151', fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                No patients yet
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px' }}>
                Send a connection request above to get started.
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {connections.map(c => (
                <div key={c.id} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 16px', borderRadius: '12px',
                  background: '#f9fafb', border: '1px solid #f3f4f6',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: c.status === 'accepted' ? `${T}15` : '#f3f4f6',
                    border: `1px solid ${c.status === 'accepted' ? T + '30' : '#e5e7eb'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', flexShrink: 0,
                  }}>
                    {c.status === 'accepted' ? '✓' : '⏳'}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '600', fontSize: '14px', color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {c.patient_email}
                    </div>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                      Requested {new Date(c.requested_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      {c.responded_at && ` · Responded ${new Date(c.responded_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', padding: '3px 10px',
                    borderRadius: '100px', flexShrink: 0,
                    background: c.status === 'accepted' ? '#ecfdf5' : c.status === 'declined' ? '#fef2f2' : '#fffbeb',
                    color: c.status === 'accepted' ? '#059669' : c.status === 'declined' ? '#dc2626' : '#d97706',
                    border: `1px solid ${c.status === 'accepted' ? '#6ee7b7' : c.status === 'declined' ? '#fca5a5' : '#fde68a'}`,
                  }}>
                    {c.status === 'accepted' ? 'Connected' : c.status === 'declined' ? 'Declined' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function ProviderPortalInner() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { createWallet } = useCreateWallet();

  const [loadingProvider, setLoadingProvider] = useState(true);
  const [providerData, setProviderData] = useState(null); // null = not verified yet

  const walletCreationAttempted = useRef(false);
  const userId = user?.id;
  const userEmail = user?.email?.address || '';

  // Auto-create embedded wallet if missing (same pattern as PatientHome)
  useEffect(() => {
    if (!authenticated || !ready || wallets.length > 0 || walletCreationAttempted.current) return;
    walletCreationAttempted.current = true;
    const timer = setTimeout(() => {
      createWallet().catch(() => {});
    }, 2000);
    return () => clearTimeout(timer);
  }, [authenticated, ready, wallets, createWallet]);

  // Generate ECDH key pair once the embedded wallet is ready (fire-and-forget)
  const ecdhSetupRan = useRef(false);
  useEffect(() => {
    if (ecdhSetupRan.current || !isSupabaseConfigured || wallets.length === 0) return;
    const embWallet = wallets.find(w => w.walletClientType === 'privy');
    if (!embWallet || !userId) return;
    (async () => {
      try {
        const { data: row } = await supabase
          .from('providers').select('ecdh_public_key').eq('user_id', userId).maybeSingle();
        if (row?.ecdh_public_key) { ecdhSetupRan.current = true; return; }
        const kek = await getOrDeriveKEK(embWallet, userId);
        const { publicKeyB64, privateKey } = await generateECDHKeyPair();
        const wrappedPrivateKeyB64 = await wrapECDHPrivateKey(privateKey, kek);
        await supabase.from('providers').upsert(
          { user_id: userId, ecdh_public_key: publicKeyB64, ecdh_private_key_wrapped: wrappedPrivateKeyB64 },
          { onConflict: 'user_id' }
        );
        ecdhSetupRan.current = true;
      } catch {}
    })();
  }, [wallets, userId]);

  // Check if provider is already verified in Supabase
  useEffect(() => {
    if (!authenticated || !userId || !isSupabaseConfigured) {
      setLoadingProvider(false);
      return;
    }
    (async () => {
      const { data } = await supabase
        .from('providers')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      setProviderData(data || null);
      setLoadingProvider(false);
    })();
  }, [authenticated, userId]);

  const embeddedWallet = wallets.find(w => w.walletClientType === 'privy');

  if (!ready) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0d1117',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT,
      }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>Loading…</div>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onLogin={login} />;
  }

  if (loadingProvider) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0d1117',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT,
      }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>Checking credentials…</div>
      </div>
    );
  }

  if (!providerData) {
    return (
      <NPIVerificationFlow
        userId={userId}
        embeddedWallet={embeddedWallet}
        onVerified={(npiData) => {
          // Refresh from Supabase to get full row
          supabase.from('providers').select('*').eq('user_id', userId).single()
            .then(({ data }) => setProviderData(data || npiData));
        }}
      />
    );
  }

  return (
    <ProviderDashboard
      providerData={providerData}
      providerId={userId}
      userEmail={userEmail}
      onSignOut={logout}
    />
  );
}

function ProviderHome() {
  return <PortalGate><ProviderPortalInner /></PortalGate>;
}

export default ProviderHome;
