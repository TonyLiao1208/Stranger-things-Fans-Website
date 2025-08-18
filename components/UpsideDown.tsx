
import React from 'react';
import type { IMonster } from '../types';
import Section from './Section';

interface UpsideDownProps {
  monsters: IMonster[];
}

const UpsideDown: React.FC<UpsideDownProps> = ({ monsters }) => {
  return (
    <Section id="upside-down" title="The Upside Down" className="bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          A dark echo of our world, the Upside Down is an alternate dimension existing in parallel to the human world. It is a place of decay and death, a cold, dark plane inhabited by monstrous predators. Its atmosphere is toxic to humans, filled with floating, spore-like particles. This nightmarish realm is the source of all the supernatural threats to Hawkins.
        </p>
      </div>
      
      <h3 className="text-3xl font-bold text-center mb-10 text-white">Creatures of the Hive Mind</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {monsters.map(monster => (
            <div key={monster.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col">
                <img src={monster.imageUrl} alt={monster.name} className="w-full h-56 object-cover"/>
                <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-2xl font-bold text-red-500 mb-3">{monster.name}</h4>
                    <p className="text-gray-300 leading-relaxed flex-grow">{monster.description}</p>
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default UpsideDown;
