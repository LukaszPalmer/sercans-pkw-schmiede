import { site } from './site';

/** Deep-Link in den WhatsApp-Chat (App auf Mobilgeräten, WhatsApp Web am Desktop). */
export function whatsappUrl(text: string = site.whatsapp.greeting): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
