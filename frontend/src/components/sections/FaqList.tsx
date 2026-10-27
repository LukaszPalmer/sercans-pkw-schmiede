'use client';

import { useId, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Button, TextLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { pad2 } from '@/lib/format';
import type { FaqItem } from '@/types/faq';

interface FaqListProps {
  items: FaqItem[];
  /** Suchbegriffe, die in Frage und Antwort markiert werden. */
  marks?: string[];
  /** Nur eine Antwort zugleich offen: Wer eine weitere Frage öffnet, schließt die vorherige. */
  exclusive?: boolean;
  /** Zunächst so viele Fragen zeigen, weitere in gleichen Schritten über „Weitere Fragen anzeigen“. */
  batch?: number;
}

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Text mit hervorgehobenen Suchbegriffen (Groß-/Kleinschreibung egal). */
function Marked({ text, marks }: { text: string; marks: string[] }) {
  if (marks.length === 0) return text;
  return text.split(new RegExp(`(${marks.map(escapeRegExp).join('|')})`, 'gi')).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="bg-ice text-primary">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

/**
 * Häufige Fragen als Akkordeon: Ein Klick auf die Frage fährt die Antwort weich aus (Zeile 0fr → 1fr), der Text gleitet
 * nach, über der Haarlinie läuft eine präzisionsblaue Linie ein und das Plus dreht sich zum Minus. Die erste Antwort ist
 * offen; mehrere dürfen offen sein, mit `exclusive` nur eine. Zugeklappte Antworten sind inert – weder per Tab erreichbar
 * noch für Screenreader sichtbar. Mit `batch` stehen die übrigen Fragen schon im HTML, sind aber verborgen, bis sie
 * schrittweise eingeblendet werden – dann steigen sie nacheinander auf.
 */
export function FaqList({ items, marks = [], exclusive = false, batch }: FaqListProps) {
  const baseId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(items.slice(0, 1).map((item) => item.question)));
  const [limit, setLimit] = useState(batch ?? Infinity);

  const toggle = (question: string) =>
    setOpen((current) => {
      const next = new Set(exclusive ? [] : current);
      if (current.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });

  // Fokus auf die erste neue Frage – auch weil der Button verschwindet, sobald alle Fragen zu sehen sind
  const showMore = () => {
    const first = limit;
    flushSync(() => setLimit(first + (batch ?? 0)));
    listRef.current?.querySelectorAll<HTMLButtonElement>('h3 > button')[first]?.focus({ preventScroll: true });
  };

  return (
    <>
      <ul ref={listRef} className="border-b border-line">
        {items.map((item, i) => {
          const expanded = open.has(item.question);
          const panelId = `${baseId}-${i}`;
          const later = batch !== undefined && i >= batch;
          return (
            <li
              key={item.question}
              hidden={i >= limit}
              className={cn('reveal relative border-t border-line', later && 'motion-safe:animate-rise')}
              style={later ? { animationDelay: `${((i - batch) % batch) * 90}ms` } : undefined}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 -top-px h-0.5 origin-left bg-primary transition-transform duration-700 ease-forge',
                  expanded ? 'scale-x-100' : 'scale-x-0',
                )}
              />
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(item.question)}
                  className="group/q flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="w-5 shrink-0 text-[0.6875rem] leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
                    <span className="text-question transition-colors duration-300 group-hover/q:text-primary">
                      <Marked text={item.question} marks={marks} />
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative -my-2 grid size-10 shrink-0 place-items-center ring-1 ring-inset transition-[background-color,box-shadow,color] duration-500 ease-forge',
                      expanded ? 'bg-primary text-white ring-primary' : 'text-primary ring-line group-hover/q:ring-primary',
                    )}
                  >
                    <span className="absolute h-[1.5px] w-3.5 bg-current" />
                    <span className={cn('absolute h-3.5 w-[1.5px] bg-current transition-transform duration-500 ease-forge', expanded && 'rotate-90')} />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                inert={!expanded}
                className={cn('grid transition-[grid-template-rows] duration-500 ease-forge', expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
              >
                <div className="overflow-hidden">
                  <div
                    className={cn(
                      'flex flex-col items-start gap-4 pb-7 pl-10 transition-[opacity,translate] duration-500 ease-forge sm:pr-16',
                      expanded ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-2 opacity-0',
                    )}
                  >
                    <p className="text-base leading-[1.65] text-muted">
                      <Marked text={item.answer} marks={marks} />
                    </p>
                    {item.link && (
                      <TextLink href={item.link.href} className="text-sm leading-[1.21]">
                        {item.link.label}
                      </TextLink>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {limit < items.length && (
        <Button variant="outline" icon="plus" onClick={showMore} className="self-start">
          Weitere Fragen anzeigen
        </Button>
      )}
    </>
  );
}
