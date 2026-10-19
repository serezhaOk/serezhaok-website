import type { Card } from '@/content/types';
import { Media } from './Media';
import { ArrowIcon } from './icons';
import s from './ProjectCard.module.css';

// Рамка обложки как в оригинале: 516×395 при ширине колонки 1035
const COVER_ASPECT = 516 / 395;

export function ProjectCard({ card }: { card: Card }) {
  const body = (
    <>
      <div className={s.head}>
        <div>
          <h3 className={s.title}>{card.title}</h3>
          <p className={s.role}>{card.role}</p>
        </div>
        <ArrowIcon className={s.arrow} />
      </div>
      <Media media={{ ...card.cover, aspect: COVER_ASPECT }} className={s.cover} />
    </>
  );
  const cls = [s.card, card.hideOnMobile && s.hideMobile].filter(Boolean).join(' ');

  // Карточка без ссылки (Sleepiest) в оригинале всё равно анимируется при наведении, но никуда не ведёт
  if (!card.href) return <div className={`${cls} ${s.link}`}>{body}</div>;
  const external = /^https?:/.test(card.href);
  return (
    <a className={`${cls} ${s.link}`} href={card.href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {body}
    </a>
  );
}
