import { services } from '@/lib/content/services';
import { Icon } from '../Icon';
import { LogoMark } from '../Logo';
import { C, GraphicFrame, Tag, hexPath } from './primitives';

const ID = 'g-services';
const CX = 240;
const CY = 210;
const R = 112;

/** Wabennetz: Markenzeichen im Zentrum, neun Leistungen im Orbit. */
export function ServicesGraphic() {
  const nodes = services.map((s, i) => {
    const a = ((i * 360) / services.length - 90) * (Math.PI / 180);
    return { ...s, x: CX + R * Math.cos(a) * 1.38, y: CY + R * Math.sin(a) };
  });
  return (
    <GraphicFrame id={ID} fig="10" caption="LEISTUNGSSPEKTRUM" title="Grafik: Neun Werkstattleistungen rund um die Sercans PKW Schmiede">
      <ellipse cx={CX} cy={CY} rx={R * 1.38} ry={R} fill="none" stroke={C.white} strokeOpacity="0.18" strokeDasharray="4 6" />
      {nodes.map((n) => (
        <line key={n.slug} x1={CX} y1={CY} x2={n.x} y2={n.y} stroke={C.accent} strokeOpacity="0.35" />
      ))}
      <path d={hexPath(CX, CY, 58)} fill={C.accent} fillOpacity="0.14" stroke={C.accent} strokeWidth="1.5" />
      <LogoMark x={CX - 34} y={CY - 34} width="68" height="68" className="" idPrefix="services-graphic-logo" />
      {nodes.map((n) => (
        <g key={n.slug}>
          <path d={hexPath(n.x, n.y, 25)} fill={C.primary} stroke={C.white} strokeWidth="1.5" />
          <g color={C.accentLight}>
            <svg x={n.x - 11} y={n.y - 11} width="22" height="22" viewBox="0 0 22 22" overflow="visible">
              <Icon name={n.icon} className="size-[22px]" strokeWidth={1.75} />
            </svg>
          </g>
        </g>
      ))}
      <Tag x={446} y={378} text="9 LEISTUNGEN · 1 ANSPRECHPARTNER" anchor="end" muted />
    </GraphicFrame>
  );
}
