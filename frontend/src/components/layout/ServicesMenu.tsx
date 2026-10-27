'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState, type CSSProperties, type FocusEvent, type PointerEvent as ReactPointerEvent } from 'react';
import { Arrow } from '@/components/ui/Arrow';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/cn';
import { pad2 } from '@/lib/format';
import { NavMarker } from './NavMarker';

export interface NavService {
  slug: string;
  title: string;
  teaser: string;
}

interface ServicesMenuProps {
  label: string;
  /** Übersicht auf der Startseite – Ziel von „Alle Leistungen ↓“. */
  href: string;
  /** Eine Leistungsseite ist geöffnet: Menüpunkt blau mit Markierung wie die übrigen Punkte. */
  active: boolean;
  services: NavService[];
}

/**
 * Menüpunkt „Leistungen“ mit großem Dropdown im Stil der Leistungsübersicht der Startseite: mittig unter der Kopfzeile,
 * 896 px breit – Kopf mit Kapitelzeile und „Alle Leistungen ↓“, darunter die neun Leistungen im Dreierraster mit Kennung,
 * Name, Kurzbeschreibung und Pfeil, die Leistung der aktuellen Seite eisblau. Beim Öffnen gleiten die Einträge gestaffelt ein.
 * Disclosure-Pattern: Klick, Hover, Escape, Klick außerhalb, Tab heraus.
 */
export function ServicesMenu({ label, href, active, services }: ServicesMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  /** Per Hover geöffnet: Der folgende Klick auf „Leistungen“ schließt das Menü nicht gleich wieder. */
  const openedByHover = useRef(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (rootRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
      setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  // Schließen mit Verzögerung: Zeit für den schrägen Weg vom Menüpunkt zu den äußeren Spalten
  const hover = (next: boolean) => (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(
      () => {
        openedByHover.current = next;
        setOpen(next);
      },
      next ? 80 : 250,
    );
  };

  const toggle = () => {
    clearTimeout(hoverTimer.current);
    const keepOpen = openedByHover.current;
    openedByHover.current = false;
    setOpen((v) => keepOpen || !v);
  };

  // Tab aus dem Menü heraus schließt es – Klicks außerhalb erledigt der pointerdown-Handler
  const onBlur = (e: FocusEvent<HTMLLIElement>) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
  };

  return (
    <li ref={rootRef} onPointerEnter={hover(true)} onPointerLeave={hover(false)} onBlur={onBlur} className="flex">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className={cn(
          'group/nav relative cursor-pointer text-sm leading-[1.21] transition-colors duration-300 hover:text-primary',
          active || open ? 'text-primary' : 'text-ink',
          // Brücke bis zur Unterkante der Kopfzeile – schmaler als der Abstand zu den Nachbarpunkten (36 px)
          open && 'before:absolute before:-inset-x-8 before:top-full before:h-12',
        )}
      >
        {label}
        <NavMarker shown={active || open} />
      </button>

      {/* Bezug ist die fixierte Kopfzeilen-Leiste: oben an ihrer Unterkante, mittig unter der Navigation */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full mx-auto w-[min(56rem,calc(100%-2rem))] overflow-hidden rounded-lg border border-line bg-white transition-[opacity,translate] duration-300 ease-forge starting:-translate-y-2 starting:opacity-0"
      >
        <div className="flex h-14 items-center justify-between border-b border-line bg-paper px-6">
          <Kicker>Unsere Leistungen</Kicker>
          <Link
            href={href}
            onClick={() => setOpen(false)}
            className="group/all flex items-center gap-2 text-sm leading-[1.21] font-medium text-primary transition-colors duration-300 hover:text-ink"
          >
            Alle Leistungen
            <span aria-hidden="true" className="text-lg leading-[1.21] font-normal text-primary transition-transform duration-300 ease-forge group-hover/all:translate-y-0.5">
              ↓
            </span>
          </Link>
        </div>
        <ul className="grid grid-cols-3 gap-1 p-2">
          {services.map((s, i) => {
            const current = pathname === `/leistungen/${s.slug}`;
            return (
              <li
                key={s.slug}
                style={{ '--i': i } as CSSProperties}
                className="transition-[opacity,translate] delay-[calc(var(--i)*35ms)] duration-500 ease-forge starting:translate-y-1.5 starting:opacity-0"
              >
                <Link
                  href={`/leistungen/${s.slug}`}
                  aria-current={current ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'group/item flex h-full flex-col gap-2.5 rounded-md p-4 transition-colors duration-300 focus-visible:-outline-offset-2',
                    current ? 'bg-ice' : 'hover:bg-paper',
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span className="text-[0.6875rem] leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
                    <Arrow className="text-lg text-primary transition-transform duration-300 ease-forge group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                  </span>
                  <span
                    className={cn(
                      'text-lg leading-[1.21] transition-colors duration-300',
                      current ? 'font-medium text-primary' : 'text-ink group-hover/item:text-primary',
                    )}
                  >
                    {s.title}
                  </span>
                  <span className="text-sm leading-[1.5] text-muted">{s.teaser}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
