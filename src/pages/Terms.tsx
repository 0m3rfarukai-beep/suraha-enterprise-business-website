import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Terms() {
  usePageTitle('Terms of Use');

  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading={<>Terms of <span className="italic text-gold">Use</span>.</>}
        subtitle="The terms governing use of this website."
      />

      {/* Introduction */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Agreement"
            heading={<>Use of this <span className="italic text-gold">website</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              By accessing this website, you agree to be bound by these terms of use. If you do not agree with any part of these terms, you should not continue to use this website. Suraha Enterprise Ltd. reserves the right to modify these terms at any time without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Intellectual Property"
            heading={<>Our intellectual <span className="italic text-gold">property</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              All content on this website — including text, design, logos, and brand marks — is the intellectual property of Suraha Enterprise Ltd. or its licensors. No part of this website may be reproduced, distributed, or transmitted in any form without the prior written consent of Suraha Enterprise Ltd.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              The Suraha Enterprise name, the Suraha monogram, and the division names (Suraha Properties, Suraha Digital, Suraha Ventures, Suraha Advisory) are proprietary marks of Suraha Enterprise Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Disclaimer"
            heading={<>Information on this <span className="italic text-gold">site</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              This website is provided for informational purposes only. The content does not constitute investment advice, financial advice, legal advice, or an offer or solicitation of any kind. Suraha Enterprise Ltd. makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information contained on this website.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Suraha Enterprise Ltd. shall not be liable for any loss or damage arising from reliance on information published on this website.
            </p>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// External Links"
            heading={<>Links to other <span className="italic text-gold">websites</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              This website may contain links to external websites. Suraha Enterprise Ltd. does not endorse, control, or accept responsibility for the content or privacy practices of any third-party website. Accessing external links is at your own risk.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Governing Law"
            heading={<>Jurisdiction and <span className="italic text-gold">governing law</span>.</>}
          />
          <div className="mt-8 md:mt-10 space-y-5">
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              These terms of use are governed by and construed in accordance with the laws of England & Wales. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England & Wales.
            </p>
            <p className="font-body font-light text-[15px] md:text-[16px] leading-relaxed text-navy/70">
              Suraha Enterprise Ltd. is registered in England & Wales.
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
            Questions about these terms?
          </h2>
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-cream/50 mb-6">
            For any questions about these terms of use, please contact:
          </p>
          <a
            href="mailto:enquiries@surahaenterprise.com"
            className="font-body text-[15px] text-gold hover:text-gold-light transition-colors duration-300"
          >
            enquiries@surahaenterprise.com
          </a>
        </div>
      </section>
    </>
  );
}
