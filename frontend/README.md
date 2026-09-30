# Sercans PKW Schmiede – Website

Statisch vorgerenderte Next.js-Website (SPA-Navigation ohne Seiten-Reloads) mit Kontaktformular via Server Action → Resend → IONOS-Postfach.

## Tech-Stack & Architekturentscheidung

| Bereich     | Wahl                                                     | Begründung                                                                                           |
| ----------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Framework   | **Next.js 15.5 (App Router)**, React 19, React Compiler  | Alle 31 Routen werden zur Build-Zeit statisch generiert → CDN-Auslieferung, clientseitiges Routing.   |
| Backend     | **Server Action** (`src/lib/actions/contact.ts`)         | Kein separater Express-Server nötig: läuft als Vercel Function in Frankfurt (`fra1`), 0 Wartung.      |
| Styling     | **Tailwind CSS 4** (Design-Tokens in `globals.css`)      | Kein Laufzeit-CSS-in-JS, kritisches CSS wird inline ausgeliefert (`experimental.inlineCss`).          |
| E-Mail      | **Resend** → IONOS-Postfach                              | Zuverlässige Zustellung, `Reply-To` = Kundenadresse → Antwort direkt aus dem IONOS-Postfach.          |
| Validierung | **zod** (serverseitig) + native HTML-Validierung         | Funktioniert auch ohne JavaScript (Progressive Enhancement).                                         |

## Design-System

- **Primär** `#0B1B2B` Nachtstahl · **Sekundär** `#1F4E79` Stahlblau · **Akzent** `#FF8A33` Glut – Kontraste nach WCAG AAA (Text/Hintergrund ≥ 7:1).
- **Schriften:** Archivo (Headlines, Extended-Schnitt über die `wdth`-Achse) + Inter (Fließtext), selbst gehostet über `next/font`.
- **Signatur:** „Schmiede-Fase“ (45°-Anschnitt) an Buttons, Karten und Grafiken; 0 px Border-Radius; Blueprint-Raster und Glut-Verläufe.
- **Breakpoints:** Basis 325 · `xs` 375 · `sm` 425 · `md` 768 · `lg` 1024 · `2xl` 1440 · `3xl` 2000+ (4K skaliert rem-basiert).

## Ordnerstruktur (`src/`)

```
app/                    Nur Routing: page/layout/error/not-found, sitemap, robots, manifest, OG-Image
components/ui/          Atome: Button, Icon, Logo, Photo, QrCode, FormField, Cards, FaqItem …
components/ui/graphics/ 15 Blueprint-SVG-Grafiken (je Unterseite eine eigene)
components/sections/    Seitenblöcke: PageBanner (2 Buttons mittig), Services, FAQ, Blog, Kontakt …
components/layout/      Header, Mega-Menü, Mobile-Menü (<dialog>), Footer, Aktionsleiste, WhatsApp-Button
lib/                    site.ts (Unternehmensdaten), seo.ts, qr.ts, whatsapp.ts, actions/, email/, validation/
lib/content/            Inhalte: services, faq, blog, legal, images, process
types/                  Reine TypeScript-Definitionen
```

## Lokale Entwicklung

```bash
cd frontend
npm ci
cp .env.example .env.local   # Werte eintragen
npm run dev                  # http://localhost:3000
npm run build && npm start   # Production-Build testen
npm run lint && npm run typecheck
```

Node.js ≥ 20.9 erforderlich.

## Deployment auf Vercel

1. Repository in Vercel importieren → **Root Directory: `frontend`** (wichtig, da das Projekt im Unterordner liegt).
2. Framework wird automatisch erkannt; `vercel.json` setzt Region `fra1`, Security-Header, Caching und Kurz-URLs (z. B. `/tuev` → `/leistungen/tuev`).
3. Environment Variables (Production + Preview) anlegen:

