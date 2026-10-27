import type { NavItem, SiteConfig } from '@/types/site';

/**
 * Single Source of Truth für alle Unternehmensdaten.
 * Platzhalter „XXX“ bitte vor dem Livegang ersetzen – Impressum, Datenschutz, Footer,
 * JSON-LD (Google), WhatsApp-Link und QR-Code aktualisieren sich automatisch.
 */
export const site: SiteConfig = {
  name: 'Sercans PKW Schmiede',
  shortName: 'PKW Schmiede',
  tagline: 'Präzision, die bleibt.',
  description:
    'Sercans PKW Schmiede – Service, Reparatur und Wartung mit klarem Blick für Ihr Fahrzeug: Smartrepair, Ölwechsel, Fahrzeugaufbereitung, Klimaservice, Reifen- und Felgenservice, Folierung und Autoglas sowie Anfragen zu Gutachten und HU/AU.',
  owner: 'Reda Fakih',
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
  phone: { display: '+49 173 6646188', href: 'tel:+491736646188' },
  email: 'info@XXX.de',
  whatsapp: {
    display: '+49 173 6646188',
    /** Internationales Format ohne +, Leerzeichen oder führende 0 – z. B. 4917612345678 */
    number: '491736646188',
    greeting: 'Hallo Sercans PKW Schmiede, ich habe eine Frage zu meinem Fahrzeug:',
  },
  hours: [
    { days: 'Montag – Freitag', short: 'Mo–Fr', time: '08:00 – 18:00 Uhr' },
    { days: 'Samstag', short: 'Sa', time: 'geschlossen' },
    { days: 'Sonntag & Feiertage', short: 'So', time: 'geschlossen' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sercans+PKW+Schmiede',
  google: { rating: 'X,X', reviewCount: 'XXX' },
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

/** Hauptnavigation wie im Design. „Leistungen“ führt zur Übersicht auf der Startseite und ist auf allen Leistungsseiten aktiv. */
export const mainNav: NavItem[] = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/#leistungen', activePath: '/leistungen' },
  { label: 'Werkstatt', href: '/werkstatt' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
