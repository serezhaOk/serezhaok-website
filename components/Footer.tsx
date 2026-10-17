import { footer, site } from '@/content/site';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.cols}>
        {footer.map((col) => (
          <div key={col.title}>
            <h2 className={s.title}>{col.title}</h2>
            <ul className={s.links}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a className={s.talk} href={`mailto:${site.email}`}>
        Let&apos;s talk
      </a>
    </footer>
  );
}
