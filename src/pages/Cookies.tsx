import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Cookies() {
  usePageTitle('Cookie Policy');

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading={<>Cookie <span className="italic text-gold">Policy</span>.</>}
        subtitle="How this website uses cookies and similar technologies."
      />

      {/* Our Approach */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Our Approach"
            heading={<>A deliberately <span className="italic text-gold">minimal</span> footprint.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, to improve efficiency, and to provide information to site owners.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              This website does not currently use non-essential tracking cookies. We do not use advertising cookies, third-party analytics, social media pixels, or any form of behavioural tracking.
            </p>
          </div>
        </div>
      </section>

      {/* What May Be Set */}
      <section className="bg-cream-dark py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Technical Detail"
            heading={<>What may be <span className="italic text-gold">processed</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              Our hosting infrastructure may process basic technical information — such as IP addresses — as part of serving the website securely and reliably. This website also loads typefaces from Google Fonts, which involves a technical request to Google's servers when pages are displayed. Neither is used by us to track or profile visitors.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              Should our use of cookies change in the future — for example, if we introduce analytics — this policy will be updated and, where required by law, your consent will be sought before any non-essential cookies are set.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Your Controls"
            heading={<>Managing cookies in your <span className="italic text-gold">browser</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              Most web browsers allow you to control cookies through their settings, including blocking or deleting them. Guidance is available within your browser's help documentation. Because this website does not rely on non-essential cookies, restricting them should not affect your experience of the site.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy-deep py-20 md:py-28 lg:py-32 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/12 pointer-events-none rounded-[2px]" />
        <div className="max-w-[560px] mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            Contact
          </p>
          <h2 className="font-heading font-light text-[24px] sm:text-[30px] md:text-[36px] text-cream leading-[1.18] mb-5">
            Questions about cookies?
          </h2>
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-cream/70 mb-6">
            For any questions about this policy, please contact:
          </p>
          <a
            href="mailto:enquiries@surahaenterprise.com"
            className="font-body text-[15px] text-gold hover:text-gold-light transition-colors duration-300"
          >
            enquiries@surahaenterprise.com
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-cream/25 mt-8">
            Suraha Enterprise Ltd. is registered in England &amp; Wales. · Last updated June 2026
          </p>
        </div>
      </section>
    </>
  );
}
