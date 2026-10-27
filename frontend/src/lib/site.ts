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
  owner: 'Redah Fakih',
  legalForm: 'Einzelunternehmen',
  vatId: 'XXX',
  chamber: 'XXX',
  professionTitle: 'XXX',
  supervisoryAuthority:
    'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 Düsseldorf',
  address: {
    street: 'Himmelgeister Straße 35',
    zip: '40225',
    city: 'Düsseldorf',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
  },
  phone: { display: '+49 176 22548772', href: 'tel:+4917622548772' },
  email: 'kontakt@pkw-schmiede.de',
  whatsapp: {
    display: '+49 176 22548772',
    /** Internationales Format ohne +, Leerzeichen oder führende 0 – z. B. 4917612345678 */
    number: '4917622548772',
    greeting: 'Hallo Sercans PKW Schmiede, ich habe eine Frage zu meinem Fahrzeug:',
  },
  hours: [
    { days: 'Montag', short: 'Mo', time: '08:30 – 17:00 Uhr' },
    { days: 'Dienstag', short: 'Di', time: '08:30 – 18:00 Uhr' },
    { days: 'Mittwoch', short: 'Mi', time: '08:30 – 17:00 Uhr' },
    { days: 'Donnerstag', short: 'Do', time: '08:30 – 17:00 Uhr' },
    { days: 'Freitag', short: 'Fr', time: '08:30 – 17:00 Uhr' },
    { days: 'Samstag', short: 'Sa', time: '09:00 – 13:00 Uhr' },
    { days: 'Sonntag', short: 'So', time: 'geschlossen' },
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
