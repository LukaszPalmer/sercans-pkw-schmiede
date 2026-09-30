import { LegalDocument } from '@/components/sections/LegalDocument';
import { PageBanner } from '@/components/sections/PageBanner';
import { LegalGraphic } from '@/components/ui/graphics';
import { impressumSections } from '@/lib/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
  ...buildMetadata({ title: 'Impressum', description: 'Impressum und Anbieterkennzeichnung der Sercans PKW Schmiede.', path: '/impressum' }),
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageBanner
        variant="compact"
        image="speedometer"
        eyebrow="Rechtliches"
        title="Impressum"
        breadcrumbs={[
          { label: 'Start', href: '/' },
          { label: 'Impressum', href: '/impressum' },
        ]}
        primary={{ label: 'Kontakt aufnehmen', href: '/kontakt', icon: 'mail' }}
        secondary={{ label: 'Zur Startseite', href: '/' }}
      />
      <LegalDocument sections={impressumSections} aside={<LegalGraphic />} />
    </>
  );
}
