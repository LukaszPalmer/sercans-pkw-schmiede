import { BlogGrid } from '@/components/sections/BlogGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PageBanner } from '@/components/sections/PageBanner';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhatsAppSection } from '@/components/sections/WhatsAppSection';
import { WhyUs } from '@/components/sections/WhyUs';
import { blogPosts } from '@/lib/content/blog';
import { featuredFaqs } from '@/lib/content/faq';
import { workshopProcess } from '@/lib/content/process';
import { services } from '@/lib/content/services';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = {
  ...buildMetadata({
    title: `${site.name} | Kfz-Werkstatt für alle Marken`,
    description: site.description,
    path: '/',
    image: 'workshop-lift',
  }),
  title: { absolute: `${site.name} | Kfz-Werkstatt für alle Marken` },
};

export default function HomePage() {
  return (
    <>
      <PageBanner
        variant="home"
        image="workshop-lift"
        eyebrow="Kfz-Werkstatt für alle Marken"
        title={
          <>
            Präzision aus der <span className="text-glow">Schmiede.</span>
          </>
        }
        lead="Wartung, Reparatur, Reifen, Glas und TÜV-Service – transparent, termintreu und mit dem Anspruch, jedes Fahrzeug so zu behandeln, als wäre es unser eigenes."
        primary={{ label: 'Termin anfragen', href: '#termin', icon: 'calendar' }}
        secondary={{ label: 'Leistungen entdecken', href: '#leistungen' }}
      />
      <TrustBar />
      <ServicesGrid
        services={services}
        eyebrow="Leistungen"
        title="Neun Disziplinen. Ein Qualitätsanspruch."
        lead="Von der Achsvermessung bis zur TÜV-Vorführung: Alles, was Ihr Fahrzeug braucht – präzise ausgeführt und verständlich erklärt."
      />
      <WhyUs />
      <ProcessSteps steps={workshopProcess} />
      <WhatsAppSection />
      <FaqSection items={featuredFaqs} lead="Die wichtigsten Antworten rund um Termin, Kosten, Garantie und Reifen – kompakt zusammengefasst." />
      <BlogGrid posts={blogPosts.slice(0, 3)} showAllLink />
      <ContactSection tone="white" showQr={false} />
    </>
  );
}
