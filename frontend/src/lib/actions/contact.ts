'use server';

import { Resend } from 'resend';
import { getService } from '@/lib/content/services';
import { renderContactEmail } from '@/lib/email/contact-email';
import { contactFields, contactSchema } from '@/lib/validation/contact';
import type { ContactField, ContactFormState } from '@/types/contact';

const SUCCESS = 'Vielen Dank! Ihre Anfrage ist bei uns eingegangen – wir melden uns schnellstmöglich bei Ihnen.';

/**
 * Server Action: validiert, versendet via Resend an das IONOS-Postfach (CONTACT_TO_EMAIL)
 * und setzt Reply-To auf die Kundenadresse → Antwort direkt aus dem Postfach.
 */
export async function sendContactRequest(prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const attempt = (prev.attempt ?? 0) + 1;
  // Honeypot: Bots füllen das unsichtbare Feld – wir antworten neutral, ohne zu senden.
  if (String(formData.get('website') ?? '').length > 0) {
    return { status: 'success', message: SUCCESS, fieldErrors: {} };
  }

  const values = Object.fromEntries(
    contactFields.map((key) => [key, String(formData.get(key) ?? '').trim()]),
  ) as Record<ContactField, string>;

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: ContactFormState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      fieldErrors[key] ??= issue.message;
    }
    return { status: 'error', message: 'Bitte prüfen Sie die markierten Felder.', fieldErrors, values, attempt };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('[contact] RESEND_API_KEY, CONTACT_TO_EMAIL oder CONTACT_FROM_EMAIL fehlt.');
    return {
      status: 'error',
      message: 'Das Formular ist derzeit nicht erreichbar. Bitte kontaktieren Sie uns telefonisch oder per WhatsApp.',
      fieldErrors: {},
      values,
      attempt,
    };
  }

  const { name, email, phone, service, vehicle, date, message } = parsed.data;
  const data = { name, email, phone, service, vehicle, date, message };
  const serviceLabel = getService(data.service)?.title ?? 'Allgemeine Anfrage';
  const { html, text } = renderContactEmail(data, serviceLabel);

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL.split(',').map((address) => address.trim()),
    replyTo: data.email,
    subject: `Anfrage: ${serviceLabel} – ${data.name}`,
    html,
    text,
  });

  if (error) {
    console.error('[contact] Resend-Fehler:', error.name, error.message);
    return {
      status: 'error',
      message: 'Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns per WhatsApp.',
      fieldErrors: {},
      values,
      attempt,
    };
  }

  return { status: 'success', message: SUCCESS, fieldErrors: {} };
}
