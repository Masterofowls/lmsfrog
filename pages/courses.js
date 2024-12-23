import { commonStyles } from '../styles/common';

const Courses = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Courses Page</h1>
                </div>
                <div className="cards-block">
                    <div className="card">Course A</div>
                    <div className="card">Course B</div>
                    <div className="card">Course C</div>
                    <div className="card">Course D</div>
                </div>
            </section>
        </>
    );
};

export default Courses;
