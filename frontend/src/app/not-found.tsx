import { PageBanner } from '@/components/sections/PageBanner';

export const metadata = { title: 'Seite nicht gefunden', robots: { index: false } };

export default function NotFound() {
  return (
    <PageBanner
      image="gear-knob"
      eyebrow="Fehler 404"
      title="Hier hat sich jemand verfahren."
      lead="Die gewünschte Seite existiert nicht oder wurde verschoben. Wir bringen Sie zurück auf die richtige Spur."
      primary={{ label: 'Zur Startseite', href: '/' }}
      secondary={{ label: 'Leistungen ansehen', href: '/leistungen' }}
    />
  );
}
