import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ProcessStep } from '@/types/service';

interface ProcessStepsProps {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  id?: string;
}

/** Ablauf als technische Zeitleiste – horizontal ab Laptop, vertikal auf Mobile. */
export function ProcessSteps({
  steps,
  eyebrow = 'Der Ablauf',
  title = 'Klar strukturiert. Von der Anfrage bis zur Übergabe.',
  lead,
  id = 'ablauf',
}: ProcessStepsProps) {
  return (
    <Section id={id} tone="dark" labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} tone="light" />
      <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden="true" className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-accent via-white/25 to-transparent lg:block" />
        {steps.map((step, i) => (
          <li key={step.title} className="reveal relative pl-20 lg:pl-0">
            <span className="font-wide absolute top-0 left-0 grid size-14 place-items-center bg-accent text-lg font-extrabold text-primary lg:relative">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-h3 font-bold text-white lg:mt-8">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-dark">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
