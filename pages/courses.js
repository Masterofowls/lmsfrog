// pages/courses.js
import Header from '../components/Header';

const Courses = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Courses Page</h1>
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

export default Courses;
