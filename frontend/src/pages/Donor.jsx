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
        <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-12 font-sans text-gray-800">
            {/* Header Section */}
            <header className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Blood Donors
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        Manage and track blood donor records.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md shadow-red-600/20 whitespace-nowrap w-fit">
                    <Plus className="w-5 h-5" />
                    Add New Donor
                </button>
            </header>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search by name or blood group..." 
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-500 text-sm uppercase tracking-wider">
                                <th className="p-4 md:p-6 font-semibold rounded-tl-xl border-b border-gray-100">Donor Name</th>
                                <th className="p-4 md:p-6 font-semibold border-b border-gray-100">Blood Group</th>
                                <th className="p-4 md:p-6 font-semibold border-b border-gray-100 hidden md:table-cell">Contact & Location</th>
                                <th className="p-4 md:p-6 font-semibold border-b border-gray-100 hidden lg:table-cell">Last Donation</th>
                                <th className="p-4 md:p-6 font-semibold border-b border-gray-100">Status</th>
                                <th className="p-4 md:p-6 font-semibold rounded-tr-xl border-b border-gray-100 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {filteredDonors.map((donor) => (
                                <tr key={donor.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="p-4 md:p-6 font-medium text-gray-900">
                                        {donor.name}
                                    </td>
                                    <td className="p-4 md:p-6 text-gray-600 font-semibold">
                                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 inline-block text-center min-w-[3rem]">
                                            {donor.bloodGroup}
                                        </span>
                                    </td>
                                    <td className="p-4 md:p-6 text-gray-500 hidden md:table-cell">
                                        <div>{donor.contact}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{donor.location}</div>
                                    </td>
                                    <td className="p-4 md:p-6 text-gray-500 hidden lg:table-cell">
                                        {donor.lastDonation}
                                    </td>
                                    <td className="p-4 md:p-6">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                                            donor.status === 'Eligible' 
                                                ? 'bg-green-50 text-green-700 border-green-200' 
                                                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                        }`}>
                                            {donor.status}
                                        </span>
                                    </td>
                                    <td className="p-4 md:p-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors md:hidden" title="More">
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
                <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50/30">
                    <div>Showing 1 to {filteredDonors.length} of {filteredDonors.length} results</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;
