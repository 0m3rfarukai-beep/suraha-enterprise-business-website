import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Privacy() {
  usePageTitle('Privacy Policy');

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading={<>Privacy <span className="italic text-gold">Policy</span>.</>}
        subtitle="How Suraha Enterprise Ltd. handles personal information."
      />

      {/* Introduction */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Introduction"
            heading={<>Our commitment to <span className="italic text-gold">privacy</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Suraha Enterprise Ltd. is committed to protecting the privacy of individuals who interact with our website and our business. This policy outlines how we collect, use, and safeguard personal information in accordance with applicable UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>

      {/* What We Collect */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Data Collection"
            heading={<>What we <span className="italic text-gold">collect</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              We collect only the personal information that is voluntarily provided to us — typically through enquiries, partnership discussions, or direct correspondence. This may include your name, email address, organisation, and the content of your communication.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              We do not use automated tracking tools, advertising cookies, or third-party analytics on this website. We do not collect browsing data for commercial purposes.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use It */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Use of Data"
            heading={<>How we use your <span className="italic text-gold">information</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Personal information provided to Suraha Enterprise Ltd. is used solely for the purpose of responding to enquiries, evaluating partnership opportunities, and conducting legitimate business correspondence. We do not sell, share, or distribute personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Retention"
            heading={<>Data <span className="italic text-gold">retention</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. When information is no longer needed, it is securely deleted or anonymised.
            </p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Your Rights"
            heading={<>Your rights under UK <span className="italic text-gold">law</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Under UK data protection legislation, you have the right to access, rectify, or erase your personal data. You may also request restriction of processing or data portability. To exercise any of these rights, please contact us at the address below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy-deep py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/12 pointer-events-none rounded-[2px]" />
        <div className="max-w-[560px] mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            Contact
          </p>
          <h2 className="font-heading font-light text-[24px] sm:text-[30px] md:text-[36px] text-cream leading-[1.18] mb-5">
            Data protection enquiries
          </h2>
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-cream/50 mb-6">
            For any questions about this policy or how we handle personal information, please contact:
          </p>
          <a
            href="mailto:enquiries@surahaenterprise.com"
            className="font-body text-[15px] text-gold hover:text-gold-light transition-colors duration-300"
          >
            enquiries@surahaenterprise.com
          </a>
          <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-cream/25 mt-8">
            Suraha Enterprise Ltd. is registered in England & Wales.
          </p>
        </div>
      </section>
    </>
  );
}
