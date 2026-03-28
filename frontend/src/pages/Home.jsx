// src/pages/Home.jsx
import React from 'react';
import { 
  Droplet, 
  Users, 
  FileText, 
  AlertTriangle, 
  Plus, 
  Activity 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Static Dummy Data ---
const dashboardStats = [
  { title: 'Total Donors', value: '1,245', icon: <Users size={24} color="#3b82f6" />, bgColor: '#eff6ff' },
  { title: 'Available Blood Units', value: '181', icon: <Droplet size={24} color="#ef4444" />, bgColor: '#fef2f2' },
  { title: 'Pending Requests', value: '24', icon: <FileText size={24} color="#eab308" />, bgColor: '#fefce8' },
  { title: 'Expiring Soon', value: '12', icon: <AlertTriangle size={24} color="#f97316" />, bgColor: '#fff7ed' },
];

const dashboardAlerts = [
  { id: 1, type: 'critical', message: 'O- blood stock is critically low (5 units left).' },
  { id: 2, type: 'warning', message: 'A+ blood (10 units) expiring in 3 days.' },
];

const bloodData = [
  { name: 'A+', units: 45 }, { name: 'A-', units: 12 },
  { name: 'B+', units: 34 }, { name: 'B-', units: 8 },
  { name: 'O+', units: 56 }, { name: 'O-', units: 5 },
  { name: 'AB+', units: 18 }, { name: 'AB-', units: 3 },
];

const recentActivity = [
  { id: 1, action: 'Donor added', details: 'Ramesh Kumar registered as B+ donor.', time: '10 mins ago' },
  { id: 2, action: 'Blood issued', details: '2 units of O+ issued to City Hospital.', time: '1 hour ago' },
  { id: 3, action: 'Request approved', details: 'Emergency request for AB- approved.', time: '3 hours ago' },
];

const DashboardHome = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            
            {/* Header Section */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#1e293b' }}>
                    Welcome back, Admin!
                </h1>
                <p style={{ color: '#64748b', margin: 0 }}>
                    Here is an overview of the blood bank operations today.
                </p>
            </div>

            {/* 1. Stats Cards Section (Top) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                {dashboardStats.map((stat, index) => (
                    <div key={index} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: stat.bgColor }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p style={{ color: '#64748b', margin: '0 0 4px 0', fontSize: '14px', fontWeight: '500' }}>{stat.title}</p>
                            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Split Layout: Alerts & Quick Actions (Left) / Chart (Right) */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
                
                {/* Left Column */}
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    
                    {/* 2. Alerts Section */}
                    <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                            <AlertTriangle size={20} color="#ef4444" /> System Alerts
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {dashboardAlerts.map(alert => (
                                <div key={alert.id} style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: alert.type === 'critical' ? '#fef2f2' : '#fff7ed', borderLeft: `4px solid ${alert.type === 'critical' ? '#ef4444' : '#f97316'}`, fontSize: '14px', color: '#1e293b' }}>
                                    {alert.message}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Quick Actions Section */}
                    <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0', color: '#0f172a' }}>Quick Actions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button onClick={() => navigate('/donor')} style={{ padding: '12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
                                <Plus size={18} /> Add Donor
                            </button>
                            <button onClick={() => navigate('/inventory')} style={{ padding: '12px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
                                <Droplet size={18} /> Add Blood Entry
                            </button>
                            <button onClick={() => navigate('/requests')} style={{ padding: '12px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
                                <Activity size={18} /> Create Request
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right Column: 3. Charts Section */}
                <div style={{ flex: '2', minWidth: '400px', backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 24px 0', color: '#0f172a' }}>Blood Group Distribution</h2>
                    <div style={{ height: '350px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={bloodData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Bar dataKey="units" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* 4. Recent Activity Section */}
            <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0', color: '#0f172a' }}>Recent Activity</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {recentActivity.map(activity => (
                        <div key={activity.id} style={{ display: 'flex', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <p style={{ fontWeight: '600', margin: '0 0 4px 0', fontSize: '15px', color: '#1e293b' }}>{activity.action}</p>
                                <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>{activity.details}</p>
                            </div>
                            <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;
