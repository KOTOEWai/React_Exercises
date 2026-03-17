import React from 'react';


const Home: React.FC = () => {
    return (
        <section style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Build Smarter with React
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
                Experience the next generation of web development with our lightning-fast, highly-organized, and beautifully designed starter template.
            </p>

            <div className="grid grid-cols-3" style={{ marginTop: 'var(--spacing-xl)' }}>
                {[
                    { title: 'Responsive', desc: 'Works flawlessly on any device screen.', icon: '📱' },
                    { title: 'Performant', desc: 'Optimized with the latest industry standards.', icon: '⚡' },
                    { title: 'Organized', desc: 'A clean folder structure for scalable apps.', icon: '📂' }
                ].map((feature, i) => (
                    <div key={i} className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)', textAlign: 'left' }}>
                        <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                        <h3 style={{ marginTop: 'var(--spacing-sm)' }}>{feature.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        
        </section>
    );
};

export default Home;
