'use client';

import { useId, useState, type ReactNode } from 'react';
import { controlClass } from '@/components/ui/FormField';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import type { FaqEntry, FaqTopic, FaqTopicId } from '@/types/faq';
import { FaqList } from './FaqList';

interface FaqExplorerProps {
  topics: FaqTopic[];
  items: FaqEntry[];
  /** Kapitelzeile, Titel und Einleitung – über Suche und Themen. */
  heading: ReactNode;
  /** Unter den Fragen: der direkte Draht für alles, was nicht dabei ist. */
  footer: ReactNode;
}

/** Vorschläge, wenn die Suche nichts findet. */
const suggestions = ['Termin', 'Kosten', 'Öffnungszeiten', 'TÜV'];

/** Kleinschreibung plus Umlaut-Varianten: „Öl“ wird auch mit „ol“ und „oel“ gefunden, „Straße“ mit „strasse“. */
function searchForms(text: string) {
  const lower = text.toLowerCase();
  return [
    lower,
    lower.normalize('NFD').replace(/\p{M}/gu, ''),
    lower.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss'),
  ];
}

const chip =
  'inline-flex min-h-10 cursor-pointer items-center gap-2 px-4 text-sm leading-[1.21] ring-1 ring-inset transition-[background-color,box-shadow,color,opacity] duration-300 ease-forge';

/**
 * Durchsuchbare FAQ: Suchfeld und Themen links (ab lg mitlaufend), rechts die Fragen zum Aufklappen – zunächst vier,
 * weitere je vier über „Weitere Fragen anzeigen“; offen ist immer nur eine Antwort. Die Suche prüft Frage, Antwort und
 * hinterlegte Stichworte („TÜV“ findet die HU/AU), Treffer werden markiert, der erste gleich aufgeklappt.
 * Die Zähler an den Themen folgen der Suche; findet sie nichts, gibt es Vorschläge oder den Weg in die übrigen Themen.
 */
export function FaqExplorer({ topics, items, heading, footer }: FaqExplorerProps) {
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState<FaqTopicId | null>(null);

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const hits = items.filter((item) => {
    const forms = searchForms(`${item.question} ${item.answer} ${item.keywords ?? ''}`);
    return terms.every((term) => forms.some((form) => form.includes(term)));
  });
  const shown = topic ? hits.filter((item) => item.topic === topic) : hits;
  const filtered = terms.length > 0 || topic !== null;
  const topicLabel = topics.find((t) => t.id === topic)?.label;

  const search = (text: string) => {
    setTopic(null);
    setQuery(text);
  };
  const reset = () => search('');

  return (
    <div className="container-site flex flex-col gap-10 lg:flex-row lg:gap-[6.25rem]">
      <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:w-[33.18%] lg:shrink-0 lg:self-start">
        {heading}

        <div role="search" className="reveal flex flex-col gap-4">
          <label htmlFor={inputId} className="sr-only">
            Fragen durchsuchen
          </label>
          <div className="relative">
            <Icon name="search" className="pointer-events-none absolute top-1/2 left-[1.125rem] size-5 -translate-y-1/2 text-muted" />
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Frage oder Stichwort"
              autoComplete="off"
              enterKeyHint="search"
              className={cn(controlClass, 'h-14 pr-12 pl-12 [&::-webkit-search-cancel-button]:appearance-none')}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute top-1/2 right-1.5 grid size-11 -translate-y-1/2 cursor-pointer place-items-center text-muted transition-colors hover:text-ink"
              >
                <Icon name="close" className="size-5" />
                <span className="sr-only">Suche leeren</span>
              </button>
            )}
          </div>

          <div role="group" aria-label="Nach Thema filtern" className="flex flex-wrap gap-2">
            {[{ id: null, label: 'Alle' }, ...topics].map((t) => {
              const active = topic === t.id;
              const count = t.id ? hits.filter((item) => item.topic === t.id).length : hits.length;
              return (
                <button
                  key={t.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTopic(t.id)}
                  className={cn(
                    chip,
                    active ? 'bg-night text-white ring-night' : 'text-ink ring-line hover:ring-ink/40',
                    !active && count === 0 && 'opacity-45',
                  )}
                >
                  {t.label}
                  <span className={cn('text-[0.6875rem] tabular-nums', active ? 'text-sky' : 'text-primary')}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-1">
        <div className="flex min-h-6 items-center justify-between gap-4 text-[0.8125rem] leading-[1.21] text-muted">
          <p aria-live="polite">{filtered ? `${shown.length} von ${items.length} Fragen` : `${items.length} Fragen`}</p>
          {filtered && (
            <button type="button" onClick={reset} className="cursor-pointer text-primary transition-colors duration-300 hover:text-ink">
              Filter zurücksetzen
            </button>
          )}
        </div>

        {shown.length > 0 ? (
          <FaqList key={`${topic ?? 'alle'}|${terms.join(' ')}`} items={shown} marks={terms} exclusive batch={4} />
        ) : (
          <div className="flex flex-col items-start gap-4 border-y border-line py-8">
            <p className="text-question">
              {hits.length > 0 ? `In „${topicLabel}“ gibt es dazu keine Frage.` : 'Dazu haben wir noch keine Antwort.'}
            </p>
            {hits.length > 0 ? (
              <button type="button" onClick={() => setTopic(null)} className={cn(chip, 'text-ink ring-line hover:ring-ink/40')}>
                In allen Themen zeigen
                <span className="text-[0.6875rem] text-primary tabular-nums">{hits.length}</span>
              </button>
            ) : (
              <>
                <p className="text-base leading-[1.65] text-muted">Versuchen Sie ein anderes Stichwort – oder fragen Sie uns direkt.</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button key={s} type="button" onClick={() => search(s)} className={cn(chip, 'text-ink ring-line hover:ring-ink/40')}>
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {footer}
      </div>
    </div>
  );
}
