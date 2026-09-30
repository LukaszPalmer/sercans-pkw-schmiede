import { z } from 'zod';

/** Serverseitige Validierung – die einzige Wahrheit, unabhängig vom Client. */
export const contactSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen an.').max(120, 'Der Name ist zu lang.'),
  email: z.email({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }).max(200),
  phone: z
    .string()
    .max(40, 'Die Telefonnummer ist zu lang.')
    .regex(/^[+\d\s()/-]*$/, 'Bitte nur Ziffern, Leerzeichen und + ( ) / - verwenden.'),
  service: z.string().max(60),
  vehicle: z.string().max(120, 'Bitte kürzen Sie die Fahrzeugangabe.'),
  date: z.string().max(20),
  message: z
    .string()
    .min(10, 'Bitte beschreiben Sie Ihr Anliegen kurz (mind. 10 Zeichen).')
    .max(4000, 'Die Nachricht ist zu lang (max. 4.000 Zeichen).'),
  privacy: z.literal('on', { error: 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.' }),
});

export const contactFields = ['name', 'email', 'phone', 'service', 'vehicle', 'date', 'message', 'privacy'] as const;
