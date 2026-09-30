import { LogoMark } from '../Logo';
import { C, CAR_PROFILE, CAR_WINDOWS, Dim, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-brand';

/** Marken-Blueprint: Fahrzeugprofil mit Bemaßung – Präzision als Versprechen. */
export function BrandGraphic() {
  return (
    <GraphicFrame id={ID} fig="00" caption="PRÄZISION AUS DER SCHMIEDE" title="Technische Zeichnung eines Fahrzeugs mit Bemaßung als Markenbild">
      <g transform="translate(-6 8)">
        <path d={CAR_PROFILE} fill={url(ID, 'steel')} stroke={C.white} strokeWidth="2" />
        <path d={CAR_WINDOWS} fill="none" stroke={C.white} strokeOpacity="0.55" />
        <path d="M82 236h348M226 166v104" stroke={C.white} strokeOpacity="0.28" />
        {[131, 367].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="270" r="29" fill={C.primary} stroke={C.white} strokeWidth="2" />
            <circle cx={cx} cy="270" r="4" fill={C.accent} />
            <path d={`M${cx} 226v90`} stroke={C.accent} strokeOpacity="0.6" strokeDasharray="3 4" />
          </g>
        ))}
        <path d="M40 300h420" stroke={C.white} strokeOpacity="0.35" />
        <Dim id={ID} x1={131} y1={330} x2={367} y2={330} label="RADSTAND" offset={-8} />
        <Dim id={ID} x1={62} y1={116} x2={438} y2={116} label="GESAMTLÄNGE" offset={-8} />
      </g>
      <LogoMark x={392} y={306} width="54" height="54" className="" idPrefix="brand-graphic-logo" />
      <Tag x={30} y={378} text="TOLERANZ ± 0" muted />
    </GraphicFrame>
  );
}
