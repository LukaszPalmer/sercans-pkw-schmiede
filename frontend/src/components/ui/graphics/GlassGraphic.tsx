import { C, Dim, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-glass';

function Chip({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const rays = [
    [0, -18],
    [15, -9],
    [17, 8],
    [4, 17],
    [-13, 12],
    [-17, -6],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle r="10" fill="none" stroke={C.white} strokeOpacity="0.5" />
      {rays.map(([dx, dy]) => (
        <path key={`${dx}${dy}`} d={`M0 0L${dx} ${dy}`} stroke={C.white} strokeWidth="1.4" />
      ))}
      <circle r="3.5" fill={C.accent} />
    </g>
  );
}

/** Windschutzscheibe mit Steinschlag, Sichtfeld, Zoom-Detail und 2-Euro-Faustregel. */
export function GlassGraphic() {
  return (
    <GraphicFrame id={ID} fig="06" caption="SCHEIBE & STEINSCHLAG" title="Technische Grafik: Windschutzscheibe mit reparablem Steinschlag">
      <path d="M78 112Q240 92 402 112L444 300Q240 322 36 300z" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="2" />
      <path d="M150 118 110 290M196 112 170 296" stroke={C.white} strokeOpacity="0.12" strokeWidth="10" />
      <rect x="92" y="150" width="134" height="110" fill="none" stroke={C.white} strokeOpacity="0.45" strokeDasharray="5 5" />
      <Tag x={100} y={170} text="SICHTFELD" muted />

      <Chip x={318} y={214} />
      <Dim id={ID} x1={318} y1={236} x2={318} y2={306} label="≥ 10 CM" />

      <g transform="translate(380 88)">
        <circle r="52" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="2.5" />
        <Chip x={0} y={8} scale={1.6} />
        <path d="M0-50v26" stroke={C.white} strokeWidth="6" />
        <path d="M-8-50h16" stroke={C.white} strokeWidth="3" />
        <text y="42" textAnchor="middle" fill={C.accentLight} fontSize="9" fontWeight="700" letterSpacing="1.2">
          HARZ + UV
        </text>
      </g>
      <path d="M332 200 346 134" stroke={C.accent} strokeWidth="1.25" strokeDasharray="3 4" />

      <g transform="translate(80 350)">
        <circle r="14" fill="none" stroke={C.accent} strokeWidth="2" />
        <circle r="9" fill="none" stroke={C.accent} strokeOpacity="0.5" />
        <text y="4" textAnchor="middle" fill={C.accentLight} fontSize="10" fontWeight="800">2€</text>
        <text x="26" y="4" fill={C.white} fillOpacity="0.7" fontSize="10" fontWeight="600" letterSpacing="1.2">
          SCHADEN KLEINER ALS Ø 25,75 MM
        </text>
      </g>
    </GraphicFrame>
  );
}
