import { C, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-legal';

/** Schutzschild mit Paragraph – Transparenz & Datenschutz. */
export function LegalGraphic() {
  return (
    <GraphicFrame id={ID} fig="14" caption="RECHTLICHES" title="Grafik: Schutzschild mit Paragraphenzeichen für Impressum und Datenschutz">
      <rect x="252" y="96" width="180" height="236" fill={C.white} fillOpacity="0.05" stroke={C.white} strokeOpacity="0.3" />
      {[128, 150, 172, 194, 216, 238, 260, 282].map((y, i) => (
        <rect key={y} x="272" y={y} width={i % 3 === 2 ? 96 : 140} height="6" fill={C.white} fillOpacity="0.25" />
      ))}
      <path d="M172 76 262 110v88c0 64-40 108-90 128-50-20-90-64-90-128v-88z" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="3" />
      <path d="M172 96 244 124v74c0 52-32 88-72 106-40-18-72-54-72-106v-74z" fill={url(ID, 'steel')} />
      <text x="172" y="236" textAnchor="middle" fill={C.white} fontSize="92" fontWeight="800" style={DISPLAY_FONT}>
        §
      </text>
      <Tag x={446} y={378} text="TRANSPARENT · DSGVO-KONFORM" anchor="end" muted />
    </GraphicFrame>
  );
}
