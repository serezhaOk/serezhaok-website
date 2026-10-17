# serezhaok.com

Портфолио, перенесённое с Framer. Цель — пиксель в пиксель повторить живой https://serezhaok.com, пока он работает. Если замер расходится с живым сайтом, прав живой сайт; расхождение записать в README.md.

- Next.js 15 App Router, `output: 'export'`, `trailingSlash: true`. Без бэкенда, без next/image (`<img>` с width/height).
- Стили: CSS Modules + `app/globals.css` с токенами. Tailwind нет.
- Шрифты только через @fontsource (Inter, Instrument Sans как замена Tomato Grotesk).
- Брейкпоинты как у Framer: `≥1200` десктоп, `<1200` одна колонка; `<810` — мелкие правки (мета 2×2, меню без превью).
- Контент — только в `content/`: `site.ts` (главная, меню, футер) и `projects/*.ts` (кейсы как массив блоков). Компоненты контент не хардкодят.
- Медиа — в `public/media/`, ссылок на framerusercontent.com в коде быть не должно.
- Меню Projects (`components/NavPill.tsx`, `ProjectsMenu.tsx`) — главная анимация; замеры и тайминги в README.md.
- Тексты переносятся дословно, включая типографские апострофы и опечатки оригинала.

Проверка перед пушем: `npm run typecheck && npm run build`, `grep -r framerusercontent out/` пусто.
