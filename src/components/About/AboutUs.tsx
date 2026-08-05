import React from 'react';
import { ShieldCheck, Compass, RefreshCw, Handshake } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const scrollToPrinciples = () => {
    const el = document.getElementById('core-principles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* ================= SECTION 1: HERO BANNER ================= */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left Floating White Card (Overlapping image on desktop) */}
            <div className="lg:col-span-5 z-20 lg:-mr-20 xl:-mr-28">
              <div className="bg-white p-8 sm:p-12 shadow-2xl border border-slate-100/80">
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Pioneering<br />
                  Enterprise<br />
                  Precision.
                </h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  We engineer resilient technology solutions for complex global operations. Our legacy is built on uncompromising technical excellence and strategic vision.
                </p>
                <button
                  onClick={scrollToPrinciples}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-3 text-sm rounded-xs shadow-xs transition-colors cursor-pointer"
                >
                  Discover Our Approach
                </button>
              </div>
            </div>

            {/* Right Office Hero Image with Large Curved Top-Left Corner */}
            <div className="lg:col-span-7 z-10">
              <div className="rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[30px] overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="/images/about_hero_office.png"
                  alt="Modern Enterprise Office Workspace"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR HERITAGE ================= */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hardware Image with Solid Light Grey Offset Accent Block */}
            <div className="lg:col-span-5 relative pl-6 pb-6">
              {/* Offset architectural grey block matching screenshot */}
              <div className="absolute -bottom-4 -left-2 w-[85%] h-[85%] bg-[#e2e8f0] -z-10" />
              
              <div className="relative shadow-md overflow-hidden bg-slate-900 border border-slate-200/60">
                <img
                  src="/images/about_heritage_server.png"
                  alt="Enterprise Hardware Racks"
                  className="w-full h-[280px] sm:h-[350px] object-cover object-center"
                />
              </div>
            </div>

            {/* Right Heritage Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-7 bg-[#f97316] flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Tentang Kami & Heritage
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="font-semibold text-slate-800">PT. Integra Aneksa Kreasindo (Grasindopro)</strong> merupakan perusahaan general kontraktor yang berpengalaman di bidang Mechanical Electrical (M&E), Teknologi Informasi (IT), Media Advertising, dan Event Organizer (EO).
                </p>
                <p>
                  Kami menyediakan layanan terpadu mulai dari perencanaan, desain, hingga implementasi dalam berbagai proyek konstruksi dan teknologi, serta strategi pemasaran yang efektif di berbagai sektor industri Indonesia.
                </p>

                {/* Legal Credentials Badges */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">NIB Perusahaan</span>
                    <span className="font-mono font-bold text-slate-800">0812230083996</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">SK Kemenkumham</span>
                    <span className="font-mono font-bold text-slate-800">AHU-0093499.AH.01.01</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">NPWP Perusahaan</span>
                    <span className="font-mono font-bold text-slate-800">99.362.300.8-453.000</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">Akta Pendirian</span>
                    <span className="font-mono font-bold text-slate-800">No. 24 (07 Des 2023)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE PRINCIPLES ================= */}
      <section id="core-principles" className="py-20 sm:py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Core Principles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The foundational values that drive our engineering methodologies and client partnerships.
            </p>
          </div>

          {/* 2x2 Grid of Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Integrity */}
            <div className="bg-[#f3f4f6] rounded-xl p-8 border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-5 text-[#f97316]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Integrity
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unwavering commitment to ethical engineering, transparent communication, and secure data handling practices at every tier of operation.
                </p>
              </div>
            </div>

            {/* Card 2: Precision */}
            <div className="bg-[#f3f4f6] rounded-xl p-8 border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-5 text-[#f97316]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Precision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Exactitude in code, architecture, and deployment. We measure twice and deploy once, ensuring minimal friction and maximum efficiency.
                </p>
              </div>
            </div>

            {/* Card 3: Resilience */}
            <div className="bg-[#f3f4f6] rounded-xl p-8 border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-5 text-[#f97316]">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Resilience
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Building fault-tolerant systems designed to withstand catastrophic failures and complex threat landscapes without compromising core functionality.
                </p>
              </div>
            </div>

            {/* Card 4: Partnership */}
            <div className="bg-[#f3f4f6] rounded-xl p-8 border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-5 text-[#f97316]">
                  <Handshake className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Partnership
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Collaborating deeply with enterprise stakeholders to align technological execution with overarching strategic business objectives.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
