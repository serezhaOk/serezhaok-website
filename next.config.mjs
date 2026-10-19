/** @type {import('next').NextConfig} */
export default {
  output: 'export', // статика в out/
  trailingSlash: true, // /musescore/ → out/musescore/index.html, нужно для GitHub Pages
  images: { unoptimized: true }, // на Pages нет image-оптимизатора
  reactStrictMode: true,
  devIndicators: false, // убрать значок «N» в углу при npm run dev
};
