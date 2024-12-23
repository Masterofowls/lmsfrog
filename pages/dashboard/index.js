import { commonStyles } from '../../styles/common';

const Dashboard = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Welcome to LMSFrog Dashboard</h1>
                </div>
                <div className="cards-block">
                    <div className="card">Course 1</div>
                    <div className="card">Course 2</div>
                    <div className="card">Course 3</div>
                    <div className="card">Course 4</div>
                </div>
            </section>
            <style jsx>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 100vh;
                }
                .cards-block {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    align-items: center;
                    justify-items: center;
                    font-family: 'Arial, sans-serif';
                }
                .card {
                    background-color: white;
                    padding: 1rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                    text-align: center;
                }
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                @media (max-width: 768px) {
                    .cards-block {
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    }
                    .card {
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Dashboard;
