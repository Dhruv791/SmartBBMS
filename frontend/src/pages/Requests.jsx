import React, { useState } from 'react';
import { Search, Plus, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

const Requests = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const requests = [
        { id: 'REQ-101', hospital: 'City General Hospital', bloodGroup: 'B+', units: 4, urgency: 'Critical', status: 'Pending', date: 'Oct 12, 10:30 AM' },
        { id: 'REQ-102', hospital: 'St. Mary Clinics', bloodGroup: 'O-', units: 2, urgency: 'High', status: 'Approved', date: 'Oct 12, 09:15 AM' },
        { id: 'REQ-103', hospital: 'Global Health Center', bloodGroup: 'A+', units: 5, urgency: 'Normal', status: 'Pending', date: 'Oct 11, 04:45 PM' },
        { id: 'REQ-104', hospital: 'Apollo Lifeline', bloodGroup: 'AB-', units: 1, urgency: 'Critical', status: 'Rejected', date: 'Oct 11, 02:20 PM' },
        { id: 'REQ-105', hospital: 'City General Hospital', bloodGroup: 'O+', units: 3, urgency: 'High', status: 'Approved', date: 'Oct 10, 11:00 AM' },
    ];

    const filteredRequests = requests.filter(req => 
        req.hospital.toLowerCase().includes(searchTerm.toLowerCase()) || 
        req.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getUrgencyBadge = (urgency) => {
        switch (urgency) {
            case 'Critical': return 'badge badge-danger';
            case 'High': return 'badge badge-warning';
            case 'Normal': return 'badge badge-neutral';
            default: return 'badge badge-neutral';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Approved': return <CheckCircle className="w-4 h-4" style={{color: '#059669'}} />;
            case 'Rejected': return <XCircle className="w-4 h-4" style={{color: '#dc2626'}} />;
            case 'Pending': return <Clock className="w-4 h-4" style={{color: '#d97706'}} />;
            default: return null;
        }
    };

    return (
        <div className="page-container">
            {/* Header Section */}
            <header className="page-header max-w-7xl">
                <div className="page-title-box">
                    <h1 className="page-title">
                        Blood Requests
                    </h1>
                    <p className="page-description">
                        Manage incoming blood requests from hospitals and patients.
                    </p>
                </div>
                <button className="btn-primary">
                    <Plus className="w-5 h-5 btn-icon" />
                    New Request
                </button>
            </header>

            {/* Quick Stats Grid */}
            <div className="max-w-7xl stat-grid-3">
                <div className="stat-card">
                    <div className="stat-icon-wrapper bg-red-light">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="stat-label">Critical Active</p>
                        <h3 className="stat-value">2 Requests</h3>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper bg-yellow-light">
                        <Clock className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="stat-label">Pending Review</p>
                        <h3 className="stat-value">12 Pending</h3>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon-wrapper bg-green-light">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="stat-label">Approved Today</p>
                        <h3 className="stat-value">8 Dispatched</h3>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl card">
                {/* Toolbar */}
                <div className="toolbar">
                    <div className="search-wrapper">
                        <Search className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search by hospital, ID, or blood group..." 
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Hospital/Patient</th>
                                <th>Blood Type</th>
                                <th>Urgency</th>
                                <th className="md-table-cell md-hidden">Date</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((req) => (
                                <tr key={req.id}>
                                    <td className="font-semibold text-gray-900">
                                        {req.id}
                                    </td>
                                    <td className="font-medium text-gray-700">
                                        {req.hospital}
                                    </td>
                                    <td>
                                        <div className="badge-blood" style={{display: 'inline-flex', alignItems: 'center', gap: '4px'}}>
                                            {req.bloodGroup} 
                                            <span style={{fontSize: '0.75rem', fontWeight: 400, color: '#6b7280'}}>x{req.units}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={getUrgencyBadge(req.urgency)}>
                                            {req.urgency}
                                        </span>
                                    </td>
                                    <td className="md-table-cell md-hidden text-gray-500">
                                        {req.date}
                                    </td>
                                    <td>
                                        <div className="status-text text-gray-700">
                                            {getStatusIcon(req.status)}
                                            {req.status}
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        {req.status === 'Pending' ? (
                                            <div className="flex justify-end gap-2">
                                                <button className="btn-action success">
                                                    Approve
                                                </button>
                                                <button className="btn-action danger">
                                                    Reject
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 font-medium text-xs">Processed</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {filteredRequests.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="p-8 text-center text-gray-500">
                                        No blood requests found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Static UI) */}
                <div className="pagination-footer">
                    <div>Showing 1 to {filteredRequests.length} of {filteredRequests.length} results</div>
                    <div className="pagination-controls">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requests;
