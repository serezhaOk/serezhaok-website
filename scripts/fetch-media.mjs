// Скачивает медиа из media-manifest.json в public/. Уже скачанные файлы пропускает,
// поэтому скрипт можно запускать повторно. Без зависимостей, Node 22.
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const manifest = JSON.parse(await readFile(new URL('./media-manifest.json', import.meta.url)));
const root = path.resolve('public');
let ok = 0, skip = 0, fail = 0;

for (const [rel, url] of Object.entries(manifest)) {
  const dest = path.join(root, rel);
  // Файл мог быть пережат в .webp — тогда оригинал не нужен
  const webp = dest.replace(/\.png$/, '.webp');
  try { await access(dest); skip++; continue; } catch {}
  try { await access(webp); skip++; continue; } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log('✓', rel); ok++;
  } catch (e) {
    console.error('✗', rel, e.message); fail++;
  }
}
console.log(`\nСкачано ${ok}, уже было ${skip}, ошибок ${fail}`);
process.exitCode = fail ? 1 : 0;
