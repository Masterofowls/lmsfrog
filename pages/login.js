// pages/login.js
import Header from '../components/Header';

const Login = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Login Page</h1>
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

export default Login;
