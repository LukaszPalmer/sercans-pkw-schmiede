/** Strukturierte Daten (schema.org) – serverseitig gerendert, kein Client-JS. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify + Escaping von „<“ verhindert Script-Injection über Inhalte.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
