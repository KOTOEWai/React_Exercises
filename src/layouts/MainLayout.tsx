import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }} className="container">
                <Outlet />
            </main>
            <footer className="glass" style={{
                marginTop: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg) 0',
                textAlign: 'center',
                color: 'var(--text-secondary)'
            }}>
                <div className="container">
                    <p>&copy; 2026 React Professional Demo. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
