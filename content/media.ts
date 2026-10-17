import type { Media } from './types';

// Короткие конструкторы для медиа в файлах кейсов.
// m('/media/musescore/01.png', 3200, 3200, 1.2) — картинка 3200×3200 в рамке 6:5.
export const m = (src: string, width: number, height: number, aspect?: number, alt = ''): Media => ({
  src,
  width,
  height,
  alt,
  aspect,
});

// Рамка 6:5 — так в оригинале обрезаны квадратные слайды 3200×3200 на всю ширину
export const WIDE = 1.2;
export const SQUARE = 1;
