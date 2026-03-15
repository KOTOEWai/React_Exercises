import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '1rem var(--spacing-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-lg)'
        }}>
            <NavLink to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ReactDemo
            </NavLink>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>Products</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>

                {isAuthenticated ? (
                    <>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>Dashboard</NavLink>
                        <button onClick={logout} style={{ padding: '0.5rem 1rem', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)', color: 'white' }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink to="/auth/login" style={{ padding: '0.5rem 1.5rem', borderRadius: '20px', background: 'var(--accent-gradient)', color: 'white' }}>
                        Login
                    </NavLink>
                )}
            </div>

            <style>{`
                .active-link {
                    color: var(--accent-primary);
                    font-weight: 600;
                }
                @media (max-width: 600px) {
                    nav div { gap: var(--spacing-xs); font-size: 0.8rem; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
