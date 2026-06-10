import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Disclaimer() {
  usePageTitle('Disclaimer');

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading={<>Website <span className="italic text-gold">Disclaimer</span>.</>}
        subtitle="The basis on which information is published on this website."
      />

      {/* General Information Only */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// General Information"
            heading={<>For general information <span className="italic text-gold">only</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              The content of this website is provided for general information purposes only. It does not constitute financial, investment, legal, tax, or other professional advice, and it should not be relied upon as such. Visitors should seek appropriate independent professional advice before acting on any information found on this website.
            </p>
          </div>
        </div>
      </section>

      {/* No Offer or Solicitation */}
      <section className="bg-cream-dark py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// No Offer"
            heading={<>No offer or <span className="italic text-gold">solicitation</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Nothing on this website constitutes, or is intended to constitute, an offer to sell or a solicitation of an offer to buy any investment, security, or financial product, or an invitation to participate in any investment activity. References to the activities and interests of Suraha Enterprise Ltd. are descriptive of the company's own business and are not directed at the public as investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* No Reliance */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// No Reliance"
            heading={<>Accuracy and <span className="italic text-gold">reliance</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              While reasonable care is taken in preparing the content of this website, Suraha Enterprise Ltd. makes no representations or warranties, express or implied, as to its accuracy, completeness, or currency. Content may be updated or amended at any time without notice. To the fullest extent permitted by law, Suraha Enterprise Ltd. accepts no liability for any loss arising from reliance on the information published here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy-deep py-20 md:py-28 lg:py-32 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/12 pointer-events-none rounded-[2px]" />
        <div className="max-w-[560px] mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            Contact
          </p>
          <h2 className="font-heading font-light text-[24px] sm:text-[30px] md:text-[36px] text-cream leading-[1.18] mb-5">
            Questions about this notice?
          </h2>
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-cream/50 mb-6">
            For any questions about this disclaimer, please contact:
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
