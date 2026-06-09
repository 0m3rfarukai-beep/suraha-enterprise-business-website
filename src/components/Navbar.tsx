import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Divisions', to: '/divisions' },
    { label: 'Philosophy', to: '/philosophy' },
    { label: 'Governance', to: '/governance' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] md:h-20 flex items-center justify-between">
        {/* Logo — text only */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Suraha Enterprise — Home">
          <span className="font-heading text-[19px] md:text-[21px] font-light text-cream tracking-wide">
            Suraha{' '}
            <span className="text-gold italic">Enterprise</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-[10px] uppercase tracking-[0.16em] xl:tracking-[0.18em] transition-colors duration-300 relative group py-1 ${
                isActive(link.to) ? 'text-gold' : 'text-cream/55 hover:text-gold'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group shrink-0"
        >
          Enquire
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-deep/98 backdrop-blur-md border-t border-gold/10`}
        role="menu"
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 py-0.5 ${
                isActive(link.to) ? 'text-gold' : 'text-cream/55 hover:text-gold'
              }`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 mt-3 pt-4 border-t border-gold/10"
            role="menuitem"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </nav>
  );
}
