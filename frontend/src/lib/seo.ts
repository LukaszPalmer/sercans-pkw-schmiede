import type { Metadata } from 'next';
import { images } from '@/lib/content/images';
import { services } from '@/lib/content/services';
import { fullAddress, isPlaceholder, site, siteUrl } from '@/lib/site';
import type { FaqItem } from '@/types/faq';
import type { ImageKey } from '@/types/image';
import type { Service } from '@/types/service';
import type { NavItem } from '@/types/site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
}

/** Einheitliche Metadaten je Seite: Canonical, Open Graph, Twitter Card. */
export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const ogImage = image ? [{ url: images[image].src, width: images[image].width, height: images[image].height, alt: images[image].alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      siteName: site.name,
      url: path,
      title,
      description,
      ...(ogImage && { images: ogImage }),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const absolute = (path: string) => `${siteUrl}${path}`;

export function localBusinessJsonLd() {
  const hasAddress = !isPlaceholder(fullAddress);
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${siteUrl}/#business`,
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: absolute(images['startseite-banner'].src),
    logo: absolute('/icon.svg'),
    ...(!isPlaceholder(site.phone.display) && { telephone: site.phone.display }),
    ...(!isPlaceholder(site.email) && { email: site.email }),
    ...(hasAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.zip,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
    }),
    areaServed: isPlaceholder(site.address.city) ? 'DE' : site.address.city,
    knowsAbout: services.map((s) => s.title),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: NavItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: absolute(c.href) })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absolute(`/leistungen/${service.slug}`),
    image: absolute(images[service.image].src),
    provider: { '@id': `${siteUrl}/#business` },
  };
}
