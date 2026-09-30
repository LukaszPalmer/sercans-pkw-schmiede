import { C, CAR_PROFILE, CAR_WINDOWS, GraphicFrame, Spark, Tag, url } from './primitives';

const ID = 'g-detail';

/** Fahrzeugprofil mit Glanzreflex, Polierpad und Funkeln. */
export function DetailingGraphic() {
  return (
    <GraphicFrame id={ID} fig="04" caption="LACK & GLANZ" title="Technische Grafik: Fahrzeugprofil mit Glanzreflex nach Politur und Versiegelung">
      <defs>
        <clipPath id={`${ID}-body`}>
          <path d={CAR_PROFILE} />
        </clipPath>
        <linearGradient id={`${ID}-shine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.white} stopOpacity="0" />
          <stop offset="0.5" stopColor={C.white} stopOpacity="0.55" />
          <stop offset="1" stopColor={C.white} stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(-4 10)">
        <path d={CAR_PROFILE} fill={url(ID, 'steel')} />
        <g clipPath={`url(#${ID}-body)`}>
          <rect x="150" y="120" width="70" height="200" fill={`url(#${ID}-shine)`} transform="rotate(24 185 220)" />
          <rect x="250" y="120" width="26" height="200" fill={`url(#${ID}-shine)`} transform="rotate(24 263 220)" />
        </g>
        <path d={CAR_PROFILE} fill="none" stroke={C.white} strokeWidth="2" />
        <path d={CAR_WINDOWS} fill={C.primary} fillOpacity="0.55" stroke={C.white} strokeOpacity="0.6" />
        <path d="M82 236h348" stroke={C.white} strokeOpacity="0.3" />
        {[131, 367].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="270" r="29" fill={C.primary} stroke={C.white} strokeWidth="2" />
            <circle cx={cx} cy="270" r="15" fill="none" stroke={C.accent} strokeWidth="2" />
          </g>
        ))}
        <path d="M40 300h400" stroke={C.white} strokeOpacity="0.35" />
      </g>

      <g transform="translate(360 104)">
        <circle r="34" fill={C.primary} stroke={url(ID, 'accent')} strokeWidth="2.5" />
        <circle r="22" fill="none" stroke={C.accent} strokeOpacity="0.6" strokeDasharray="3 4" />
        <circle r="8" fill={C.accent} />
        <path d="M24 24 54 54" stroke={C.white} strokeWidth="8" strokeOpacity="0.9" />
      </g>
      <Spark x={214} y={150} r={11} fill={C.white} />
      <Spark x={318} y={196} r={7} />
      <Spark x={96} y={222} r={6} fill={C.accentLight} />
      <Tag x={34} y={362} text="REINIGUNG" muted />
      <Tag x={168} y={362} text="POLITUR" />
      <Tag x={446} y={362} text="VERSIEGELUNG" anchor="end" muted />
      <path d="M118 358h36M232 358h36" stroke={C.accent} strokeWidth="1.5" />
    </GraphicFrame>
  );
}
