import React from 'react';
import UploadRecord from '../components/UploadRecord';

function PatientHome() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #e9ecef',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/V_white.png" 
              alt="Vewr Health" 
              style={{ 
                width: '36px',
                height: '36px',
                filter: 'invert(1)'
              }}
            />
            <span style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#212529',
              letterSpacing: '-0.5px'
            }}>
              Vewr Health
            </span>
          </div>
          <div style={{
            background: '#e3f2fd',
            color: '#0085ff',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            Patient Portal
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '48px 32px'
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '32px',
            fontWeight: '700',
            color: '#212529',
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px'
          }}>
            Medical Records
          </h1>
          <p style={{ 
            fontSize: '16px',
            color: '#6c757d',
            margin: 0,
            lineHeight: '1.5'
          }}>
            Securely upload and manage your medical records on IPFS
          </p>
        </div>

        {/* Upload Component */}
        <UploadRecord />
      </div>
    </div>
  );
}

export default PatientHome;
