// components/Footer.js
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 LMSFrog. All rights reserved.</p>
            <style jsx>{`
                .footer {
                    background: #2ecc71;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                    position: fixed;
                    width: 100%;
                    bottom: -80%; /* Initially hidden */
                    left: 0;
                    transition: bottom 0.3s ease;
                }
                /* Reveal footer when scrolled to the bottom */
                .footer.visible {
                    bottom: 0;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
