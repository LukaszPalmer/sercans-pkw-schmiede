import { ButtonLink } from '@/components/ui/Button';
import { BrandGraphic } from '@/components/ui/graphics';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { IconName } from '@/types/icon';

const pillars: { icon: IconName; title: string; text: string }[] = [
  { icon: 'search', title: 'Diagnose statt Vermutung', text: 'Wir finden die Ursache – und tauschen nur, was wirklich nötig ist.' },
  { icon: 'euro', title: 'Preise ohne Überraschung', text: 'Kostenvoranschlag vorab, Mehraufwand nur nach Ihrer Freigabe.' },
  { icon: 'message', title: 'Kurze Wege', text: 'Rückfragen per WhatsApp – auf Wunsch mit Fotos direkt vom Befund.' },
  { icon: 'clock', title: 'Termintreue', text: 'Verlässliche Zusagen, damit Sie planen können.' },
];

export function WhyUs() {
  return (
    <Section id="werkstatt" tone="paper" labelledBy="werkstatt-title">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal order-2 lg:order-1 lg:col-span-6">
          <BrandGraphic />
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6">
          <SectionHeading
            id="werkstatt-title"
            eyebrow="Die Werkstatt"
            title="Handwerk mit Anspruch. Technik mit Verstand."
            lead="In der Sercans PKW Schmiede verbinden wir sorgfältiges Kfz-Handwerk mit moderner Diagnosetechnik. Unser Maßstab: Jedes Fahrzeug so zu behandeln, als wäre es unser eigenes."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.title}>
                <span className="grid size-11 place-items-center bg-primary text-accent">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/kontakt#termin" variant="dark" icon="arrow-right">
              Jetzt Termin vereinbaren
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
