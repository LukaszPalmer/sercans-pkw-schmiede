export interface OpeningHours {
  days: string;
  /** Kurzform für die Statuszeile im Banner – z. B. „Mo–Fr“. */
  short: string;
  time: string;
  /** Hinweis unter der Uhrzeit in der Anfahrt (Kontakt) – z. B. „Telefon nicht besetzt“. */
  note?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  owner: string;
  legalForm: string;
  vatId: string;
  chamber: string;
  professionTitle: string;
  supervisoryAuthority: string;
  address: {
    street: string;
    zip: string;
    city: string;
    region: string;
    country: string;
  };
  phone: { display: string; href: string };
  email: string;
  whatsapp: { display: string; number: string };
  hours: OpeningHours[];
  mapsUrl: string;
  /** Google-Bewertung für die Sektion „Echte Erfahrungen“ – z. B. „4,9“ und „186“. */
  google: { rating: string; reviewCount: string };
}

export interface NavItem {
  label: string;
  href: string;
  /** Pfad-Präfix, unter dem der Punkt als aktiv markiert wird, wenn `href` ein Anker ist. */
  activePath?: string;
}
