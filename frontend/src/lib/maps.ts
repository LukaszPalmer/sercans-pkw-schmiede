import { fullAddress, isPlaceholder } from './site';

/** Kartenziel ist die Anschrift aus site.ts – solange sie noch Platzhalter enthält, gibt es weder Karte noch Route. */
export const mapQuery: string | null = isPlaceholder(fullAddress) ? null : fullAddress;

/** Google-Maps-Einbettung ohne API-Schlüssel (leitet auf google.com/maps/embed weiter) – erst nach Klick laden. */
export const mapEmbedUrl = (query: string) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=de&z=16&output=embed`;

/** Routenplanung in Google Maps: auf Mobilgeräten in der App, am Desktop im Browser. */
export const directionsUrl = (query: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
