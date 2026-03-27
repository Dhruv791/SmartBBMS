import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove authentication token
        localStorage.removeItem('token');
        // Redirect to login page
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/dashboard" className="navbar-logo">
                    <span className="logo-icon">🩸</span>
                    <h1>Smart Blood Bank</h1>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="user-profile">
                    <div className="avatar">A</div>
                    <span className="user-name">Admin</span>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
