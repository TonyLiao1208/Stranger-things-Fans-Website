
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    const navLinks = [
        { href: "#seasons", label: "Seasons" },
        { href: "#characters", label: "Characters" },
        { href: "#upside-down", label: "The Upside Down" },
        { href: "#themes", label: "Themes & Style" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-red-900/20' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl md:text-3xl font-bold tracking-widest text-red-600 uppercase" style={{ fontFamily: "'Benguiat', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Stranger Things
                </a>
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-lg font-semibold tracking-wider relative group">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    {/* Mobile menu could be implemented here */}
                </div>
            </nav>
        </header>
    );
}

export default Header;
