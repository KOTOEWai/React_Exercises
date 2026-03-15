import React from 'react';
import { useLoaderData } from 'react-router-dom';

interface Stats {
    users: number;
    revenue: string;
    activeNow: number;
}

const AdminDashboard: React.FC = () => {
    const stats = useLoaderData() as Stats;

    return (
        <div>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>System Overview</h2>

            <div className="grid grid-cols-3">
                <StatCard title="Total Users" value={stats.users.toLocaleString()} icon="👥" color="#6366f1" />
                <StatCard title="Monthly Revenue" value={stats.revenue} icon="💰" color="#10b981" />
                <StatCard title="Active Session" value={stats.activeNow.toString()} icon="🔥" color="#f59e0b" />
            </div>

            <div className="glass" style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)' }}>
                <h3>Recent Activity</h3>
                <table style={{ width: '100%', marginTop: 'var(--spacing-md)', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ color: 'var(--text-secondary)', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <th style={{ padding: '1rem 0' }}>User</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Alice', action: 'Purchased Pro Plan', status: 'Completed' },
                            { name: 'Bob', action: 'Updated Profile', status: 'Pending' },
                            { name: 'Charlie', action: 'Deleted Project', status: 'Canceled' }
                        ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '1rem 0' }}>{row.name}</td>
                                <td>{row.action}</td>
                                <td style={{ color: row.status === 'Completed' ? '#10b981' : 'inherit' }}>{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color }: { title: string, value: string, icon: string, color: string }) => (
    <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)', borderLeft: `4px solid ${color}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-xs)' }}>{title}</p>
                <h2 style={{ margin: 0 }}>{value}</h2>
            </div>
            <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        </div>
    </div>
);

export default AdminDashboard;
