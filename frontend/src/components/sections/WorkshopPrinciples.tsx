import { Kicker } from '@/components/ui/Kicker';
import { pad2 } from '@/lib/format';
import type { TitledText } from '@/types/service';

/** Werkstattprinzipien auf Graphit: Kicker als Überschrift, drei Zeilen mit Kennung, Grundsatz und Erläuterung. */
export function WorkshopPrinciples({ kicker, items }: { kicker: string; items: TitledText[] }) {
  return (
    <section aria-labelledby="massstab-title" className="bg-night text-white">
      <div className="container-site flex flex-col gap-11 py-sec-80">
        <Kicker as="h2" id="massstab-title" tone="night" className="reveal">
          {kicker}
        </Kicker>
        <ol className="flex flex-col gap-11">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="reveal grid gap-3 border-t border-muted pt-[1.875rem] md:grid-cols-[5.02%_43.6%_minmax(0,1fr)] md:gap-12"
            >
              <span className="text-xs leading-[1.21] text-sky tabular-nums">{pad2(i + 1)}</span>
              <h3 className="text-h3-xl font-light">{item.title}</h3>
              <p className="text-[1.0625rem] leading-[1.65] text-fog">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
