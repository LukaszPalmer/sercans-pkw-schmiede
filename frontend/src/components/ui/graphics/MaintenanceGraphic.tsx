import { C, CheckBox, GraphicFrame, Tag, url, DISPLAY_FONT } from './primitives';

const ID = 'g-maint';
const CX = 160;
const CY = 216;
const R = 100;

const polar = (deg: number, r: number) => {
  const a = ((deg - 225) * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
};

const arc = (from: number, to: number, r: number) => {
  const [x1, y1] = polar(from, r);
  const [x2, y2] = polar(to, r);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)}A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
};

const items = ['Motoröl & Filter', 'Bremsanlage', 'Flüssigkeiten', 'Beleuchtung', 'Fahrwerk'];

/** Service-Anzeige als Rundinstrument plus Wartungs-Checkliste. */
export function MaintenanceGraphic() {
  return (
    <GraphicFrame id={ID} fig="03" caption="WARTUNGSPLAN" title="Technische Grafik: Service-Anzeige und Wartungscheckliste">
      <path d={arc(0, 270, R)} fill="none" stroke={C.white} strokeOpacity="0.14" strokeWidth="14" />
      <path d={arc(0, 205, R)} fill="none" stroke={url(ID, 'accent')} strokeWidth="14" />
      {Array.from({ length: 28 }, (_, i) => {
        const deg = i * 10;
        const [x1, y1] = polar(deg, R - 18);
        const [x2, y2] = polar(deg, R - (i % 3 === 0 ? 30 : 24));
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.white} strokeOpacity={i % 3 === 0 ? 0.7 : 0.3} strokeWidth="1.5" />;
      })}
      <text x={CX} y={CY - 18} textAnchor="middle" fill={C.white} fillOpacity="0.6" fontSize="9.5" fontWeight="600" letterSpacing="1.6">
        NÄCHSTER SERVICE
      </text>
      <text x={CX} y={CY + 16} textAnchor="middle" fill={C.white} fontSize="30" fontWeight="800" style={DISPLAY_FONT}>
        2.400
      </text>
      <text x={CX} y={CY + 36} textAnchor="middle" fill={C.accentLight} fontSize="11" fontWeight="700" letterSpacing="2">
        KM
      </text>

      <g transform="translate(292 118)">
        {items.map((label, i) => (
          <g key={label} transform={`translate(0 ${i * 40})`}>
            <CheckBox x={0} y={0} />
            <text x="30" y="13.5" fill={C.white} fontSize="12.5" fontWeight="600">
              {label}
            </text>
            <path d="M0 30h158" stroke={C.white} strokeOpacity="0.14" />
          </g>
        ))}
      </g>
      <Tag x={446} y={362} text="NACH HERSTELLERVORGABE" anchor="end" muted />
    </GraphicFrame>
  );
}
