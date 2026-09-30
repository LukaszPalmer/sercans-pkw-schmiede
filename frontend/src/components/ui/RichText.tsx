import type { ReactNode } from 'react';

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

/** Mini-Inline-Parser für Content-Strings: [Linktext](url), **fett** und Zeilenumbrüche – ohne HTML-Injection. */
export function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          <Inline text={line} />
        </span>
      ))}
    </>
  );
}

function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const [raw, label, href, bold] = match;
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    if (label && href) {
      const external = /^https?:/.test(href);
      nodes.push(
        <a key={index} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {label}
        </a>,
      );
    } else if (bold) {
      nodes.push(<strong key={index}>{bold}</strong>);
    }
    last = index + raw.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
