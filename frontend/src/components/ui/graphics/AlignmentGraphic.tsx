import { C, Dim, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-align';

function Wheel({ x, y, angle = 0 }: { x: number; y: number; angle?: number }) {
  return (
    <g transform={`rotate(${angle} ${x + 15} ${y + 32})`}>
      <rect x={x} y={y} width="30" height="64" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="1.75" />
      {[10, 20, 30, 40, 50].map((d) => (
        <path key={d} d={`M${x} ${y + d + 2}h30`} stroke={C.white} strokeOpacity="0.25" />
      ))}
    </g>
  );
}

/** Achsgeometrie in Draufsicht: Spurwinkel, Mittelachse, Messlaser, Sturz-Detail. */
export function AlignmentGraphic() {
  return (
    <GraphicFrame id={ID} fig="01" caption="ACHSGEOMETRIE" title="Technische Grafik: Achsvermessung mit Spur- und Sturzwinkel">
      <path d="M240 64v312" stroke={C.white} strokeOpacity="0.3" strokeDasharray="6 6" />
      <path d="M150 96h180l16 24v200l-16 24H150l-16-24V120z" fill="none" stroke={C.white} strokeOpacity="0.28" strokeWidth="1.25" />
      <path d="M121 146h238M121 294h238" stroke={C.white} strokeOpacity="0.45" strokeWidth="1.25" />

      <Wheel x={90} y={114} angle={-4} />
      <Wheel x={360} y={114} angle={4} />
      <Wheel x={90} y={262} />
      <Wheel x={360} y={262} />

      <g stroke={C.accent} strokeWidth="1.5" strokeDasharray="3 5">
        <path d="M105 114 128 66" />
        <path d="M375 114 352 66" />
      </g>
      <circle cx="240" cy="66" r="10" fill="none" stroke={C.accent} strokeWidth="1.5" />
      <circle cx="240" cy="66" r="3" fill={C.accent} />

      <path d="M105 92a24 24 0 0 1 11 3" fill="none" stroke={C.accentLight} strokeWidth="1.5" />
      <Tag x={58} y={86} text="SPUR" />
      <text x={58} y={100} fill={C.accentLight} fontSize="11" fontWeight="700">+0°10′</text>

      <Dim id={ID} x1={121} y1={352} x2={359} y2={352} label="SPURWEITE" offset={-8} />

      <g transform="translate(400 226)">
        <rect x="-8" y="-40" width="72" height="96" fill={C.primary} fillOpacity="0.7" stroke={C.white} strokeOpacity="0.25" />
        <path d="M28-30v76" stroke={C.white} strokeOpacity="0.35" strokeDasharray="4 4" />
        <rect x="16" y="-22" width="22" height="58" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="1.5" transform="rotate(-7 27 7)" />
        <path d="M28-18a22 22 0 0 1-6 1" fill="none" stroke={C.accent} strokeWidth="1.5" />
        <text x="28" y="52" textAnchor="middle" fill={C.accentLight} fontSize="9.5" fontWeight="700">STURZ −1°20′</text>
      </g>
      <Tag x={240} y={392 - 12} text="SOLL = IST" anchor="middle" muted />
    </GraphicFrame>
  );
}
