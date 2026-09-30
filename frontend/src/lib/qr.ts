import QRCode from 'qrcode';

export interface QrMatrix {
  size: number;
  path: string;
}

/**
 * Erzeugt die QR-Matrix zur Build-Zeit (RSC) als einzelnen SVG-Pfad – 0 KB Client-JS.
 * Fehlerkorrektur „H“ (30 %) erlaubt das Markenlogo im Zentrum.
 */
export function createQrMatrix(value: string): QrMatrix {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: 'H' });
  const { size, data } = modules;
  let path = '';
  // Horizontale Läufe zusammenfassen → deutlich kleinerer Pfad als Einzelmodule.
  for (let y = 0; y < size; y++) {
    let x = 0;
    while (x < size) {
      if (!data[y * size + x]) {
        x++;
        continue;
      }
      const start = x;
      while (x < size && data[y * size + x]) x++;
      path += `M${start} ${y}h${x - start}v1H${start}z`;
    }
  }
  return { size, path };
}
