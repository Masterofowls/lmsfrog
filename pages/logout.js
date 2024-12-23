// pages/logout.js
import Header from '../components/Header';

const Logout = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Logout Page</h1>
            </main>
            <style jsx>{`
                main {
                    padding: 2rem;
                    background: white;
                    min-height: 80vh;
                }
            `}</style>
        </>
    );
};

export default Logout;
