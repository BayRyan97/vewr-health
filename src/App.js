import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientHome from './pages/PatientHome';
import ProviderHome from './pages/ProviderHome';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientHome />} />
        <Route path="/provider" element={<ProviderHome />} />
      </Routes>
    </Router>
  );
}

export default App;
