const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {currentYear} <span>Kushal Yadav</span>. Built with React & ❤️
                </p>
            </div>
        </footer>
    );
};

export default Footer;
