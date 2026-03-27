import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check local storage for an auth token. 
    // In a fully integrated app, use 'useAuth' from AuthContext instead.
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render children directly if passed, else render nested routes
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
