import React from 'react';
const DashboardHome = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back, Admin. Here is what is happening today.</p>
            </header>

            <div className="stats-grid">
                <div className="stat-card blood-units">
                    <div className="stat-icon">🩸</div>
                    <div className="stat-details">
                        <h3>Total Blood Units</h3>
                        <p className="stat-number">1,248</p>
                        <span className="stat-trend positive">+12% this week</span>
                    </div>
                </div>

                <div className="stat-card donors">
                    <div className="stat-icon">👥</div>
                    <div className="stat-details">
                        <h3>Active Donors</h3>
                        <p className="stat-number">842</p>
                        <span className="stat-trend positive">+5% this week</span>
                    </div>
                </div>

                <div className="stat-card requests">
                    <div className="stat-icon">🚑</div>
                    <div className="stat-details">
                        <h3>Urgent Requests</h3>
                        <p className="stat-number">14</p>
                        <span className="stat-trend negative">Requires attention</span>
                    </div>
                </div>
            </div>
            
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                    <div className="activity-item">
                        <div className="activity-dot bg-red"></div>
                        <div className="activity-content">
                            <p><strong>A+ Blood</strong> requested by City Hospital</p>
                            <span>10 minutes ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-dot bg-green"></div>
                        <div className="activity-content">
                            <p><strong>New Donor</strong> registered (O-)</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="activity-dot bg-blue"></div>
                        <div className="activity-content">
                            <p><strong>Inventory Restocked</strong> from Central Bank</p>
                            <span>3 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
