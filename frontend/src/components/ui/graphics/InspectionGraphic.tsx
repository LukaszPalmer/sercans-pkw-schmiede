import { C, CheckBox, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-hu';
const CX = 176;
const CY = 212;
const months = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const checks = ['BELEUCHTUNG', 'BREMSEN', 'REIFEN', 'FAHRWERK', 'ABGAS (AU)'];

/** Prüfplakette mit Monatssegmenten plus HU-Prüfpunkte. */
export function InspectionGraphic() {
  return (
    <GraphicFrame id={ID} fig="09" caption="HAUPTUNTERSUCHUNG" title="Technische Grafik: Prüfplakette der Hauptuntersuchung mit Prüfpunkten">
      <circle cx={CX} cy={CY} r="126" fill="none" stroke={C.white} strokeOpacity="0.15" strokeDasharray="2 6" />
      <circle cx={CX} cy={CY} r="112" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="2" />
      {months.map((m, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180;
        const a1 = ((i * 30 - 105) * Math.PI) / 180;
        const x1 = CX + 112 * Math.cos(a1);
        const y1 = CY + 112 * Math.sin(a1);
        const x2 = CX + 64 * Math.cos(a1);
        const y2 = CY + 64 * Math.sin(a1);
        return (
          <g key={m}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.white} strokeOpacity="0.35" />
            <text
              x={CX + 88 * Math.cos(a)}
              y={CY + 88 * Math.sin(a) + 5}
              textAnchor="middle"
              fill={i === 0 ? C.accent : C.white}
              fontSize={i === 0 ? 17 : 13}
              fontWeight="800"
              style={DISPLAY_FONT}
            >
              {m}
            </text>
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r="64" fill={C.primary} stroke={C.white} strokeWidth="1.5" />
      <text x={CX} y={CY + 16} textAnchor="middle" fill={C.white} fontSize="44" fontWeight="800" style={DISPLAY_FONT}>
        28
      </text>
      <path d={`M${CX - 10} ${CY - 136}l10 14 10-14z`} fill={C.accent} />

      <g transform="translate(330 104)">
        {checks.map((label, i) => (
          <g key={label} transform={`translate(0 ${i * 42})`}>
            <CheckBox x={0} y={0} />
            <text x="28" y="13.5" fill={C.white} fontSize="11" fontWeight="700" letterSpacing="1.4">
              {label}
            </text>
          </g>
        ))}
      </g>
      <path d="M292 212h28" stroke={C.accent} strokeDasharray="3 4" />
      <Tag x={446} y={362} text="HU/AU ALLE 24 MONATE" anchor="end" muted />
    </GraphicFrame>
  );
}
