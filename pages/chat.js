// pages/chat.js
import Header from '../components/Header';

const Chat = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Chat Page</h1>
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

export default Chat;
