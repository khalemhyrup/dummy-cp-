import React, { useState } from 'react';
import {
  BarChart3,
  Landmark,
  Cpu,
  Layers,
  ArrowUpRight,
  User,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';

interface ServicesPageProps {
  onContactClick?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onContactClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <span className="text-[11px] font-bold tracking-widest uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Strategic Solutions for Modern Enterprise
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              We deliver comprehensive business solutions designed to optimize operations, drive growth, and ensure institutional resilience in complex global markets.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES GRID (2x2) ================= */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Data-Driven Analytics */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 text-amber-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Data-Driven Analytics
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Transform raw data into actionable intelligence. Our advanced analytics frameworks provide executive dashboards, predictive modeling, and real-time operational insights to guide high-stakes decision-making.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <span>Explore Analytics</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Subtle watermark background chart pattern */}
                <div className="text-slate-100 group-hover:text-amber-100/50 transition-colors pointer-events-none">
                  <BarChart3 className="w-16 h-16 transform translate-x-4 translate-y-4 opacity-40" />
                </div>
              </div>
            </div>

            {/* Card 2: Financial Strategy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 text-amber-600">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Financial Strategy
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Comprehensive capital planning, risk assessment, and resource allocation strategies designed to maximize long-term shareholder value.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Digital Transformation */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 text-amber-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Digital Transformation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Modernize legacy systems and integrate scalable cloud architectures to ensure agility in rapidly evolving technological landscapes.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 4: Enterprise Restructuring (Featured Dark Card) */}
            <div className="bg-slate-950 text-white rounded-2xl p-8 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
              {/* Background gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-slate-900/50 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-amber-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  Enterprise Restructuring
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Strategic realignments of corporate structures to optimize efficiency, streamline operations, and capture market share. We guide organizations through complex mergers, acquisitions, and internal consolidations.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800">
                <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold px-4 py-2.5 rounded-lg shadow-sm transition-all">
                  <span>Explore Restructuring</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OUR ENGAGEMENT PROCESS ================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Engagement Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A rigorous, methodical approach to delivering solutions that are carefully tailored to the unique operational realities of each client.
            </p>
          </div>

          {/* Steps List */}
          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            
            {/* Step 01 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="text-amber-600 font-extrabold text-lg sm:text-xl font-mono">
                  01
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Discovery & Audit
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Comprehensive analysis of current operations, financial standing, and market positioning to identify core challenges and growth opportunities.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Deep-dive stakeholder interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Technology and infrastructure review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Financial and operational efficiency audits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 02 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="text-amber-600 font-extrabold text-lg sm:text-xl font-mono">
                  02
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Strategic Planning
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Development of a coherent, actionable roadmap outlining specific milestones, resource allocation, and risk mitigation strategies.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Resource and budget forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Change management framework design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>KPI definition and baseline establishment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 03 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="text-amber-600 font-extrabold text-lg sm:text-xl font-mono">
                  03
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Execution & Integration
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Implementation of defined solutions, working closely with internal teams to ensure seamless integration and minimal operational disruption.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Agile deployment methodology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Continuous performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Executive leadership alignment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 04 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="text-amber-600 font-extrabold text-lg sm:text-xl font-mono">
                  04
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Optimization & Review
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Post-implementation assessment to refine processes, validate ROI, and ensure long-term sustainability of the strategic initiatives.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Post-mortem analysis and adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Long-term support planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Knowledge transfer and team training</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 4: SUCCESS STORIES ================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Success Stories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hear from industry leaders who have transformed their operations with Stratos Corp.
            </p>
          </div>

          {/* 2 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <span className="text-amber-500 font-serif text-5xl leading-none select-none block mb-2">
                  &ldquo;
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;Stratos Corp&apos;s restructuring strategy completely revitalized our supply chain operations, resulting in a 24% reduction in overhead within the first fiscal year.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Sarah Jenkins
                  </h4>
                  <p className="text-xs text-slate-500">
                    COO, Global Logistics
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <span className="text-amber-500 font-serif text-5xl leading-none select-none block mb-2">
                  &ldquo;
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;Their data analytics framework gave us unprecedented visibility into customer behaviour. We were able to launch a new product line 3 months faster than anticipated.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Marcus Chen
                  </h4>
                  <p className="text-xs text-slate-500">
                    VP of Strategy, FinTech
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 5: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full text-left p-6 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <span>What industries does Stratos Corp specialize in?</span>
                {openFaq === 0 ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {(openFaq === 0 || true) && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  We serve enterprise clients across finance, logistics, healthcare, energy, and technology sectors, though our strategic framework is adaptable to complex organizations in any industry.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full text-left p-6 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <span>How long is a typical engagement?</span>
                {openFaq === 1 ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {(openFaq === 1 || true) && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  Engagements vary based on scope. Focused audits may take 4–6 weeks, while comprehensive digital transformation or enterprise restructuring typically span 6–18 months.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full text-left p-6 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <span>Do you handle the implementation phase?</span>
                {openFaq === 2 ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {(openFaq === 2 || true) && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  Yes. Unlike advisory-only firms, we believe true accountability means staying through execution. Our team works alongside yours to execute defined strategies, ensuring theoretical plans become operational realities.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 6: PRE-FOOTER CTA BANNER ================= */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle grid background accent */}
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to optimize your enterprise?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Connect with our senior consultants to discuss how Stratos Corp can drive your strategic objectives forward.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onContactClick}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactClick}
              className="border border-slate-700 hover:border-slate-500 bg-slate-900/80 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>Contact Sales</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
