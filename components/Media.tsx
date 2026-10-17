'use client';

import { useEffect, useRef, useState } from 'react';
import type { Media as MediaType } from '@/content/types';
import s from './Media.module.css';

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);
export const posterOf = (m: MediaType) => m.poster ?? m.src.replace(/\.(mp4|webm|mov)$/i, '.jpg');

type Props = {
  media: MediaType;
  className?: string;
  eager?: boolean;
};

// Картинка или видео в рамке с заданными пропорциями.
// Пока файл не загрузился (или не нашёлся) видна серая подложка, а не битая иконка.
export function Media({ media, className, eager }: Props) {
  const ratio = media.aspect ?? media.width / media.height;
  const [failed, setFailed] = useState(false);
  const video = isVideo(media.src);

  return (
    <div className={[s.frame, className].filter(Boolean).join(' ')} style={{ aspectRatio: ratio }}>
      {video && !failed ? (
        <AutoVideo media={media} onError={() => setFailed(true)} />
      ) : video ? (
        // Видео не проигрывается (нет файла или кодека) — показываем постер
        <img className={s.fill} src={posterOf(media)} alt="" loading="lazy" decoding="async" />
      ) : failed ? null : (
        <img
          className={s.fill}
          src={media.src}
          width={media.width}
          height={media.height}
          alt={media.alt ?? ''}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

// Видео без звука и контролов. Играет только в зоне видимости;
// при prefers-reduced-motion само не стартует — показываем постер и кнопку Play.
function AutoVideo({ media, onError }: { media: MediaType; onError: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [userPlay, setUserPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduced && !userPlay) {
      video.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduced, userPlay]);

  return (
    <>
      <video
        ref={ref}
        className={s.fill}
        src={media.src}
        poster={posterOf(media)}
        width={media.width}
        height={media.height}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden={media.alt ? undefined : true}
        aria-label={media.alt || undefined}
        onError={onError}
      />
      {reduced && !userPlay && (
        <button type="button" className={s.play} onClick={() => setUserPlay(true)} aria-label="Play video">
          <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
            <path d="M17 10 1 19V1z" fill="currentColor" />
          </svg>
        </button>
      )}
    </>
  );
}
