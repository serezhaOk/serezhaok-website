import Link from 'next/link';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import s from './page.module.css';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className={`container ${s.case}`}>
      <h1 className="section-title">Page not found</h1>
      <p className={s.location}>
        <Link href="/" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Back to the main page
        </Link>
      </p>
      <hr className={`divider ${s.sep}`} />
      <Footer />
    </div>
  );
}
