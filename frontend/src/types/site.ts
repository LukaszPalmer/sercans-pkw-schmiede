export interface OpeningHours {
  days: string;
  time: string;
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
  whatsapp: { display: string; number: string; greeting: string };
  hours: OpeningHours[];
  mapsUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
