import { commonStyles } from '../styles/common';

const Logout = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Logout Page</h1>
                </div>
                <div className="logout-content">
                    {/* Specific styles for logout page */}
                </div>
            </section>
            <style jsx>{`
                .logout-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};

export default Logout;
