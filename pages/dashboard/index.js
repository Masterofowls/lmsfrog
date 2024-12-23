// pages/dashboard/index.js
import Header from '../../components/Header';

const Dashboard = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Welcome to LMSFrog Dashboard</h1>
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

export default Dashboard;
