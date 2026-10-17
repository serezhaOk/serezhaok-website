import type { CSSProperties } from 'react';
import type { Block } from '@/content/types';
import { Inline } from './Inline';
import { Media } from './Media';
import s from './Blocks.module.css';

// Отступ сверху у блока зависит от пары «предыдущий → текущий» (замеры оригинала при 1440 px).
function gap(prev: Block | undefined, cur: Block, compact: boolean): number {
  if (!prev) return 0;
  const text = (b: Block) => b.type === 'p' || b.type === 'list';
  if (prev.type === 'media' && cur.type === 'media') return 3;
  if (cur.type === 'divider') return 50;
  if (prev.type === 'divider') return 35;
  if (cur.type === 'media' || prev.type === 'media') return 50;
  if (cur.type === 'h2' || cur.type === 'h3' || cur.type === 'h4' || cur.type === 'label') return 50;
  if (prev.type === 'h3') return 24;
  if (prev.type === 'h2' || prev.type === 'label' || prev.type === 'h4') return 16;
  if (text(prev) && text(cur)) return compact ? 24 : 28;
  return 28;
}

export function Blocks({ blocks, compact = false }: { blocks: Block[]; compact?: boolean }) {
  return (
    <div className={[s.blocks, compact && s.compact].filter(Boolean).join(' ')}>
      {blocks.map((block, i) => (
        <div key={i} style={{ marginTop: gap(blocks[i - 1], block, compact) }}>
          <BlockView block={block} />
        </div>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className={s.h2}>{block.text}</h2>;
    case 'h3':
      return <h3 className={s.h3}>{block.text}</h3>;
    case 'h4':
      return <h2 className={s.h4}>{block.text}</h2>;
    case 'label':
      return <h3 className={s.label}>{block.text}</h3>;
    case 'divider':
      return <hr className="divider" />;
    case 'p':
      return (
        <p className={s.p}>
          <Inline text={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul className={s.list}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case 'media': {
      const cols = block.cols ?? 1;
      return (
        <div
          className={s.row}
          style={{ '--cols': cols, '--mcols': block.mobileCols ?? 1 } as CSSProperties}
        >
          {block.items.map((item, i) => (
            <Media key={i} media={item} />
          ))}
        </div>
      );
    }
  }
}
