import React, { useEffect, useState } from 'react';
import { useUpsideDown } from '../context/UpsideDownContext';

/** Back-to-top + Upside Down world toggle, fixed bottom-right. */
const FloatingControls: React.FC = () => {
  const { upsideDown, toggle } = useUpsideDown();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
      <button
        onClick={toggle}
        aria-pressed={upsideDown}
        title={upsideDown ? 'Return to the right side up' : 'Flip into the Upside Down'}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 transition-all duration-500 ${
          upsideDown
            ? 'bg-red-600 border-red-400 rotate-180 pulse-glow'
            : 'bg-gray-800/90 border-gray-600 hover:border-red-500 hover:text-red-500'
        }`}
      >
        {upsideDown ? '🙃' : '🌀'}
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
        className={`w-14 h-14 rounded-full bg-gray-800/90 border-2 border-gray-600 hover:border-red-500 hover:text-red-500 flex items-center justify-center transition-all duration-300 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingControls;
