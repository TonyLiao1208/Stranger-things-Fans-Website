import React, { useState } from 'react';
import type { ISeason } from '../types';
import Section from './Section';

interface SeasonsProps {
  seasons: ISeason[];
}

const BoltIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Seasons: React.FC<SeasonsProps> = ({ seasons }) => {
  const [activeTab, setActiveTab] = useState(0);
  const season = seasons[activeTab];

  return (
    <Section id="seasons" title="The Story So Far" className="bg-gray-900/60">
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4 border-b-2 border-gray-700 pb-4">
          {seasons.map((s, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 md:px-6 font-bold text-lg rounded-t-lg transition-all duration-300 uppercase tracking-wider ${
                activeTab === index
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-red-500'
              }`}
            >
              {index + 1 >= seasons.length && s.year >= 2025 ? `S${index + 1} · Final` : `Season ${index + 1}`}
            </button>
          ))}
        </div>

        <div className="w-full max-w-6xl">
          <div key={activeTab} className="reveal is-visible">
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-2xl overflow-hidden border-2 border-gray-700">
              <div className="md:w-1/3 relative">
                <img src={season.imageUrl} alt={season.title} className="w-full h-64 md:h-full object-cover invertable" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-800 via-transparent to-transparent" />
                {season.tagline && (
                  <p className="absolute bottom-4 left-4 right-4 md:hidden font-display text-red-400 text-lg italic">
                    {season.tagline}
                  </p>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3">
                <h3 className="text-3xl font-bold mb-1 text-white font-display">
                  {season.title} <span className="text-xl text-gray-400">({season.year})</span>
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  {season.episodes && <span>{season.episodes} episodes</span>}
                  {season.tagline && <span className="hidden md:inline italic text-red-400">"{season.tagline}"</span>}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{season.summary}</p>
                <div className="space-y-3">
                  {season.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <BoltIcon />
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Seasons;
