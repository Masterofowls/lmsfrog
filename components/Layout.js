// components/Layout.js
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setFooterVisible(bottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer className={footerVisible ? 'visible' : ''} />
            <style jsx>{`
                .layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    overflow: hidden; /* Prevent unwanted scrollbars */
                }
                .main-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 2rem;
                    padding-top: 5rem; /* Adjust for fixed header */
                    padding-bottom: 5rem; /* Adjust for fixed footer */
                    background-color: #f7f7f7;
                }
            `}</style>
        </div>
    );
};

export default Layout;
