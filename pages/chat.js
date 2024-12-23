import { commonStyles } from '../styles/common';

const Chat = () => {
    return (
        <>
            <style jsx global>{commonStyles}</style>
            <section className="page-container">
                <div className="title-block">
                    <h1>Chat Page</h1>
                </div>
                <div className="chat-content">
                    {/* Specific styles for chat page */}
                </div>
            </section>
            <style jsx>{`
                .chat-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};

export default Chat;
