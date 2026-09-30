import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { IconSprite } from '@/components/ui/Icon';
import { JsonLd } from '@/components/ui/JsonLd';
import { localBusinessJsonLd } from '@/lib/seo';
import { site, siteUrl } from '@/lib/site';
import './globals.css';

/* Selbst gehostete Variable Fonts (DSGVO-konform, kein Request an Google zur Laufzeit). */
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
// Display-Font ohne Preload: das LCP-Bild erhält auf langsamen Verbindungen die volle Bandbreite.
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap', axes: ['wdth'], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Kfz-Werkstatt für alle Marken`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: 'website', locale: 'de_DE', siteName: site.name },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0b1b2b',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${archivo.variable}`}>
      <body className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-primary"
        >
          Zum Inhalt springen
        </a>
        <IconSprite />
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="inhalt" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
