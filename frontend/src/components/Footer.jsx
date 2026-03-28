// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f8fafc',
      padding: '24px 0',
      marginTop: 'auto',       // This pushes the footer to the bottom naturally
      borderTop: '1px solid #e2e8f0',
      textAlign: 'center',
      color: '#475569',
      fontFamily: 'sans-serif',
      fontSize: '14px'
    }}>
      <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#1e293b', fontSize: '16px' }}>
        Smart Blood Bank Management System
      </div>
      <div style={{ marginBottom: '4px' }}>
        © 2026 All Rights Reserved | Developed by Dhruv Tyagi
      </div>
      <div style={{ marginBottom: '4px' }}>
        Contact: support@bloodbank.com
      </div>
      <div style={{ fontSize: '12px', marginTop: '12px', color: '#94a3b8' }}>
        Version: 1.0
      </div>
    </footer>
  );
};

export default Footer;
