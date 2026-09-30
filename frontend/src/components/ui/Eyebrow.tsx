import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: string;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Kicker über Headlines: Glutstrich + gesperrte Versalien. */
export function Eyebrow({ children, tone = 'dark', className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'text-eyebrow inline-flex items-center gap-3 font-semibold uppercase',
        tone === 'light' ? 'text-accent' : 'text-accent-700',
        className,
      )}
    >
      <span aria-hidden="true" className="h-0.5 w-7 bg-accent" />
      {children}
    </p>
  );
}
