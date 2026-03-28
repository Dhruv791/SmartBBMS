// src/pages/Settings.jsx
import React, { useState } from 'react';
import { User, Lock, Bell, Save } from 'lucide-react';

const Settings = () => {
    // Dummy state for the settings form
    const [profile, setProfile] = useState({ 
        name: 'Admin', 
        email: 'admin@bloodbank.org', 
        phone: '+91 9876543210' 
    });

    return (
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0', fontFamily: 'sans-serif' }}>
            
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#1e293b' }}>
                    Account Settings
                </h1>
                <p style={{ color: '#64748b', margin: 0 }}>
                    Manage your profile credentials and system preferences.
                </p>
            </div>

            {/* 1. Profile Information Section */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                    <User size={20} color="#3b82f6" /> Profile Information
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Full Name</label>
                        <input 
                            type="text" 
                            value={profile.name} 
                            onChange={(e) => setProfile({...profile, name: e.target.value})} 
                            style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} 
                        />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Phone Number</label>
                        <input 
                            type="text" 
                            value={profile.phone} 
                            onChange={(e) => setProfile({...profile, phone: e.target.value})} 
                            style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} 
                        />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Email Address</label>
                        <input 
                            type="email" 
                            value={profile.email} 
                            onChange={(e) => setProfile({...profile, email: e.target.value})} 
                            style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} 
                        />
                    </div>
                </div>
                
                <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
                    <Save size={18} /> Update Profile
                </button>
            </div>

            {/* 2. Security / Change Password Section */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                    <Lock size={20} color="#ef4444" /> Security
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Current Password</label>
                        <input type="password" placeholder="••••••••" style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>New Password</label>
                        <input type="password" placeholder="••••••••" style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} />
                    </div>
                </div>

                <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
                    Update Password
                </button>
            </div>

        </div>
    );
};

export default Settings;
