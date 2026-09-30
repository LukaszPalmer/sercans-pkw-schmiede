import { site } from '@/lib/site';
import type { ContactRequest } from '@/types/contact';

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

const formatDate = (iso: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
};

/** Markenkonforme HTML-Mail (tabellenbasiert für maximale Client-Kompatibilität) + Text-Fallback. */
export function renderContactEmail(data: ContactRequest, serviceLabel: string) {
  const rows: [string, string][] = [
    ['Name', data.name],
    ['E-Mail', data.email],
    ['Telefon', data.phone || '–'],
    ['Leistung', serviceLabel],
    ['Fahrzeug', data.vehicle || '–'],
    ['Wunschtermin', data.date ? formatDate(data.date) : '–'],
  ];

  const html = `<!doctype html>
<html lang="de"><body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#0b1b2b">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 12px">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff">
<tr><td style="background:#0b1b2b;padding:28px 32px;border-bottom:4px solid #ff8a33">
<p style="margin:0;color:#ff8a33;font-size:11px;letter-spacing:3px;font-weight:bold">NEUE WEBSITE-ANFRAGE</p>
<p style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:bold">${escape(site.name)}</p>
</td></tr>
<tr><td style="padding:28px 32px 8px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:10px 0;border-bottom:1px solid #dce3eb;width:140px;color:#3e5064;font-size:13px">${k}</td><td style="padding:10px 0;border-bottom:1px solid #dce3eb;font-size:15px;font-weight:bold">${escape(v)}</td></tr>`,
  )
  .join('')}
</table></td></tr>
<tr><td style="padding:20px 32px 32px">
<p style="margin:0 0 8px;color:#3e5064;font-size:13px">Nachricht</p>
<p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escape(data.message)}</p>
</td></tr>
<tr><td style="background:#f4f6f9;padding:16px 32px;color:#3e5064;font-size:12px">Direkt auf diese E-Mail antworten, um ${escape(data.name)} zu erreichen.</td></tr>
</table></td></tr></table></body></html>`;

  const text = [
    `Neue Website-Anfrage – ${site.name}`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Nachricht:',
    data.message,
  ].join('\n');

  return { html, text };
}
