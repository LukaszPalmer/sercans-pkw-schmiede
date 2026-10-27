import { Kicker } from '@/components/ui/Kicker';
import { pad2 } from '@/lib/format';
import type { TitledText } from '@/types/service';

/** Arbeitsweise (Startseite): Kicker als Überschrift, drei Schritte mit „01 /“, dünnem Titel und Erläuterung. */
export function WorkSteps({ kicker, steps }: { kicker: string; steps: TitledText[] }) {
  return (
    <section aria-labelledby="arbeitsweise-title" className="py-sec-96">
      <div className="container-site">
        <Kicker as="h2" id="arbeitsweise-title" className="reveal">
          {kicker}
        </Kicker>
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-x-[3.75rem]">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal flex flex-col gap-5">
              <span className="text-[0.8125rem] leading-[1.21] text-primary tabular-nums">{pad2(i + 1)} /</span>
              <h3 className="text-h3-lg font-light">{step.title}</h3>
              <p className="text-[1.0625rem] leading-[1.65] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
