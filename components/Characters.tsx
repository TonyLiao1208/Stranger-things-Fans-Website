import React, { useState } from 'react';
import type { ICharacter } from '../types';
import Section from './Section';
import Reveal from './Reveal';
import ThemedImage from './ThemedImage';

const CharacterCard: React.FC<{ character: ICharacter }> = ({ character }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="group relative block w-full h-[460px] text-left [perspective:1200px] focus:outline-none"
      aria-label={`Flip card for ${character.name}`}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 [backface-visibility:hidden]">
          <div className="relative h-full">
            <ThemedImage
              seed={character.name}
              alt={character.name}
              kind={character.affiliation ?? 'hero'}
              width={400}
              height={600}
              className="w-full h-full object-cover object-top invertable"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            {character.affiliation === 'villain' && (
              <span className="absolute top-3 right-3 bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                Villain
              </span>
            )}
            <div className="absolute bottom-0 left-0 p-5">
              {character.role && (
                <p className="text-xs uppercase tracking-widest text-red-500 mb-1">{character.role}</p>
              )}
              <h3 className="text-2xl font-bold text-white font-display">{character.name}</h3>
              <p className="text-sm text-gray-400">{character.actor}</p>
              <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Tap to read more →</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-red-900/60 p-6 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-2xl font-bold text-red-500 font-display mb-1">{character.name}</h3>
          <p className="text-xs text-gray-500 mb-4">{character.actor}</p>
          <p className="text-gray-300 text-sm leading-relaxed flex-grow overflow-y-auto">{character.description}</p>
          <p className="text-gray-300 italic border-l-4 border-red-600 pl-4 mt-4">"{character.quote}"</p>
        </div>
      </div>
    </button>
  );
};

interface CharactersProps {
  characters: ICharacter[];
}

const FILTERS: { key: string; label: string }[] = [
  { key: 'all', label: 'Everyone' },
  { key: 'hero', label: 'The Party' },
  { key: 'adult', label: 'Grown-ups' },
  { key: 'villain', label: 'Villains' },
];

const Characters: React.FC<CharactersProps> = ({ characters }) => {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? characters : characters.filter((c) => c.affiliation === filter);

  return (
    <Section id="characters" title="The Heroes of Hawkins" className="bg-black/30">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
              filter === f.key
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-gray-800 text-gray-400 hover:text-red-400 hover:bg-gray-700'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {shown.map((character, i) => (
          <Reveal key={character.name} delay={(i % 4) * 80}>
            <CharacterCard character={character} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Characters;
