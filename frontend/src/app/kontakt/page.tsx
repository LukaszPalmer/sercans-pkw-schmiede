import { ContactSection } from '@/components/sections/ContactSection';
import { IntroSplit } from '@/components/sections/IntroSplit';
import { PageBanner } from '@/components/sections/PageBanner';
import { WhatsAppSection } from '@/components/sections/WhatsAppSection';
import { ButtonLink } from '@/components/ui/Button';
import { ContactGraphic } from '@/components/ui/graphics';
import { JsonLd } from '@/components/ui/JsonLd';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { fullAddress, site } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const metadata = buildMetadata({
  title: 'Kontakt & Termin – per WhatsApp, Telefon oder Formular',
  description:
    'Termin bei der Sercans PKW Schmiede anfragen: per WhatsApp (QR-Code), Telefon, E-Mail oder Kontaktformular. Adresse, Öffnungszeiten und Anfahrt.',
  path: '/kontakt',
  image: 'matte-front',
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        image="matte-front"
        eyebrow="Kontakt"
        title="Wir sind für Sie da."
        lead="WhatsApp, Telefon oder Formular – wählen Sie Ihren Weg. Wir melden uns schnellstmöglich mit einem Terminvorschlag."
        breadcrumbs={crumbs}
        primary={{ label: 'WhatsApp schreiben', href: whatsappUrl(), icon: 'whatsapp' }}
        secondary={{ label: 'Jetzt anrufen', href: site.phone.href, icon: 'phone' }}
      />
      <IntroSplit
        id="anfahrt"
        eyebrow="Anfahrt"
        title="So finden Sie zu uns."
        paragraphs={[
          `Sie finden die ${site.name} unter folgender Adresse: ${fullAddress}.`,
          'Bitte vereinbaren Sie vorab einen Termin – so haben wir ausreichend Zeit für Ihr Fahrzeug und Sie keine unnötige Wartezeit.',
        ]}
        graphic={<ContactGraphic />}
      >
        <ButtonLink href={site.mapsUrl} variant="dark" icon="route" iconPosition="start">
          Route planen
        </ButtonLink>
      </IntroSplit>
      <ContactSection title="Ihre Terminanfrage – unverbindlich und schnell." showQr={false} />
      <WhatsAppSection />
    </>
  );
}
