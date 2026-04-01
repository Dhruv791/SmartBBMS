import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // remove token
        localStorage.removeItem('token');

        // optional: clear any extra data in future
        localStorage.clear();

        // redirect to login
        navigate('/');

        // force refresh (ensures protected route triggers)
        window.location.reload();
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