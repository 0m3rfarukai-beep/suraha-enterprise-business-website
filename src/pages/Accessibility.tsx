import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Accessibility() {
  usePageTitle('Accessibility');

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading={<>Accessibility <span className="italic text-gold">Statement</span>.</>}
        subtitle="Our commitment to an accessible experience for all visitors."
      />

      {/* Commitment */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Commitment"
            heading={<>Designed to be <span className="italic text-gold">usable</span> by everyone.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Suraha Enterprise Ltd. is committed to making this website accessible to the widest possible audience, regardless of technology or ability. We aim to follow recognised good practice, with reference to the Web Content Accessibility Guidelines (WCAG) 2.1.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Measures we have taken include semantic page structure, keyboard-operable navigation, visible focus indicators, descriptive link labels, and a responsive layout that adapts to different devices and screen sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Work */}
      <section className="bg-cream-dark py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Ongoing Work"
            heading={<>A continuing <span className="italic text-gold">obligation</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Accessibility is an ongoing effort rather than a fixed destination. We review the website periodically and seek to improve it as standards, technologies, and our understanding evolve. Some aspects of the site may not yet meet every guideline in full, and we welcome feedback that helps us identify and address barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-navy-deep py-20 md:py-28 lg:py-32 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/12 pointer-events-none rounded-[2px]" />
        <div className="max-w-[560px] mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            Feedback
          </p>
          <h2 className="font-heading font-light text-[24px] sm:text-[30px] md:text-[36px] text-cream leading-[1.18] mb-5">
            Encountered a barrier?
          </h2>
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-cream/50 mb-6">
            If you experience any difficulty accessing content on this website, or have suggestions for improvement, please contact:
          </p>
          <a
            href="mailto:enquiries@surahaenterprise.com"
            className="font-body text-[15px] text-gold hover:text-gold-light transition-colors duration-300"
          >
            enquiries@surahaenterprise.com
          </a>
          <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-cream/25 mt-8">
            Suraha Enterprise Ltd. is registered in England &amp; Wales. · Last updated June 2026
          </p>
        </div>
      </section>
    </>
  );
}
