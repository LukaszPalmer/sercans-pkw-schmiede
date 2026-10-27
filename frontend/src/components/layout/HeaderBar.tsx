'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Ab dieser Scrolltiefe wird die Leiste kompakt – genau so weit, wie sie dabei schrumpft (100 → 76 px), damit nichts aufblitzt. */
const COMPACT_FROM = 24;
/** So lange ohne Scrollereignis gilt das Scrollen als beendet – dann kehrt die Leiste zurück. */
const IDLE_MS = 250;

/**
 * Rahmen der Kopfzeile: Der <header> hält im Seitenfluss den Platz frei, die Leiste darin ist fixiert.
 * Beim Scrollen gleitet sie nach oben weg und kommt zurück, sobald das Scrollen stoppt. Oben auf der Seite bleibt sie stehen,
 * ebenso solange das Leistungs-Menü offen ist, per Tastatur in ihr navigiert wird oder reduzierte Bewegung gewünscht ist.
 * Nach dem ersten Scrollen wird sie gläsern mit Haarlinie, ab lg zusätzlich kompakter.
 */
export function HeaderBar({ children }: { children: ReactNode }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let idle: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    // Ereignisse der laufenden Scrollbewegung: Ein einzelner Sprung (Seitenwechsel, Zurück-Taste) blendet nicht aus
    let events = 0;

    const show = () => bar.removeAttribute('data-hidden');

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      bar.toggleAttribute('data-scrolled', y > COMPACT_FROM);
      const pinned =
        y <= (bar.parentElement?.offsetHeight ?? 0) ||
        reducedMotion.matches ||
        bar.querySelector(':focus-visible, [aria-expanded="true"]') !== null;
      if (pinned) show();
      else if (events > 1) bar.setAttribute('data-hidden', '');
    };

    const onScroll = () => {
      events += 1;
      if (!frame) frame = requestAnimationFrame(update);
      clearTimeout(idle);
      idle = setTimeout(() => {
        events = 0;
        show();
      }, IDLE_MS);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    bar.addEventListener('focusin', show);
    return () => {
      window.removeEventListener('scroll', onScroll);
      bar.removeEventListener('focusin', show);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, []);

  return (
    <header className="h-16 lg:h-[6.25rem]">
      <div
        ref={barRef}
        className="group/header fixed inset-x-0 top-0 z-50 h-16 border-b border-transparent bg-paper text-ink transition-[translate,height,background-color,border-color] duration-500 ease-forge data-hidden:-translate-y-full data-scrolled:border-line data-scrolled:bg-paper/95 data-scrolled:backdrop-blur-xl data-scrolled:backdrop-saturate-150 lg:h-[6.25rem] lg:data-scrolled:h-[4.75rem] print:absolute"
      >
        {children}
      </div>
    </header>
  );
}
