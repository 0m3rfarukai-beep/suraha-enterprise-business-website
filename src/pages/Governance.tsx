import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';

const details = [
  { label: 'Registered As', value: 'Private Limited Company' },
  { label: 'Jurisdiction', value: 'England & Wales' },
  { label: 'Governing Law', value: 'Companies Act 2006' },
  { label: 'Filing Authority', value: 'Companies House' },
];

const compliancePrinciples = [
  {
    title: 'Full Compliance',
    body: 'We maintain full compliance with UK company law, reporting requirements, and relevant regulatory frameworks across our operating divisions. Compliance is not a burden we bear — it is a standard we uphold.',
  },
  {
    title: 'Conservative Interpretation',
    body: 'Where regulations are ambiguous or evolving, we adopt the most conservative interpretation. We would rather over-comply than risk the trust placed in us by our stakeholders.',
  },
  {
    title: 'Proactive Engagement',
    body: 'We engage proactively with regulatory developments, ensuring that our practices evolve in step with the expectations of the jurisdictions in which we operate.',
  },
];

export default function Governance() {
  usePageTitle('Governance');

  return (
    <>
      <PageHero
        eyebrow="Governance"
        heading={<>Governed by principle. <span className="italic text-gold">Accountable</span> by design.</>}
        subtitle="Suraha Enterprise is governed according to the principles of accountability, transparency, and fiduciary responsibility."
      />

      {/* Registered in England & Wales */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="// United Kingdom"
                heading={<>Registered in <span className="italic text-gold">England</span> & Wales.</>}
              />
              <div className="mt-8 md:mt-10 space-y-5">
                <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
                  Suraha Enterprise Ltd. is registered in England & Wales.
                </p>
                <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
                  Our registration reflects a deliberate choice of jurisdiction — one that offers robust corporate governance frameworks, the rule of law, and international credibility. The United Kingdom's legal and regulatory environment provides the transparency and accountability that our stakeholders expect and deserve.
                </p>
                <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
                  We are committed to maintaining the highest standards of corporate conduct, consistent with the expectations placed upon UK-registered enterprises operating across multiple sectors and jurisdictions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gold/15 p-8 md:p-10 rounded-[2px]">
                <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-8">
                  Company Details
                </p>
                <div className="space-y-0">
                  {details.map((d, i) => (
                    <div
                      key={i}
                      className={`flex items-baseline justify-between py-4 ${
                        i < details.length - 1 ? 'border-b border-gold/10' : ''
                      }`}
                    >
                      <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/60">
                        {d.label}
                      </span>
                      <span className="font-body text-[15px] md:text-[16px] text-navy/80 text-right">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy/30 leading-relaxed">
                    Suraha Enterprise Ltd. operates in full compliance with the Companies Act 2006 and all applicable UK regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="bg-navy py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(196,154,56,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="// Company Structure"
            heading={<>Entrepreneurial agility. <span className="italic text-gold">Institutional</span> governance.</>}
            dark
          />
          <div className="mt-8 md:mt-10 max-w-[680px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/75">
              Suraha Enterprise operates as a private holding company structured around four commercial pillars — a group head office and operating divisions in technology, commerce, and international trade. Each division maintains operational focus while benefiting from the strategic oversight, shared resources, and capital discipline of the group.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/75">
              Our structure is designed to balance entrepreneurial agility with institutional governance. Divisional leaders have the authority and autonomy to execute within their domains, while the group provides strategic direction, risk management, and capital allocation oversight.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-cream/75">
              This structure allows us to move with purpose in each sector while maintaining the coherence and discipline of a unified enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Principles */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Compliance Principles"
            heading={<>Standards we <span className="italic text-gold">uphold</span>.</>}
          />
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-[2px]">
            {compliancePrinciples.map((cp, i) => (
              <div key={i} className="bg-cream p-8 md:p-10">
                <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-heading font-normal text-[20px] md:text-[22px] text-navy leading-tight mb-3">
                  {cp.title}
                </h3>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-navy/70">
                  {cp.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Growth */}
      <section className="bg-cream-dark py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Responsible Growth"
            heading={<>Growth with <span className="italic text-gold">intention</span>.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[720px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Growth at Suraha Enterprise is pursued responsibly — with due regard for risk, sustainability, and the long-term health of the group. We do not pursue growth for its own sake, and we do not accept growth that compromises our governance principles or our commitment to enduring value.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Responsible growth means making deliberate choices about where and how we expand. It means entering new sectors only when we have genuine expertise and conviction. It means scaling operations at a pace that preserves quality and culture. And it means ensuring that every new commitment strengthens, rather than dilutes, the enterprise as a whole.
            </p>
          </div>
        </div>
      </section>

      {/* Transparent Reporting */}
      <section className="bg-cream py-24 md:py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionHeader
            eyebrow="// Transparent Reporting"
            heading={<>Clarity as a <span className="italic text-gold">discipline</span>.</>}
          />
          <div className="mt-8 md:mt-10 max-w-[720px] space-y-5">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Our stakeholders receive clear, honest, and timely reporting on performance, risk, and strategic direction. We do not obscure difficult realities or inflate interim results. Our reporting reflects the same long-term perspective that guides our decision-making.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              Transparency is not merely a disclosure obligation — it is a strategic advantage. It builds trust with partners, attracts like-minded collaborators, and ensures that our decision-making remains grounded in reality rather than narrative.
            </p>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-navy/80">
              We report on what matters: the operational health of our divisions, the strategic trajectory of the group, and the risks and opportunities we see on the horizon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
