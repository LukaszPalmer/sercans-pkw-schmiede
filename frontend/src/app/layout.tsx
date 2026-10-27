import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ScrollTop } from '@/components/layout/ScrollTop';
import { IconSprite } from '@/components/ui/Icon';
import { JsonLd } from '@/components/ui/JsonLd';
import { localBusinessJsonLd } from '@/lib/seo';
import { site, siteUrl } from '@/lib/site';
import './globals.css';

/* Selbst gehosteter Variable Font (DSGVO-konform, kein Request an Google zur Laufzeit). */
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.shortName} | Service, Reparatur und Wartung`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: 'website', locale: 'de_DE', siteName: site.name },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f5f6f4',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:px-5 focus:py-3 focus:font-medium focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <IconSprite />
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="inhalt" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <ScrollReveal />
        <Footer />
        <ScrollTop />
        <MobileActionBar />
      </body>
    </html>
  );
}
