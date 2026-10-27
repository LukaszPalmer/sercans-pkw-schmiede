import { PageBanner } from '@/components/sections/PageBanner';
import { RequestBand } from '@/components/sections/RequestBand';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { ServiceQuestions } from '@/components/sections/ServiceQuestions';
import { WorkshopPrinciples } from '@/components/sections/WorkshopPrinciples';
import { WorkshopStance } from '@/components/sections/WorkshopStance';
import { JsonLd } from '@/components/ui/JsonLd';
import { requestPath } from '@/lib/content/services';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'Werkstatt', href: '/werkstatt' },
];

export const metadata = buildMetadata({
  title: 'Die Werkstatt – Gutes Handwerk, ein klarer Anspruch',
  description:
    'Die PKW Schmiede: aufmerksam im Gespräch, präzise am Fahrzeug und verbindlich in der Abstimmung. Genauigkeit vor Gewohnheit, Absprache vor Ausführung, Erklären statt Überreden.',
  path: '/werkstatt',
  image: 'werkstatt',
});

/** Werkstatt-Seite wie im Design: Banner · Haltung · Maßstab · Leistungsspektrum · Häufige Fragen · Terminanfrage. */
export default function WerkstattPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        layout="overlay"
        image="werkstatt"
        kicker="Die Werkstatt / Unser Anspruch"
        title={'Gutes Handwerk.\nEin klarer Anspruch.'}
        intro="Unsere Vorstellung von Werkstatt: aufmerksam im Gespräch, präzise am Fahrzeug und verbindlich in der Abstimmung."
        action={{ label: 'Termin anfragen', href: requestPath() }}
      />
      <WorkshopStance
        kicker="Wofür die Schmiede steht"
        title={'Nicht mehr versprechen.\nGenauer hinsehen.'}
        lead="Ein Fahrzeug ist Alltag, Mobilität und oft ein Stück persönliche Geschichte. Entsprechend sorgfältig soll damit umgegangen werden."
        text="Der Anspruch von PKW Schmiede ist einfach: das Anliegen verstehen, den Zustand einordnen und verständlich erklären, was sinnvoll ist. Nicht jede Frage lässt sich am Telefon beantworten. Aber jede verdient eine klare Rückmeldung."
      />
      <WorkshopPrinciples
        kicker="Unser Maßstab"
        items={[
          {
            title: 'Genauigkeit vor Gewohnheit.',
            text: 'Fahrzeug, Material und Zustand geben die Richtung vor. Eine Empfehlung soll zum konkreten Fall passen.',
          },
          {
            title: 'Absprache vor Ausführung.',
            text: 'Welche Arbeiten gewünscht sind und was zusätzlich auffällt, gehört auf den Tisch – nicht still auf die Rechnung.',
          },
          {
            title: 'Erklären statt überreden.',
            text: 'Technische Zusammenhänge sollen nachvollziehbar sein. Damit Sie eine Entscheidung treffen können.',
          },
        ]}
      />
      <ServiceAreas
        kicker="Das passende Anliegen"
        title="Technik pflegen. Oberflächen erhalten."
        action={{ label: 'Leistungen entdecken', href: '/#leistungen' }}
        areas={[
          { title: 'Service & Wartung', text: 'Ölwechsel, Klimaservice sowie Reifen- und Felgenservice.' },
          { title: 'Oberfläche & Erscheinung', text: 'Smartrepair, Fahrzeugaufbereitung, Folierung und Autoglas.' },
          { title: 'Anfrage & Koordination', text: 'Gutachten und HU/AU: Zuständigkeit und Verfügbarkeit werden individuell geklärt.' },
        ]}
      />
      <ServiceQuestions
        items={[
          {
            question: 'Wie beginnt die Zusammenarbeit?',
            answer: 'Mit Ihrer Anfrage. Fahrzeugdaten und eine kurze Beschreibung helfen uns, den nächsten Schritt vorzubereiten.',
          },
          {
            question: 'Was passiert bei zusätzlichen Auffälligkeiten?',
            answer: 'Der gewünschte Umfang ist die Grundlage. Weitergehende Arbeiten sollen vor der Ausführung neu abgestimmt werden.',
          },
          {
            question: 'Kann ich ohne Termin vorbeikommen?',
            answer: 'Bitte fragen Sie einen Besuch vorab an. So lässt sich klären, welcher Zeitpunkt und welcher Umfang möglich sind.',
          },
        ]}
        related={{ label: 'Kontakt', href: '/kontakt' }}
      />
      <RequestBand
        title={'Lernen wir\nIhr Fahrzeug kennen.'}
        text="Ein konkretes Anliegen ist der beste Anfang. Schreiben Sie uns, wobei Sie Unterstützung brauchen."
        href={requestPath()}
      />
    </>
  );
}
