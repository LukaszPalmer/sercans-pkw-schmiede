import type { SVGProps } from 'react';
import { cn } from '@/lib/cn';

interface LogoMarkProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
  className?: string;
  /** Eindeutiges Präfix für SVG-IDs (mehrere Logos pro Seite). */
  idPrefix?: string;
}

/**
 * Bildmarke „Schmiede-Mutter“: Sechskant (Schraubenmutter) als Symbol für Werkstatt-Präzision,
 * darin ein gefastes „S“ wie aus Flachstahl geschmiedet, der Glutfunke als Akzent.
 */
export function LogoMark({ className = 'size-10', idPrefix = 'logo', ...svgProps }: LogoMarkProps) {
  const gradientId = `${idPrefix}-hex`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false" {...svgProps}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#1f4e79" />
          <stop offset="1" stopColor="#0b1b2b" />
        </linearGradient>
      </defs>
      <path d="M24 1.5 43.5 12.75v22.5L24 46.5 4.5 35.25v-22.5z" fill={`url(#${gradientId})`} />
      <path d="M24 3.8 41.5 13.9v20.2L24 44.2 6.5 34.1V13.9z" fill="none" stroke="#ffffff" strokeOpacity="0.16" />
      <path
        d="M31 14.5H19.5l-4 4v2l4 4h9l4 4v2l-4 4H16.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="m36 11.2 2.9 2.9-2.9 2.9-2.9-2.9z" fill="#ff8a33" />
    </svg>
  );
}

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
  idPrefix?: string;
}

/** Wort-Bild-Marke: Mark + zweizeilige Wortmarke im Extended-Schnitt. */
export function Logo({ tone = 'light', className, idPrefix }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <LogoMark className="size-10 shrink-0 sm:size-11" idPrefix={idPrefix} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-wide text-[1.0625rem] font-extrabold tracking-[0.08em] sm:text-[1.1875rem]',
            tone === 'light' ? 'text-white' : 'text-primary',
          )}
        >
          SERCANS
        </span>{' '}
        <span
          className={cn(
            'mt-1.5 text-[0.625rem] font-semibold tracking-[0.34em] sm:text-[0.6875rem]',
            tone === 'light' ? 'text-accent' : 'text-accent-700',
          )}
        >
          PKW SCHMIEDE
        </span>
      </span>
    </span>
  );
}
