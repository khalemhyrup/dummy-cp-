import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ITHomeProps {
  onNavigate: (page: string) => void;
}

export const ITHome: React.FC<ITHomeProps> = ({ onNavigate }) => {
  const itDisciplines = [
    {
      id: '01',
      title: 'IT Infrastructure & Telecommunication',
      desc: 'Comprehensive network design, fiber optic deployment, and secure data center integrations designed for maximum uptime and scalability.',
      subList: [
        'Fiber Optics & Splicing (OTDR Testing)',
        'Security Systems (CCTV & Biometric Access Door)',
        'IT Support, Maintenance & Managed Services',
        'Telecommunication Towers (SST/Shelter & GSM Feeder)',
      ],
      route: 'it-solutions',
    },
    {
      id: '02',
      title: 'Mechanical & Electrical (ME)',
      desc: 'Precision-engineered HVAC systems, power distribution, and automated control environments that form the lifeblood of physical infrastructure.',
      subList: [
        'HVAC Systems (Air Conditioning & Central Ducting)',
        'Plumbing & Fire Hydrant Firefighting Systems',
        'Instalasi Listrik, Genset, & Panel Distribusi',
        'Building Automation & Industrial Control',
      ],
      route: 'cme-main',
    },
  ];

  const itProjects = [
    {
      id: 'it-p1',
      image: '/images/hero_datacenter.jpg',
      category: 'IT Infrastructure',
      title: 'Enterprise Server & Cloud Data Center',
      route: 'network-fo',
    },
    {
      id: 'it-p2',
      image: '/images/about_heritage_server.png',
      category: 'Telecommunication',
      title: 'Tower Transmission & Optical Fiber Backbone',
      route: 'telecom',
    },
    {
      id: 'it-p3',
      image: '/CME/Electrical/cme_electrical.png',
      category: 'Mechanical & Electrical',
      title: 'Industrial Electrical Panel & HVAC Integration',
      route: 'cme-main',
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-neutral-900">

      {/* ================= 1. HERO BANNER (IT & CME DEDICATED) ================= */}
      <section className="w-full bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 pr-0 lg:pr-6">
              
              {/* Tagline / Kicker */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase font-mono">
                  IT &amp; CME INFRASTRUCTURE DIVISION
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-neutral-900 leading-[1.12]">
                IT &amp; Infrastructure<br />
                Solutions for the<br />
                Modern<br />
                Enterprise
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
                We deliver highly efficient, sustainable, and scalable infrastructure ecosystems. From advanced telecommunications to robust mechanical engineering, we build the foundations of tomorrow.
              </p>

              {/* CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('it-solutions')}
                  className="group inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-200"
                >
                  <span>Explore IT &amp; CME Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('home')}
                  className="text-xs font-medium text-neutral-500 hover:text-black transition-colors underline underline-offset-4"
                >
                  ← Back to Main Portal
                </button>
              </div>

            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100">
                <img
                  src="/images/hero_datacenter.jpg"
                  alt="Enterprise Data Center Infrastructure"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. THE 2 PILARS: IT & CME (CORE DISCIPLINES) ================= */}
      <section className="w-full bg-[#f9f9f9] py-20 sm:py-28 lg:py-32 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase block mb-2">
                DIVISION DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-neutral-900 leading-tight">
                Core Disciplines
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
                Our expertise spans critical infrastructure domains, ensuring seamless integration and operational excellence for high-demand environments.
              </p>
            </div>
          </div>

          {/* 2-Card Grid: 01 IT & 02 CME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itDisciplines.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.route)}
                className="group bg-white border border-neutral-200 p-8 sm:p-12 flex flex-col justify-between cursor-pointer hover:border-neutral-400 hover:shadow-xl transition-all duration-300 min-h-[360px]"
              >
                <div>
                  {/* Number */}
                  <span className="block text-sm sm:text-base font-mono font-medium text-neutral-400 mb-8 group-hover:text-black transition-colors">
                    {item.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
                    {item.desc}
                  </p>

                  {/* Sub-list */}
                  <div className="space-y-2 mb-8">
                    {item.subList.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-neutral-400" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    Explore Solution
                  </span>
                  <ArrowRight className="w-5 h-5 text-neutral-900 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. IT & CME PROJECT SHOWCASE ================= */}
      <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase block mb-2">
                PROJECT PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-neutral-900 leading-tight">
                Precision Executed.<br />
                Infrastructure Realized.
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('client')}
                className="text-xs sm:text-sm font-medium text-neutral-600 hover:text-black transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-black pb-1"
              >
                View IT &amp; CME Clients
              </button>
            </div>
          </div>

          {/* 3 Showcase Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {itProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.route)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/5] bg-neutral-100 overflow-hidden relative mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Category Subtitle */}
                <p className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide uppercase">
                  {item.category}
                </p>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 mt-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. IT ELEVATE CTA (DARK SECTION) ================= */}
      <section className="w-full bg-black text-white py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8">
            Ready to Elevate Your<br />
            Infrastructure?
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Engage our experts to architect and deploy systems built for the demands of the modern enterprise.
          </p>

          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-200"
            >
              <span>Connect with Our Experts</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
