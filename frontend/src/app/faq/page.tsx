import { CtaBand } from '@/components/sections/CtaBand';
import { FaqCatalog } from '@/components/sections/FaqCatalog';
import { IntroSplit } from '@/components/sections/IntroSplit';
import { PageBanner } from '@/components/sections/PageBanner';
import { ButtonLink } from '@/components/ui/Button';
import { FaqGraphic } from '@/components/ui/graphics';
import { JsonLd } from '@/components/ui/JsonLd';
import { faqs } from '@/lib/content/faq';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { whatsappUrl } from '@/lib/whatsapp';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'FAQ', href: '/faq' },
];

export const metadata = buildMetadata({
  title: 'FAQ – Häufige Fragen rund um Werkstatt, Reifen & TÜV',
  description:
    'Antworten auf die häufigsten Fragen: Garantie in der freien Werkstatt, Kostenvoranschlag, Winterreifen, Ölwechsel, TÜV, Steinschlag und Aufbereitung.',
  path: '/faq',
  image: 'gear-knob',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        image="gear-knob"
        eyebrow="FAQ"
        title="Antworten, bevor Fragen offen bleiben."
        lead={`${faqs.length} Antworten zu Terminen, Kosten, Wartung, Reifen, TÜV und Pflege – ehrlich und verständlich erklärt.`}
        breadcrumbs={crumbs}
        primary={{ label: 'Alle Fragen ansehen', href: '#fragen', icon: 'arrow-right' }}
        secondary={{ label: 'Frage per WhatsApp', href: whatsappUrl('Hallo Sercans PKW Schmiede, ich habe eine Frage:'), icon: 'whatsapp' }}
      />
      <IntroSplit
        id="ueberblick"
        eyebrow="Häufige Fragen"
        title="Transparenz beginnt bei der ersten Frage."
        paragraphs={[
          'Werkstattbesuche werfen Fragen auf: Was kostet das? Bleibt meine Garantie erhalten? Muss das wirklich sein? Wir finden, Sie verdienen klare Antworten – schon bevor Sie zu uns kommen.',
          'Ihre Frage ist nicht dabei? Schreiben Sie uns einfach per WhatsApp oder rufen Sie an. Wir nehmen uns Zeit für Sie.',
        ]}
        graphic={<FaqGraphic />}
      >
        <ButtonLink href="/kontakt" variant="dark" icon="arrow-right">
          Persönlich nachfragen
        </ButtonLink>
      </IntroSplit>
      <FaqCatalog />
      <CtaBand title="Noch Fragen offen?" text="Wir beraten Sie gerne persönlich – per WhatsApp, Telefon oder direkt bei uns in der Werkstatt." />
    </>
  );
}
