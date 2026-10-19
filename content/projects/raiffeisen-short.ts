import type { Project } from '../types';
import { m, WIDE } from '../media';

const d = '/media/raiffeisen-short';

const project: Project = {
  slug: 'raiffeisen-short',
  title: 'Raiffeisen Bank',
  meta: [
    { label: 'Timeline', value: ['May 2021 – Jun 2022'] },
    { label: 'Role', value: ['Lead Product Designer'] },
    { label: 'Scope', value: ['Retail Mobile App,', 'Web platform'] },
    { label: 'Contribution', value: ['Daily Active Users,', 'Rebranding'] },
  ],
  // В карточке роль «Lead Product Designer, VP», а в мете — без VP. Так в оригинале.
  card: {
    title: 'Raiffeisen Bank',
    role: 'Lead Product Designer, VP',
    cover: m('/media/covers/raiffeisen.png', 3650, 2844, undefined, 'Raiffeisen Bank'),
  },
  related: ['musegroup', 'musescore'],
  headerSpace: [91, 93], // в оригинале у этого кейса шапка и конец отделены сильнее
  endSpace: 90,
  largeMobileHeadings: true,
  blocks: [
    { type: 'h2', text: 'Daily Banking: Complete Redesign' },
    { type: 'label', text: 'The Problem' },
    {
      type: 'p',
      text: 'Raiffeisen Bank is one of the largest banks in Europe by number of clients.\nHowever, a research showed that many customers did not perceive it as their primary bank, but rather as a secondary or backup option.',
      mobileText: [20, 24],
    },
    {
      type: 'p',
      text: 'Key scenarios such as transfers, bill payments, and savings management were significantly more complex and time-consuming than those of direct competitors.',
      mt: [28, 24],
      mobileText: [20, 24],
    },
    { type: 'media', items: [m(`${d}/01.mp4`, 1080, 840, WIDE)] },
    { type: 'media', cols: 2, items: [m(`${d}/02.png`, 2800, 2800), m(`${d}/03.png`, 2800, 2800)], mt: [2, 2] },
    { type: 'h3', text: 'My Contributions', mt: [52, 52] },
    {
      type: 'p',
      text: 'Delivered full redesign of Account to Account, Card to Card, Currency Exchange flows. Initiated ideation sprints (design hackathons), produced early prototypes, and led two rounds of user testing in collaboration with the Research Lead. Launched A/B experiments together with the product team to validate and optimize the new flows.',
      maxWidth: '80%',
      mobileText: [20, 24],
    },
    {
      type: 'p',
      text: 'After a successful release, guided product designers in scaling this direction to the remaining payment scenarios.',
      maxWidth: '80%',
      mt: [28, 24],
      mobileText: [20, 24],
    },
    { type: 'h3', text: 'Impact', mt: [52, 52] },
    {
      type: 'list',
      items: [
        'Delivered the fastest money transfer flow among 3 key competitors (**3 taps**, **~19 seconds**)',
        'After 6 months and full redesign of 10 scenarios, DAU increased by **7.2%**',
        'Accelerated feature delivery through clear, unified processes',
        'Aligned and inspired the design team around a shared vision for this project.',
      ],
      maxWidth: '80%',
    },

    { type: 'divider', mt: [91, 61] },
    { type: 'h2', text: 'Strategic product vision', mt: [34, 34] },
    { type: 'media', items: [m(`${d}/04.mp4`, 1920, 1080, 1035 / 592)] },
    { type: 'h3', text: 'My Contributions', mt: [60, 60] },
    {
      type: 'list',
      items: [
        'Co-created a long-term Design Strategy with the Design Director, defining how design contributes to business growth, monetization, and product quality.',
        'Translated the strategy into a clear system of principles, broke down into an actionable roadmap for the upcoming 6 months.',
        'Created a communication system to balance user experience and monetization patterns (principles, templates, touchpoints).',
      ],
      maxWidth: '80%',
    },
    { type: 'h3', text: 'Impact', mt: [60, 60] },
    {
      type: 'list',
      items: [
        'A unified design strategy became the north star for product teams, ensuring consistent decision-making across all teams.',
        'User experience became more consistent end-to-end, as teams relied on shared patterns, principles, and a unified language of quality.',
        'The direction became the reference for the design system adoption.',
        'The strategy became the foundation for redesign of core scenarios, enabling faster scaling and predictable quality.',
      ],
      maxWidth: '80%',
    },

    { type: 'h2', text: 'Rebranding and Emotional UX', mt: [90, 60] },
    { type: 'media', items: [m(`${d}/05.mp4`, 1080, 840, 1035 / 764)] },
    { type: 'media', cols: 2, items: [m(`${d}/06.png`, 3200, 3200), m(`${d}/07.png`, 3200, 3200)], mt: [2, 2] },
    { type: 'media', items: [m(`${d}/08.mp4`, 1420, 820, WIDE)], mt: [2, 2] },
    { type: 'h3', text: 'My Contributions', mt: [52, 52] },
    {
      type: 'list',
      items: [
        'Joined emotional product design stream and rebranding efforts for Raiffeisen Bank. Collaborated closely with [Design Studio](https://www.design.studio/) as a product representative to craft the new brand and design strategy.',
        'Collaborated with the Brand team to generate emotional assets for the purposes of product and communication teams. Led the group of interface designers to land the new brand on our products.',
        'Had a series of business trips in countries where Raiffeisen Bank is represented to collaborate with local product design teams.',
        'Integrated new illustrations into all in-app communications (stories, banners, product pages). Reviewed the illustrations creation process, and the usage within different teams.',
      ],
    },
    { type: 'h3', text: 'Impact', mt: [52, 52] },
    {
      type: 'list',
      items: [
        'Seamless adoption of the new design language and system, built on top of the previous foundation without disrupting product delivery.',
        'Consistent brand expression across all retail touchpoints: Mobile app, Website, and social media ensuring one cohesive customer experience.',
        'Notable improvement in customer sentiment: users reported *reduced stress when managing their finances* in the app, directly aligning with the brand’s purpose of creating a calmer, more reassuring banking experience.',
      ],
    },
  ],
};

export default project;
