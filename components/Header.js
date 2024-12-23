// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header style={{ background: 'green', padding: '1rem' }}>
            <nav>
                <Link href="/dashboard"><a>Dashboard</a></Link>
                <Link href="/courses"><a>Courses</a></Link>
                <Link href="/chat"><a>Chat</a></Link>
                <Link href="/login"><a>Login</a></Link>
                <Link href="/register"><a>Register</a></Link>
                <Link href="/logout"><a>Logout</a></Link>
            </nav>
            <style jsx>{`
                nav a {
                    margin: 0 1rem;
                    color: white;
                    transition: color 0.3s;
                }
                nav a:hover {
                    color: lightgreen;
                }
            `}</style>
        </header>
    );
};

export default Header;
