/**
 * Generates an on-brand, self-contained SVG "poster" as a data URI.
 * No network needed, so images never break and the look stays cohesive:
 * a dark gradient, a red Upside-Down glow, drifting spores, faint scanlines,
 * and a large ghosted monogram derived from the subject's name.
 */

const PALETTES: Record<string, [string, string]> = {
  hero: ['#1a2740', '#0a0f1c'],
  adult: ['#2a1f3d', '#0d0a18'],
  villain: ['#3a0d12', '#100406'],
  monster: ['#2b0a0f', '#0a0406'],
  poster: ['#1c1430', '#0a0712'],
};

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

interface ArtOptions {
  seed: string;
  kind?: keyof typeof PALETTES;
  width?: number;
  height?: number;
  label?: string;
}

export function posterArt({ seed, kind = 'hero', width = 400, height = 600, label }: ArtOptions): string {
  const [c1, c2] = PALETTES[kind] ?? PALETTES.hero;
  const h = hash(seed);
  const mono = label ?? initials(seed);

  // a few deterministic spores
  const spores = Array.from({ length: 14 }).map((_, i) => {
    const x = ((h >> (i % 16)) % 100);
    const y = ((h >> ((i + 3) % 16)) % 100);
    const r = 1 + ((h >> i) % 4);
    const o = 0.15 + ((h >> (i + 5)) % 30) / 100;
    return `<circle cx="${x}%" cy="${y}%" r="${r}" fill="#cdd9ff" opacity="${o}"/>`;
  }).join('');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#e50914" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="#e50914" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#e50914" stop-opacity="0"/>
    </radialGradient>
    <filter id="b"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g filter="url(#b)">${spores}</g>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
        font-family="Oswald, Arial Narrow, sans-serif" font-weight="700"
        font-size="${Math.round(Math.min(width, height) * 0.46)}"
        fill="#ffffff" fill-opacity="0.10"
        style="letter-spacing:2px">${mono}</text>
  <rect width="100%" height="100%" fill="none" stroke="#e50914" stroke-opacity="0.25" stroke-width="2"/>
</svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * A wide, atmospheric "Hawkins at night" key-art background: gradient sky,
 * faint stars, a glowing red rift on the horizon, and a pine-tree silhouette.
 * Fully self-contained so hero/section backgrounds never depend on the network.
 */
export function sceneArt({ width = 1600, height = 900 } = {}): string {
  let trees = '';
  const n = 30;
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * width;
    const th = 110 + ((i * 73) % 180);
    const w = 60 + ((i * 29) % 40);
    trees += `<polygon points="${x - w},${height} ${x},${height - th} ${x + w},${height}" fill="#04050a"/>`;
  }

  let stars = '';
  for (let i = 0; i < 70; i++) {
    const x = (i * 97) % width;
    const y = (i * 53) % Math.round(height * 0.6);
    const r = (i % 3) * 0.6 + 0.4;
    stars += `<circle cx="${x}" cy="${y}" r="${r}" fill="#aab4d8" opacity="${0.25 + (i % 5) * 0.1}"/>`;
  }

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b0f1d"/>
      <stop offset="55%" stop-color="#170a1c"/>
      <stop offset="100%" stop-color="#050507"/>
    </linearGradient>
    <radialGradient id="rift" cx="50%" cy="82%" r="55%">
      <stop offset="0%" stop-color="#ff1b25" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#7a0c12" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky)"/>
  ${stars}
  <ellipse cx="50%" cy="80%" rx="${Math.round(width * 0.55)}" ry="${Math.round(height * 0.55)}" fill="url(#rift)"/>
  ${trees}
</svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

