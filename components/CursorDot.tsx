'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import s from './CursorDot.module.css';

// Пружина подобрана по замерам оригинала (подгонка по 27 точкам): без перелёта, ~95% пути за 330 мс
const spring = { stiffness: 390, damping: 48, mass: 1 };

// Чёрная точка, которая догоняет курсор. Только для мыши; на тач-устройствах не показывается.
export function CursorDot() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) {
        // Первое появление — сразу под курсором, без пролёта через экран
        sx.jump(e.clientX);
        sy.jump(e.clientY);
        setVisible(true);
      }
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('pointermove', onMove);
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [visible, x, y, sx, sy]);

  return (
    <motion.div
      aria-hidden="true"
      className={s.dot}
      style={{ x: reduce ? x : sx, y: reduce ? y : sy, opacity: visible ? 1 : 0 }}
    />
  );
}
