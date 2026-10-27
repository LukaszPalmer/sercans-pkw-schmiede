import { cn } from '@/lib/cn';

interface KickerProps {
  children: string;
  /** `night` auf Graphit und Fotos: Markierung himmelblau, Text fog. */
  tone?: 'paper' | 'night';
  as?: 'p' | 'h2';
  id?: string;
  className?: string;
}

/** Kapitelzeile über Überschriften wie im Design: 22 × 2 px Markierung, Versalien 11 px Medium. */
export function Kicker({ children, tone = 'paper', as: Tag = 'p', id, className }: KickerProps) {
  const night = tone === 'night';
  return (
    <Tag
      id={id}
      className={cn(
        'flex items-center gap-3 text-[0.6875rem] leading-[1.21] font-medium uppercase',
        night ? 'text-fog' : 'text-muted',
        className,
      )}
    >
      <span aria-hidden="true" className={cn('h-0.5 w-[1.375rem] shrink-0', night ? 'bg-sky' : 'bg-primary')} />
      <span>{children}</span>
    </Tag>
  );
}
