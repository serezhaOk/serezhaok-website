export type Media = {
  src: string; // '/media/musescore/01.png' или '.mp4'; тип определяется по расширению
  width: number; // натуральный размер — нужен, чтобы не прыгала вёрстка
  height: number;
  alt?: string; // для картинок; у декоративных пусто
  poster?: string; // кадр-заглушка для видео; по умолчанию тот же путь с .jpg
  aspect?: number; // пропорции рамки (ширина / высота), если в оригинале медиа обрезано; иначе натуральные
  h?: [number, number]; // фиксированная высота рамки, px: [десктоп, планшет и телефон] — вместо пропорций
};

// Точная подгонка под оригинал. В Framer каждая секция свёрстана вручную, поэтому
// отступы и ширины местами отличаются от общих правил. Обычно эти поля не нужны.
export type Layout = {
  mt?: [number, number]; // отступ сверху, px: [десктоп, планшет и телефон]
  maxWidth?: number | string; // ширина блока на десктопе: px или '80%' от колонки
  mobileText?: [number, number]; // кегль и интерлиньяж текста на планшете и телефоне, px
};

export type Block = Layout &
  (
    | { type: 'h2'; text: string } // заголовок секции: Observation, Product Growth…
    | { type: 'h3'; text: string } // крупный подзаголовок: My Contributions, Impact
    | { type: 'h4'; text: string } // компактный заголовок (страница Collaborations)
    | { type: 'label'; text: string } // мелкий серый подзаголовок: The Problem
    | { type: 'p'; text: string } // абзац; поддерживает **жирный**, *курсив*, [ссылку](url), \n — перенос строки
    | { type: 'list'; items: string[] } // маркированный список, тот же inline-синтаксис
    | { type: 'divider' } // тонкая линия между крупными секциями
    | { type: 'media'; items: Media[]; cols?: 1 | 2 | 3; mobileCols?: 1 | 2 | 3 } // одна или несколько картинок/видео в ряд
  );

export type Card = {
  title: string;
  role: string;
  cover: Media;
  href?: string; // по умолчанию /<slug>/; внешняя ссылка открывается в новой вкладке
  hideOnMobile?: boolean;
};

export type Project = {
  slug: string; // = URL
  title: string; // H1 страницы
  subtitle?: string; // строка под H1 вместо мета-сетки (Muse Group, Collaborations)
  meta?: { label: string; value: string[] }[]; // 4 колонки: Timeline / Role / Scope / Contribution
  compact?: boolean; // мелкий текст и узкая колонка, как на Collaborations
  largeMobileHeadings?: boolean; // на телефоне заголовки секций остаются крупными, как на десктопе
  headerSpace?: [number, number]; // отступы над и под линией после шапки кейса, если в оригинале они нестандартные
  endSpace?: number; // отступ до линий перед Related и перед футером, если в оригинале он нестандартный
  card: Card; // карточка для плитки и Related
  related: string[]; // слаги, ровно 2
  blocks: Block[];
};
