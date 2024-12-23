import { commonStyles } from '../styles/common';

const Register = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Register Page</h1>
                </div>
                <div className="register-content">
                    {/* Specific styles for register page */}
                </div>
            </section>
            <style jsx>{`
                .register-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};

export default Register;
