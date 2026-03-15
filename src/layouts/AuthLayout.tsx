import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'radial-gradient(circle at top right, var(--bg-secondary), var(--bg-primary))',
            padding: 'var(--spacing-md)'
        }}>
            <div className="glass" style={{
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--border-radius)',
                width: '100%',
                maxWidth: '440px',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <Link to="/" style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    ReactDemo
                </Link>

                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
