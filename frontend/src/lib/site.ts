import type { NavItem, SiteConfig } from '@/types/site';

/**
 * Single Source of Truth für alle Unternehmensdaten.
 * Platzhalter „XXX“ bitte vor dem Livegang ersetzen – Impressum, Datenschutz, Footer,
 * JSON-LD (Google), WhatsApp-Link und QR-Code aktualisieren sich automatisch.
 */
export const site: SiteConfig = {
  name: 'Sercans PKW Schmiede',
  shortName: 'PKW Schmiede',
  tagline: 'Präzision aus der Schmiede.',
  description:
    'Sercans PKW Schmiede – Ihre Kfz-Werkstatt für Reparaturen, Instandhaltung, Achsvermessung, Reifenservice, Ölwechsel, Aufbereitung, Smart Repair Glas und TÜV-Service. Alle Marken, transparente Preise.',
  owner: 'XXX',
  legalForm: 'XXX',
  vatId: 'XXX',
  chamber: 'XXX',
  professionTitle: 'XXX',
  supervisoryAuthority: 'XXX',
  address: {
    street: 'XXX',
    zip: 'XXX',
    city: 'XXX',
    region: 'XXX',
    country: 'DE',
  },
  phone: { display: '+49 XXX XXXXXXX', href: 'tel:+49XXXXXXXXXX' },
  email: 'info@XXX.de',
  whatsapp: {
    display: '+49 XXX XXXXXXX',
    /** Internationales Format ohne +, Leerzeichen oder führende 0 – z. B. 4917612345678 */
    number: '49XXXXXXXXXX',
    greeting: 'Hallo Sercans PKW Schmiede, ich habe eine Frage zu meinem Fahrzeug:',
  },
  hours: [
    { days: 'Montag – Freitag', time: 'XX:XX – XX:XX Uhr' },
    { days: 'Samstag', time: 'XX:XX – XX:XX Uhr' },
    { days: 'Sonntag & Feiertage', time: 'geschlossen' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sercans+PKW+Schmiede',
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;

/** true, solange ein Wert noch den Platzhalter „XX“ enthält – verhindert fehlerhafte Structured Data. */
export const isPlaceholder = (value: string) => value.includes('XX');

export const mainNav: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
