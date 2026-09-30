import { C, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-store';
const shelves = [164, 254, 344];

function Tire({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 17} y={y - 64} width="34" height="64" fill={C.primary} stroke={C.white} strokeWidth="1.5" />
      {[11, 22, 33, 44, 55].map((d) => (
        <path key={d} d={`M${x - 17} ${y - 64 + d}h34`} stroke={C.white} strokeOpacity="0.22" />
      ))}
      <rect x={x - 6} y={y - 54} width="12" height="44" fill={url(ID, 'steel')} />
    </g>
  );
}

/** Reifenregal mit Etagen, Kennzeichnung und optimalen Lagerbedingungen. */
export function StorageGraphic() {
  return (
    <GraphicFrame id={ID} fig="07" caption="REIFENHOTEL" title="Technische Grafik: Reifenregal mit gekennzeichneten Rädern und Lagerbedingungen">
      <path d="M44 86v270M300 86v270" stroke={C.white} strokeWidth="2.5" />
      {shelves.map((y, row) => (
        <g key={y}>
          <path d={`M44 ${y}h256`} stroke={C.white} strokeWidth="2.5" />
          {[82, 124, 166, 208, 250].map((x) => (
            <Tire key={x} x={x} y={y - 3} />
          ))}
          <rect x="52" y={y + 4} width="42" height="15" fill={row === 1 ? C.accent : C.white} fillOpacity={row === 1 ? 1 : 0.12} />
          <text x="73" y={y + 15} textAnchor="middle" fill={row === 1 ? C.primary : C.white} fontSize="9" fontWeight="800" letterSpacing="1">
            {`A-0${row + 1}`}
          </text>
        </g>
      ))}

      <g transform="translate(208 164)">
        <path d="M0-67 26-90" stroke={C.accent} strokeWidth="1.25" />
        <rect x="20" y="-128" width="108" height="40" fill={C.accent} />
        <text x="30" y="-111" fill={C.primary} fontSize="9.5" fontWeight="800" letterSpacing="1">KUNDE 1043</text>
        <text x="30" y="-97" fill={C.primary} fontSize="9" fontWeight="600">225/45 R17 · 6,5 mm</text>
      </g>

      <g transform="translate(330 124)">
        {[
          { label: 'TROCKEN', y: 0 },
          { label: 'KÜHL', y: 64 },
          { label: 'DUNKEL', y: 128 },
        ].map((item) => (
          <g key={item.label} transform={`translate(0 ${item.y})`}>
            <rect width="116" height="48" fill={C.white} fillOpacity="0.05" stroke={C.white} strokeOpacity="0.2" />
            <rect width="4" height="48" fill={C.accent} />
            <text x="18" y="29" fill={C.white} fontSize="11" fontWeight="700" letterSpacing="2">
              {item.label}
            </text>
          </g>
        ))}
      </g>
      <Tag x={446} y={380} text="FACHGERECHT GELAGERT" anchor="end" muted />
    </GraphicFrame>
  );
}
