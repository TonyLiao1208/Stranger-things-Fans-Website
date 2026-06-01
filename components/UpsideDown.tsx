import React from 'react';
import type { IMonster } from '../types';
import Section from './Section';
import Reveal from './Reveal';
import ThemedImage from './ThemedImage';

interface UpsideDownProps {
  monsters: IMonster[];
}

const ThreatMeter: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex items-center gap-1.5 mt-3" aria-label={`Threat level ${level} of 5`}>
    <span className="text-xs uppercase tracking-widest text-gray-500 mr-1">Threat</span>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`h-2.5 w-5 rounded-sm ${i < level ? 'bg-red-600' : 'bg-gray-700'}`}
        style={i < level ? { boxShadow: '0 0 6px rgba(229,9,20,0.7)' } : undefined}
      />
    ))}
  </div>
);

const UpsideDown: React.FC<UpsideDownProps> = ({ monsters }) => {
  return (
    <Section id="upside-down" title="The Upside Down" className="bg-gray-900/60">
      <Reveal className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          A dark echo of our world, the Upside Down is an alternate dimension existing in parallel to
          the human world. It is a place of decay and death, a cold, dark plane inhabited by monstrous
          predators. Its atmosphere is toxic to humans, filled with floating, spore-like particles.
          This nightmarish realm is the source of all the supernatural threats to Hawkins.
        </p>
        <p className="mt-4 text-sm text-red-400 italic">
          Tip: hit the 🌀 button in the corner to flip the whole site into the Upside Down.
        </p>
      </Reveal>

      <h3 className="text-3xl font-bold text-center mb-10 text-white font-display">Creatures of the Hive Mind</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {monsters.map((monster, i) => (
          <Reveal key={monster.name} delay={i * 100}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col h-full transition-transform duration-300 hover:scale-[1.03] hover:shadow-red-900/40">
              <div className="relative">
                <ThemedImage
                  seed={monster.name}
                  alt={monster.name}
                  kind="monster"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover invertable"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-2xl font-bold text-red-500 mb-3 font-display">{monster.name}</h4>
                <p className="text-gray-300 leading-relaxed flex-grow">{monster.description}</p>
                {monster.threatLevel && <ThreatMeter level={monster.threatLevel} />}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default UpsideDown;
