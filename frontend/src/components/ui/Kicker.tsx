import { cn } from '@/lib/cn';

interface KickerProps {
  children: string;
  /** `night` auf Graphit und Fotos: Markierung himmelblau, Text fog. `ccs` im Inhouse-Partner-Abschnitt: beides im Clean-Car-Akzent. */
  tone?: keyof typeof tones;
  as?: 'p' | 'h2';
  id?: string;
  className?: string;
}

const tones = {
  paper: { text: 'text-muted', mark: 'bg-primary' },
  night: { text: 'text-fog', mark: 'bg-sky' },
  ccs: { text: 'text-ccs', mark: 'bg-ccs' },
};

/** Kapitelzeile über Überschriften wie im Design: 22 × 2 px Markierung, Versalien 11 px Medium. */
export function Kicker({ children, tone = 'paper', as: Tag = 'p', id, className }: KickerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'flex items-center gap-3 text-[0.6875rem] leading-[1.21] font-medium uppercase',
        tones[tone].text,
        className,
      )}
    >
      <span aria-hidden="true" className={cn('h-0.5 w-[1.375rem] shrink-0', tones[tone].mark)} />
      <span>{children}</span>
    </Tag>
  );
}
