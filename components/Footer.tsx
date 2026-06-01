import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { href: '#seasons', label: 'Seasons' },
    { href: '#characters', label: 'Characters' },
    { href: '#upside-down', label: 'Upside Down' },
    { href: '#lights', label: 'The Wall' },
    { href: '#trivia', label: 'Trivia' },
  ];
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p className="text-2xl font-bold text-red-600 mb-3 font-display text-glow-red">Stranger Things Fan Archive</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-400 hover:text-red-500 transition-colors text-sm uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} — Created with ❤️ for the Hawkins crew.</p>
        <p className="text-sm mt-2 max-w-2xl mx-auto">
          This is a non-commercial, fan-made website. All content related to Stranger Things is the
          property of Netflix and the Duffer Brothers. No copyright infringement intended.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
