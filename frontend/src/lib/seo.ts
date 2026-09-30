import type { Metadata } from 'next';
import { images } from '@/lib/content/images';
import { fullAddress, isPlaceholder, site, siteUrl } from '@/lib/site';
import type { BlogPost } from '@/types/blog';
import type { FaqItem } from '@/types/faq';
import type { ImageKey } from '@/types/image';
import type { Service } from '@/types/service';
import type { NavItem } from '@/types/site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
  type?: 'website' | 'article';
  publishedTime?: string;
}

/** Einheitliche Metadaten je Seite: Canonical, Open Graph, Twitter Card. */
export function buildMetadata({ title, description, path, image, type = 'website', publishedTime }: PageMeta): Metadata {
  const ogImage = image ? [{ url: images[image].src, width: images[image].width, height: images[image].height, alt: images[image].alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'de_DE',
      siteName: site.name,
      url: path,
      title,
      description,
      ...(ogImage && { images: ogImage }),
      ...(publishedTime && { publishedTime }),
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
    image: absolute(images['workshop-lift'].src),
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
    knowsAbout: ['Achsvermessung', 'Kfz-Reparatur', 'Inspektion', 'Fahrzeugaufbereitung', 'Reifenwechsel', 'Steinschlagreparatur', 'Reifeneinlagerung', 'Ölwechsel', 'Hauptuntersuchung'],
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
    description: service.summary,
    url: absolute(`/leistungen/${service.slug}`),
    image: absolute(images[service.image].src),
    provider: { '@id': `${siteUrl}/#business` },
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: absolute(images[post.image].src),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: 'de-DE',
    mainEntityOfPage: absolute(`/blog/${post.slug}`),
    author: { '@type': 'Organization', name: site.name, url: siteUrl },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absolute('/icon.svg') } },
  };
}
