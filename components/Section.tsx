import React from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', style }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 scroll-mt-20 ${className}`} style={style}>
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600 tracking-wider uppercase font-display text-glow-red">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
};

export default Section;
