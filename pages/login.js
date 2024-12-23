import { commonStyles } from '../styles/common';

const Login = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Login Page</h1>
                </div>
                <div className="login-content">
                    {/* Specific styles for login page */}
                </div>
            </section>
            <style jsx>{`
                .login-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};

export default Login;
