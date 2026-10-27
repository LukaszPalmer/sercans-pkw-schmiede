import { PageTitle } from '@/components/sections/PageTitle';
import { ButtonLink, TextLink } from '@/components/ui/Button';

export const metadata = { title: 'Seite nicht gefunden', robots: { index: false } };

export default function NotFound() {
  return (
    <PageTitle
      kicker="Fehler 404"
      title={'Hier hat sich jemand\nverfahren.'}
      lead="Die gewünschte Seite existiert nicht oder wurde verschoben. Wir bringen Sie zurück auf die richtige Spur."
    >
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <ButtonLink href="/">Zur Startseite</ButtonLink>
        <TextLink href="/#leistungen" className="text-sm">
          Leistungen ansehen
        </TextLink>
      </div>
    </PageTitle>
  );
}
