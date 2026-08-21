import React, { useEffect } from 'react';

interface ITPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const ITPage: React.FC<ITPageProps> = ({ initialCategory }) => {
  useEffect(() => {
    if (initialCategory) {
      let targetId = initialCategory;
      if (initialCategory === 'network-fo' || initialCategory === 'fiber-optic' || initialCategory === 'fiber') {
        targetId = 'network-solutions';
      } else if (initialCategory === 'it-support') {
        targetId = 'maintenance-services';
      } else if (initialCategory === 'security-systems' || initialCategory === 'security') {
        targetId = 'security-systems';
      } else if (initialCategory === 'telecom') {
        targetId = 'telecommunication';
      }

      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [initialCategory]);
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
    <div className="relative w-full min-h-screen font-sans text-white overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {itServices.map((service) => (
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
                Information Technology
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
                          (e.target as HTMLImageElement).src = '/images/service_it_support.png';
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
