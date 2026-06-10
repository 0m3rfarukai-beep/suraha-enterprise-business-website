import { Link } from 'react-router-dom';
import { Globe, Cog, ShoppingBag, Ship, Code2, Database } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import GroupStructure from '../components/GroupStructure';
import Reveal from '../components/Reveal';
import CTAButton from '../components/CTAButton';
import { usePageTitle } from '../hooks/usePageTitle';

const capabilities = [
  {
    icon: Globe,
    status: 'Available now',
    title: 'Web Platforms & Business Websites',
    body: 'Design, build, and maintenance of professional websites, eCommerce platforms, and web applications — delivered through Suraha Digital.',
  },
  {
    icon: Code2,
    status: 'Available now',
    title: 'Software & Bespoke Systems',
    body: 'Custom software, business automation, and internal tooling built to be maintainable, secure, and commercially useful.',
  },
  {
    icon: Database,
    status: 'Available now',
    title: 'Digital Infrastructure',
    body: 'Hosting, deployment, and the technical operations that keep commercial platforms running reliably.',
  },
  {
    icon: ShoppingBag,
    status: 'Developing capability',
    title: 'Online Retail Operations',
    body: 'Direct-to-consumer storefronts and digital trading channels, operated under Suraha Commerce as the division develops.',
  },
  {
    icon: Ship,
    status: 'Planned commercial activity',
    title: 'Wholesale & International Trade',
    body: 'Import/export and B2B supply relationships in selected categories, to be conducted through Suraha Trade.',
  },
  {
    icon: Cog,
    status: 'Group function',
    title: 'Governance & Shared Services',
    body: 'Strategy, compliance, and capital discipline provided by the head office across every operating division.',
  },
];

const audiences = [
  {
    title: 'Small & Medium Businesses',
    body: 'Organisations seeking dependable web, software, and digital infrastructure delivered with commercial discipline rather than agency theatre.',
  },
  {
    title: 'Suppliers & Manufacturers',
    body: 'Producers and distributors interested in dependable wholesale, import/export, or B2B supply arrangements as Suraha Trade develops.',
  },
  {
    title: 'Commercial Partners',
    body: 'Businesses exploring joint ventures or long-term partnerships aligned with the group\'s focus on technology, commerce, and trade.',
  },
  {
    title: 'Online Customers',
    body: 'Consumers served directly through the retail channels operated by Suraha Commerce — with honest dealing and reliable fulfilment.',
  },
];

const timeline = [
  {
    marker: 'Established',
    title: 'Group Foundation',
    body: 'Suraha Enterprise Ltd. registered in England & Wales. Governance framework, brand identity, and digital presence established.',
  },
  {
    marker: 'Current focus',
    title: 'Suraha Digital',
    body: 'Building the group\'s technology capability — delivering web platforms, software, and digital infrastructure for the group\'s own ventures and for commercial clients.',
  },
  {
    marker: 'Developing',
    title: 'Suraha Commerce',
    body: 'Early-stage development of direct-to-consumer retail channels and online storefronts, built on the group\'s own technology.',
  },
  {
    marker: 'Planned',
    title: 'Suraha Trade',
    body: 'Planned commercial activity in wholesale, import/export, and B2B supply — to be grown deliberately, one sound trading relationship at a time.',
  },
  {
    marker: 'Ambition',
    title: 'An Enduring British Group',
    body: 'A diversified group of purposeful businesses — built patiently, governed properly, and intended to endure.',
  },
];

const engagement = [
  {
    number: '01',
    title: 'Initial Enquiry',
    body: 'Submit a brief overview of your requirement or proposition by email. Every enquiry is reviewed personally.',
  },
  {
    number: '02',
    title: 'Scoping & Alignment',
    body: 'We assess fit with the relevant division\'s focus and capability, and respond with an honest view of what we can — and cannot — do.',
  },
  {
    number: '03',
    title: 'Defined Engagement',
    body: 'Where there is alignment, we agree clear scope, terms, and accountability before any work or trading relationship begins.',
  },
];

