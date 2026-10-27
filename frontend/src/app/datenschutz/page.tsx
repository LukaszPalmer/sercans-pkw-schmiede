import { LegalDocument } from '@/components/sections/LegalDocument';
import { PageTitle } from '@/components/sections/PageTitle';
import { datenschutzSections } from '@/lib/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Sercans PKW Schmiede: Hosting, Kontaktformular, WhatsApp, Ihre Rechte nach DSGVO.',
  path: '/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <>
      <PageTitle kicker="Rechtliches / Datenschutz" title="Datenschutz." />
      <LegalDocument sections={datenschutzSections} />
    </>
  );
}
