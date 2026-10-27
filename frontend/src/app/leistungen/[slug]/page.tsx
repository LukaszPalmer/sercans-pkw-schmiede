import { notFound } from 'next/navigation';
import { PageBanner } from '@/components/sections/PageBanner';
import { Preparation } from '@/components/sections/Preparation';
import { RequestBand } from '@/components/sections/RequestBand';
import { ServiceQuestions } from '@/components/sections/ServiceQuestions';
import { ServiceScope } from '@/components/sections/ServiceScope';
import { JsonLd } from '@/components/ui/JsonLd';
import { getService, requestPath, servicePath, serviceSlugs } from '@/lib/content/services';
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from '@/lib/seo';

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
    title: `${service.title} – ${service.teaser.replace(/\.$/, '')}`,
    description: service.metaDescription,
    path: servicePath(service.slug),
    image: service.image,
  });
}

/** Leistungsseite wie im Design: Banner · Leistungsumfang · Gut vorbereitet · Häufige Fragen · Terminanfrage. */
export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const related = getService(service.related);

  const crumbs = [
    { label: 'Start', href: '/' },
    { label: service.title, href: servicePath(service.slug) },
  ];

  return (
    <>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd(crumbs)]} />
      <PageBanner
        layout={service.banner.layout}
        image={service.image}
        kicker={`Leistung / ${service.title}`}
        title={service.banner.title}
        intro={service.banner.intro}
        action={{ label: 'Termin anfragen', href: requestPath(service.slug) }}
      />
      <ServiceScope scope={service.scope} />
      <Preparation preparation={service.preparation} />
      {related && <ServiceQuestions items={service.faqs} related={{ label: related.title, href: servicePath(related.slug) }} />}
      <RequestBand title={service.request.title} text={service.request.text} href={requestPath(service.slug)} />
    </>
  );
}
