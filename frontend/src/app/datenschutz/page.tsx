import { LegalDocument } from '@/components/sections/LegalDocument';
import { PageBanner } from '@/components/sections/PageBanner';
import { LegalGraphic } from '@/components/ui/graphics';
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
      <PageBanner
        variant="compact"
        image="speedometer"
        eyebrow="Rechtliches"
        title={'Datenschutz\u00ADerklärung'}
        breadcrumbs={[
          { label: 'Start', href: '/' },
          { label: 'Datenschutz', href: '/datenschutz' },
        ]}
        primary={{ label: 'Fragen zum Datenschutz', href: '/kontakt', icon: 'mail' }}
        secondary={{ label: 'Zur Startseite', href: '/' }}
      />
      <LegalDocument sections={datenschutzSections} aside={<LegalGraphic />} />
    </>
  );
}
