import type { Project } from '../types';
import { m, SQUARE } from '../media';

const d = '/media/musegroup';
const WIDE_VIDEO = 1035 / 590;

const project: Project = {
  slug: 'musegroup',
  // На карточке — «Muse Group Rebranding», на странице — «Redesign». Так в оригинале.
  title: 'Muse Group Redesign',
  subtitle: 'Art Director, Product Designer 2023 – 2025',
  card: {
    title: 'Muse Group Rebranding',
    role: 'Art Director & Product Designer',
    cover: m('/media/covers/musegroup.png', 3650, 2844, undefined, 'Muse Group Rebranding'),
  },
  related: ['musescore', 'raiffeisen-short'],
  blocks: [
    { type: 'h2', text: 'Observation' },
    {
      type: 'p',
      text: 'Muse had quietly become a global leader in music software. With tools like Ultimate Guitar, MuseScore, Audacity, and MuseClass, it supported more than 400 million users across the full arc of musical life—learning, practicing, composing, performing. But despite this global footprint, few had ever heard of Muse itself.',
    },
    {
      type: 'p',
      text: 'Everything started with a collaboration with the design studio [COLLINS](https://www.wearecollins.com/work/muse/). I joined a small cross-functional working group from the product side, where I reviewed iterations, took part in refinements, and co-created ideas together with the studio and internal stakeholders.',
    },
    { type: 'media', cols: 2, items: [m(`${d}/01.mp4`, 1862, 1394, SQUARE), m(`${d}/02.mp4`, 2508, 1402, SQUARE)] },
    { type: 'media', items: [m(`${d}/03.png`, 2487, 1658, 1035 / 665)] },
    { type: 'media', cols: 2, items: [m(`${d}/04.mp4`, 2050, 1686, SQUARE), m(`${d}/05.png`, 1240, 1653, SQUARE)] },

    { type: 'h2', text: 'Branded interfaces' },
    {
      type: 'p',
      text: 'The output of that collaboration was impressive—bold visuals, expressive motion studies, and a strong conceptual direction. But while the creative foundation was powerful, my real work began when all these vibrant ideas needed to be translated into real, shippable product experiences.',
    },
    { type: 'media', cols: 2, items: [m(`${d}/06.mp4`, 1600, 1200, SQUARE), m(`${d}/07.mp4`, 1600, 1200, SQUARE)] },
    {
      type: 'p',
      text: 'Me, Creative Director and Head of Design formed and led a dedicated working group to explore how the new brand could live inside our interfaces. We mapped out where and how intensely the brand should appear throughout the product ecosystem.',
    },
    {
      type: 'p',
      text: 'Together, we defined a set of functional principles—for example, applying either fully sharp or fully rounded corners across all components, embracing a radical and cohesive geometry.',
    },
    { type: 'media', items: [m(`${d}/08.mp4`, 1920, 1080, WIDE_VIDEO)] },
    { type: 'media', cols: 2, items: [m(`${d}/09.png`, 3200, 3200), m(`${d}/10.png`, 3200, 3200)] },
    { type: 'media', items: [m(`${d}/11.mp4`, 2400, 1350, WIDE_VIDEO)] },
    { type: 'media', items: [m(`${d}/12.mp4`, 1440, 1080, WIDE_VIDEO)] },

    { type: 'h2', text: 'Animation language' },
    {
      type: 'p',
      text: 'My additional contribution was the development of our interface animation language, ensuring that motion served both functional clarity and brand expression. I anchored the system around three design principles: **Expansive, Charged, and Attuned**. Then created a set of animations for standard design-system components, where each movement reflected these principles as closely as possible.',
    },
    {
      type: 'p',
      text: 'This exploration resulted in our first pilot animation — the new Like interaction — which I first built in After Effects, then rebuilt in ProtoPie to hand off cleanly to React Native engineers.',
    },
    {
      type: 'media',
      cols: 3,
      items: [m(`${d}/13.png`, 2000, 2160), m(`${d}/14.png`, 2000, 2160), m(`${d}/15.png`, 2000, 2160)],
    },
    // То же видео, что musescore/09.mp4 — храним один файл
    { type: 'media', items: [m('/media/musescore/09.mp4', 1600, 1200, WIDE_VIDEO)] },

    { type: 'h2', text: 'The outcome' },
    // «strengthen / improve» — текст заказчика, не править
    {
      type: 'p',
      text: 'This project increased brand awareness of Muse Group, strengthen cross-product engagement, and improve key engagement metrics thanks to the new like animation and splash screens. Just as importantly, it unified the product design team around a strong shared visual and motion language — one they loved, adopted, and continued to use as a single, reliable source of truth across all initiatives.',
    },
  ],
};

export default project;
