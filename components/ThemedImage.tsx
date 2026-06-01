import React, { useEffect, useMemo, useState } from 'react';
import { posterArt } from '../utils/posterArt';

interface ThemedImageProps {
  seed: string;
  alt: string;
  kind?: 'hero' | 'adult' | 'villain' | 'monster' | 'poster';
  label?: string;
  width?: number;
  height?: number;
  className?: string;
  /** Optional real photo URL; falls back to the generated art if it fails. */
  photo?: string;
}

/**
 * Renders a real photo when provided, gracefully falling back to a cohesive,
 * self-contained themed SVG poster (which never 404s) on error or by default.
 */
const ThemedImage: React.FC<ThemedImageProps> = ({ seed, alt, kind = 'hero', label, width, height, className, photo }) => {
  const fallback = useMemo(
    () => posterArt({ seed, kind, label, width, height }),
    [seed, kind, label, width, height]
  );
  const [src, setSrc] = useState(photo || fallback);

  useEffect(() => {
    setSrc(photo || fallback);
  }, [photo, fallback]);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => src !== fallback && setSrc(fallback)}
      className={className}
    />
  );
};

export default ThemedImage;
