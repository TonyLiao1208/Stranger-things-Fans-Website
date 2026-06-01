import React, { useEffect, useRef, useState } from 'react';

const useCountUp = (target: number, run: boolean, duration = 1400) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
};

const stats = [
  { target: 5, suffix: '', label: 'Seasons' },
  { target: 42, suffix: '', label: 'Episodes' },
  { target: 1983, suffix: '', label: 'Year It Begins' },
  { target: 1, suffix: '', label: 'Upside Down' },
];

const Hero: React.FC = () => {
  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setRun(true), 600);
    return () => clearTimeout(t);
  }, []);

  const values = [
    useCountUp(stats[0].target, run),
    useCountUp(stats[1].target, run),
    useCountUp(stats[2].target, run),
    useCountUp(stats[3].target, run),
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center vignette"
      style={{ backgroundImage: "linear-gradient(rgba(5,5,10,0.55), rgba(5,5,10,0.85)), url('https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg')" }}
    >
      <div className="relative z-10 px-4 max-w-5xl">
        <p className="uppercase tracking-[0.4em] text-red-500 text-sm md:text-base mb-4 font-display">
          Hawkins, Indiana
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-red-600 tracking-widest uppercase font-display neon-flicker">
          Stranger Things
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          A fan-curated journey into the heart of the series. Explore the mysteries, the friendships,
          and the monsters that lurk in the shadows of the Upside Down.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#seasons"
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider hover:bg-red-700 transition-transform duration-300 hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Enter the Upside Down
          </a>
          <a
            href="#lights"
            className="inline-block border-2 border-gray-500 text-gray-200 font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider hover:border-red-500 hover:text-red-400 transition-all duration-300"
          >
            Light the Wall
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-white text-glow-red">
                {values[i].toLocaleString()}{s.suffix}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#seasons" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-red-500 animate-bounce" aria-label="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
