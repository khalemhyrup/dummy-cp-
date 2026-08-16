import React, { useState } from 'react';
import { ArrowRight, Plus, Minus, CheckCircle2, ChevronRight, Sparkles, Server, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

interface GeneralHomeProps {
  onNavigate: (page: string) => void;
}

export const GeneralHome: React.FC<GeneralHomeProps> = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const accordionItems = [
    {
      id: 0,
      number: '01',
      title: 'IT & CME Infrastructure Division',
      route: 'it-home',
      summary: 'Perancangan jaringan fiber optik, sistem keamanan CCTV/access control, menara telekomunikasi BTS, serta instalasi mekanikal elektrikal (HVAC, plumbing, hydrant, dan kelistrikan industri).',
      bullets: [
        'Fiber Optics Cabling & Splicing (OTDR Testing)',
        'Security Systems (CCTV & Biometric Access Door)',
        'Telecommunication Towers (BTS & Radio Link)',
        'Mechanical (HVAC, Plumbing, Hydrant & Gas)',
        'Electrical (Panel Distribusi, Genset & Otomatisasi)',
      ],
      portalBadge: 'ENTERPRISE TECH & CME',
    },
    {
      id: 1,
      number: '02',
      title: 'Event Organizer & Media Advertising Division',
      route: 'eo-home',
      summary: 'Penyelenggaraan acara korporat berskala nasional (MICE), brand activation, serta kampanye media iklan luar ruang (billboard jalan tol, neon box, signage gedung, dan branding armada).',
      bullets: [
        'MICE (Meeting, Incentive, Convention, Exhibition)',
        'Brand Activation & Corporate Gathering',
        'Highway Billboard Structures & Construction',
        'Corporate Signage, Neon Box & Pylon Signs',
        'Custom Expo Booth & Spatial Stage Design',
      ],
      portalBadge: 'CREATIVE MEDIA & MICE',
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">

      {/* =====================================================================
          HERO SECTION 0: EXECUTIVE STRATEGY CINEMATIC HERO (Reference Image)
      ====================================================================== */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-neutral-950">
        
        {/* Background Image with Crisp Photorealistic Executive Boardroom Desk */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/executive_boardroom_hero.jpg')" }}
        />

        {/* Ambient Dark/Warm Overlay matching reference photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />

        {/* Top Minimal Bar matching the reference UI */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 w-full flex items-center justify-between">
          <div className="text-white font-semibold text-lg sm:text-xl tracking-tight drop-shadow-md">
            PT Integra Aneksa Kreasindo
          </div>
          <div className="hidden sm:flex items-center gap-8 text-xs sm:text-sm text-white/85 font-medium">
            <button onClick={() => onNavigate('service')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              Services
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              About
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              Contact
            </button>
          </div>
        </div>

        {/* Center Main Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center my-auto py-12 space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
            Integrasi Infrastruktur &amp; Inovasi Promosi
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-normal drop-shadow-md leading-relaxed">
            Menyediakan layanan terpadu mulai dari infrastruktur Teknologi Informasi dan Mekanikal Elektrikal, hingga eksekusi Media Advertising dan Event Organizer
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                const nextSection = document.getElementById('overview-section');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-md cursor-pointer border border-white/40"
            >
              START WINNING
            </button>
          </div>
        </div>

        {/* Bottom subtle scroll indicator */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8 w-full flex justify-center">
          <button
            onClick={() => {
              const nextSection = document.getElementById('overview-section');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="text-white/70 hover:text-white transition-colors cursor-pointer text-xs flex flex-col items-center gap-1 group animate-bounce"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase">Explore Solutions</span>
            <span>↓</span>
          </button>
        </div>

      </section>

      {/* =====================================================================
          SECTION 1: TOP MASSIVE KINETIC OVERVIEW + OVERLAPPING ASSET CARD
          (Editorial Style: Image 1)
      ====================================================================== */}
      <section id="overview-section" className="w-full bg-white pt-10 pb-20 sm:pt-14 sm:pb-28 border-b border-neutral-200 relative overflow-hidden">
        
        {/* Giant Marquee / Background Kinetic Headline */}
        <div className="w-full overflow-hidden whitespace-nowrap select-none opacity-90 mb-4 sm:mb-8 pointer-events-none">
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-bold tracking-tighter text-neutral-900 leading-none inline-block animate-marquee uppercase">
            High-Impact Solutions &nbsp;•&nbsp; Grasindo Pro &nbsp;•&nbsp; IT &amp; Media &nbsp;•&nbsp; Integrated Excellence &nbsp;•&nbsp;
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Overlapping Clean Asset Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="w-full max-w-md bg-neutral-100 border border-neutral-200 p-4 sm:p-6 shadow-xl relative group">
                <div className="aspect-[4/4] overflow-hidden bg-white relative mb-4">
                  <img
                    src="/images/corporate_hero_headquarters.jpg"
                    alt="Grasindopro Corporate Facilities"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase">
                    PT INTEGRA ANEKSA KREASINDO
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                      Integrated Corporate Ecosystem
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      General Contractor &amp; Multi-Service Provider
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    EST. INDONESIA
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Clean Welcome Intro & Action Pill */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Grab proven integrated frameworks that accelerate enterprise growth.
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg">
                Kami memadukan keahlian teknik infrastruktur modern (IT &amp; CME) dengan strategi periklanan dan manajemen event (EO &amp; Media Advertising) di bawah satu tata kelola terpercaya.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('it-home')}
                  className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm cursor-pointer"
                >
                  <span>EXPLORE IT &amp; CME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('eo-home')}
                  className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all border border-neutral-300 cursor-pointer"
                >
                  <span>EXPLORE EO &amp; MEDIA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: 3-COLUMN EDITORIAL INTRO + PANORAMIC STUDIO PHOTO
          (Editorial Style: Image 2 - "Breakthrough Consulting, Redefined")
      ====================================================================== */}
      <section className="w-full bg-[#f4f4f4] py-20 sm:py-28 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* 3-Column Editorial Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            
            {/* Column 1: Main Title */}
            <div className="md:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-neutral-900 leading-[1.12]">
                Integrated Enterprise<br />
                Solutions, Redefined
              </h2>
            </div>

            {/* Column 2: Lead Paragraph */}
            <div className="md:col-span-4">
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
                Kami mewujudkan target strategis menjadi pencapaian nyata. Tim spesialis berpengalaman kami menyederhanakan kompleksitas, memetakan solusi tepat sasaran, dan mendorong momentum operasional di seluruh ekosistem bisnis Anda.
              </p>
            </div>

            {/* Column 3: Secondary Context + Learn More */}
            <div className="md:col-span-3">
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Mulai dari infrastruktur fisik &amp; digital berkapasitas tinggi hingga aktivasi merek berskala nasional, kami bersinergi erat dengan tim Anda untuk menghadirkan hasil yang berdampak jangka panjang.{' '}
                <button
                  onClick={() => onNavigate('service')}
                  className="font-bold text-black underline underline-offset-4 hover:text-amber-600 transition-colors inline cursor-pointer"
                >
                  Pelajari Selengkapnya
                </button>
              </p>
            </div>

          </div>

          {/* Panoramic Editorial Image Container */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] bg-neutral-200 overflow-hidden shadow-md relative">
            <img
              src="/images/editorial_architect_model.jpg"
              alt="Grasindopro Strategic Planning and Technical Consultation"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1">
              CONSULTATION • DESIGN • EXECUTION
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CORE BUSINESS DIVISIONS (ACCORDION + HALLWAY TEAM PHOTO)
          (Editorial Style: Image 5 - "Elite Advisory Services")
      ====================================================================== */}
      <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading + Accordion */}
            <div className="lg:col-span-6 space-y-8">
              
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase block mb-2">
                  OUR TWO SPECIALIZED PILLARS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-4">
                  Core Business<br />
                  Divisions
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                  Partner with dedicated specialists who engineer rapid expansion across technical infrastructure and experiential brand media.
                </p>
              </div>

              {/* Accordion List */}
              <div className="border-t border-neutral-300 divide-y divide-neutral-200">
                {accordionItems.map((item) => {
                  const isOpen = activeAccordion === item.id;
                  return (
                    <div key={item.id} className="py-5">
                      <button
                        onClick={() => setActiveAccordion(isOpen ? -1 : item.id)}
                        className="w-full flex items-center justify-between text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">
                            {item.number}
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <div className="p-1 rounded-full text-neutral-600 group-hover:text-black">
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pt-4 pl-7 pr-2 space-y-4 animate-fadeIn">
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            {item.summary}
                          </p>

                          <div className="space-y-1.5 pt-1">
                            {item.bullets.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={() => onNavigate(item.route)}
                              className="inline-flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider hover:text-amber-600 transition-colors cursor-pointer group"
                            >
                              <span>Enter {item.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* View All Services Pill Button */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('service')}
                  className="bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>VIEW ALL SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Tall Editorial Hallway Team Photo */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden shadow-lg bg-neutral-100 border border-neutral-200">
                <img
                  src="/images/editorial_hallway_team.jpg"
                  alt="Grasindopro Executive Leaders & Engineers"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    LEADERSHIP &amp; EXPERTISE
                  </span>
                  <p className="text-sm font-semibold">
                    Certified Project Managers, Specialized Engineers, &amp; Creative Directors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: KINETIC HEADLINE + BOARDROOM COLLAB + FEATURE CARD
          (Editorial Style: Image 3 - "Go Digital. Scale Faster.")
      ====================================================================== */}
      <section className="w-full bg-[#ebebeb] py-20 sm:py-28 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Big Kinetic Section Title */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
              Go Digital. Scale Faster. Build Stronger.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: Boardroom Collaboration Scene (Clean Photo Showcase) */}
            <div className="lg:col-span-8 bg-neutral-100 overflow-hidden relative shadow-md group border border-neutral-200">
              <img
                src="/images/editorial_boardroom_collab.jpg"
                alt="Corporate Strategy & IT Synergy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Right: Featured Capability Card with Border Box */}
            <div className="lg:col-span-4 bg-white border-2 border-neutral-300 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-600 uppercase">
                    COLLABORATION MODEL
                  </span>
                  <Award className="w-4 h-4 text-neutral-400" />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  Single-Source Partnership
                </h3>
                <p className="text-2xl font-bold text-neutral-950 mb-2">
                  Full-Service Integration
                </p>
                <span className="text-xs text-neutral-500 font-mono block mb-6">
                  Turnkey Infrastructure &amp; Creative Media
                </span>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  Dapatkan akses menyeluruh ke tim lintas disiplin untuk merealisasikan proyek jaringan, instalasi fisik, hingga promosi outdoor tanpa repot mengelola banyak vendor terpisah.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full transition-all text-center cursor-pointer shadow-xs"
                >
                  START A COLLABORATION
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 5: GIANT KINETIC TEXT + FLOATING PILL + 4-COLUMN GALLERY
          (Editorial Style: Image 4 - "Momentum • Follow Through")
      ====================================================================== */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          {/* Big Typography Header */}
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-neutral-900 leading-tight">
              Momentum &nbsp;•&nbsp; Execution &nbsp;•&nbsp; Excellence
            </h2>
          </div>

          {/* Centered Floating Pill Button */}
          <div className="mb-14 sm:mb-16">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>CONNECT NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4-Column Editorial Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            
            {/* Gallery Item 1 */}
            <div className="group overflow-hidden bg-neutral-100 border border-neutral-200">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/images/editorial_gallery_1.jpg"
                  alt="Grasindopro Collaborative Teamwork"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-3 bg-white border-t border-neutral-100">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">CAMPUS CULTURE</span>
                <span className="text-xs font-bold text-neutral-900">Collaborative Synergy</span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group overflow-hidden bg-neutral-100 border border-neutral-200">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/images/editorial_gallery_2.jpg"
                  alt="Corporate Executive Consultation"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-3 bg-white border-t border-neutral-100">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">STRATEGIC DIALOGUE</span>
                <span className="text-xs font-bold text-neutral-900">Executive Briefings</span>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group overflow-hidden bg-neutral-100 border border-neutral-200">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/images/editorial_gallery_3.jpg"
                  alt="Engineering & Field Leadership"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-3 bg-white border-t border-neutral-100">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">TECHNICAL RIGOR</span>
                <span className="text-xs font-bold text-neutral-900">Engineering Oversight</span>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group overflow-hidden bg-neutral-100 border border-neutral-200">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/images/editorial_gallery_4.jpg"
                  alt="Enterprise Governance & Direction"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-3 bg-white border-t border-neutral-100">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">GOVERNANCE</span>
                <span className="text-xs font-bold text-neutral-900">Enterprise Standards</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FINAL CORPORATE HIGH-CONTRAST CTA
      ====================================================================== */}
      <section className="w-full bg-black text-white py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          
          <span className="text-xs font-mono font-bold tracking-widest text-amber-500 uppercase block mb-4">
            START YOUR NEXT PROJECT
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8">
            Ready to Partner with<br />
            Grasindo Pro?
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Diskusikan kebutuhan proyek infrastruktur teknologi, instalasi mekanikal elektrikal, atau kampanye periklanan dan event manajemen Anda bersama tim ahli kami.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold px-8 py-4 rounded-full transition-all shadow-md cursor-pointer"
            >
              <span>Connect with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-8 py-4 rounded-full transition-all border border-neutral-700 cursor-pointer"
            >
              <span>About Grasindopro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
