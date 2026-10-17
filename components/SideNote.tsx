import s from './SideNote.module.css';

// Фиксированная подпись слева снизу (только на десктопе, как в оригинале)
export function SideNote() {
  return (
    <aside className={s.note}>
      <p>
        Made with <b>empathy &amp; love</b> in 2025. All rights belong to the <b>mentioned companies</b>.
      </p>
      <p className={s.thanks}>Thanks for the trust &lt;3</p>
    </aside>
  );
}
