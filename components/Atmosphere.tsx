import React, { useMemo } from 'react';

/**
 * Full-page ambient layer: drifting Upside-Down spores + an occasional
 * lightning flash. Purely decorative and pointer-events-none.
 */
const Atmosphere: React.FC = () => {
  const spores = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => {
        const size = 2 + Math.random() * 6;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          duration: 14 + Math.random() * 22,
          delay: Math.random() * 20,
        };
      }),
    []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="lightning-overlay" />
      {spores.map((s) => (
        <span
          key={s.id}
          className="spore"
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Atmosphere;
