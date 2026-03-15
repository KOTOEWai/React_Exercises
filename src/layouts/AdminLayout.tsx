import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            {/* Sidebar */}
            <aside style={{
                width: isSidebarOpen ? '260px' : '80px',
                backgroundColor: 'var(--bg-secondary)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}>
                    {isSidebarOpen && <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>AdminPanel</span>}
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} style={{ background: 'none', color: 'white', fontSize: '1.2rem' }}>
                        {isSidebarOpen ? '❮' : '❯'}
                    </button>
                </div>

                <nav style={{ flex: 1, padding: 'var(--spacing-sm)' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                            <NavLink to="/admin" end style={navButtonStyle}>
                                <span>📊</span> {isSidebarOpen && 'Dashboard'}
                            </NavLink>
                        </li>
                        <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                            <NavLink to="/admin/users" style={navButtonStyle}>
                                <span>👥</span> {isSidebarOpen && 'Users'}
                            </NavLink>
                        </li>
                        <li style={{ marginBottom: 'var(--spacing-xs)' }}>
                            <NavLink to="/" style={navButtonStyle}>
                                <span>🏠</span> {isSidebarOpen && 'Public Home'}
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div style={{ padding: 'var(--spacing-md)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {isSidebarOpen ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                {user?.[0].toUpperCase() || 'A'}
                            </div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Administrator</span>
                        </div>
                    ) : (
                        <button onClick={logout} style={{ width: '100%', background: 'none', color: 'white' }}>🚪</button>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <header className="glass" style={{ padding: 'var(--spacing-sm) var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>{isSidebarOpen ? '' : 'Admin Dashboard'}</h3>
                    <button onClick={logout} style={{ color: 'var(--accent-secondary)', fontWeight: '600', background: 'none' }}>Logout</button>
                </header>
                <div style={{ padding: 'var(--spacing-lg)', flex: 1, overflowY: 'auto' }}>
                    <Outlet />
                </div>
            </main>

            <style>{`
                .active {
                    background-color: var(--bg-primary);
                    color: var(--accent-primary);
                    border-left: 4px solid var(--accent-primary);
                }
            `}</style>
        </div>
    );
};

const navButtonStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
    padding: '0.75rem var(--spacing-sm)',
    borderRadius: '8px',
    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
    backgroundColor: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
    fontWeight: isActive ? '600' : '400',
    transition: 'var(--transition-fast)'
});

export default AdminLayout;
