// pages/register.js
import Header from '../components/Header';

const Register = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Register Page</h1>
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

export default Register;
