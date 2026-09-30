import { createQrMatrix } from '@/lib/qr';
import { LogoMark } from './Logo';

interface QrCodeProps {
  value: string;
  label: string;
  className?: string;
}

/** Build-Time-QR-Code (RSC) mit zentriertem Markenzeichen – gestochen scharf auf jedem Display. */
export function QrCode({ value, label, className = 'size-48' }: QrCodeProps) {
  const { size, path } = createQrMatrix(value);
  const logo = Math.round(size * 0.24);
  const offset = (size - logo) / 2;
  return (
    <svg
      viewBox={`-2 -2 ${size + 4} ${size + 4}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect x="-2" y="-2" width={size + 4} height={size + 4} fill="#ffffff" />
      <path d={path} fill="#0b1b2b" />
      <rect x={offset - 0.75} y={offset - 0.75} width={logo + 1.5} height={logo + 1.5} fill="#ffffff" />
      <LogoMark
        x={offset}
        y={offset}
        width={logo}
        height={logo}
        className=""
        idPrefix="qr-logo"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
}
