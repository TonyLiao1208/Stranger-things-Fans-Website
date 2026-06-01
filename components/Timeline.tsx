import React from 'react';
import type { ITimelineEvent } from '../types';
import Section from './Section';
import Reveal from './Reveal';

interface TimelineProps {
  events: ITimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <Section id="timeline" title="The Hawkins Timeline" className="bg-gray-900/60">
      <div className="relative max-w-4xl mx-auto">
        {/* vertical spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-800 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {events.map((ev, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal
                key={i}
                delay={i * 60}
                className={`relative flex items-start ${
                  left ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* node */}
                <span className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-gray-900 -translate-x-1/2 mt-1.5 pulse-glow z-10" />

                <div className={`pl-12 md:pl-0 md:w-1/2 ${left ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="font-display text-2xl font-bold text-red-500 text-glow-red">{ev.year}</span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">{ev.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{ev.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
