import { Fragment, type ReactNode } from 'react';

// Мини-парсер разметки в текстах кейсов: **жирный**, *курсив*, [ссылка](url), \n — перенос строки.
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|\n)/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{renderPart(part)}</Fragment>
      ))}
    </>
  );
}

function renderPart(part: string): ReactNode {
  if (part === '\n') return <br />;
  if (part.startsWith('**') && part.endsWith('**')) return <strong>{part.slice(2, -2)}</strong>;
  if (part.startsWith('*') && part.endsWith('*')) return <em>{part.slice(1, -1)}</em>;
  const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (link) {
    const [, label, href] = link;
    const external = /^https?:/.test(href);
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
        {label}
      </a>
    );
  }
  return part;
}
