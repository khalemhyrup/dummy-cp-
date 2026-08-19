import React from 'react';

interface CMEmainProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const CMEmain: React.FC<CMEmainProps> = () => {
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
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {cmeServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative w-full py-16 sm:py-20 border-b border-slate-200 overflow-hidden ${
            index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            
            {/* Main Titles */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10 border-b border-slate-100 pb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-wide">
                Mechanical &amp; Electrical
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 tracking-wide">
                {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Description Column */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wide block">
                  Fungsi Utama
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>

              {/* Right: OUR EXPERIENCE Photo Cards */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex justify-end">
                  <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider">
                    OUR EXPERIENCE
                  </span>
                </div>

                {/* 3 Photo Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.photos.map((photoSrc, pIdx) => (
                    <div
                      key={pIdx}
                      className="aspect-[3/4] bg-slate-100 border-2 border-blue-500 rounded-lg overflow-hidden shadow-md group"
                    >
                      <img
                        src={photoSrc}
                        alt={`${service.title} - ${pIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/CME/Mechanical/CME_pipa.png';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Tagline right */}
            <div className="text-right pt-8">
              <span className="text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-xs">
                {service.tagline}
              </span>
            </div>

          </div>

          {/* Tech Gradient Strip */}
          <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 py-3.5 sm:py-4 px-6 mt-6 shadow-xs">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 sm:gap-12 text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
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
