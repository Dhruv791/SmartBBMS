import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;  // ✅ redirect to login route
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;