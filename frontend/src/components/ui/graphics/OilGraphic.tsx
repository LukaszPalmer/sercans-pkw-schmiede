import { C, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-oil';

/** Öltropfen mit Viskosität, Ölmessstab MIN/MAX und Ölfilter. */
export function OilGraphic() {
  return (
    <GraphicFrame id={ID} fig="08" caption="MOTORÖL & FILTER" title="Technische Grafik: Öltropfen mit Viskosität, Ölmessstab und Ölfilter">
      <defs>
        <linearGradient id={`${ID}-drop`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={C.accentLight} />
          <stop offset="0.6" stopColor={C.accent} />
          <stop offset="1" stopColor="#b24a06" />
        </linearGradient>
      </defs>
      <path d="M200 70C200 70 110 176 110 236a90 90 0 0 0 180 0C290 176 200 70 200 70z" fill={`url(#${ID}-drop)`} />
      <path d="M150 222q4-40 36-86" stroke={C.white} strokeOpacity="0.55" strokeWidth="6" fill="none" />
      <text x="200" y="250" textAnchor="middle" fill={C.primary} fontSize="34" fontWeight="800" style={DISPLAY_FONT}>
        5W-30
      </text>
      <text x="200" y="274" textAnchor="middle" fill={C.primary} fontSize="10" fontWeight="700" letterSpacing="2.2">
        FREIGABE ✓
      </text>

      <g transform="translate(360 76)">
        <rect x="-6" y="-8" width="24" height="16" fill={C.white} fillOpacity="0.9" />
        <rect x="0" y="8" width="12" height="270" fill={C.white} fillOpacity="0.08" stroke={C.white} strokeOpacity="0.6" />
        <rect x="0" y="176" width="12" height="102" fill={url(ID, 'accent')} />
        <path d="M0 176h12" stroke={C.white} strokeWidth="2" />
        {[
          { y: 170, t: 'MAX' },
          { y: 236, t: 'MIN' },
        ].map((m) => (
          <g key={m.t}>
            <path d={`M12 ${m.y}h16`} stroke={C.white} strokeWidth="1.5" />
            <text x="34" y={m.y + 4} fill={C.white} fontSize="10" fontWeight="700" letterSpacing="1.5">
              {m.t}
            </text>
          </g>
        ))}
        <path d="M0 170h12M0 236h12" stroke={C.white} strokeOpacity="0.6" />
        <path d="M0 184 12 196M0 200 12 212M0 216 12 228" stroke={C.primary} strokeOpacity="0.4" />
      </g>

      <g transform="translate(46 262)">
        <rect width="46" height="74" fill={url(ID, 'steel')} stroke={C.white} strokeWidth="1.5" />
        {[12, 22, 32, 42, 52, 62].map((y) => (
          <path key={y} d={`M0 ${y}h46`} stroke={C.white} strokeOpacity="0.3" />
        ))}
        <rect x="8" y="-8" width="30" height="8" fill={C.white} fillOpacity="0.8" />
        <text x="23" y="90" textAnchor="middle" fill={C.white} fillOpacity="0.6" fontSize="9" fontWeight="600" letterSpacing="1.4">
          FILTER
        </text>
      </g>
      <Tag x={446} y={374} text="INTERVALL LT. HERSTELLER" anchor="end" muted />
    </GraphicFrame>
  );
}
