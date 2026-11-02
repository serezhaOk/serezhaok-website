import Script from 'next/script';
import { site } from '@/content/site';

// Google Analytics 4 — тот же счётчик, что был на Framer, поэтому история посещений продолжается.
// Подключается только в собранном сайте: запуски через npm run dev статистику не портят.
// Переходы между страницами без перезагрузки GA4 считает сам (Enhanced measurement → Page changes).
export function Analytics() {
  if (process.env.NODE_ENV !== 'production' || !site.gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
      </Script>
    </>
  );
}
