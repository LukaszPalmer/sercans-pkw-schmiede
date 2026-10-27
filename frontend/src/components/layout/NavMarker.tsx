import { cn } from '@/lib/cn';

/**
 * Markierung der Hauptnavigation: 20 × 2 px Präzisionsblau 8 px unter dem Wort, ohne die Zeile zu verschieben.
 * Beim aktiven Punkt steht sie, bei den übrigen läuft sie beim Hover von links ein (Elternelement trägt `group/nav`).
 */
export function NavMarker({ shown }: { shown: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute top-full left-0 mt-2 h-0.5 w-5 origin-left bg-primary transition-transform duration-300 ease-forge',
        shown ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100',
      )}
    />
  );
}
