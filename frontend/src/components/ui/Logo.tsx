import Image from 'next/image';
import { cn } from '@/lib/cn';
import { site } from '@/lib/site';

interface LogoProps {
  /** `night` auf Graphit: Zahnrad im selben Präzisionsblau wie in der Kopfzeile, Schraubenschlüssel und Schrift weiß. */
  tone?: 'paper' | 'night';
  /** `md` Kopfzeile (60 px hoch, ab lg 94 px wie im Design) · `xl` Fußzeile (so groß wie zuvor: 317 px Rahmenbreite bei 1440 px). */
  size?: 'md' | 'xl';
  priority?: boolean;
  className?: string;
}

/**
 * Kundenlogo aus dem Design (Figma „PKW Schmiede Kundenlogo“, 200 × 94): halbes Zahnrad, Schraubenschlüssel mit Auto,
 * Schriftzug und Markenkern – Vektor-SVG aus Figma, Innenformen als echte Aussparungen (auf jedem Grund korrekt).
 * Der Leerraum links vor dem Zahnrad (7,6 von 200) ist abgeschnitten: Das Zahnrad steht bündig auf der Inhaltskante –
 * in Kopfzeile, Menü und Fußzeile auf derselben Linie, egal wie groß das Logo dargestellt wird.
 */
export function Logo({ tone = 'paper', size = 'md', priority = false, className }: LogoProps) {
  return (
    <Image
      src={tone === 'night' ? '/images/logo-night.svg' : '/images/logo.svg'}
      width={192}
      height={94}
      alt={site.shortName}
      priority={priority}
      className={cn(
        'block',
        size === 'xl' ? 'h-auto w-[clamp(14.7306rem,13.2063rem+6.5041vw,19.0596rem)]' : 'h-[3.75rem] w-auto lg:h-[5.875rem]',
        className,
      )}
    />
  );
}
