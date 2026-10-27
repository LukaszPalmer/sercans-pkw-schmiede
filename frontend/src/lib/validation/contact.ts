import { z } from 'zod';
import { serviceSlugs } from '@/lib/content/services';
import { PHOTO_LIMITS } from './photos';

/** Auswahl „Gewünschte Leistung“: die neun Leistungen und eine allgemeine Anfrage. */
export const GENERAL_REQUEST = 'allgemein';

/** Serverseitige Validierung – die einzige Wahrheit, unabhängig vom Client. Pflicht: Name, E-Mail, Leistung, Anliegen, Einwilligung. */
export const contactSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen an.').max(120, 'Der Name ist zu lang.'),
  email: z.email({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }).max(200),
  phone: z
    .string()
    .max(40, 'Die Telefonnummer ist zu lang.')
    .regex(/^[+\d\s()/-]*$/, 'Bitte nur Ziffern, Leerzeichen und + ( ) / - verwenden.'),
  vehicle: z.string().max(120, 'Die Fahrzeugangabe ist zu lang.'),
  engine: z.string().max(120, 'Die Angabe zur Motorisierung ist zu lang.'),
  mileage: z.string().max(40, 'Die Angabe zum Kilometerstand ist zu lang.'),
  service: z.enum([GENERAL_REQUEST, ...serviceSlugs], { error: 'Bitte wählen Sie eine Leistung aus.' }),
  message: z.string().min(1, 'Bitte beschreiben Sie kurz Ihr Anliegen.').max(4000, 'Die Nachricht ist zu lang (max. 4.000 Zeichen).'),
  privacy: z.literal('on', { error: 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.' }),
});

export const contactFields = ['name', 'email', 'phone', 'vehicle', 'engine', 'mileage', 'service', 'message', 'privacy'] as const;

/** Prüft den optionalen Bildanhang; liefert eine Fehlermeldung oder `null`. */
export function validatePhotos(photos: File[]): string | null {
  if (photos.length > PHOTO_LIMITS.maxFiles) return `Bitte höchstens ${PHOTO_LIMITS.maxFiles} Fotos anhängen.`;
  if (photos.some((file) => !file.type.startsWith('image/'))) return 'Bitte nur Bilddateien anhängen.';
  const total = photos.reduce((sum, file) => sum + file.size, 0);
  if (total > PHOTO_LIMITS.maxTotalBytes) return 'Die Fotos sind zusammen zu groß. Bitte weniger oder kleinere Bilder wählen.';
  return null;
}
