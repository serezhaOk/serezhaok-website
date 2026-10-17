import Link from 'next/link';
import { site } from '@/content/site';
import { NavPill } from './NavPill';
import s from './Header.module.css';

export function Header() {
  return (
    <header>
      <Link href="/" className={s.brand} aria-label={`${site.name} — home`}>
        <span className={s.avatar}>
          <img src={site.avatar} width={36} height={36} alt="" />
        </span>
        <span className={s.name}>{site.name}</span>
      </Link>
      <NavPill />
      <a className={s.cv} href={site.cv} target="_blank" rel="noopener">
        CV
      </a>
    </header>
  );
}
