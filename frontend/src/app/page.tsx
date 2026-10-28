import { FocusSplit } from '@/components/sections/FocusSplit';
import { HomeQuestions } from '@/components/sections/HomeQuestions';
import { PageBanner } from '@/components/sections/PageBanner';
import { PrinciplesBar } from '@/components/sections/PrinciplesBar';
import { RequestBand } from '@/components/sections/RequestBand';
import { SeasonNote } from '@/components/sections/SeasonNote';
import { ServiceOverview } from '@/components/sections/ServiceOverview';
import { WorkSteps } from '@/components/sections/WorkSteps';
import { WorkshopInsight } from '@/components/sections/WorkshopInsight';
import { faqTopics, faqs } from '@/lib/content/faq';
import { requestPath, servicePath } from '@/lib/content/services';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

const title = `${site.shortName} | Service, Reparatur und Wartung`;

export const metadata = {
  ...buildMetadata({ title, description: site.description, path: '/', image: 'startseite-banner' }),
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <PageBanner
        layout="overlay"
        image="startseite-banner"
        kicker="PKW Schmiede / Werkstatt mit Anspruch"
        title={'Präzision,\ndie bleibt.'}
        intro="Service, Reparatur und Wartung. Mit einem klaren Blick für Ihr Fahrzeug und Sorgfalt bis ins Detail."
        action={{ label: 'Termin anfragen', href: requestPath() }}
        centered="always"
        narrowIntro
        mobile={{ title: site.shortName, subtitle: 'Service, Reparatur, Wartung' }}
      />
      <PrinciplesBar items={['Erst verstehen. Dann empfehlen.', 'Arbeiten nach Absprache.', 'Auf das Detail kommt es an.']} />
      <ServiceOverview />
      <FocusSplit
        id="fokus"
        image="startseite-aufbereitung"
        kicker="Im Detail liegt der Unterschied"
        title={'Nicht einfach schöner.\nSondern gepflegt.'}
        text="Ein Kratzer, matte Oberflächen oder Spuren im Innenraum: Wir schauen auf den Zustand und besprechen, welche Behandlung sinnvoll ist. Nicht jede Spur braucht denselben Eingriff."
        action={{ label: 'Zur Fahrzeugaufbereitung', href: servicePath('fahrzeugaufbereitung') }}
      />
      <WorkSteps
        kicker="So gehen wir vor"
        steps={[
          { title: 'Zuhören.', text: 'Sie beschreiben Ihr Anliegen. Wir fragen nach Fahrzeug, Zustand und Ihren Erwartungen.' },
          { title: 'Einordnen.', text: 'Wir prüfen, was sich vorab klären lässt und was einen Blick am Fahrzeug braucht.' },
          { title: 'Abstimmen.', text: 'Umfang und Termin werden besprochen. Zusätzliche Arbeiten brauchen eine neue Absprache.' },
        ]}
      />
      <SeasonNote
        text="Saisonwechsel? Reifen und Klima rechtzeitig mitdenken."
        link={{ label: 'Passenden Service anfragen', href: requestPath() }}
      />
      <WorkshopInsight
        image="startseite-werkstatt"
        kicker="Die PKW Schmiede"
        title="Handwerk braucht Haltung."
        text="Genau hinsehen. Verständlich erklären. Sorgfältig arbeiten. Daran soll sich der Besuch in unserer Werkstatt messen lassen."
        action={{ label: 'Die Werkstatt kennenlernen', href: '/werkstatt' }}
      />
      <HomeQuestions
        kicker="Vor Ihrem Besuch"
        title="Kurz geklärt."
        intro="Antworten rund um Anfrage, Ablauf und Ihren Besuch. Suchen Sie nach einem Stichwort oder wählen Sie ein Thema."
        topics={faqTopics}
        items={faqs}
      />
      <RequestBand
        title={'Ihr Anliegen.\nUnser nächster Schritt.'}
        text="Beschreiben Sie kurz, was Ihr Fahrzeug braucht. Den passenden Umfang und einen möglichen Termin klären wir mit Ihnen."
        href={requestPath()}
      />
    </>
  );
}
