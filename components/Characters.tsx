
import React from 'react';
import type { ICharacter } from '../types';
import Section from './Section';

const CharacterCard: React.FC<{ character: ICharacter }> = ({ character }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-900/40 hover:scale-105 border border-gray-700 group">
            <div className="relative">
                <img src={character.imageUrl} alt={character.name} className="w-full h-72 object-cover object-top"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-2xl font-bold text-white">{character.name}</h3>
                    <p className="text-sm text-gray-400">{character.actor}</p>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-300 mb-4 h-32 overflow-y-auto">{character.description}</p>
                <p className="text-gray-400 italic border-l-4 border-red-600 pl-4">"{character.quote}"</p>
            </div>
        </div>
    );
};

interface CharactersProps {
    characters: ICharacter[];
}

const Characters: React.FC<CharactersProps> = ({ characters }) => {
    return (
        <Section id="characters" title="The Heroes of Hawkins" className="bg-black/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {characters.map((character) => (
                    <CharacterCard key={character.name} character={character} />
                ))}
            </div>
        </Section>
    );
};

export default Characters;
