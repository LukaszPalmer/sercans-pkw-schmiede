import type { ProcessStep } from '@/types/service';

/** Allgemeiner Werkstatt-Ablauf (Startseite & Leistungsübersicht). */
export const workshopProcess: ProcessStep[] = [
  { title: 'Anfrage', text: 'Per WhatsApp, Telefon oder Formular – Sie schildern Ihr Anliegen, wir schlagen einen Termin vor.' },
  { title: 'Diagnose & Angebot', text: 'Wir prüfen Ihr Fahrzeug gründlich und nennen Ihnen die Kosten, bevor wir beginnen.' },
  { title: 'Präzise Umsetzung', text: 'Fachgerechte Arbeit nach Herstellervorgaben – mit Qualitätsteilen und Sorgfalt im Detail.' },
  { title: 'Übergabe', text: 'Endkontrolle, verständliche Erläuterung der Arbeiten und transparente Rechnung.' },
];
