import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardHome from './pages/Home';
import Donor from './pages/Donor';
import Inventory from './pages/Inventory';
import Requests from './pages/Requests';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Signup from './pages/Signup'; 
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';


const DashboardLayout = () => {
    return (
        <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div className="app-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <Sidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                    
                    {/* Main Content Space */}
                    <main className="main-content" style={{ flex: 1, paddingBottom: '24px' }}>
                        <Outlet />
                    </main>
                    {/* Footer Placed Below Content */}
                    <Footer />
                </div>
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes */}
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
            <Route path="inventory" element={<Inventory />} />
            <Route path="requests" element={<Requests />} />
            <Route path="settings" element={<Settings />} />
        </Route>

        {/* ✅ Catch-all route (ALWAYS LAST) */}
        <Route path="*" element={<NotFound />} />

    </Routes>
</BrowserRouter>
    );
}

export default App;
