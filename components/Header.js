// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <header className="header">
            <nav className="nav">
                <Link href="/dashboard" legacyBehavior><a className={pathname === '/dashboard' ? 'active' : ''}>Dashboard</a></Link>
                <Link href="/courses" legacyBehavior><a className={pathname === '/courses' ? 'active' : ''}>Courses</a></Link>
                <Link href="/chat" legacyBehavior><a className={pathname === '/chat' ? 'active' : ''}>Chat</a></Link>
                <Link href="/login" legacyBehavior><a className={pathname === '/login' ? 'active' : ''}>Login</a></Link>
                <Link href="/register" legacyBehavior><a className={pathname === '/register' ? 'active' : ''}>Register</a></Link>
                <Link href="/logout" legacyBehavior><a className={pathname === '/logout' ? 'active' : ''}>Logout</a></Link>
            </nav>
            <style jsx>{`
                .header {
                    background: linear-gradient(to right, #2ecc71, #27ae60);
                    padding: 1rem;
                    border-radius: 10px;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                }
                .nav {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;
                }
                .nav a {
                    color: white;
                    font-size: 1.2rem;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    transition: background-color 0.3s, transform 0.3s;
                }
                .nav a:hover {
                    background-color: #27ae60;
                    transform: scale(1.1);
                }
                .active {
                    background-color: #1abc9c;
                    font-weight: bold;
                }
                @media (max-width: 768px) {
                    .nav {
                        flex-direction: column;
                    }
                    .nav a {
                        margin-bottom: 0.5rem;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
