import type { Card } from '@/content/types';
import { ProjectCard } from './ProjectCard';
import s from './ProjectGrid.module.css';

// Плитка карточек: 2 колонки на десктопе, 1 — на планшете и телефоне. Используется на главной и в Related.
export function ProjectGrid({
  title,
  cards,
  titleId,
  small,
}: {
  title: string;
  cards: Card[];
  titleId?: string;
  small?: boolean; // Related: на телефоне заголовок 32 px, а не 75
}) {
  return (
    <section aria-labelledby={titleId}>
      <h2 id={titleId} className={small ? `section-title ${s.small}` : 'section-title'}>
        {title}
      </h2>
      <div className={s.grid}>
        {cards.map((card) => (
          <ProjectCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
