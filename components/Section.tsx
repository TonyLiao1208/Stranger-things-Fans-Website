import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', style }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} style={style}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600 tracking-wider uppercase" style={{ textShadow: '2px 2px 6px rgba(229, 62, 62, 0.4)' }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
