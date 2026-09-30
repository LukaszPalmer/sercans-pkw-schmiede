import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Markenfarben für SVG-Grafiken (identisch zu den CSS-Tokens). */
export const C = {
  white: '#ffffff',
  primary: '#0b1b2b',
  secondary: '#1f4e79',
  steel: '#8fb4da',
  accent: '#ff8a33',
  accentLight: '#ffb27a',
} as const;

/** Referenz auf eine Definition im jeweiligen Grafik-Namespace. */
export const url = (id: string, name: string) => `url(#${id}-${name})`;

export const DISPLAY_FONT = { fontFamily: 'var(--font-archivo)', fontVariationSettings: "'wdth' 112" } as const;

/** Seitenprofil eines Coupés – geteilt von Marken- und Aufbereitungsgrafik. */
export const CAR_PROFILE =
  'M62 262V236q2-16 22-20l36-6q44-44 94-54q46-8 92 2q34 8 64 36l46 10q20 4 22 22v36q-1 8-10 8h-28a34 34 0 0 0-66 0H164a34 34 0 0 0-66 0H70q-8 0-8-8z';
export const CAR_WINDOWS = 'M138 212q40-38 80-46v46zM232 166q36-4 70 6q22 8 40 40H232z';

interface GraphicFrameProps {
  id: string;
  title: string;
  fig: string;
  caption: string;
  className?: string;
  children: ReactNode;
}

/**
 * Rahmen im Stil einer technischen Zeichnung: Nachtstahl-Verlauf, Blueprint-Raster,
 * Glut-Glow, Schnittmarken und Zeichnungskopf. Inhalte zeichnen in einem 480×400-Raster.
 */
export function GraphicFrame({ id, title, fig, caption, className, children }: GraphicFrameProps) {
  return (
    <figure className={cn('relative', className)}>
      <div className="chamfer-frame bg-primary shadow-card [--chamfer:2.25rem]">
        <svg viewBox="0 0 480 400" role="img" aria-labelledby={`${id}-title`} className="block h-auto w-full">
          <title id={`${id}-title`}>{title}</title>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#06111c" />
              <stop offset="0.55" stopColor={C.primary} />
              <stop offset="1" stopColor="#15314c" />
            </linearGradient>
            <radialGradient id={`${id}-glow`} cx="0.85" cy="0.12" r="0.65">
              <stop offset="0" stopColor={C.accent} stopOpacity="0.3" />
              <stop offset="1" stopColor={C.accent} stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`${id}-glow2`} cx="0.05" cy="1" r="0.7">
              <stop offset="0" stopColor={C.secondary} stopOpacity="0.75" />
              <stop offset="1" stopColor={C.secondary} stopOpacity="0" />
            </radialGradient>
            <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0v24" fill="none" stroke={C.white} strokeOpacity="0.055" />
            </pattern>
            <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={C.accent} />
              <stop offset="1" stopColor={C.accentLight} />
            </linearGradient>
            <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.white} stopOpacity="0.18" />
              <stop offset="1" stopColor={C.steel} stopOpacity="0.04" />
            </linearGradient>
            <marker
              id={`${id}-arrow`}
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 8 4 0 8z" fill={C.accent} />
            </marker>
          </defs>

          <rect width="480" height="400" fill={url(id, 'bg')} />
          <rect width="480" height="400" fill={url(id, 'grid')} />
          <rect width="480" height="400" fill={url(id, 'glow2')} />
          <rect width="480" height="400" fill={url(id, 'glow')} />

          <g stroke={C.white} strokeOpacity="0.4" strokeWidth="1.25" fill="none">
            <path d="M16 34V16h18M446 384h18v-18M16 366v18h18" />
          </g>
          <text x="30" y="42" fill={C.white} fillOpacity="0.55" fontSize="10" letterSpacing="2.4" fontWeight="600">
            FIG. {fig} — {caption}
          </text>
          <path d="M30 50h40" stroke={C.accent} strokeWidth="2" />

          {children}
        </svg>
      </div>
    </figure>
  );
}

interface DimProps {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  offset?: number;
}

/** Bemaßungslinie mit Pfeilen und zentrierter Beschriftung. */
export function Dim({ id, x1, y1, x2, y2, label, offset = -8 }: DimProps) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const vertical = Math.abs(x2 - x1) < Math.abs(y2 - y1);
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={C.accent}
        strokeWidth="1.25"
        markerStart={url(id, 'arrow')}
        markerEnd={url(id, 'arrow')}
      />
      <text
        x={vertical ? mx + 10 : mx}
        y={vertical ? my + 4 : my + offset}
        textAnchor={vertical ? 'start' : 'middle'}
        fill={C.accentLight}
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="1.2"
      >
        {label}
      </text>
    </g>
  );
}

interface TagProps {
  x: number;
  y: number;
  text: string;
  anchor?: 'start' | 'middle' | 'end';
  muted?: boolean;
}

/** Technische Beschriftung (Versalien, gesperrt). */
export function Tag({ x, y, text, anchor = 'start', muted = false }: TagProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={C.white}
      fillOpacity={muted ? 0.5 : 0.85}
      fontSize="10"
      fontWeight="600"
      letterSpacing="1.6"
    >
      {text}
    </text>
  );
}

/** Vierzackiger Glanzfunke. */
export function Spark({ x, y, r = 8, fill = C.accent }: { x: number; y: number; r?: number; fill?: string }) {
  const s = r * 0.22;
  return <path d={`M${x} ${y - r}L${x + s} ${y - s}L${x + r} ${y}L${x + s} ${y + s}L${x} ${y + r}L${x - s} ${y + s}L${x - r} ${y}L${x - s} ${y - s}z`} fill={fill} />;
}

/** Häkchen-Box für Checklisten. */
export function CheckBox({ x, y, size = 18 }: { x: number; y: number; size?: number }) {
  const k = size / 18;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={size} height={size} fill={C.accent} />
      <path d={`M${4.5 * k} ${9.5 * k}l${3 * k} ${3 * k}l${6 * k} ${-7 * k}`} stroke={C.primary} strokeWidth={2.4 * k} fill="none" />
    </g>
  );
}

/** Zahnradkontur als Pfad (für Reparatur- und Leistungsgrafik). */
export function gearPath(cx: number, cy: number, rOuter: number, rInner: number, teeth: number): string {
  const step = (Math.PI * 2) / teeth;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const angles = [a - step * 0.3, a - step * 0.18, a + step * 0.18, a + step * 0.3];
    const radii = [rInner, rOuter, rOuter, rInner];
    angles.forEach((ang, j) => {
      const r = radii[j] ?? rInner;
      pts.push(`${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy + r * Math.sin(ang)).toFixed(1)}`);
    });
  }
  return `M${pts.join('L')}z`;
}

/** Sechskant (Spitze oben). */
export function hexPath(cx: number, cy: number, r: number): string {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join('L')}z`;
}
