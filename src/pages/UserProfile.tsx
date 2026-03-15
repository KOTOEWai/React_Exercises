import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
            <div className="glass" style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--border-radius)'
            }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    margin: '0 auto var(--spacing-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    {id?.[0].toUpperCase() || 'U'}
                </div>

                <h1>User Profile: <span style={{ color: 'var(--accent-primary)' }}>{id}</span></h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                    This is a dynamic route demonstration. The ID **"{id}"** was extracted from the URL using the <code>useParams</code> hook.
                </p>

                <div className="grid grid-cols-2" style={{ textAlign: 'left', marginBottom: 'var(--spacing-lg)' }}>
                    <div style={{ padding: 'var(--spacing-sm)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Username</span>
                        <p style={{ fontWeight: '500' }}>{id}</p>
                    </div>
                    <div style={{ padding: 'var(--spacing-sm)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Account Type</span>
                        <p style={{ fontWeight: '500' }}>Member</p>
                    </div>
                </div>

                <Link to="/dashboard" style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'white',
                    borderRadius: '8px'
                }}>
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;
