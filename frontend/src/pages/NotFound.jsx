// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
            
            <AlertTriangle size={80} color="#ef4444" style={{ marginBottom: '24px' }} />
            
            <h1 style={{ fontSize: '120px', fontWeight: 'bold', margin: '0', color: '#1e293b', lineHeight: '1' }}>
                404
            </h1>
            
            <h2 style={{ fontSize: '28px', fontWeight: '600', margin: '16px 0', color: '#475569' }}>
                Page Not Found
            </h2>
            
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '400px', margin: '0 0 32px 0', lineHeight: '1.5' }}>
                Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
            </p>
            
            <button 
                onClick={() => navigate('/dashboard')} 
                style={{ padding: '14px 28px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.2s', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)' }}
            >
                Return to Dashboard
            </button>
            
        </div>
    );
};

export default NotFound;
