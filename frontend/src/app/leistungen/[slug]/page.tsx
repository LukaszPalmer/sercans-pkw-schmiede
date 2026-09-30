import { notFound } from 'next/navigation';
import { BenefitGrid } from '@/components/sections/BenefitGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { IntroSplit } from '@/components/sections/IntroSplit';
import { PageBanner } from '@/components/sections/PageBanner';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServiceDetails } from '@/components/sections/ServiceDetails';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ButtonLink } from '@/components/ui/Button';
import { serviceGraphics } from '@/components/ui/graphics';
import { JsonLd } from '@/components/ui/JsonLd';
import { getFaqsForService } from '@/lib/content/faq';
import { getService, getServicesBySlugs, serviceSlugs } from '@/lib/content/services';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from '@/lib/seo';
import { whatsappUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} – ${service.eyebrow}`,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Graphic = serviceGraphics[service.slug];
  const crumbs = [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: service.title, href: `/leistungen/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd(crumbs)]} />
      <PageBanner
        image={service.image}
        eyebrow={service.eyebrow}
        title={service.headline}
        lead={service.summary}
        breadcrumbs={crumbs}
        primary={{ label: 'Termin anfragen', href: '#termin', icon: 'calendar' }}
        secondary={{
          label: 'WhatsApp schreiben',
          href: whatsappUrl(`Hallo Sercans PKW Schmiede, ich interessiere mich für: ${service.title}.`),
          icon: 'whatsapp',
        }}
      />
      <IntroSplit id="ueberblick" eyebrow="Überblick" title={service.title} paragraphs={service.intro} graphic={<Graphic />}>
        <ButtonLink href="#termin" variant="dark" icon="arrow-right">
          {service.title} anfragen
        </ButtonLink>
      </IntroSplit>
      <ServiceDetails service={service} />
      <BenefitGrid benefits={service.benefits} title={`Warum ${service.title} bei uns?`} />
      <ProcessSteps
        steps={service.steps}
        eyebrow="Ablauf"
        title={`So läuft ${service.title === 'TÜV-Service' ? 'der TÜV-Service' : service.title} bei uns ab.`}
      />
      <FaqSection items={getFaqsForService(service.slug)} eyebrow={`FAQ · ${service.title}`} title="Fragen & Antworten." />
      <ServicesGrid
        id="weitere-leistungen"
        services={getServicesBySlugs(service.related)}
        eyebrow="Passend dazu"
        title="Weitere Leistungen"
        tone="paper"
      />
      <ContactSection
        tone="white"
        defaultService={service.slug}
        title={`${service.title} anfragen – wir melden uns schnellstmöglich.`}
      />
    </>
  );
}
