import { ContactRequest } from '@/components/sections/ContactRequest';
import { LocationMap } from '@/components/sections/LocationMap';
import { NextSteps } from '@/components/sections/NextSteps';
import { PageBanner } from '@/components/sections/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const metadata = buildMetadata({
  title: 'Kontakt & Terminanfrage',
  description:
    'Termin bei der PKW Schmiede anfragen: Beschreiben Sie kurz, was Ihr Fahrzeug braucht – gern mit Fotos. Den passenden Umfang und einen möglichen Termin klären wir persönlich mit Ihnen.',
  path: '/kontakt',
  image: 'kontakt',
});

/** Kontakt-Seite wie im Design: Banner · Kontaktformular und Hinweise · Wie es weitergeht – dazu die Anfahrt mit Karte. */
export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        layout="overlay"
        image="kontakt"
        kicker="Kontakt / Terminanfrage"
        title={'Ihr Anliegen\nist der Anfang.'}
        intro="Beschreiben Sie kurz, was Ihr Fahrzeug braucht. Den passenden Umfang und einen möglichen Termin klären wir persönlich mit Ihnen."
        action={{ label: 'Termin anfragen', href: '#anfrage' }}
        centered="always"
        narrowIntro
        narrowShade
        mobile={{ title: 'Kontakt', subtitle: 'Ihr Anliegen ist der Anfang.' }}
      />
      <ContactRequest />
      <NextSteps
        kicker="Wie es weitergeht"
        steps={[
          { title: 'Anliegen sichten', text: 'Wir ordnen Ihre Angaben ein und klären offene Fragen.' },
          { title: 'Umfang besprechen', text: 'Was gemacht werden soll und was geprüft werden muss, stimmen wir mit Ihnen ab.' },
          { title: 'Termin bestätigen', text: 'Ein passender Termin wird persönlich vereinbart.' },
        ]}
      />
      <LocationMap kicker="Anfahrt" title="Der Weg zur Schmiede." />
    </>
  );
}
