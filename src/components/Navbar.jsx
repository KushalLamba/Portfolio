import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <a href="#home" className="navbar-logo">
                    Kushal Yadav
                </a>

                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="navbar-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="https://drive.google.com/drive/folders/16HU3ZbEh1egaZaMY-lgUVIYeUG_w7Ta6" target="_blank" rel="noopener noreferrer" className="navbar-cta">
                    <FiDownload size={14} />
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
