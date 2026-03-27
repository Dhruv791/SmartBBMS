import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navItems = [
        { path: '/dashboard', label: '📊 Dashboard' },
        { path: '/donor', label: '👥 Donors' },
        { path: '/inventory', label: '🩸 Blood Inventory' },
        { path: '/requests', label: '🚑 Requests' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <p className="menu-label">MAIN MENU</p>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => 
                            `sidebar-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
