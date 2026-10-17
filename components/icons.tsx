// Иконки сняты с оригинала (SVG из Framer).

export function EyeIcon(props: { className?: string }) {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C5.8403 0 2.26119 2.31313 0 6C2.26119 9.68687 5.8403 12 10 12C14.1597 12 17.7388 9.68687 20 6C17.7388 2.31313 14.1597 0 10 0ZM14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6ZM10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StackIcon(props: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M4.59844 2.80015L3.99844 0.400146H15.9984L15.3984 2.80015H4.59844Z" fill="currentColor" />
      <path d="M2.19844 5.20015L2.79844 7.60015H17.1984L17.7984 5.20015H2.19844Z" fill="currentColor" />
      <path d="M0.398438 10.0001L2.79844 19.6001H17.1984L19.5984 10.0001H0.398438Z" fill="currentColor" />
    </svg>
  );
}

export function ChevronIcon(props: { className?: string }) {
  return (
    <svg width="8" height="12" viewBox="-1 -1 8 12" fill="none" aria-hidden="true" {...props}>
      <path d="M6 5L0 10L0 0L6 5Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon(props: { className?: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" {...props}>
      <circle cx="22" cy="22" r="20.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 27.5 27.5 16.5M18.5 16.5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
