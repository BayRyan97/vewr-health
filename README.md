# Vewr Health 🏥

A patient-controlled health records platform where patients can upload medical records to IPFS with client-side encryption using Lit Protocol, then grant or revoke access to providers using wallet-based access control.

## 🔐 Key Features

- **Client-Side Encryption**: Files are encrypted in the browser using Lit Protocol before upload
- **IPFS Storage**: Encrypted files are stored on IPFS via Pinata
- **Wallet-Based Access Control**: Only authorized wallet addresses can decrypt files
- **Patient Sovereignty**: Patients maintain full control over who can access their records

## 🏗️ Architecture

1. **Patient uploads a file** → File is encrypted using Lit Protocol with access control conditions
2. **Encrypted blob** → Uploaded to IPFS via Pinata (unreadable without decryption key)
3. **Metadata stored** → Encryption metadata stored for later decryption
4. **Access management** → Patients can update Lit Protocol conditions to grant/revoke provider access

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Lit Protocol** - Decentralized access control and encryption
- **Pinata** - IPFS pinning service
- **Privy** - Wallet authentication (coming soon)
- **React Router** - Client-side routing

## 📦 Installation

```bash
npm install
```

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```bash
# Pinata JWT for IPFS uploads
REACT_APP_PINATA_JWT=your_jwt_here

# Privy App ID for authentication (optional for now)
REACT_APP_PRIVY_APP_ID=your_app_id_here
```

### Getting Your Pinata JWT:
1. Sign up at https://app.pinata.cloud/
2. Navigate to API Keys
3. Create a new key with file upload permissions
4. Copy the JWT token

## 🚀 Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
  components/
    UploadRecord.jsx      # File upload with encryption
    GrantAccess.jsx       # Grant provider access (coming soon)
    ViewRecords.jsx       # View encrypted records (coming soon)
    Dashboard.jsx         # Main dashboard (coming soon)
  pages/
    PatientHome.jsx       # Patient portal
    ProviderHome.jsx      # Provider portal (coming soon)
  lib/
    litEncryption.js      # Lit Protocol encryption utilities
  App.js                  # Main app with routing
  index.js                # Entry point
```

## 🧪 Testing the Upload Flow

1. **Select a PDF or image file**
2. **Click "Encrypt & Upload to IPFS"**
   - File is encrypted with Lit Protocol
   - Encrypted blob is uploaded to IPFS
3. **View the results:**
   - IPFS CID for the encrypted file
   - Original file metadata
   - Access control conditions
   - Link to view encrypted file on IPFS gateway

**Note**: The file on IPFS is encrypted and unreadable without the proper decryption key!

## 📝 TODO / Roadmap

- [x] Basic routing setup
- [x] File upload to IPFS
- [x] Lit Protocol encryption integration
- [ ] Integrate Privy wallet authentication
- [ ] Replace placeholder wallet with actual user wallet
- [ ] Create GrantAccess component for managing provider permissions
- [ ] Create ViewRecords component for viewing encrypted records
- [ ] Implement decryption flow for authorized users
- [ ] Add database for storing encryption metadata
- [ ] Build provider portal for viewing shared records

## 🔒 Security Model

**Current Implementation:**
- Files encrypted before leaving the browser
- Encryption keys controlled by Lit Protocol
- Access restricted to specific wallet addresses
- IPFS contains only encrypted blobs

**Coming Soon:**
- Multi-wallet access control (grant multiple providers access)
- Access revocation by rotating encryption keys
- Audit logs for access tracking
- Time-limited access grants

## 📚 Learn More

- [Lit Protocol Docs](https://developer.litprotocol.com/)
- [Pinata Docs](https://docs.pinata.cloud/)
- [IPFS Docs](https://docs.ipfs.tech/)
- [Privy Docs](https://docs.privy.io/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
