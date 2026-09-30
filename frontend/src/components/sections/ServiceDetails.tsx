import { CheckList } from '@/components/ui/CheckList';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Service } from '@/types/service';

/** Leistungsumfang (Checkliste) + Praxiswissen/Anzeichen als dunkle Info-Karte. */
export function ServiceDetails({ service }: { service: Service }) {
  return (
    <Section id="umfang" tone="paper" labelledBy="umfang-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="umfang-title"
            eyebrow="Leistungsumfang"
            title={`Das umfasst unser Service: ${service.title}`}
          />
          <CheckList items={service.scope} columns={2} className="mt-10" />
        </div>
        <aside
          aria-labelledby="hinweise-title"
          className="bg-forge chamfer-frame reveal relative self-start p-8 text-white [--chamfer:1.75rem] sm:p-10 lg:col-span-5"
        >
          <span className="grid size-12 place-items-center bg-accent text-primary">
            <Icon name="gauge" className="size-6" />
          </span>
          <h3 id="hinweise-title" className="text-h3 mt-6 font-bold">
            {service.signs.title}
          </h3>
          <ul className="mt-6 space-y-4">
            {service.signs.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-white/90">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
