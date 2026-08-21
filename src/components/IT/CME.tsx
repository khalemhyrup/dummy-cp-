import React, { useEffect } from 'react';

interface CMEmainProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const CMEmain: React.FC<CMEmainProps> = ({ initialCategory }) => {
  useEffect(() => {
    if (initialCategory) {
      const targetId =
        initialCategory === 'mechanical' || initialCategory.includes('mech')
          ? 'cme-mechanical'
          : initialCategory === 'electrical' || initialCategory.includes('elec')
          ? 'cme-electrical'
          : initialCategory === 'integration'
          ? 'cme-integration'
          : initialCategory;

      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [initialCategory]);

  const cmeServices = [
    {
      id: 'cme-mechanical',
      title: 'Mekanikal (Mechanical)',
      desc: 'Berfungsi menangani infrastruktur fisik dan perpipaan gedung, yang meliputi perencanaan, instalasi, dan pemeliharaan sistem HVAC (Heating, Ventilation, and Air Conditioning), plumbing (air bersih, kotor, dan sanitasi), pemadam kebakaran (sprinkler dan hydrant), serta pemipaan gas.',
      tagline: 'HVAC • Fire Protection • Industrial Plumbing',
      photos: [
        '/CME/Mechanical/CME_pipa.png',
        '/CME/Mechanical/Screenshot 2026-08-08 024958.png',
        '/CME/Mechanical/Screenshot 2026-08-08 025152.png',
      ],
    },
    {
      id: 'cme-electrical',
      title: 'Elektrikal (Electrical)',
      desc: 'Berfungsi menangani sistem kelistrikan gedung melalui desain, instalasi, dan pemeliharaan sistem penerangan, stopkontak, dan kabel, serta instalasi sistem tenaga seperti distribusi listrik, transformator, panel listrik, dan generator cadangan.',
      tagline: 'Power Distribution • Panel & Transformer • Standby Generator',
      photos: [
        '/CME/Electrical/cme_electrical.png',
        '/CME/Electrical/Screenshot 2026-08-08 024025.png',
        '/CME/Electrical/CME_AC.png',
      ],
    },
    {
      id: 'cme-integration',
      title: 'Integrasi Sistem',
      desc: 'Berfungsi menggabungkan berbagai komponen mekanikal dan elektrikal dengan implementasi sistem otomatisasi serta strategi manajemen energi untuk meningkatkan fungsionalitas dan efisiensi operasional bangunan.',
      tagline: 'Smart Automation • Energy Efficiency • System Integration',
      photos: [
        '/CME/Electrical/CME_AC.png',
        '/CME/Electrical/cme_electrical.png',
        '/CME/Mechanical/CME_pipa.png',
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-screen font-sans text-white overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {cmeServices.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="relative w-full py-12 sm:py-16 md:py-20 border-b border-black/40 overflow-hidden"
        >
          {/* Video Background per Section */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/it_solution/background-it-page.jpg"
              className="w-full h-full object-cover object-center"
            >
              <source src="/it_solution/background-it.mp4" type="video/mp4" />
            </video>
            {/* Subtle overlay for optimal contrast */}
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            
            {/* Main Titles */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8 border-b border-white/20 pb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                Mechanical &amp; Electrical
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-tight drop-shadow-md">
                {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Description Column */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs sm:text-sm font-extrabold text-cyan-400 uppercase tracking-wider block drop-shadow-md">
                  Fungsi Utama
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed text-justify font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  {service.desc}
                </p>
              </div>

              {/* Right: OUR EXPERIENCE Photo Cards */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex justify-end">
                  <span className="text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-wider drop-shadow-md">
                    OUR EXPERIENCE
                  </span>
                </div>

                {/* 3 Photo Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.photos.map((photoSrc, pIdx) => (
                    <div
                      key={pIdx}
                      className="relative min-h-[220px] sm:min-h-[260px] aspect-[3/4] bg-slate-900 border-2 border-cyan-400 rounded-2xl overflow-hidden shadow-2xl group"
                    >
                      <img
                        src={photoSrc}
                        alt={`${service.title} - ${pIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/CME/Mechanical/CME_pipa.png';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Tagline right below photos */}
                <div className="text-right pt-4">
                  <span className="text-cyan-300 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {service.tagline}
                  </span>
                </div>

              </div>

            </div>

            {/* Tech Gradient Strip */}
            <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 py-3.5 sm:py-4 px-6 mt-8 rounded-xl shadow-lg border border-cyan-400/30 flex items-center justify-center gap-6 sm:gap-12 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <span>Precision Engineering</span>
              <span>•</span>
              <span>K3 Safety Standard</span>
              <span>•</span>
              <span>Operational Efficiency</span>
            </div>

          </div>

        </section>
      ))}

    </div>
  );
};
