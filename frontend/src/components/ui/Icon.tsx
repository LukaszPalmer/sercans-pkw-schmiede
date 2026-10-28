import {
  ArrowUp,
  BadgeCheck,
  CalendarDays,
  Check,
  createLucideIcon,
  Droplet,
  FileSearch,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  Plus,
  Search,
  Snowflake,
  Sparkles,
  SprayCan,
  X,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/types/icon';

/* Eigene Glyphen für Leistungen, die lucide nicht abbildet – im selben 24er-Raster und mit derselben Strichführung. */
const Wheel = createLucideIcon('wheel', [
  ['circle', { cx: '12', cy: '12', r: '10', key: 'tire' }],
  ['circle', { cx: '12', cy: '12', r: '6.5', key: 'rim' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: 'hub' }],
  ['path', { d: 'M12 10V5.5M13.9 11.38l4.28-1.39M13.18 13.62l2.64 3.64M10.82 13.62l-2.64 3.64M10.1 11.38l-4.28-1.39', key: 'spokes' }],
]);
const Windshield = createLucideIcon('windshield', [
  ['path', { d: 'M7.75 5Q12 4.4 16.25 5Q17.75 5 18.14 6.45L21.11 17.55Q21.5 19 20 19Q12 17.9 4 19Q2.5 19 2.89 17.55L5.86 6.45Q6.25 5 7.75 5Z', key: 'pane' }],
  ['path', { d: 'M9.75 15.25l3.75-6', key: 'glare-long' }],
  ['path', { d: 'M13.75 15.5l2.25-3.5', key: 'glare-short' }],
]);
const Foil = createLucideIcon('foil', [
  ['path', { d: 'M13 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8', key: 'sheet' }],
  ['path', { d: 'M21 13l-8 8', key: 'fold' }],
  ['path', { d: 'M21 13c-2.8 0-5.3.4-6.6 1.4C13.4 15.7 13 18.2 13 21', key: 'flap' }],
]);

const glyphs: Record<Exclude<IconName, 'whatsapp'>, LucideIcon> = {
  phone: Phone,
  calendar: CalendarDays,
  check: Check,
  menu: Menu,
  close: X,
  'arrow-up': ArrowUp,
  search: Search,
  'map-pin': MapPin,
  plus: Plus,
  pause: Pause,
  play: Play,
  paint: SprayCan,
  oil: Droplet,
  shine: Sparkles,
  climate: Snowflake,
  wheel: Wheel,
  report: FileSearch,
  inspection: BadgeCheck,
  foil: Foil,
  glass: Windshield,
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

/** Linien-Ikonografie (Kontaktwege, Suche, Karte, „Nach oben“, Leistungen): 1,5-px-Striche mit runden Enden. */
export function Icon({ name, className = 'size-5', strokeWidth = 1.5 }: IconProps) {
  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
        <use href="#icon-whatsapp" />
      </svg>
    );
  }
  const Glyph = glyphs[name];
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" />;
}

/** SVG-Sprite: komplexe Marken-Glyphen einmal pro Dokument statt dutzendfach im HTML/RSC-Payload. */
export function IconSprite() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute size-0 overflow-hidden">
      <symbol id="icon-whatsapp" viewBox="0 0 24 24">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.41 9.41 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.05.63C5.77.63.66 5.74.66 12.02c0 2.01.52 3.97 1.52 5.7L.56 23.63l6.05-1.59a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.34-8.06z" />
      </symbol>
    </svg>
  );
}
