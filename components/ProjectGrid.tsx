import type { Card } from '@/content/types';
import { ProjectCard } from './ProjectCard';
import s from './ProjectGrid.module.css';

// Плитка карточек: 2 колонки на десктопе, 1 — на планшете и телефоне. Используется на главной и в Related.
export function ProjectGrid({ title, cards, titleId }: { title: string; cards: Card[]; titleId?: string }) {
  return (
    <section aria-labelledby={titleId}>
      <h2 id={titleId} className="section-title">
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
