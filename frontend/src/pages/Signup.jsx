// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Basic validation
        if (credentials.password !== credentials.confirmPassword) {
            setError('Passwords do not match.');
            setIsLoading(false);
            return;
        }

        // Simulate an API registration call
        setTimeout(() => {
            if (credentials.name && credentials.email && credentials.password) {
                // Redirecting back to Login upon successful registration
                navigate('/login');
            } else {
                setError('Please fill in all required fields.');
                setIsLoading(false);
            }
        }, 1200); 
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Left Side: Branding Image / Info */}
                <div className="login-sidebar">
                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-content">
                        <div className="brand-logo">
                            <span className="logo-emoji">🩸</span>
                            <h2>Smart Blood Bank</h2>
                        </div>
                        <div className="hero-text">
                            <h1>Join Our<br />Network.</h1>
                            <p>
                                Create an account to access the centralized command center. 
                                Manage donor flow, track inventory, and save lives.
                            </p>
                        </div>
                        <div className="footer-text">
                            <p>Secure Staff Portal © 2026</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Cleanup Signup Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h3>Create Account</h3>
                            <p>Register as a new administrator or staff member.</p>
                        </div>
                        
                        {error && (
                            <div className="error-alert">
                                <span className="error-icon">⚠️</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleSignup} className="login-form">
                            <div className="input-group">
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    placeholder="e.g. John Doe" 
                                    value={credentials.name}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    placeholder="e.g. staff@bloodbank.org" 
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password" 
                                    placeholder="••••••••" 
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword"
                                    name="confirmPassword" 
                                    placeholder="••••••••" 
                                    value={credentials.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="modern-input"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isLoading ? 'btn-loading' : ''}`}
                                disabled={isLoading}
                                style={{ marginTop: '10px' }}
                            >
                                {isLoading ? 'Creating Account...' : 'Sign Up'}
                            </button>

                            {/* Navigation back to login */}
                            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748b' }}>
                                Already have an account?{' '}
                                <span 
                                    onClick={() => navigate('/login')} 
                                    style={{ color: '#ef4444', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
                                >
                                    Sign In
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