| Variable               | Beispiel                                          | Zweck                                         |
| ---------------------- | ------------------------------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.ihre-domain.de`                      | Canonical-URLs, Sitemap, Open Graph           |
| `RESEND_API_KEY`       | `re_…`                                            | Versand des Kontaktformulars                  |
| `CONTACT_TO_EMAIL`     | `info@ihre-domain.de`                             | **IONOS-Postfach**, in dem Anfragen landen    |
| `CONTACT_FROM_EMAIL`   | `Sercans PKW Schmiede <kontakt@ihre-domain.de>`   | Absender auf der in Resend verifizierten Domain |

### Domain (IONOS) → Vercel

- In Vercel unter **Settings → Domains** die Domain hinzufügen und die angezeigten DNS-Werte bei IONOS eintragen (typisch: `A @ 76.76.21.21`, `CNAME www cname.vercel-dns.com`).
- **MX-Einträge bei IONOS nicht verändern** – das Postfach bleibt bei IONOS.

### Resend (Formularversand)

1. In Resend die Domain hinzufügen (Region EU wählen).
2. Die angezeigten DNS-Einträge (DKIM-TXT, SPF-TXT und MX für die Subdomain `send`) im IONOS-DNS anlegen – sie kollidieren nicht mit dem IONOS-Postfach.
3. Nach der Verifizierung `CONTACT_FROM_EMAIL` auf diese Domain setzen. Fehlen die Variablen, zeigt das Formular einen freundlichen Hinweis auf Telefon/WhatsApp.
4. Empfehlung: In Vercel → **Firewall** (sofern im Tarif verfügbar) eine Rate-Limit-Regel für `POST`-Requests auf `/kontakt`, `/` und `/leistungen/*` anlegen (zusätzlich zum eingebauten Honeypot).

## Platzhalter „XXX“ – vor dem Livegang ergänzen

| Datei                        | Inhalt                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| `src/lib/site.ts`            | Inhaber, Rechtsform, Adresse, Telefon, **WhatsApp-Nummer**, E-Mail, Öffnungszeiten, USt-IdNr., Kammer, Berufsbezeichnung, Aufsichtsbehörde |
| `src/lib/content/legal.ts`   | Eintragung Handwerksrolle, Anschrift Resend (Plus Five Five, Inc.)                        |
| `src/lib/content/faq.ts`     | Zahlungsarten                                                                            |

Die WhatsApp-Nummer wird im internationalen Format ohne `+` eingetragen (`whatsapp.number`, z. B. `4917612345678`).
**QR-Codes, WhatsApp-Links, Footer, Impressum, Datenschutz und die strukturierten Daten für Google aktualisieren sich automatisch.**
Strukturierte Daten (Adresse, Telefon) werden erst ausgegeben, wenn keine Platzhalter mehr enthalten sind.

## Bilder

- 18 Fotos aus dem **Open Images Dataset** (Lizenz **CC BY 2.0**), jedes manuell geprüft: **keine Personen** sichtbar.
- Der Bildnachweis (Pflicht der Lizenz) wird automatisch im Impressum unter `#bildnachweis` erzeugt.
- Die Quelldateien liegen mit max. 1024 px Breite vor; `next/image` liefert AVIF/WebP in passenden Größen aus.
- **Austausch** (z. B. eigene Werkstattfotos – empfohlen für maximale Authentizität und 4K-Schärfe): Datei in `public/images/` ablegen und den Eintrag in `src/lib/content/images.ts` (Maße, Alt-Text, Credit) anpassen. Bei Ersatz bitte einen **neuen Dateinamen** verwenden (CDN-Cache).

## Gemessene Qualität (Lighthouse 12, Production-Build)

| Profil  | Performance | Accessibility | Best Practices | SEO | LCP        | TBT       | CLS      |
| ------- | ----------- | ------------- | -------------- | --- | ---------- | --------- | -------- |
| Desktop | 100         | 100           | 100            | 100 | 0,6–0,7 s  | 0–40 ms   | ≤ 0,002  |
| Mobil*  | 90–96       | 100           | 100            | 100 | 2,6–3,5 s  | 30–110 ms | ≤ 0,003  |

\* Mobil = simuliertes langsames 4G (1,6 Mbit/s) + 4× CPU-Drosselung, gemessen lokal ohne CDN. Unter reiner 4× CPU-Drosselung ohne Netzwerksimulation liegt der LCP der Startseite bei ca. 0,2–0,6 s.
