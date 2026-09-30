import { C, CAR_PROFILE, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-blog';

/** Gestapelte Ratgeber-Seiten mit Artikelvorschau. */
export function BlogGraphic() {
  return (
    <GraphicFrame id={ID} fig="12" caption="RATGEBER" title="Grafik: Gestapelte Ratgeber-Artikel rund um Fahrzeugpflege und Technik">
      <rect x="118" y="78" width="250" height="276" fill={C.white} fillOpacity="0.04" stroke={C.white} strokeOpacity="0.25" transform="rotate(-7 243 216)" />
      <rect x="118" y="78" width="250" height="276" fill={C.white} fillOpacity="0.06" stroke={C.white} strokeOpacity="0.35" transform="rotate(4 243 216)" />
      <g>
        <path d="M110 70h244l22 22v270H110z" fill={C.primary} stroke={C.white} strokeWidth="2" />
        <rect x="128" y="88" width="230" height="112" fill={url(ID, 'steel')} />
        <g transform="translate(152 104) scale(0.44)">
          <path d={CAR_PROFILE} fill="none" stroke={C.white} strokeWidth="4" />
        </g>
        <rect x="128" y="88" width="64" height="18" fill={C.accent} />
        <text x="160" y="100.5" textAnchor="middle" fill={C.primary} fontSize="9" fontWeight="800" letterSpacing="1.4">
          TIPP
        </text>
        <rect x="128" y="218" width="200" height="12" fill={C.white} fillOpacity="0.9" />
        <rect x="128" y="238" width="150" height="12" fill={C.white} fillOpacity="0.9" />
        {[266, 282, 298, 314, 330].map((y, i) => (
          <rect key={y} x="128" y={y} width={i === 4 ? 120 : 214} height="6" fill={C.white} fillOpacity="0.28" />
        ))}
      </g>
      <g transform="translate(372 300) rotate(-45)">
        <rect x="0" y="-7" width="96" height="14" fill={url(ID, 'accent')} />
        <path d="M0-7-18 0 0 7z" fill={C.white} />
      </g>
      <Tag x={446} y={384 - 6} text="WISSEN AUS DER WERKSTATT" anchor="end" muted />
    </GraphicFrame>
  );
}
