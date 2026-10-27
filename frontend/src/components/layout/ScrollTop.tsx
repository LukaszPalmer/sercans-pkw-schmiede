'use client';

import { useEffect, useRef, type MouseEvent } from 'react';
import { Icon } from '@/components/ui/Icon';

/** Sichtbar, sobald mehr als dieser Anteil der Fensterhöhe gescrollt ist. */
const SHOW_FROM = 0.6;
/** Abstand zu Elementen mit `data-scroll-top-clear` (Rechtszeile der Fußzeile), über denen die Schaltfläche stehen bleibt. */
const CLEARANCE = 16;
/** Umfang des Fortschrittsrahmens (4 × 46). */
const PERIMETER = 184;

/**
 * „Nach oben“: Graphitfeld unten rechts auf allen Seiten und Breiten, mobil über der Aktionsleiste. Erscheint nach dem
 * ersten Bildschirm, der himmelblaue Rahmen füllt sich mit dem Lesefortschritt, ein Klick fährt sanft an den Seitenanfang.
 * Am Seitenende rückt es über die Rechtslinks der Fußzeile, damit nichts verdeckt wird.
 */
export function ScrollTop() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const { scrollY, innerHeight } = window;
      const max = document.documentElement.scrollHeight - innerHeight;
      button.toggleAttribute('data-visible', scrollY > innerHeight * SHOW_FROM);
      button.style.setProperty('--progress', String(max > 0 ? Math.min(scrollY / max, 1) : 0));

      const clear = document.querySelector('[data-scroll-top-clear]');
      const bottom = innerHeight - parseFloat(getComputedStyle(button).bottom);
      const lift = clear ? bottom + CLEARANCE - clear.getBoundingClientRect().top : 0;
      button.style.transform = lift > 0 ? `translateY(${-lift}px)` : '';
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = (e: MouseEvent<HTMLButtonElement>) => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    // Per Tastatur ausgelöst: Fokus an den Seitenanfang, statt auf der ausgeblendeten Schaltfläche zu bleiben
    if (e.detail === 0) document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true });
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toTop}
      aria-label="Nach oben"
      className="group/top invisible fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[calc(5rem+env(safe-area-inset-bottom))] z-40 grid size-12 translate-y-3 cursor-pointer place-items-center bg-night/90 text-white opacity-0 ring-1 ring-white/15 ring-inset backdrop-blur-md transition-[opacity,translate,visibility,background-color] duration-500 ease-forge hover:bg-primary data-visible:visible data-visible:translate-y-0 data-visible:opacity-100 md:bottom-6 print:hidden"
    >
      <svg aria-hidden="true" viewBox="0 0 48 48" className="pointer-events-none absolute inset-0 size-full">
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={PERIMETER}
          style={{ strokeDashoffset: `calc((1 - var(--progress, 0)) * ${PERIMETER}px)` }}
          className="text-sky transition-colors duration-500 group-hover/top:text-white"
        />
      </svg>
      <Icon name="arrow-up" className="size-5 transition-transform duration-300 ease-forge group-hover/top:-translate-y-0.5" />
    </button>
  );
}
