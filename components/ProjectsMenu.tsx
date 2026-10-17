'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { menu, menuMore } from '@/content/site';
import { ChevronIcon } from './icons';
import s from './ProjectsMenu.module.css';

const panelSpring = { type: 'spring', stiffness: 420, damping: 30 } as const;
const morphSpring = { type: 'spring', stiffness: 700, damping: 40 } as const;

// Стеклянная панель со списком кейсов и превью, которое меняет форму под наведённый пункт.
export function ProjectsMenu({ onClose }: { onClose: (focusButton?: boolean) => void }) {
  const reduce = useReducedMotion();
  // Пока ничего не наведено — превью MuseScore; после ухода курсора остаётся последнее
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const p = menu[current].preview;

  // Фокус на первый пункт, если панель открыли с клавиатуры
  useEffect(() => {
    if (document.activeElement?.getAttribute('aria-controls') === 'projects-menu' && document.activeElement.matches(':focus-visible')) {
      listRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    }
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    const links = Array.from(listRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    let next = -1;
    if (e.key === 'ArrowDown') next = (i + 1) % links.length;
    else if (e.key === 'ArrowUp') next = (i - 1 + links.length) % links.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = links.length - 1;
    if (next >= 0) {
      e.preventDefault();
      links[next].focus();
    }
  };

  return (
    <motion.nav
      id="projects-menu"
      aria-label="Projects"
      className={s.panel}
      style={{ transformOrigin: '60% 0%' }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: -6, filter: 'blur(6px)' }}
      // filter снимаем после анимации: иначе он ломает backdrop-filter стекла
      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      exit={
        reduce
          ? { opacity: 0, transition: { duration: 0.15 } }
          : { opacity: 0, scale: 0.96, y: -4, transition: { duration: 0.15, ease: 'easeOut' } }
      }
      transition={reduce ? { duration: 0.15 } : panelSpring}
      onKeyDown={onKeyDown}
    >
      <ul ref={listRef} className={s.list}>
        {menu.map((item, i) => (
          <motion.li
            key={item.href}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { ...panelSpring, delay: 0.03 * i }}
          >
            <Link
              href={item.href}
              className={s.item}
              onPointerEnter={() => setCurrent(i)}
              onFocus={() => setCurrent(i)}
              onClick={() => onClose()}
            >
              <span className={s.itemText}>{item.title}</span>
              <ChevronIcon className={s.chevron} />
            </Link>
          </motion.li>
        ))}
      </ul>
      <p className={s.more}>{menuMore}</p>

      <div className={s.previewZone} aria-hidden="true">
        <motion.div
          className={s.preview}
          initial={false}
          animate={{ width: p.w, height: p.h, borderRadius: p.radius }}
          transition={reduce ? { duration: 0 } : morphSpring}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={p.src}
              src={p.src}
              alt=""
              className={s.previewImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.15 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}
