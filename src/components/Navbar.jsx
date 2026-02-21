import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Skills', url: '#skills' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <a href="#home" className="nav-logo">
                    &lt;JA/&gt;
                </a>

                <div className={`nav-menu ${menuOpen ? 'show-menu' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    href={link.url}
                                    className="nav-link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
