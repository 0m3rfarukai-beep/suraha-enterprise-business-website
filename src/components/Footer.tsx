import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Divisions', to: '/divisions' },
    { label: 'Philosophy', to: '/philosophy' },
    { label: 'Governance', to: '/governance' },
    { label: 'Contact', to: '/contact' },
  ];

  const divisionLinks = [
    { label: 'Head Office & Holding', to: '/divisions' },
    { label: 'Suraha Digital', to: '/divisions' },
    { label: 'Suraha Commerce', to: '/divisions' },
    { label: 'Suraha Trade', to: '/divisions' },
  ];

  const companyLinks = [
    { label: 'Governance', to: '/governance' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ];

  const legalLinks = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Cookies', to: '/cookies' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ];

  return (
    <footer className="bg-navy-deep border-t border-gold/12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-14 md:mb-20">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-[20px] md:text-[22px] font-light text-cream tracking-wide mb-3">
              Suraha{' '}
              <span className="text-gold italic">Enterprise</span>
            </p>
            <p className="font-body font-light text-[14px] text-cream/45 leading-relaxed max-w-[260px] mb-4">
              Building Tomorrow's Businesses Today.
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-cream/30 leading-relaxed">
              Registered in England & Wales
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-[13px] text-cream/45 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions column */}
          <div>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5">
              Divisions
            </p>
            <ul className="flex flex-col gap-3">
              {divisionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-[13px] text-cream/45 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company / Connect column */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-[13px] text-cream/45 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-5">
              Connect
            </p>
            <a
              href="mailto:enquiries@surahaenterprise.com"
              className="font-body text-[13px] text-cream/45 hover:text-cream transition-colors duration-300 break-all"
            >
              enquiries@surahaenterprise.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] text-cream/30 text-center md:text-left">
            © {currentYear} Suraha Enterprise Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] text-cream/30 hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
