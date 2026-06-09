import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found');

  return (
    <section className="bg-cream min-h-[70vh] flex items-center justify-center">
      <div className="max-w-[560px] mx-auto px-6 text-center py-32 md:py-40">
        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold mb-6">
          404
        </p>
        <div className="w-14 h-px bg-gold mx-auto mb-10 md:mb-12" />
        <h1 className="font-heading font-light text-[32px] sm:text-[40px] md:text-[48px] text-navy leading-[1.15] mb-6">
          Page not found.
        </h1>
        <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/60 mb-10 md:mb-12">
          The page you are looking for could not be found. It may have been moved, removed, or the URL may be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-9 py-4 bg-gold text-navy-deep font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 rounded-[2px] group"
        >
          Return Home
          <span className="ml-2.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
