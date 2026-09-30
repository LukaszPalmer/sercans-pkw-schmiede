import { Icon } from '../Icon';
import { C, GraphicFrame, Tag, url } from './primitives';

const ID = 'g-contact';

/** Stadtplan-Raster mit Route zum Standort plus Chat- und Telefonsignal. */
export function ContactGraphic() {
  return (
    <GraphicFrame id={ID} fig="13" caption="STANDORT & KONTAKT" title="Grafik: Route zum Standort der Werkstatt mit Kontaktsymbolen">
      <g stroke={C.white} strokeOpacity="0.14" strokeWidth="14">
        <path d="M0 150h480M0 290h480M120 60v340M330 60v340" />
      </g>
      <g stroke={C.white} strokeOpacity="0.07" strokeWidth="6">
        <path d="M0 220h480M220 60v340M410 60v340M40 60v340" />
      </g>
      <path d="M60 372V290h160v-70h110v-70h-4" fill="none" stroke={url(ID, 'accent')} strokeWidth="4" strokeDasharray="10 8" />
      <circle cx="60" cy="372" r="7" fill={C.white} />
      <g transform="translate(330 150)">
        <circle r="48" fill={C.accent} fillOpacity="0.12" />
        <circle r="28" fill={C.accent} fillOpacity="0.2" />
        <path d="M0 0-22-34a26 26 0 1 1 44 0z" fill={url(ID, 'accent')} />
        <circle cy="-48" r="9" fill={C.primary} />
      </g>
      <g transform="translate(90 84)">
        <path d="M0 0h118v56H40L18 74V56H0z" fill={C.primary} stroke={C.white} strokeWidth="1.75" />
        <g color={C.accent}>
          <svg x="12" y="16" width="24" height="24" viewBox="0 0 24 24">
            <Icon name="whatsapp" className="size-6" />
          </svg>
        </g>
        <rect x="46" y="20" width="58" height="6" fill={C.white} fillOpacity="0.8" />
        <rect x="46" y="32" width="40" height="6" fill={C.white} fillOpacity="0.35" />
      </g>
      <g transform="translate(404 262)" fill="none" stroke={C.white} strokeWidth="2">
        <path d="M-12-12a17 17 0 0 1 24 0" strokeOpacity="0.5" />
        <path d="M-22-22a31 31 0 0 1 44 0" strokeOpacity="0.3" />
        <circle r="5" fill={C.accent} stroke="none" />
      </g>
      <Tag x={446} y={378} text="ANRUF · WHATSAPP · E-MAIL" anchor="end" muted />
    </GraphicFrame>
  );
}
