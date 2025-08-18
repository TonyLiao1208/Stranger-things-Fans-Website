
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-widest uppercase" style={{ fontFamily: "'Benguiat', sans-serif", textShadow: '0 0 10px #e50914, 0 0 20px #e50914, 0 0 30px #e50914, 0 0 40px #e50914' }}>
                    Welcome to Hawkins
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    A fan-curated journey into the heart of Stranger Things. Explore the mysteries, the friendships, and the monsters that lurk in the shadows.
                </p>
                <a href="#seasons" className="mt-12 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider hover:bg-red-700 transition-transform duration-300 hover:scale-105 shadow-lg shadow-red-900/50">
                    Enter the Upside Down
                </a>
            </div>
        </div>
    );
}

export default Hero;
