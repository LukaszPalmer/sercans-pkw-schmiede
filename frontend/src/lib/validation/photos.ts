/**
 * Grenzen für den optionalen Bildanhang – gemeinsam für Browser (Verkleinern vor dem Senden) und Server (Prüfung).
 * Die Summe bleibt unter dem Body-Limit der Server Action (4 MB, next.config.ts) und der Vercel-Funktion (4,5 MB).
 */
export const PHOTO_LIMITS = {
  maxFiles: 5,
  maxTotalBytes: 3.5 * 1024 * 1024,
  /** Längste Kante nach dem Verkleinern im Browser. */
  maxEdge: 1600,
  jpegQuality: 0.82,
} as const;
