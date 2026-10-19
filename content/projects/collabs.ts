import type { Project } from '../types';
import { m, SQUARE } from '../media';

const d = '/media/collabs';
const pair = { type: 'media', cols: 2, mobileCols: 2 } as const;

const project: Project = {
  slug: 'collabs',
  title: 'Collaborations',
  subtitle: 'I’m always open to creative collaborations and short-term projects — feel free to reach out. Let\'s explore new ideas ⚡️',
  compact: true,
  // На главной этой карточки нет; она нужна только для типа и меню
  card: {
    title: 'Collaborations',
    role: 'Product Designer',
    cover: m(`${d}/04.png`, 736, 798, undefined, 'Collaborations'),
  },
  related: ['musescore', 'raiffeisen-short'],
  blocks: [
    { type: 'h4', text: 'Ori Scan 2.0' },
    // «Levereged» — опечатка в оригинале, оставлена до решения заказчика
    {
      type: 'p',
      text: "I crafted an immersive experience that would both showcase the technology and keep it approachable. Levereged Spline's 3D capabilities, I created a storytelling journey that brings the scanner to life.",
    },
    {
      type: 'p',
      text: "From concept mood boards to the final design, balanced cutting-edge tech with a human touch. Interactive 3D scenes and real user photos help visitors connect with the product, while smooth animations guide them through the scanner's features.",
    },
    { type: 'media', items: [{ ...m(`${d}/01.mp4`, 1080, 1080), h: [600, 300] }] },
    { ...pair, items: [m(`${d}/02.mp4`, 1080, 1080), m(`${d}/03.png`, 736, 798, SQUARE)], mt: [2, 2] },
    { type: 'media', items: [m(`${d}/04.png`, 736, 798, SQUARE)], mt: [2, 2] },
    { ...pair, items: [m(`${d}/05.png`, 736, 736), m(`${d}/06.png`, 736, 736)], mt: [2, 2] },

    { type: 'divider', mt: [51, 51] },
    { type: 'h4', text: 'Cisco Tetration', mt: [34, 34] },
    {
      type: 'p',
      text: 'Invited as a UX design consultant and product designer to reframe one of the most complex and high-impact products in Cisco’s portfolio.',
    },
    { ...pair, items: [m(`${d}/07.png`, 2800, 2800), m(`${d}/08.png`, 2800, 2800)], mt: [32, 32] },
    { ...pair, items: [m(`${d}/09.png`, 2800, 2800), m(`${d}/10.png`, 3840, 2160, SQUARE)], mt: [2, 2] },

    { type: 'divider', mt: [51, 51] },
    { type: 'h4', text: 'Avalytics', mt: [34, 34] },
    {
      type: 'p',
      text: 'Joined Avalytics as a product designer to shape a flexible analytics platform for the NFT space. Designed a modular system of customizable widgets for data exploration. Delivered both desktop and mobile experiences, focusing on clarity, scalability, and user autonomy.',
    },
    { ...pair, items: [m(`${d}/11.png`, 1640, 1640), m(`${d}/12.png`, 1640, 1640)], mt: [32, 32] },
    { ...pair, items: [m(`${d}/13.png`, 2400, 2400), m(`${d}/14.png`, 2400, 2400)], mt: [2, 2] },

    { type: 'divider', mt: [51, 51] },
    { type: 'h4', text: 'Other projects', mt: [34, 34] },
    { ...pair, items: [m(`${d}/15.png`, 2800, 2800), m(`${d}/16.png`, 2800, 2800)], mt: [32, 32] },
    // Последняя картинка ряда — та же, что 10.png
    { ...pair, items: [m(`${d}/17.png`, 2800, 2800), m(`${d}/10.png`, 3840, 2160, SQUARE)], mt: [2, 2] },
  ],
};

export default project;
