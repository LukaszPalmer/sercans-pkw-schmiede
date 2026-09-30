import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/types/service';

interface ServicesGridProps {
  services: Service[];
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: 'white' | 'paper';
  id?: string;
}

export function ServicesGrid({ services, eyebrow, title, lead, tone = 'white', id = 'leistungen' }: ServicesGridProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
}
