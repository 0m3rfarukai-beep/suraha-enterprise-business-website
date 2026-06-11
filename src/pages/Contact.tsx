import { Handshake, Layers, Truck, Code2, Facebook, Linkedin } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { usePageTitle } from '../hooks/usePageTitle';

const enquiryTypes = [
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    body: 'Joint ventures and long-term commercial partnerships aligned with the group\'s focus on technology, commerce, and trade.',
  },
  {
    icon: Layers,
    title: 'Division Enquiries',
    body: 'Propositions relevant to Suraha Digital, Suraha Commerce, or Suraha Trade.',
  },
  {
    icon: Truck,
    title: 'Supplier & Trade Relationships',
    body: 'Manufacturers, suppliers, and distributors seeking dependable wholesale, import/export, or B2B supply arrangements.',
  },
  {
    icon: Code2,
    title: 'Technology Engagements',
    body: 'Organisations seeking well-built software, web platforms, or digital infrastructure delivered with commercial discipline.',
  },
];

const reviewCriteria = [
  'Businesses and partners with durable competitive advantages and clear paths to sustainable value creation',
  'Management teams with demonstrated operational capability and long-term orientation',
  'Sectors where we have existing expertise or a well-reasoned basis for conviction',
  'Relationships that allow for meaningful collaboration and mutual commercial benefit',
  'Opportunities where patience and discipline can compound value over time',
];

const steps = [
  {
    number: '01',
    title: 'Initial Enquiry',
    body: 'Submit a brief overview of your proposition via email. We review every enquiry personally and respond to every approach, regardless of outcome.',
  },
  {
    number: '02',
    title: 'Preliminary Review',
    body: 'Our team assesses alignment with our commercial criteria and divisional focus areas. Where there is resonance, we proceed to dialogue.',
  },
  {
    number: '03',
    title: 'Structured Dialogue',
    body: 'Where there is mutual interest, we arrange a confidential discussion to explore the opportunity in depth and determine whether a formal engagement is appropriate.',
  },
];

export default function Contact() {
  usePageTitle('Contact');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading={<>Let's start a <span className="italic text-gold">conversation</span>.</>}
        subtitle="We welcome approaches from suppliers, commercial partners, and businesses that share our long-term orientation."
      />

      {/* Partnership Enquiry */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Partnership Enquiry"
            heading={<>Open to <span className="italic text-gold">considered</span> dialogue.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[680px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              Whether you represent a potential supplier, a technology engagement, a trading relationship, or a long-term commercial partnership — we are open to considered dialogue.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-navy/80">
              We review every enquiry personally and respond to every approach, regardless of outcome. We value the time and consideration that goes into a well-crafted approach, and we extend the same courtesy in return.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Types */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="// Areas of Interest"
            heading={<>What we <span className="italic text-gold">consider</span>.</>}
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {enquiryTypes.map((type, i) => (
              <div key={i} className="bg-cream-dark p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold">
                    0{i + 1}
                  </p>
                  <span className="inline-flex items-center justify-center w-9 h-9 border border-gold/25 rounded-full" aria-hidden="true">
                    <type.icon size={17} strokeWidth={1.5} className="text-gold" />
                  </span>
                </div>
                <h3 className="font-heading font-normal text-[20px] md:text-[22px] text-navy leading-tight mb-3">
                  {type.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-navy/70">
                  {type.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="// What We Review"
                heading={<>Criteria for <span className="italic text-gold">alignment</span>.</>}
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {reviewCriteria.map((criterion, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 py-5 ${
                      i < reviewCriteria.length - 1 ? 'border-b border-gold/10' : ''
                    }`}
                  >
                    <span className="font-mono text-[11px] text-gold/50 mt-0.5 shrink-0">0{i + 1}</span>
                    <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-navy/80">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Process */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Enquiry Process"
            heading={<>How we <span className="italic text-gold">engage</span>.</>}
            dark
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {steps.map((step) => (
              <div key={step.number} className="bg-navy p-8 md:p-10">
                <p className="font-heading font-light text-[32px] md:text-[40px] text-gold/20 leading-none mb-4">
                  {step.number}
                </p>
                <h3 className="font-heading font-light text-[18px] md:text-[20px] text-cream leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-cream/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-deep py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/12 pointer-events-none rounded-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.06)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[600px] mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-6">
            Get In Touch
          </p>
          <h2 className="font-heading font-light text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] text-cream leading-[1.15] mb-5 md:mb-7">
            enquiries@surahaenterprise.com
          </h2>
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-cream/70 max-w-[420px] mx-auto mb-8 md:mb-10">
            Submit a brief overview of your proposition. We review every enquiry personally and respond to every approach.
          </p>
          <CTAButton href="mailto:enquiries@surahaenterprise.com">Send an Enquiry</CTAButton>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cream/50 mt-6">
            All enquiries treated in strict confidence
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://www.facebook.com/SurahaEnterpriseLtd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suraha Enterprise on Facebook"
              className="text-cream/50 hover:text-gold transition-colors duration-300"
            >
              <Facebook size={17} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/surahaenterpriseltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suraha Enterprise on LinkedIn"
              className="text-cream/50 hover:text-gold transition-colors duration-300"
            >
              <Linkedin size={17} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
