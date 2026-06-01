import React, { useMemo } from 'react';
import { posterArt } from '../utils/posterArt';

interface ThemedImageProps {
  seed: string;
  alt: string;
  kind?: 'hero' | 'adult' | 'villain' | 'monster' | 'poster';
  label?: string;
  width?: number;
  height?: number;
  className?: string;
}

/** Renders a cohesive, self-contained themed SVG poster (never 404s). */
const ThemedImage: React.FC<ThemedImageProps> = ({ seed, alt, kind = 'hero', label, width, height, className }) => {
  const src = useMemo(
    () => posterArt({ seed, kind, label, width, height }),
    [seed, kind, label, width, height]
  );
  return <img src={src} alt={alt} loading="lazy" className={className} />;
};

export default ThemedImage;
