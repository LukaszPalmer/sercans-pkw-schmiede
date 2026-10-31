'use client';

import Link from 'next/link';
import { useRef, useState, type FocusEvent, type MouseEvent, type PointerEvent } from 'react';
import { Arrow } from '@/components/ui/Arrow';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Lines } from '@/components/ui/Lines';
import { cn } from '@/lib/cn';
import { pad2 } from '@/lib/format';
import type { IconName } from '@/types/icon';

export interface FocusService {
  slug: string;
  href: string;
  title: string;
  icon: IconName;
  headline: string;
  intro: string;
  action: string;
}

/**
 * Fokus-Tafel der Leistungsübersicht ab 1024 px: links die sieben Leistungen als Zeilen, rechts die Graphit-Tafel der
 * aktuellen Leistung mit Icon, Bannertitel, Einleitung und Aktion. Die aktuelle Zeile geht nahtlos in die Tafel über.
 * Maus und Tastaturfokus wechseln die Leistung, ein Klick auf die Zeile führt zur Leistungsseite. Ohne Hover (Tablet quer)
 * wählt der erste Tipp die Leistung, der zweite oder die Aktion in der Tafel führt hin.
 */
export function ServiceFocusBoard({ services }: { services: FocusService[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const active = services[activeIndex];
  if (!active) return null;

  // Wechsel mit Verzögerung: Auf dem schrägen Weg zur Aktion in der Tafel bleiben überquerte Zeilen ohne Wirkung
  const hover = (index: number) => (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveIndex(index), 120);
  };

  const focus = (index: number) => (e: FocusEvent) => {
    if (!e.currentTarget.matches(':focus-visible')) return;
    clearTimeout(hoverTimer.current);
    setActiveIndex(index);
  };

  const tap = (index: number) => (e: MouseEvent) => {
    if (index === activeIndex || !matchMedia('(hover: none)').matches) return;
    e.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div className="reveal mt-12 hidden lg:grid lg:grid-cols-[28rem_minmax(0,1fr)]">
      <ul onPointerLeave={() => clearTimeout(hoverTimer.current)} className="border-t border-line">
        {services.map((s, i) => {
          const current = i === activeIndex;
          return (
            <li key={s.slug} className="border-b border-line">
              <h3 className="text-item">
                {/* -my-px: Die aktuelle Zeile deckt ihre Haarlinien ab und schließt oben und unten bündig mit der Tafel */}
                <Link
                  href={s.href}
                  aria-current={current ? 'true' : undefined}
                  onPointerEnter={hover(i)}
                  onFocus={focus(i)}
                  onClick={tap(i)}
                  className={cn(
                    '-my-px flex items-center gap-3 px-5 py-[calc(1.25rem+1px)] transition-colors duration-200 ease-forge focus-visible:-outline-offset-2 focus-visible:outline-sky',
                    current ? 'bg-night text-white' : 'text-ink',
                  )}
                >
                  <span className={cn('w-7 shrink-0 text-[0.6875rem] leading-[1.21] tabular-nums', current ? 'text-sky' : 'text-primary')}>
                    {pad2(i + 1)}
                  </span>
                  <span className="min-w-0 flex-1">{s.title}</span>
                  <Arrow className={cn('text-[1.375rem] text-sky', !current && 'opacity-0')} />
                </Link>
              </h3>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-between gap-12 bg-night p-8 text-white xl:p-12">
        <span className="grid size-18 place-items-center text-sky ring-1 ring-steel ring-inset">
          <Icon name={active.icon} className="size-10" strokeWidth={1.05} />
        </span>
        <div className="flex flex-col items-start gap-5">
          <p className="text-h2-md font-light">
            <Lines text={active.headline} />
          </p>
          <p className="max-w-[34rem] text-[1.0625rem] leading-[1.6] text-fog">{active.intro}</p>
          <ButtonLink href={active.href} variant="light" className="mt-2 focus-visible:outline-sky">
            {active.action}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
