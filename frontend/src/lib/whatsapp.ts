import { site } from './site';

/** Deep-Link in den WhatsApp-Chat (App auf Mobilgeräten, WhatsApp Web am Desktop) – ohne vorausgefüllten Text. */
export function whatsappUrl(): string {
  return `https://wa.me/${site.whatsapp.number}`;
}
