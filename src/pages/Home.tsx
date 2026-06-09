import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TickerStrip from '../components/TickerStrip';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { usePageTitle } from '../hooks/usePageTitle';

const aboutFacts = [
  { label: 'Founded', value: 'United Kingdom' },
  { label: 'Structure', value: 'Private Holding Company' },
  { label: 'Jurisdiction', value: 'England & Wales' },
  { label: 'Divisions', value: 'Four Strategic Verticals' },
];

const philosophyPreview = [
  {
    number: '01',
    title: 'Long-term Orientation',
    body: 'We deploy capital with a multi-year horizon, allowing businesses the time and stability to build enduring competitive advantages.',
  },
  {
    number: '02',
    title: 'Disciplined Diversification',
    body: 'Our four divisions provide structural resilience, but each operates with focused intent. We diversify to protect — never to dilute.',
  },
];

const governancePreview = [
  {
    title: 'Board Oversight',
    body: 'Strategic decisions are subject to board-level review and challenge, ensuring discipline and accountability at every level.',
  },
  {
    title: 'Fiduciary Responsibility',
    body: 'We treat every capital allocation as a fiduciary act. Prudence, diligence, and long-term stewardship guide our decision-making.',
  },
];

export default function Home() {
  usePageTitle('Building Tomorrow\'s Businesses Today');

  return (
    <>
      <Hero />
      <TickerStrip />
      <Stats />
      <Portfolio />

      {/* About Preview */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="// About"
                heading={<>A British enterprise built on <span className="italic text-gold">conviction</span> and capital discipline.</>}
              />
              <div className="mt-8 md:mt-10 space-y-5">
                <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                  Suraha Enterprise Ltd. is a private holding company registered in England & Wales. We acquire, build, and support businesses across four strategic divisions — real estate, technology, investment, and consultancy.
                </p>
                <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                  Our approach is shaped by patience and conviction. We do not chase trends or pursue scale for its own sake. Instead, we allocate capital to opportunities where disciplined execution and long-term orientation can compound value over time.
                </p>
              </div>
              <div className="mt-8 md:mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  Read More About Suraha
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gold/15 p-8 md:p-10 rounded-[2px]">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-8">
                  At a Glance
                </p>
                <div className="space-y-0">
                  {aboutFacts.map((fact, i) => (
                    <div
                      key={i}
                      className={`flex items-baseline justify-between py-4 ${
                        i < aboutFacts.length - 1 ? 'border-b border-gold/10' : ''
                      }`}
                    >
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/45">
                        {fact.label}
                      </span>
                      <span className="font-body text-[13px] md:text-[14px] text-navy/70 text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Investment Philosophy"
            heading={<>Patient capital. <span className="italic text-gold">Permanent</span> interests.</>}
            dark
          />
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {philosophyPreview.map((p) => (
              <div key={p.number} className="bg-navy p-8 md:p-10">
                <p className="font-heading font-light text-[36px] md:text-[44px] text-gold/20 leading-none mb-5">
                  {p.number}
                </p>
                <h3 className="font-heading font-light text-[20px] md:text-[22px] text-cream leading-tight mb-4">
                  {p.title}
                </h3>
                <p className="font-body font-light text-[13px] md:text-[14px] leading-[1.7] text-cream/50">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Read Our Philosophy
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Governance Preview */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Governance"
            heading={<>Governed by principle. <span className="italic text-gold">Accountable</span> by design.</>}
          />
          <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-navy/65 max-w-[600px] mt-8 md:mt-10 mb-12 md:mb-16">
            Suraha Enterprise is governed according to the principles of accountability, transparency, and fiduciary responsibility. As a UK-registered company, we operate within the regulatory framework of England & Wales.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {governancePreview.map((pillar, i) => (
              <div key={i} className="bg-cream-dark p-8 md:p-10">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-heading font-light text-[20px] md:text-[22px] text-navy leading-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body font-light text-[13px] md:text-[14px] leading-[1.7] text-navy/55">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              to="/governance"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Read Our Governance
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-navy-deep py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/10 pointer-events-none rounded-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[600px] mx-auto px-6 md:px-10 lg:px-12 text-center relative z-10">
          <h2 className="font-heading font-light text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-cream leading-[1.16] mb-5 md:mb-7">
            Let's start a{' '}
            <span className="italic text-gold">conversation.</span>
          </h2>
          <p className="font-body font-light text-[15px] md:text-[16px] leading-[1.7] text-cream/50 max-w-[420px] mx-auto mb-8 md:mb-10">
            Whether you're exploring partnership opportunities, seeking strategic counsel, or interested in our portfolio — we'd welcome the dialogue.
          </p>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>
      </section>
    </>
  );
}
