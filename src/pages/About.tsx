import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: 'var(--spacing-xl) 0', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>About Our Project</h1>
            <div className="glass" style={{ padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem' }}>
                    This demo project is built to showcase a professional React architecture using **React Router DOM v7**.
                    It follows industry best practices for folder structure, state management, and responsive design.
                </p>
                <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Tech Stack</h3>
                <ul style={{ padding: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                    <li>React 19 (Latest)</li>
                    <li>React Router DOM (Advanced Data APIs)</li>
                    <li>Vanilla CSS with Custom Design Tokens</li>
                    <li>TypeScript for Type Safety</li>
                </ul>
                <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                    <strong>Note:</strong> No external UI libraries like Tailwind or Bootstrap were used. This is all hand-crafted CSS Excellence.
                </div>
            </div>
        </div>
    );
};

export default About;
