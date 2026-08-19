import React from 'react';

interface ITPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const ITPage: React.FC<ITPageProps> = () => {
  const itServices = [
    {
      id: 'network-solutions',
      title: 'Network Solutions',
      desc: 'Berfungsi menghubungkan sistem jaringan komputer dengan menawarkan layanan instalasi, pemeliharaan, pengadaan, dan optimalisasi jaringan akses maupun backbone, baik melalui kabel serat optik (wireline) maupun nirkabel (wireless).',
      tagline: 'High Speed • Zero Bottleneck • Seamless Connectivity',
      photos: [
        '/it_solution/network/Screenshot 2026-08-08 024038.png',
        '/it_solution/network/Screenshot 2026-08-08 024051.png',
        '/it_solution/network/Screenshot 2026-08-08 024343.png',
      ],
    },
    {
      id: 'security-systems',
      title: 'Security System',
      desc: 'Berfungsi menyediakan sistem otomasi keamanan yang terintegrasi—mulai dari perencanaan hingga pemeliharaan—untuk pengawasan aset, mencakup pemasangan CCTV, alarm kebakaran, dan akses pintu.',
      tagline: 'Total Protection • Smart Access • Intelligent Surveillance',
      photos: [
        '/it_solution/security/Screenshot 2026-08-08 024113.png',
        '/it_solution/security/Screenshot 2026-08-08 024315.png',
        '/it_solution/security/Screenshot 2026-08-08 024330.png',
      ],
    },
    {
      id: 'software-solution',
      title: 'Software Solution',
      desc: 'Berfungsi memfasilitasi pengembangan sistem aplikasi yang disesuaikan dengan kebutuhan unit bisnis guna mendukung pengambilan keputusan yang efektif, efisien, dan aman.',
      tagline: 'Adaptive Software • Real-Time Insight • Scalable Systems',
      photos: [
        '/images/service_it_support.png',
        '/images/it_software_solution_dev.jpg',
        '/images/it_software_app_system.jpg',
      ],
    },
    {
      id: 'fiber-optics',
      title: 'Fiber Optics',
      desc: 'Berfungsi menyediakan infrastruktur jaringan fisik melalui pengadaan material serat optik, penyambungan kabel (Splicing), dan pengujian jaringan (OTDR).',
      tagline: 'Ultra-Low Latency • High-Precision Splicing • Certified Loss Test',
      photos: [
        '/it_solution/network/Screenshot 2026-08-08 024343.png',
        '/it_solution/network/Screenshot 2026-08-08 024038.png',
        '/it_solution/network/Screenshot 2026-08-08 024051.png',
      ],
    },
    {
      id: 'telecommunication',
      title: 'Telecommunication',
      desc: 'Berfungsi menyediakan kelengkapan infrastruktur telekomunikasi seperti perangkat GSM & CDMA, Shelter, pendirian tiang pemancar (SST), instalasi kabel Feeder, serta sistem telepon PABX.',
      tagline: 'Broad Coverage • Signal Integrity • Resilient Telecom Towers',
      photos: [
        '/images/it_telecom_cell_tower.jpg',
        '/images/it_telecom_pabx_system.jpg',
        '/images/service_it_support.png',
      ],
    },
    {
      id: 'maintenance-services',
      title: 'Maintenance Services',
      desc: 'Berfungsi menjaga kelancaran operasional dengan memberikan layanan pemeliharaan dan perbaikan khusus untuk perangkat keras, perangkat lunak, dan integrator.',
      tagline: 'Maximum Uptime • Proactive Care • Rapid Restoration',
      photos: [
        '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024124.png',
        '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024419.png',
        '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024858.png',
      ],
    },
    {
      id: 'it-managed-services',
      title: 'IT Managed Services',
      desc: 'Berfungsi melayani pengelolaan terpadu untuk semua perangkat dan infrastruktur telekomunikasi bagi berbagai skala bisnis.',
      tagline: 'End-to-End Governance • Guaranteed SLA • Enterprise Peace of Mind',
      photos: [
        '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024419.png',
        '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024124.png',
        '/images/it_software_app_system.jpg',
      ],
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {itServices.map((service, index) => (
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
                Information Technology
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
                          (e.target as HTMLImageElement).src = '/images/service_it_support.png';
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
              <span>Precision</span>
              <span>•</span>
              <span>High Performance</span>
              <span>•</span>
              <span>Reliability</span>
            </div>
          </div>

        </section>
      ))}

    </div>
  );
};
