import { Kicker } from '@/components/ui/Kicker';
import { pad2 } from '@/lib/format';
import type { Service } from '@/types/service';

/**
 * „Gut vorbereitet“ auf Weiß in den zwei Varianten des Designs:
 * `aside` Titel mit hellblauer Hinweisbox links, nummerierte Schritte rechts ·
 * `stacked` Titelzeile mit Hinweis rechts, darunter drei Schritte als Spalten („01 /“).
 */
export function Preparation({ preparation }: { preparation: Service['preparation'] }) {
  const { layout, title, notice, steps } = preparation;

  if (layout === 'stacked') {
    return (
      <section aria-labelledby="vorbereitung-title" className="bg-white">
        <div className="container-site flex flex-col gap-12 py-sec-80">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[6.25rem]">
            {/* 50,077 % = 649 statt 650 px bei 1440: Chrome misst „Erst die Fläche. Dann das Finish.“ 0,1 px schmaler als Figma – Umbruch wie im Design */}
            <div className="reveal flex flex-col gap-6 lg:w-[50.077%] lg:shrink-0">
              <Kicker>Gut vorbereitet</Kicker>
              <h2 id="vorbereitung-title" className="text-h2-sm font-light">
                {title}
              </h2>
            </div>
            <p className="reveal text-[0.9375rem] leading-[1.65] text-muted lg:flex-1">{notice}</p>
          </div>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
            {steps.map((step, i) => (
              <li key={step.title} className="reveal flex flex-col gap-[1.125rem] border-t border-line pt-6">
                <span className="text-xs leading-[1.21] text-primary tabular-nums">{pad2(i + 1)} /</span>
                <h3 className="text-step">{step.title}</h3>
                <p className="text-base leading-[1.65] text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="vorbereitung-title" className="bg-white">
      <div className="container-site flex flex-col gap-10 py-sec-80 lg:flex-row lg:gap-[6.25rem]">
        <div className="reveal flex flex-col gap-6 lg:w-[33.95%] lg:shrink-0">
          <Kicker>Gut vorbereitet</Kicker>
          <h2 id="vorbereitung-title" className="text-h2-sm font-light">
            {title}
          </h2>
          <aside aria-label="Wichtig zu wissen" className="flex flex-col gap-[0.875rem] bg-ice p-6">
            <p className="text-[0.6875rem] leading-[1.21] text-primary">WICHTIG ZU WISSEN</p>
            <p className="text-[0.9375rem] leading-[1.65]">{notice}</p>
          </aside>
        </div>
        <ol className="flex flex-col gap-[1.625rem] lg:flex-1">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal flex gap-6 border-t border-line pt-[1.375rem]">
              <span className="w-[1.875rem] shrink-0 text-xs leading-[1.21] text-primary tabular-nums">{pad2(i + 1)}</span>
              {/* 2 px Luft für Sätze, die in Figma die Spalte exakt füllen (Autoglas, Schritt 01) */}
              <div className="flex flex-col gap-2.5 lg:-mr-0.5">
                <h3 className="text-step-sm">{step.title}</h3>
                <p className="text-base leading-[1.6] text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
