import React from 'react';
import { CheckCircle2, ArrowRight, Server, Calendar, Cpu, Layers, ShieldCheck, Activity } from 'lucide-react';

interface ServicesPageProps {
  onSelectDetail?: (title: string, detail: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectDetail }) => {
  const scrollToServices = () => {
    const el = document.getElementById('core-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (serviceName: string, description: string) => {
    if (onSelectDetail) {
      onSelectDetail(serviceName, description);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* ================= SECTION 1: HERO BANNER ================= */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left Floating White Card */}
            <div className="lg:col-span-5 z-20 lg:-mr-20 xl:-mr-28">
              <div className="bg-white p-8 sm:p-12 shadow-2xl border border-slate-100/80">
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Tailored<br />
                  Enterprise<br />
                  Solutions.
                </h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  We deliver comprehensive IT infrastructure, cybersecurity platforms, and high-impact technology events engineered for global enterprises.
                </p>
                <button
                  onClick={scrollToServices}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-3 text-sm rounded-xs shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Hero Image with Large Curved Top-Left Corner */}
            <div className="lg:col-span-7 z-10">
              <div className="rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[30px] overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/services_hero.png"
                  alt="Tailored Enterprise IT Solutions"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CORE OFFERINGS ================= */}
      <section id="core-services" className="py-16 sm:py-24 bg-[#fafafa] border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Core Offerings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              End-to-end technology services designed to scale your operations, secure your data, and elevate your enterprise experience.
            </p>
          </div>

          {/* 2 Large Service Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            
            {/* Service 1: IT Support & Managed Services */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
              <div>
                <div className="relative overflow-hidden h-64 sm:h-72 bg-slate-900">
                  <img
                    src="/images/service_it_support.png"
                    alt="IT Support & Managed Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-md text-[#f97316]">
                    <Server className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <span className="text-[11px] font-extrabold tracking-widest text-[#f97316] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200/50 inline-block">
                    IT INFRASTRUCTURE & SUPPORT
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-900">
                    IT Support & Managed Services
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    Proactive monitoring, enterprise helpdesk, and resilient cloud & network infrastructure management tailored for mission-critical operations.
                  </p>

                  <ul className="space-y-3 pt-2">
                    {[
                      '24/7 Enterprise Helpdesk & Infrastructure Monitoring',
                      'Hybrid Multi-Cloud Integration & Migration',
                      'Zero-Trust Cybersecurity & Threat Mitigation',
                      'SLA-Backed Systems Maintenance & Disaster Recovery',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleLearnMore('IT Support & Managed Services', 'Complete 24/7 enterprise helpdesk, network security monitoring, server maintenance, and multi-cloud infrastructure optimization.')}
                  className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] font-bold text-sm transition-colors cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Service 2: IT Event Organizer & Tech Events */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
              <div>
                <div className="relative overflow-hidden h-64 sm:h-72 bg-slate-900">
                  <img
                    src="/images/service_event_organizer.png"
                    alt="IT Event Organizer & Tech Event Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-md text-[#f97316]">
                    <Calendar className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <span className="text-[11px] font-extrabold tracking-widest text-[#f97316] uppercase bg-orange-50 px-3 py-1 rounded-full border border-orange-200/50 inline-block">
                    EVENT ORGANIZER & TECH EVENTS
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-900">
                    EO (Event Organizer & Tech Event Solutions)
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    End-to-end technology event planning, hybrid live streaming, and interactive enterprise tech summits designed for maximum engagement.
                  </p>

                  <ul className="space-y-3 pt-2">
                    {[
                      'Executive Tech Summits & Product Launch Keynotes',
                      'Hybrid & Virtual Event Streaming Infrastructure',
                      'Interactive Tech Expo & Booth AV Management',
                      'Delegate Registration, Ticketing & Live Analytics',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleLearnMore('EO & Tech Event Solutions', 'End-to-end corporate technology event management, virtual conference platforms, AV audio-visual infrastructure, and live event analytics.')}
                  className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] font-bold text-sm transition-colors cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: ENGAGEMENT MODEL ================= */}
      <section className="py-20 sm:py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Engagement Model
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A structured, 4-step methodology ensuring seamless delivery and long-term operational success.
            </p>
          </div>

          {/* 4 Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="bg-[#f3f4f6] rounded-xl p-6 sm:p-8 border border-slate-200/50 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f97316] text-white font-extrabold flex items-center justify-center text-sm mb-5 shadow-sm">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Assessment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Deep-dive analysis of your current IT ecosystem, security posture, and strategic business requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f3f4f6] rounded-xl p-6 sm:p-8 border border-slate-200/50 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f97316] text-white font-extrabold flex items-center justify-center text-sm mb-5 shadow-sm">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Architecture
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Designing scalable, fault-tolerant system blueprints and customized SLA delivery roadmaps.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f3f4f6] rounded-xl p-6 sm:p-8 border border-slate-200/50 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f97316] text-white font-extrabold flex items-center justify-center text-sm mb-5 shadow-sm">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Execution
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Deploying robust hardware, cloud platforms, and event execution with zero business disruption.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f3f4f6] rounded-xl p-6 sm:p-8 border border-slate-200/50 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f97316] text-white font-extrabold flex items-center justify-center text-sm mb-5 shadow-sm">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Optimization
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  24/7 proactive monitoring, security audits, and continuous performance tuning.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
