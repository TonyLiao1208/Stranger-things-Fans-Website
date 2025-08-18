
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p className="text-xl font-bold text-red-600 mb-2" style={{ fontFamily: "'Benguiat', sans-serif" }}>Stranger Things Fan Wiki</p>
                <p>&copy; {new Date().getFullYear()} - Created with ❤️ for the Hawkins crew.</p>
                <p className="text-sm mt-2">This is a fan-made website. All content related to Stranger Things is the property of Netflix and the Duffer Brothers.</p>
            </div>
        </footer>
    );
};

export default Footer;
