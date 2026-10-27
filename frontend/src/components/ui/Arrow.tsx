import { cn } from '@/lib/cn';

/**
 * „↗“ wie im Design (Inter Regular). Das Zeichen fehlt im latin-Subset der Webschrift, deshalb als Kontur –
 * mit den Maßen der Glyphe aus Figma: 1 em Vorschub, 0,544 em groß, 0,198 em Vorbreite, Oberkante 0,746 em
 * über der Grundlinie. Die Box ist so hoch wie eine Textzeile (1,21 em) und sitzt auf der Grundlinie.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('relative inline-block h-[1.21em] w-[1em] shrink-0 align-[-0.2422em]', className)}>
      <svg viewBox="0 0 10.881 10.895" fill="currentColor" className="absolute top-[0.2225em] left-[0.198em] size-[0.544em]">
        <path d="M1.108 10.895 0 9.787l8.239-8.253H1.875L1.889 0h8.992v9.006H9.332l.015-6.364-8.239 8.253Z" />
      </svg>
    </span>
  );
}
