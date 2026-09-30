import { BlogGrid } from '@/components/sections/BlogGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { IntroSplit } from '@/components/sections/IntroSplit';
import { PageBanner } from '@/components/sections/PageBanner';
import { BlogGraphic } from '@/components/ui/graphics';
import { JsonLd } from '@/components/ui/JsonLd';
import { blogPosts } from '@/lib/content/blog';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

const crumbs = [
  { label: 'Start', href: '/' },
  { label: 'Blog', href: '/blog' },
];

export const metadata = buildMetadata({
  title: 'Ratgeber & Blog – Wissen aus der Werkstatt',
  description:
    'Praxiswissen von der Sercans PKW Schmiede: Winterreifen, Ölwechsel, TÜV-Vorbereitung, Steinschlag, Achsvermessung und Fahrzeugpflege verständlich erklärt.',
  path: '/blog',
  image: 'cockpit',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageBanner
        image="cockpit"
        eyebrow="Ratgeber & Blog"
        title="Wissen, das Sie sicher ans Ziel bringt."
        lead="Praxiswissen aus der Werkstatt – kompakt, fundiert und ohne Fachchinesisch."
        breadcrumbs={crumbs}
        primary={{ label: 'Artikel entdecken', href: '#ratgeber', icon: 'book' }}
        secondary={{ label: 'Termin anfragen', href: '/kontakt#termin', icon: 'calendar' }}
      />
      <IntroSplit
        id="ueberblick"
        eyebrow="Ratgeber"
        title="Gut informiert fährt es sich entspannter."
        paragraphs={[
          'Wann müssen Winterreifen drauf? Welches Öl ist das richtige? Reicht bei einem Steinschlag eine Reparatur? In unserem Ratgeber beantworten wir die Fragen, die uns in der Werkstatt am häufigsten begegnen.',
          'Alle Beiträge entstehen aus der Praxis – mit konkreten Tipps, die Sie sofort anwenden können.',
        ]}
        graphic={<BlogGraphic />}
      />
      <BlogGrid posts={blogPosts} featureFirst title="Alle Artikel" eyebrow="Aktuell" />
      <CtaBand />
    </>
  );
}
