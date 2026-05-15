import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivyProvider } from '@privy-io/react-auth';
import './index.css';
import App from './App';

const PRIVY_APP_ID = process.env.REACT_APP_PRIVY_APP_ID || '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {PRIVY_APP_ID ? (
      <PrivyProvider
        appId={PRIVY_APP_ID}
        config={{
          loginMethods: ['email'],
          appearance: {
            theme: 'dark',
            accentColor: '#00A19C',
            logo: '',
          },
          embeddedWallets: {
            createOnLogin: 'users-without-wallets',
          },
        }}
      >
        <App />
      </PrivyProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
