import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/content/projects';
import { CaseHeader } from '@/components/CaseHeader';
import { Blocks } from '@/components/Blocks';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import s from '../page.module.css';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    alternates: { canonical: `/${slug}/` },
    openGraph: { url: `/${slug}/`, title: project.title },
  };
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // В оригинале под подзаголовком линия ближе к тексту, чем под метой
  const [top, bottom] = project.headerSpace ?? [50, project.subtitle ? 43 : 53];

  const related = project.related.map((r) => {
    const p = getProject(r);
    if (!p) throw new Error(`В ${slug}.related указан несуществующий кейс ${r}`);
    return { ...p.card, href: `/${p.slug}/` };
  });

  return (
    <article className={`container ${s.case}`}>
      <CaseHeader project={project} />
      <hr className="divider" style={{ margin: `${top}px 0 ${bottom}px` }} />
      <Blocks blocks={project.blocks} compact={project.compact} largeMobileHeadings={project.largeMobileHeadings} />

      <hr className={`divider ${s.sepEnd}`} style={project.endSpace ? { marginTop: project.endSpace } : undefined} />
      <ProjectGrid title="Related projects" cards={related} titleId="related" small />

      <hr className={`divider ${s.sepEnd}`} style={project.endSpace ? { marginTop: project.endSpace } : undefined} />
      <Footer />
    </article>
  );
}
