import type { Project } from '@/content/types';
import s from './CaseHeader.module.css';

export function CaseHeader({ project }: { project: Project }) {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{project.title}</h1>
      {project.subtitle && (
        <p className={[s.subtitle, project.compact && s.narrow].filter(Boolean).join(' ')}>{project.subtitle}</p>
      )}
      {project.meta && (
        <dl className={s.meta}>
          {project.meta.map((m) => (
            <div key={m.label}>
              <dt className={s.label}>{m.label}</dt>
              <dd className={s.value}>
                {m.value.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  );
}
