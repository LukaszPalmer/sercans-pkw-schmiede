import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} – Service, Reparatur und Wartung`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const PAPER = '#f5f6f4';
const INK = '#202729';
const MUTED = '#677173';
const PRIMARY = '#245ac7';

/** Social-Sharing-Bild in den Designfarben, zur Build-Zeit generiert: Mineralweiß, Textwortmarke, Leitsatz, blaue Linie. */
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
          color: INK,
          background: PAPER,
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, letterSpacing: -0.5 }}>
          <span style={{ color: PRIMARY }}>PKW</span>
          <span style={{ marginLeft: 11 }}>Schmiede</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, lineHeight: 1.03 }}>Präzision,</div>
          <div style={{ fontSize: 84, lineHeight: 1.03 }}>die bleibt.</div>
          <div style={{ marginTop: 28, fontSize: 24, color: MUTED }}>SERVICE / REPARATUR / WARTUNG</div>
        </div>
        <div style={{ display: 'flex', height: 2, width: '100%', background: PRIMARY }} />
      </div>
    ),
    size,
  );
}
