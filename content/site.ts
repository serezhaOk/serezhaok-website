import type { Card } from './types';
import { m } from './media';
import { getProject } from './projects';

export const site = {
  name: 'Sergey Diuzhev', // так в шапке
  titleName: 'Sergei Diuzhev', // так в <title>; в оригинале имена различаются — не унифицировать
  url: 'https://serezhaok.com',
  description:
    'Lead Product Designer with 12 years of experience designing and scaling customer-facing digital products across mobile and web. Strong background in Product Strategy, Design Systems, Interaction Design, and cross-functional leadership.',
  avatar: '/media/avatar.png',
  cv: 'https://docs.google.com/document/d/1BZIcW0FjKQO50sVNYdcPDYwNKMpxmCQ5XBszdDlX1ZY/edit?usp=sharing',
  email: 'serezhaok@gmail.com',
  gaId: 'G-6S6ZC2ZXTP', // Google Analytics 4; пустая строка — отключить
};

// Пункты меню Projects (порядок как в оригинале) и превью справа.
// w/h/radius — размеры рамки превью при наведении на пункт.
export const menu = [
  { title: 'MuseScore', href: '/musescore/', preview: { src: '/media/menu/musescore.png', w: 149, h: 149, radius: 75 } },
  { title: 'Raiffeisen Bank', href: '/raiffeisen-short/', preview: { src: '/media/menu/raiffeisen.png', w: 149, h: 149, radius: 2 } },
  { title: 'Muse Group', href: '/musegroup/', preview: { src: '/media/menu/musegroup.png', w: 149, h: 156, radius: 0 } },
  { title: 'Collaborations', href: '/collabs/', preview: { src: '/media/menu/collabs.png', w: 149, h: 94, radius: 0 } },
];
export const menuMore = '…more is coming';

export const home = {
  intro: [
    'Product & Interaction Designer with 12 years of experience in UX, motion, and building systems.',
    'I work across business, brand, and engineering teams to shape products that feel and work right.',
  ],
  location: 'Live in Portugal. Work Worldwide.',
  showreel: m('/media/home/showreel.mp4', 1920, 1080, 1035 / 580),
  projectsTitle: 'Projects',
  about: [
    'For the past six years, I’ve been leading product design teams, aligning cross-functional efforts and owning end-to-end design execution. My approach focuses on shaping design strategies that support real user needs while serving long-term business goals in product-led environments.',
    'I’ve worked across a wide range of products and industries — from global consumer platforms to large-scale enterprise and brand-driven projects — including Raiffeisen Bank, Muse, Cisco, Visa, and World Cup Qatar 2022.',
    'I’m not an only-metrics person. With a strong background in branding and motion design, I work at the intersection of brand and product. This allows me to turn strategy into interactive, emotional experiences using motion, systems thinking, and a strong visual language — making products feel alive and enjoyable.',
    'Beyond product work, I teach interaction design and write about design, motion, and prototyping. I actively promote hands-on prototyping as a thinking tool and explore how AI can meaningfully extend the product designer’s toolkit.',
  ],
};

const caseCard = (slug: string): Card => {
  const p = getProject(slug);
  if (!p) throw new Error(`Нет кейса ${slug}`);
  return { ...p.card, href: `/${slug}/` };
};

// Плитка на главной: кейсы + внешние проекты
export const homeCards: Card[] = [
  caseCard('musescore'),
  caseCard('raiffeisen-short'),
  caseCard('musegroup'),
  { title: 'Sleepiest App', role: 'Product Designer', cover: m('/media/covers/sleepiest.png', 1920, 1080, undefined, 'Sleepiest App') },
  {
    title: 'ChatGPT Extension',
    role: 'Creator',
    href: 'https://chromewebstore.google.com/detail/%F0%9F%93%8D-chatgpt-prompt-anchors/kakfchjmpblphieccgceoaihbbpmofja?authuser=1&hl=en-GB',
    cover: m('/media/covers/chatgpt.png', 3650, 2844, undefined, 'ChatGPT Extension'),
  },
  {
    title: 'Prototypes',
    role: 'Interaction Design',
    href: 'https://interaction-product-design.com/',
    cover: m('/media/covers/prototypes.mp4', 1440, 1080),
    hideOnMobile: true, // в оригинале на мобильной версии карточки нет
  },
];

export const footer = [
  {
    title: 'Contact',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sergey-diuzhev-988b3aa7/' },
      { label: 'Telegram', href: 'https://t.me/serezhaok' },
      { label: 'Email', href: 'mailto:serezhaok@gmail.com' },
    ],
  },
  {
    title: 'Get inspired',
    links: [
      { label: 'Pinterest', href: 'https://pt.pinterest.com/sergio_ok/_profile/' },
      { label: 'Are.na', href: 'https://www.are.na/sergei-d/channels' },
    ],
  },
  {
    title: 'Have fun',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/srzh_dzhv/' },
      { label: 'YouTube', href: 'https://www.youtube.com/watch?v=Ihx1IosaQqM' },
      { label: 'Soundcloud', href: 'https://soundcloud.com/flying_isle' },
    ],
  },
];
