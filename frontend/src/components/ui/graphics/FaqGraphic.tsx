import { C, CheckBox, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-faq';

/** Frage- und Antwortblase im Werkstatt-Blueprint. */
export function FaqGraphic() {
  return (
    <GraphicFrame id={ID} fig="11" caption="FRAGEN & ANTWORTEN" title="Grafik: Frage- und Antwortblasen als Symbol für häufige Fragen">
      <path d="M52 86h212l24 24v104H130l-40 34v-34H52z" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="2" />
      <text x="170" y="198" textAnchor="middle" fill={C.accent} fontSize="112" fontWeight="800" style={DISPLAY_FONT}>
        ?
      </text>
      <path d="M200 208h224v118h-44v32l-38-32H200z" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="2.25" />
      <CheckBox x={222} y={232} size={22} />
      {[236, 256, 276, 296].map((y, i) => (
        <rect key={y} x={i === 0 ? 256 : 222} y={y} width={i === 3 ? 110 : i === 0 ? 144 : 178} height="8" fill={C.white} fillOpacity={i === 0 ? 0.85 : 0.3} />
      ))}
      <Tag x={446} y={378} text="EHRLICH · VERSTÄNDLICH · KOMPETENT" anchor="end" muted />
    </GraphicFrame>
  );
}
