import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} – Kfz-Werkstatt für alle Marken`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Markenkonformes Social-Sharing-Bild, zur Build-Zeit generiert. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: '#ffffff',
          background:
            'radial-gradient(900px 500px at 90% 0%, rgba(255,138,51,0.35), transparent 60%), linear-gradient(135deg, #06111c 0%, #0b1b2b 50%, #1f4e79 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 48 48">
            <path d="M24 1.5 43.5 12.75v22.5L24 46.5 4.5 35.25v-22.5z" fill="#1f4e79" />
            <path d="M31 14.5H19.5l-4 4v2l4 4h9l4 4v2l-4 4H16.5" fill="none" stroke="#fff" strokeWidth="4.25" />
            <path d="m36 11.2 2.9 2.9-2.9 2.9-2.9-2.9z" fill="#ff8a33" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: 6 }}>SERCANS</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 10, color: '#ff8a33' }}>PKW SCHMIEDE</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Präzision aus der Schmiede.</div>
          <div style={{ marginTop: 24, fontSize: 30, color: '#b8c5d4' }}>
            Wartung · Reparatur · Reifen · Glas · TÜV-Service – für alle Marken
          </div>
        </div>
        <div style={{ display: 'flex', height: 8, width: 240, background: '#ff8a33' }} />
      </div>
    ),
    size,
  );
}
