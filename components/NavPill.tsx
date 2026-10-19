'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { EyeIcon, StackIcon } from './icons';
import { ProjectsMenu } from './ProjectsMenu';
import s from './NavPill.module.css';

const spring = { type: 'spring', stiffness: 500, damping: 38 } as const;
const CLOSE_DELAY = 150; // мс: успеть провести курсор через зазор между капсулой и панелью

// Капсула About me / Projects с белым ползунком под активным пунктом и панелью Projects.
export function NavPill() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const onHome = pathname === '/';
  const active: 'about' | 'projects' = open || !onHome ? 'projects' : 'about';
  const expanded = hovered || open;

  const close = useCallback((focusButton = false) => {
    setOpen(false);
    if (focusButton) buttonRef.current?.focus();
  }, []);

  // Смена страницы закрывает панель
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Клик вне капсулы и панели
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open, close]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const onEnter = () => {
    window.clearTimeout(closeTimer.current);
    if (finePointer()) setHovered(true);
  };
  const onLeave = () => {
    if (!finePointer()) return;
    setHovered(false);
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const onAbout = (e: MouseEvent) => {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    }
  };

  const t = reduce ? { duration: 0 } : spring;

  return (
    <div
      ref={rootRef}
      className={s.root}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) close(true);
      }}
    >
      <nav aria-label="Main" className={[s.track, expanded && s.expanded].filter(Boolean).join(' ')}>
        <Segment active={active === 'about'} transition={t}>
          <Link href="/" className={s.hit} onClick={onAbout} aria-current={onHome ? 'page' : undefined}>
            <SegmentContent active={active === 'about'} icon={<EyeIcon />} label="About me" transition={t} />
          </Link>
        </Segment>
        <Segment active={active === 'projects'} transition={t}>
          <button
            ref={buttonRef}
            type="button"
            className={s.hit}
            aria-expanded={open}
            aria-controls="projects-menu"
            aria-haspopup="true"
            onClick={() => setOpen((v) => !v)}
          >
            <SegmentContent active={active === 'projects'} icon={<StackIcon />} label="Projects" transition={t} />
          </button>
        </Segment>
      </nav>

      <AnimatePresence>{open && <ProjectsMenu key="menu" onClose={close} />}</AnimatePresence>
    </div>
  );
}

function Segment({
  active,
  transition,
  children,
}: {
  active: boolean;
  transition: object;
  children: ReactNode;
}) {
  return (
    // Неактивный сегмент выше по слою, чтобы уезжающий ползунок не перекрывал его текст
    <motion.div layout transition={transition} className={active ? `${s.segment} ${s.active}` : s.segment} style={{ zIndex: active ? 0 : 1 }}>
      {active && <motion.span layoutId="pill-thumb" transition={transition} className={s.thumb} />}
      {children}
    </motion.div>
  );
}

function SegmentContent({
  active,
  icon,
  label,
  transition,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
  transition: object;
}) {
  return (
    <motion.span layout="position" transition={transition} className={s.content}>
      <AnimatePresence initial={false}>
        {active && (
          <motion.span
            key="icon"
            className={s.icon}
            initial={{ width: 0, marginRight: 0, opacity: 0 }}
            animate={{ width: 20, marginRight: 8, opacity: 1 }}
            exit={{ width: 0, marginRight: 0, opacity: 0 }}
            transition={transition}
          >
            {icon}
          </motion.span>
        )}
      </AnimatePresence>
      <span className={active ? s.labelActive : s.label}>{label}</span>
    </motion.span>
  );
}
