import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
        const res = await API.post('/auth/login', {
            email: credentials.email,
            password: credentials.password
        });

        // store real JWT token
        localStorage.setItem('token', res.data.token);

        navigate('/dashboard');

    } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Left Side: Dynamic Branding Image / Info */}
                <div className="login-sidebar">
                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-content">
                        <div className="brand-logo">
                            <span className="logo-emoji">🩸</span>
                            <h2>Smart Blood Bank</h2>
                        </div>
                        <div className="hero-text">
                            <h1>Every Drop<br />Counts.</h1>
                            <p>
                                Access the centralized command center. Manage donor flow, 
                                track blood inventory in real-time, and streamline emergency 
                                dispatch operations.
                            </p>
                        </div>
                        <div className="footer-text">
                            <p>Secure Staff Portal © 2026</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Clean Login Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h3>Welcome Back</h3>
                            <p>Enter your authorized credentials to sign in.</p>
                        </div>
                        
                        {error && (
                            <div className="error-alert">
                                <span className="error-icon">⚠️</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="login-form">
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    placeholder="e.g. admin@bloodbank.org" 
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    className="modern-input"
                                />
                            </div>

                            <div className="input-group">
                                <div className="label-row">
                                    <label htmlFor="password">Password</label>
                                    <a href="#" className="forgot-password">Forgot password?</a>
                                </div>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password" 
                                    placeholder="••••••••" 
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                    autoComplete="current-password"
                                    className="modern-input"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isLoading ? 'btn-loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Authenticating...' : 'Sign In'}
                            </button>
                            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748b' }}>
                                Don't have an account?{' '}
                                <span 
                                    onClick={() => navigate('/signup')} 
                                    style={{ color: '#ef4444', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
                                >
                                    Register Here
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
