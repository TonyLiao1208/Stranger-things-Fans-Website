import React, { useCallback, useEffect, useRef, useState } from 'react';
import Section from './Section';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Joyce strung her lights in a wavy two-row pattern. We mimic that with a
// per-letter vertical offset so the wire feels hand-strung, not gridded.
const BULB_COLORS = ['#ff3b3b', '#ffd23b', '#3bff6b', '#3b9bff', '#ff3bef', '#ff8c3b'];

const LightsWall: React.FC = () => {
  const [message, setMessage] = useState('');
  const [litIndex, setLitIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const runMessage = useCallback(() => {
    clearTimers();
    const letters = message.toUpperCase().replace(/[^A-Z]/g, '').split('');
    if (letters.length === 0) return;
    setPlaying(true);

    let delay = 300;
    letters.forEach((letter) => {
      const idx = ALPHABET.indexOf(letter);
      timers.current.push(
        window.setTimeout(() => setLitIndex(idx), delay)
      );
      timers.current.push(
        window.setTimeout(() => setLitIndex(null), delay + 700)
      );
      delay += 950;
    });

    timers.current.push(
      window.setTimeout(() => {
        setPlaying(false);
        setLitIndex(null);
      }, delay)
    );
  }, [message, clearTimers]);

  return (
    <Section id="lights" title="Talk to the Other Side" className="bg-black/40">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-lg text-gray-300 leading-relaxed">
          When Will was trapped in the Upside Down, Joyce strung Christmas lights across her wall and
          taught the alphabet to communicate. Type a message below and watch it light up the wall —
          just like Hawkins, 1983.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto rounded-xl border border-gray-700 bg-[#1a120c] p-6 md:p-10 shadow-2xl"
           style={{ backgroundImage: 'linear-gradient(180deg, rgba(40,28,18,0.9), rgba(20,14,9,0.95))' }}>
        {/* The lettered wallpaper wall */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-8 md:gap-x-5">
          {ALPHABET.map((letter, i) => {
            const color = BULB_COLORS[i % BULB_COLORS.length];
            const lit = litIndex === i;
            const offset = i % 2 === 0 ? 'translate-y-0' : 'translate-y-5';
            return (
              <div key={letter} className={`flex flex-col items-center transform ${offset}`}>
                <span
                  key={`${letter}-${lit}`}
                  className={`block rounded-full transition-all duration-200 ${lit ? 'bulb-lit' : ''}`}
                  style={{
                    width: 18,
                    height: 22,
                    background: color,
                    boxShadow: lit
                      ? `0 0 14px 5px ${color}, 0 0 28px 10px ${color}aa`
                      : `0 0 2px ${color}55`,
                    opacity: lit ? 1 : 0.32,
                  }}
                />
                <span
                  className={`mt-2 font-typewriter text-lg md:text-xl transition-colors duration-200 ${
                    lit ? 'text-white' : 'text-gray-500'
                  }`}
                  style={lit ? { textShadow: `0 0 10px ${color}` } : undefined}
                >
                  {letter}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={message}
          maxLength={40}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !playing && runMessage()}
          placeholder="RUN  (type a message...)"
          aria-label="Message to spell on the wall"
          className="flex-grow bg-gray-900 border-2 border-gray-700 focus:border-red-600 outline-none rounded-lg px-4 py-3 text-lg font-typewriter tracking-widest uppercase text-red-400 placeholder-gray-600 transition-colors"
        />
        <button
          onClick={runMessage}
          disabled={playing || message.trim().length === 0}
          className="bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-all duration-300 hover:scale-105 pulse-glow"
        >
          {playing ? 'Lighting…' : 'Light it up'}
        </button>
      </div>
    </Section>
  );
};

export default LightsWall;
