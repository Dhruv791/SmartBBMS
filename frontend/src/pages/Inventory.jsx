import React, { useState } from 'react';
import { Droplet, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const Inventory = () => {
    // Mock data for blood inventory
    const bloodStocks = [
        { type: 'A+', count: 45, status: 'Optimal' },
        { type: 'A-', count: 12, status: 'Low' },
        { type: 'B+', count: 34, status: 'Optimal' },
        { type: 'B-', count: 8, status: 'Critical' },
        { type: 'O+', count: 56, status: 'Optimal' },
        { type: 'O-', count: 5, status: 'Critical' },
        { type: 'AB+', count: 18, status: 'Low' },
        { type: 'AB-', count: 4, status: 'Critical' }
    ];

    const recentTransactions = [
        { id: 'TRX-001', type: 'Donation', bloodGroup: 'O+', units: 2, date: 'Today, 10:30 AM', status: 'Completed' },
        { id: 'TRX-002', type: 'Dispatch', bloodGroup: 'A-', units: 1, date: 'Today, 11:15 AM', status: 'Pending' },
        { id: 'TRX-003', type: 'Donation', bloodGroup: 'B+', units: 1, date: 'Yesterday, 02:40 PM', status: 'Completed' },
        { id: 'TRX-004', type: 'Dispatch', bloodGroup: 'O-', units: 3, date: 'Yesterday, 04:20 PM', status: 'Completed' },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Optimal': return 'badge badge-success';
            case 'Low': return 'badge badge-warning';
            case 'Critical': return 'badge badge-danger';
            case 'Completed': return 'badge badge-success';
            case 'Pending': return 'badge badge-warning';
            default: return 'badge badge-neutral';
        }
    };

    return (
        <div className="page-container">
            {/* Header Section */}
            <header className="page-header max-w-7xl">
                <div className="page-title-box">
                    <h1 className="page-title">
                        Blood Inventory
                    </h1>
                    <p className="page-description">
                        Real-time tracking of available blood units across all groups.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-secondary">
                        <Activity className="w-5 h-5" />
                        Generate Report
                    </button>
                    <button className="btn-primary">
                        <Droplet className="w-5 h-5" />
                        Update Stock
                    </button>
                </div>
            </header>

            <div className="max-w-7xl">
                
                {/* Blood Stock Grid */}
                <div className="stat-grid-4 margin-bottom-2rem" style={{marginBottom: '2rem'}}>
                    {bloodStocks.map((stock) => (
                        <div key={stock.type} className="inv-card">
                            <div className="inv-bg-icon">
                                <Droplet className="w-24 h-24" />
                            </div>
                            
                            <div className="inv-header">
                                <div className="inv-blood-badge">
                                    <span className="inv-blood-text">{stock.type}</span>
                                </div>
                                <span className={getStatusBadge(stock.status)}>
                                    {stock.status}
                                </span>
                            </div>

                            <div className="mt-2">
                                <h3 className="inv-units">
                                    {stock.count} <span className="inv-units-label">Units</span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Transactions Section */}
                <div className="card">
                    <div className="toolbar">
                        <h2 className="text-gray-900 font-bold" style={{fontSize: '1.125rem', margin: 0}}>Recent Transactions</h2>
                        <a href="#" className="font-semibold" style={{color: '#2563eb', textDecoration: 'none'}}>View All</a>
                    </div>
                    
                    <div className="table-responsive">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Type</th>
                                    <th>Blood Group</th>
                                    <th>Units</th>
                                    <th className="md-table-cell md-hidden">Date & Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((trx) => (
                                    <tr key={trx.id}>
                                        <td className="font-medium text-gray-900">
                                            {trx.id}
                                        </td>
                                        <td>
                                            <div className="status-text">
                                                {trx.type === 'Donation' 
                                                    ? <ArrowDownRight className="w-4 h-4" style={{color: '#10b981'}} />
                                                    : <ArrowUpRight className="w-4 h-4" style={{color: '#3b82f6'}} />
                                                }
                                                <span className="text-gray-700">{trx.type}</span>
                                            </div>
                                        </td>
                                        <td className="font-bold text-gray-800">
                                            {trx.bloodGroup}
                                        </td>
                                        <td className="text-gray-700 font-medium">
                                            {trx.units}
                                        </td>
                                        <td className="md-table-cell md-hidden text-gray-500">
                                            {trx.date}
                                        </td>
                                        <td>
                                            <span className={getStatusBadge(trx.status)}>
                                                {trx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
