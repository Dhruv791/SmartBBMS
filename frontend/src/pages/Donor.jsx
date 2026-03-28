import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const Donor = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const donors = [
        { id: 1, name: 'Rahul Sharma', bloodGroup: 'O+', contact: '+91 9876543210', location: 'Mumbai', lastDonation: '2025-10-15', status: 'Eligible' },
        { id: 2, name: 'Priya Patel', bloodGroup: 'A-', contact: '+91 9876543211', location: 'Delhi', lastDonation: '2026-02-01', status: 'Ineligible' },
        { id: 3, name: 'Amit Singh', bloodGroup: 'B+', contact: '+91 9876543212', location: 'Bangalore', lastDonation: '2025-12-20', status: 'Eligible' },
        { id: 4, name: 'Sneha Gupta', bloodGroup: 'AB+', contact: '+91 9876543213', location: 'Pune', lastDonation: '2025-08-10', status: 'Eligible' },
        { id: 5, name: 'Vikram Reddy', bloodGroup: 'O-', contact: '+91 9876543214', location: 'Hyderabad', lastDonation: '2026-03-15', status: 'Ineligible' },
    ];

    const filteredDonors = donors.filter(donor => 
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="page-container">
            {/* Header Section */}
            <header className="max-w-7xl page-header">
                <div className="page-title-box">
                    <h1 className="page-title">
                        Blood Donors
                    </h1>
                    <p className="page-description">
                        Manage and track blood donor records.
                    </p>
                </div>
                <button className="btn-primary">
                    <Plus className="btn-icon w-5 h-5" />
                    Add New Donor
                </button>
            </header>

            {/* Main Content Area */}
            <div className="max-w-7xl card">
                {/* Toolbar */}
                <div className="toolbar">
                    <div className="search-wrapper">
                        <Search className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search by name or blood group..." 
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
                                <th>Donor Name</th>
                                <th>Blood Group</th>
                                <th className="md-table-cell md-hidden">Contact & Location</th>
                                <th className="lg-table-cell hidden">Last Donation</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDonors.map((donor) => (
                                <tr key={donor.id}>
                                    <td className="font-medium text-gray-900">
                                        {donor.name}
                                    </td>
                                    <td>
                                        <div className="badge-blood">
                                            {donor.bloodGroup}
                                        </div>
                                    </td>
                                    <td className="md-table-cell md-hidden">
                                        <div className="text-gray-700">{donor.contact}</div>
                                        <div className="text-xs text-gray-400 mt-1">{donor.location}</div>
                                    </td>
                                    <td className="lg-table-cell hidden text-gray-500">
                                        {donor.lastDonation}
                                    </td>
                                    <td>
                                        <span className={`badge ${
                                            donor.status === 'Eligible' 
                                                ? 'badge-success' 
                                                : 'badge-warning'
                                        }`}>
                                            {donor.status}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <div className="table-actions">
                                            <button className="icon-btn primary" title="Edit">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="icon-btn danger" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <button className="icon-btn md-hidden" title="More">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredDonors.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-gray-500">
                                        No donors found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Static UI) */}
                <div className="pagination-footer">
                    <div>Showing 1 to {filteredDonors.length} of {filteredDonors.length} results</div>
                    <div className="pagination-controls">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;
