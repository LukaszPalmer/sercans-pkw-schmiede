import { C, Dim, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-tire';
const CX = 196;
const CY = 216;

/** Rad in Frontansicht mit Reifenkennung, Radschrauben und Profiltiefen-Skala. */
export function TireGraphic() {
  return (
    <GraphicFrame id={ID} fig="05" caption="RAD & REIFEN" title="Technische Grafik: Rad mit Reifenkennzeichnung und Profiltiefen-Skala">
      <defs>
        <path id={`${ID}-label`} d={`M${CX - 106} ${CY}a106 106 0 0 1 212 0`} />
      </defs>
      <circle cx={CX} cy={CY} r="140" fill={C.primary} stroke={C.white} strokeWidth="2" />
      {Array.from({ length: 60 }, (_, i) => {
        const a = (i * 6 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={CX + 128 * Math.cos(a)}
            y1={CY + 128 * Math.sin(a)}
            x2={CX + 140 * Math.cos(a)}
            y2={CY + 140 * Math.sin(a)}
            stroke={C.white}
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        );
      })}
      <circle cx={CX} cy={CY} r="92" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="1.75" />
      <text fill={C.white} fillOpacity="0.8" fontSize="12" fontWeight="700" letterSpacing="3" style={DISPLAY_FONT}>
        <textPath href={`#${ID}-label`} startOffset="50%" textAnchor="middle">
          205/55 R16 91V · 3PMSF
        </textPath>
      </text>
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          d={`M${CX - 7} ${CY - 30}L${CX - 12} ${CY - 86}H${CX + 12}L${CX + 7} ${CY - 30}z`}
          fill={C.primary}
          fillOpacity="0.6"
          stroke={C.white}
          strokeOpacity="0.7"
          transform={`rotate(${deg} ${CX} ${CY})`}
        />
      ))}
      <circle cx={CX} cy={CY} r="30" fill={C.primary} stroke={C.white} strokeWidth="1.5" />
      {[0, 72, 144, 216, 288].map((deg) => {
        const a = ((deg - 90) * Math.PI) / 180;
        return <circle key={deg} cx={CX + 18 * Math.cos(a)} cy={CY + 18 * Math.sin(a)} r="4.5" fill={C.accent} />;
      })}

      <g transform="translate(392 92)">
        <rect x="0" y="0" width="14" height="240" fill={C.white} fillOpacity="0.06" stroke={C.white} strokeOpacity="0.4" />
        <rect x="0" y="120" width="14" height="120" fill={url(ID, 'accent')} />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((mm) => (
          <g key={mm}>
            <path d={`M14 ${240 - mm * 30}h8`} stroke={C.white} strokeOpacity="0.6" />
            <text x="26" y={244 - mm * 30} fill={C.white} fillOpacity="0.6" fontSize="9">
              {mm}
            </text>
          </g>
        ))}
        <path d="M-6 192h26" stroke={C.white} strokeWidth="2" />
        <text x="-10" y="195" textAnchor="end" fill={C.white} fillOpacity="0.8" fontSize="9" fontWeight="700">1,6</text>
        <text x="-10" y="124" textAnchor="end" fill={C.accentLight} fontSize="9" fontWeight="700">4 MM</text>
        <text x="7" y="-10" textAnchor="middle" fill={C.white} fillOpacity="0.55" fontSize="9" fontWeight="600" letterSpacing="1.4">
          PROFIL
        </text>
      </g>
      <Dim id={ID} x1={56} y1={376} x2={336} y2={376} label="Ø NACH HERSTELLERVORGABE" offset={-8} />
      <Tag x={446} y={362} text="WINTER ≥ 4 MM" anchor="end" muted />
    </GraphicFrame>
  );
}
