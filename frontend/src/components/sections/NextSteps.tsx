import { Kicker } from '@/components/ui/Kicker';
import { pad2 } from '@/lib/format';
import type { TitledText } from '@/types/service';

/** „Wie es weitergeht“ (Kontakt): Graphit, drei Schritte mit „01 /“, dünnem Titel und Erläuterung. */
export function NextSteps({ kicker, steps }: { kicker: string; steps: TitledText[] }) {
  return (
    <section aria-labelledby="weiter-title" className="bg-night text-white">
      <div className="container-site flex flex-col gap-[2.625rem] py-sec-72">
        <Kicker as="h2" id="weiter-title" tone="night" className="reveal">
          {kicker}
        </Kicker>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-x-[3.75rem]">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal flex flex-col gap-[1.125rem]">
              <span className="text-xs leading-[1.21] text-sky tabular-nums">{pad2(i + 1)} /</span>
              <h3 className="text-h3-sm font-light">{step.title}</h3>
              <p className="text-base leading-[1.65] text-fog">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