export default function Capabilities() {
  usePageTitle('Capabilities');

  return (
    <>
      <PageHero
        eyebrow="Group Capabilities"
        heading={<>What we build. What we <span className="italic text-gold">intend</span> to build.</>}
        subtitle="An honest account of the group's structure, the capabilities available today, and the commercial activity we are developing for the years ahead."
      />

      {/* Group Profile / Structure */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Group Profile"
            heading={<>One group. Four <span className="italic text-gold">pillars</span>.</>}
          />
          <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80 max-w-[680px] mt-8 md:mt-10 mb-14 md:mb-20">
            Suraha Enterprise Ltd. is a private holding company registered in England &amp; Wales. The head office sets strategy and governance; three operating divisions carry the group's commercial activity in technology, commerce, and international trade.
          </p>
          <GroupStructure />
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// What We Build"
            heading={<>Capabilities, stated <span className="italic text-gold">plainly</span>.</>}
          />
          <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80 max-w-[680px] mt-8 md:mt-10 mb-12 md:mb-16">
            We describe our capabilities as they are — what is available today, what is developing, and what is planned. We would rather understate and deliver than promise and disappoint.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.05} className="h-full">
                <div className="bg-cream-dark p-8 md:p-9 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-9 h-9 border border-gold/25 rounded-full" aria-hidden="true">
                      <cap.icon size={17} strokeWidth={1.5} className="text-gold" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/60 border border-gold/20 rounded-[2px] px-2.5 py-1">
                      {cap.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-normal text-[20px] md:text-[22px] text-navy leading-tight mb-3">
                    {cap.title}
                  </h3>
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                    {cap.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Who We Serve"
            heading={<>Built for those who value <span className="italic text-gold">substance</span>.</>}
            dark
          />
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {audiences.map((a, i) => (
              <div key={a.title} className="bg-navy p-8 md:p-10">
                <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gold mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-heading font-normal text-[20px] md:text-[22px] text-cream leading-tight mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-cream/70">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ambitions — timeline */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Future Ambitions"
            heading={<>Where the group is <span className="italic text-gold">heading</span>.</>}
          />
          <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80 max-w-[680px] mt-8 md:mt-10 mb-14 md:mb-16">
            This is a young group with long intentions. The path below reflects current focus and planned activity — not claims of scale we have yet to earn.
          </p>
          <div className="max-w-[760px]">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="relative pl-10 sm:pl-12 pb-12 last:pb-0">
                  {/* Spine */}
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[7px] sm:left-[9px] top-5 bottom-0 w-px bg-gold/25" aria-hidden="true" />
                  )}
                  {/* Node */}
                  <div className="absolute left-0 sm:left-0.5 top-1.5 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] border border-gold rounded-full bg-cream" aria-hidden="true">
                    <div className="absolute inset-[4px] bg-gold rounded-full" />
                  </div>
                  <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-gold mb-2">
                    {item.marker}
                  </p>
                  <h3 className="font-heading font-normal text-[22px] md:text-[24px] text-navy leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-navy/75">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// How We Engage"
            heading={<>Clear scope. Honest <span className="italic text-gold">terms</span>.</>}
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {engagement.map((step) => (
              <div key={step.number} className="bg-cream-dark p-8 md:p-10">
                <p className="font-heading font-light text-[32px] md:text-[40px] text-gold/25 leading-none mb-4">
                  {step.number}
                </p>
                <h3 className="font-heading font-normal text-[18px] md:text-[20px] text-navy leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              to="/divisions"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Explore the Divisions in Detail
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-gold/10 pointer-events-none rounded-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[600px] mx-auto px-6 md:px-10 lg:px-12 text-center relative z-10">
          <h2 className="font-heading font-light text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-cream leading-[1.16] mb-5 md:mb-7">
            Discuss a <span className="italic text-gold">requirement.</span>
          </h2>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/70 max-w-[420px] mx-auto mb-8 md:mb-10">
            Whether you need a capability available today or want to discuss a future trading relationship — we are open to considered dialogue.
          </p>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>
      </section>
    </>
  );
}
