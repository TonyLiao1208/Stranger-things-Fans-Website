import React, { useState, useEffect } from 'react';
import { useUpsideDown } from '../context/UpsideDownContext';

const navLinks = [
  { href: '#seasons', label: 'Seasons' },
  { href: '#characters', label: 'Characters' },
  { href: '#upside-down', label: 'Upside Down' },
  { href: '#lights', label: 'The Wall' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#trivia', label: 'Trivia' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { upsideDown } = useUpsideDown();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-red-900/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold tracking-widest text-red-600 uppercase font-display text-glow-red"
        >
          Stranger Things{upsideDown && <span className="ml-1 text-xs align-top text-red-400">⤓</span>}
        </a>

        <div className="hidden md:flex space-x-5 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-base lg:text-lg font-semibold tracking-wider relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-200 hover:text-red-500 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
          open ? 'max-h-96 border-t border-gray-800' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-gray-300 hover:text-red-500 font-semibold tracking-wider border-b border-gray-800/60 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
