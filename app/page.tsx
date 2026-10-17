import { home, homeCards } from '@/content/site';
import { Media } from '@/components/Media';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import s from './page.module.css';

export default function HomePage() {
  return (
    <div className={`container ${s.page}`}>
      <h1 className="visually-hidden">Sergey Diuzhev — Product &amp; Interaction Designer</h1>
      <div className={s.intro}>
        {home.intro.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
      <p className={s.location}>{home.location}</p>
      <Media media={home.showreel} className={s.showreel} eager />

      <hr className={`divider ${s.sep}`} />
      <ProjectGrid title={home.projectsTitle} cards={homeCards} titleId="projects" />

      <hr className={`divider ${s.sep}`} />
      <section className={s.about} aria-label="About me">
        {home.about.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </section>

      <hr className={`divider ${s.sep}`} />
      <Footer />
    </div>
  );
}
