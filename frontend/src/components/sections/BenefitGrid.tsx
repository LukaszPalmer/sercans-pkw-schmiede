import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Benefit } from '@/types/service';

interface BenefitGridProps {
  benefits: Benefit[];
  title: string;
}

export function BenefitGrid({ benefits, title }: BenefitGridProps) {
  return (
    <Section id="vorteile" labelledBy="vorteile-title">
      <SectionHeading id="vorteile-title" eyebrow="Ihre Vorteile" title={title} align="center" />
      <ul className="mt-12 grid gap-px bg-line ring-1 ring-line md:grid-cols-3 lg:mt-16">
        {benefits.map((b) => (
          <li key={b.title} className="reveal group relative bg-white p-8 transition-colors duration-500 hover:bg-paper sm:p-10">
            <span className="grid size-14 place-items-center bg-primary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
              <Icon name={b.icon} className="size-7" />
            </span>
            <h3 className="text-h3 mt-7 font-bold">{b.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
