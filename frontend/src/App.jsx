import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardHome from './pages/Home';
import Donor from './pages/Donor';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="app-layout flex flex-col min-h-screen">
            <Navbar />
            <div className="app-body flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="main-content flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Protected Routes Wrapper */}
                <Route 
                    path="/" 
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<DashboardHome />} />
                    <Route path="donor" element={<Donor />} />
                    {/* Additional routes referenced in your components */}
                    <Route path="predict" element={<DashboardHome />} />
                    <Route path="fertilizer" element={<DashboardHome />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
