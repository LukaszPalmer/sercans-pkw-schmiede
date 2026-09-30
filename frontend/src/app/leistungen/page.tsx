import { ContactSection } from '@/components/sections/ContactSection';
import { IntroSplit } from '@/components/sections/IntroSplit';
import { PageBanner } from '@/components/sections/PageBanner';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServicesGraphic } from '@/components/ui/graphics';
import { JsonLd } from '@/components/ui/JsonLd';
import { workshopProcess } from '@/lib/content/process';
import { services } from '@/lib/content/services';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { whatsappUrl } from '@/lib/whatsapp';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
];

export const metadata = buildMetadata({
  title: 'Leistungen – Wartung, Reparatur, Reifen & TÜV',
  description:
    'Alle Leistungen der Sercans PKW Schmiede: Achsvermessung, Reparaturen, Instandhaltung, Aufbereitung, Reifenwechsel, Smart Repair Glas, Reifenlagerung, Ölwechsel und TÜV-Service.',
  path: '/leistungen',
  image: 'studio-sedan',
});

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        image="studio-sedan"
        eyebrow="Leistungen"
        title="Alles für Ihr Fahrzeug. Aus einer Hand."
        lead="Neun Kompetenzen unter einem Dach – koordiniert, termintreu und mit einem Ansprechpartner für alles."
        breadcrumbs={crumbs}
        primary={{ label: 'Termin anfragen', href: '#termin', icon: 'calendar' }}
        secondary={{ label: 'WhatsApp schreiben', href: whatsappUrl(), icon: 'whatsapp' }}
      />
      <IntroSplit
        id="ueberblick"
        eyebrow="Überblick"
        title="Ein Ansprechpartner. Neun Kompetenzen."
        paragraphs={[
          'Ob planmäßige Inspektion, plötzlicher Defekt oder der saisonale Reifenwechsel: Bei uns greifen alle Leistungen ineinander. Das spart Ihnen Wege, Zeit und Abstimmung – und sorgt dafür, dass Ihr Fahrzeug als Ganzes betrachtet wird.',
          'Wir arbeiten nach Herstellervorgaben, dokumentieren sorgfältig und besprechen jeden Schritt mit Ihnen, bevor Kosten entstehen.',
        ]}
        graphic={<ServicesGraphic />}
      />
      <ServicesGrid services={services} eyebrow="Unsere Leistungen" title="Wählen Sie Ihren Service." tone="paper" />
      <ProcessSteps steps={workshopProcess} />
      <ContactSection tone="white" />
    </>
  );
}
