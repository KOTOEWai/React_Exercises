import React, { useEffect } from 'react';
import { useActionData, useNavigation, Form } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
    const actionData = useActionData() as { error?: string; username?: string } | undefined;
    const navigation = useNavigation();
    const { login } = useAuth();
    const isSubmitting = navigation.state === 'submitting';

    useEffect(() => {
        if (actionData?.username) {
            login(actionData.username);
        }
    }, [actionData, login]);

    return (
        <div style={{ textAlign: 'left' }}>
            <h2>Sign In</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                Welcome back! Please enter your details.
            </p>

            <Form method="post" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Email Address</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        style={inputStyle}
                    />
                </div>

                {actionData?.error && (
                    <div style={{ padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#ef4444', fontSize: '0.875rem' }}>
                        {actionData.error}
                    </div>
                )}

                <button type="submit" disabled={isSubmitting} style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    marginTop: 'var(--spacing-sm)',
                    opacity: isSubmitting ? 0.7 : 1
                }}>
                    {isSubmitting ? 'Verifying Account...' : 'Sign In'}
                </button>
            </Form>
        </div>
    );
};

const inputStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    outline: 'none',
    transition: 'var(--transition-fast)',
};

export default Login;
