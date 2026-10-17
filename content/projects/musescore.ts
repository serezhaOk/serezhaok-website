import type { Project } from '../types';
import { m, WIDE, SQUARE } from '../media';

const d = '/media/musescore';

const project: Project = {
  slug: 'musescore',
  title: 'MuseScore',
  meta: [
    { label: 'Timeline', value: ['2023 – Present'] },
    { label: 'Role', value: ['Lead Product Designer'] },
    { label: 'Scope', value: ['Web platform,', 'mobile app'] },
    { label: 'Contribution', value: ['Growth,', 'Product stickiness,', 'Rebranding'] },
  ],
  card: {
    title: 'MuseScore',
    role: 'Lead Product Designer',
    cover: m('/media/covers/musescore.png', 3650, 2844, undefined, 'MuseScore'),
  },
  related: ['musegroup', 'raiffeisen-short'],
  blocks: [
    { type: 'h2', text: 'Observation' },
    {
      type: 'p',
      text: 'MuseScore is a platform where composers can publish their sheet music, and musicians can discover scores that fit their needs—download them, save them, or practice directly in the browser or mobile app.',
    },
    {
      type: 'p',
      text: 'User habits around sheet music are deeply rooted in printing, which makes the relationship with the platform largely transactional: find a score, purchase it, and leave. Product growth relied heavily on SEO, a channel that is difficult to depend on in the long term. The core challenge was to shift user behavior and build a habit of returning to the product.',
    },
    { type: 'media', items: [m(`${d}/01.png`, 3200, 3200, WIDE)] },

    { type: 'h2', text: 'Product Growth' },
    {
      type: 'p',
      text: 'As a first major step toward this vision, I partnered with the Head of Growth to design and run over 80 A/B experiments. These experiments were focused on shaping repeat behavior, and led to measurable improvements in D7 retention, registration conversion, and average session length.',
    },
    {
      type: 'p',
      text: 'The experimentation cycle was grounded in user needs, with each hypothesis intentionally balancing musicians’ motivations with business growth goals, ensuring that engagement mechanics reinforced the core value of the product rather than distracting from it.',
    },
    { type: 'media', items: [m(`${d}/02.png`, 3200, 3200, WIDE)] },
    { type: 'media', items: [m(`${d}/03.png`, 3200, 3200, WIDE)] },
    {
      type: 'p',
      text: 'One of my most impactful contributions was designing a new gamification system: Streaks, rewards, and motivational loops, entirely from scratch. This became one of the strongest retention drivers in recent years, giving MuseScore a fresh layer of habit-building mechanics and daily engagement.',
    },
    { type: 'media', cols: 2, items: [m(`${d}/04.mp4`, 840, 968, WIDE), m(`${d}/05.png`, 3200, 3200, WIDE)] },

    { type: 'h2', text: 'System design' },
    {
      type: 'p',
      text: 'MuseScore is a mature product with a long history. By the time I joined, it was already generating stable revenue, but its UI and frontend stack was fragmented and difficult to scale. Each team was independently building on top of legacy solutions, accumulating design and technical debt.',
    },
    {
      type: 'p',
      text: 'Unifying the product around a cohesive and scalable design system, honestly became one of my core challenges. This included defining a clear interface direction, governing implementation in code, and aligning stakeholders around investing in long-term system coverage rather than short-term feature delivery.',
    },
    {
      type: 'p',
      text: 'As a result, the system unlocked deep interface personalization across different user segments: from professional musicians to beginners just discovering music. It also enabled a much faster experimentation cycle, as modular components could be reused, recombined, and iterated on without rebuilding foundational UI patterns.',
    },
    { type: 'media', items: [m(`${d}/06.png`, 3200, 3200, WIDE)] },
    { type: 'media', items: [m(`${d}/07.png`, 1024, 1024, WIDE)] },
    { type: 'media', items: [m(`${d}/08.png`, 3200, 3200, WIDE)] },
    { type: 'media', cols: 2, items: [m(`${d}/09.mp4`, 1600, 1200, SQUARE), m(`${d}/10.mp4`, 1080, 1080, SQUARE)] },
    { type: 'media', items: [m(`${d}/11.png`, 3200, 3200, WIDE)] },

    { type: 'h2', text: 'Design team' },
    {
      type: 'p',
      text: "At Muse I'm leading and mentoring a team of 5 designers embedded in key product domains (Monetization, Growth, Mobile App, Core, and Education), defining shared design processes that systematically reduce design debt and accelerate delivery speed.",
    },
    {
      type: 'p',
      text: 'As a part of my top priorities was to establish a rhythm of continuous collaboration inside the team: weekly design critiques, structured feedback cycles, design hackathons and transparent processes around decision-making.',
    },
    { type: 'media', cols: 2, mobileCols: 2, items: [m(`${d}/12.png`, 2880, 2880), m(`${d}/13.png`, 2880, 2880)] },
    { type: 'media', cols: 2, mobileCols: 2, items: [m(`${d}/14.png`, 2880, 2880), m(`${d}/15.png`, 1180, 1172, SQUARE)] },
  ],
};

export default project;
