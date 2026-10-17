import type { Project } from '../types';
import musescore from './musescore';
import raiffeisen from './raiffeisen-short';
import musegroup from './musegroup';
import collabs from './collabs';

// Все кейсы сайта. Новый кейс: создать файл рядом и добавить его сюда.
export const projects: Project[] = [musescore, raiffeisen, musegroup, collabs];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
