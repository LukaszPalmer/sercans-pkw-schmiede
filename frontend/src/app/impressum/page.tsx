import { LegalDocument } from '@/components/sections/LegalDocument';
import { PageTitle } from '@/components/sections/PageTitle';
import { impressumSections } from '@/lib/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
  ...buildMetadata({ title: 'Impressum', description: 'Impressum und Anbieterkennzeichnung der Sercans PKW Schmiede.', path: '/impressum' }),
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageTitle kicker="Rechtliches / Impressum" title="Impressum." />
      <LegalDocument sections={impressumSections} />
    </>
  );
}
