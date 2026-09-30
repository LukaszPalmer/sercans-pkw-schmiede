import { C, GraphicFrame, Spark, Tag, gearPath, hexPath, url } from './primitives';

const ID = 'g-repair';

/** Zahnrad, Maulschlüssel und Funken – präzise Mechanik. */
export function RepairGraphic() {
  return (
    <GraphicFrame id={ID} fig="02" caption="MECHANIK & DIAGNOSE" title="Technische Grafik: Zahnrad mit Maulschlüssel als Symbol für Reparaturen">
      <path d={gearPath(214, 210, 128, 110, 14)} fill={url(ID, 'steel')} stroke={C.white} strokeWidth="1.75" />
      <circle cx="214" cy="210" r="74" fill="none" stroke={C.white} strokeOpacity="0.35" />
      <circle cx="214" cy="210" r="52" fill={C.primary} stroke={C.white} strokeWidth="1.5" />
      <path d={hexPath(214, 210, 26)} fill="none" stroke={C.accent} strokeWidth="2.5" />
      <circle cx="214" cy="210" r="9" fill={C.accent} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle
          key={a}
          cx={214 + 92 * Math.cos((a * Math.PI) / 180)}
          cy={210 + 92 * Math.sin((a * Math.PI) / 180)}
          r="6"
          fill="none"
          stroke={C.white}
          strokeOpacity="0.55"
        />
      ))}

      <g transform="translate(262 330) rotate(-38)">
        <rect x="0" y="-10" width="190" height="20" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="2.25" />
        <path d="M18-3h150M18 3h150" stroke={C.accent} strokeOpacity="0.35" />
        <path d="M190-28h40l14 14h-24l-10 8v12l10 8h24l-14 14h-40z" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="2.25" />
      </g>

      <Spark x={390} y={120} r={10} />
      <Spark x={412} y={150} r={5} fill={C.accentLight} />
      <Spark x={362} y={96} r={4} fill={C.white} />
      <Tag x={446} y={362} text="DIAGNOSE · REPARATUR · PRÜFUNG" anchor="end" muted />
    </GraphicFrame>
  );
}
