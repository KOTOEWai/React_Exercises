import React from 'react';
import {  Link, Form, useActionData, useNavigation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const actionData = useActionData() as { success: boolean; message: string } | undefined;
    const navigation = useNavigation();
    const isUpdating = navigation.state === 'submitting';

    return (
        <div style={{ padding: 'var(--spacing-lg) 0' }}>
            <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                <h1>Welcome back, <span style={{ color: 'var(--accent-primary)' }}>{user}</span>!</h1>
                <p style={{ color: 'var(--text-secondary)' }}>You are successfully logged into your secure dashboard.</p>
            </div>

            <div className="grid grid-cols-2">
                <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)' }}>
                    <h3>Profile Management</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>Update your public display name.</p>
                    <Form method="post" style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                        <input
                            name="username"
                            placeholder="New Username"
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: '8px',
                                backgroundColor: 'var(--bg-primary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white'
                            }}
                        />
                        <button type="submit" disabled={isUpdating} style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            background: 'var(--accent-gradient)',
                            color: 'white',
                            fontWeight: 'bold',
                            opacity: isUpdating ? 0.7 : 1
                        }}>
                            {isUpdating ? 'Updating...' : 'Update'}
                        </button>
                    </Form>
                    {actionData && (
                        <p style={{ marginTop: 'var(--spacing-sm)', color: actionData.success ? '#10b981' : '#ef4444', fontSize: '0.9rem' }}>
                            {actionData.message}
                        </p>
                    )}
                </div>

                <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)' }}>
                    <h3>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
                        <Link to="/user/admin" style={linkActionStyle}>View Admin Profile</Link>
                        <Link to="/products" style={linkActionStyle}>Browse Products</Link>
                        <button onClick={logout} style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            color: '#ef4444',
                            border: '1px solid #ef4444',
                            fontWeight: '600'
                        }}>
                            Logout from Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const linkActionStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    textAlign: 'center' as const,
    border: '1px solid rgba(255,255,255,0.1)'
};

export default Dashboard;
