'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { pad2 } from '@/lib/format';

interface SwipeRailProps {
  /** Anzahl der Karten für die Position „01 / 09“. */
  count: number;
  className?: string;
  /** Raster ab 768 px – darunter ist die Liste immer die wischbare Reihe. */
  listClassName?: string;
  /** Die Karten als <li>. */
  children: ReactNode;
}

/* Die Reihe läuft bis an den Bildschirmrand (Seitenrand wie container-site), die Karten rasten bündig mit dem Inhalt ein.
   Innenabstand oben/unten: Platz für den Fokusrahmen der Karten, den der Scrollbereich sonst abschneidet. */
const rail =
  'max-md:-mx-[clamp(1rem,5vw,4.5rem)] max-md:-my-2 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:overscroll-x-contain max-md:scroll-px-[clamp(1rem,5vw,4.5rem)] max-md:px-[clamp(1rem,5vw,4.5rem)] max-md:py-2 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden';

/* 82 % breit (höchstens 22 rem), damit die nächste Karte hereinschaut. */
const cards = 'max-md:*:w-[82%] max-md:*:max-w-[22rem] max-md:*:shrink-0 max-md:*:snap-start max-md:*:animate-none max-md:*:opacity-100';

/**
 * Kartenliste, die unter 768 px zur wischbaren Reihe wird: Die aktuelle Karte rastet links ein, die nächste schaut rechts
 * herein. Darunter wächst eine präzisionsblaue Linie mit dem Wischweg, daneben steht die Position „01 / 09“.
 * Scroll-Reveal: Mobil steigt die Reihe als Ganzes auf – einzeln würden die Karten außerhalb des Bildes erst beim Wischen
 * auftauchen –, ab 768 px wie gewohnt jede Karte für sich.
 */
export function SwipeRail({ count, className, listClassName, children }: SwipeRailProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const { scrollLeft, scrollWidth, clientWidth, children: items } = list;
      if (items.length < 2) return;
      const step = (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
      // Die letzte Karte kann nicht links einrasten – am Ende der Reihe gilt sie als aktuell
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 1;
      setIndex(atEnd ? items.length - 1 : step > 0 ? Math.round(scrollLeft / step) : 0);
      fillRef.current?.style.setProperty('scale', `${(scrollLeft + clientWidth) / scrollWidth} 1`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    list.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      list.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={cn('reveal md:animate-none md:opacity-100', className)}>
      <ul ref={listRef} className={cn(rail, cards, listClassName)}>
        {children}
      </ul>
      <div aria-hidden="true" className="mt-6 flex items-center gap-5 md:hidden">
        <span className="relative h-0.5 flex-1 bg-line">
          <span ref={fillRef} className="absolute inset-0 origin-left scale-x-0 bg-primary" />
        </span>
        <span className="text-[0.6875rem] leading-[1.21] text-muted tabular-nums">
          <span className="text-primary">{pad2(index + 1)}</span> / {pad2(count)}
        </span>
      </div>
    </div>
  );
}
