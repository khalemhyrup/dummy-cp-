import React, { useState } from 'react';
import {
  Network,
  Calendar,
  ShieldCheck,
  Cpu,
  Server,
  Zap,
  PhoneCall,
  CheckCircle2,
  Lock,
  Radio,
  FileCode,
  Building2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Megaphone,
  Palette,
  Briefcase,
  Users,
  Award,
  Layers,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  HelpCircle,
  Clock,
  Settings,
  Flame,
  Tv,
  Globe
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onContactClick }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'cme' | 'eo' | 'advertising'>('all');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const handleOpenInquiry = (_serviceName?: string) => {
    if (onContactClick) {
      onContactClick();
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  // Streamlined Services Catalog with Portal Homepage Routes
  const serviceCatalog = [
    {
      id: 'it-fo',
      category: 'it',
      categoryLabel: 'IT INFRASTRUCTURE',
      number: '01',
      title: 'Fiber Optics & Structured Cabling',
      route: 'it-home',
      desc: 'Instalasi backbone FO, fusion splicing presisi tinggi, uji OTDR, dan penataan kabel Cat6/Cat6A gedung & kawasan.',
      tags: ['Fusion Splicing', 'OTDR Loss Test', 'FO/Cat6 Backbone'],
      icon: Network,
    },
    {
      id: 'it-sec',
      category: 'it',
      categoryLabel: 'SECURITY & ACCESS',
      number: '02',
      title: 'IP CCTV & Biometric Security',
      route: 'it-home',
      desc: 'Integrasi kamera IP CCTV resolusi tinggi, akses pintu biometrik/RFID, dan sistem alarm kebakaran gedung.',
      tags: ['Enterprise IP CCTV', 'Access Door RFID', 'Fire Alarm System'],
      icon: Lock,
    },
    {
      id: 'it-sup',
      category: 'it',
      categoryLabel: 'MANAGED SERVICES',
      number: '03',
      title: 'IT Managed Services & On-Site Support',
      route: 'it-home',
      desc: 'Pemeliharaan perangkat keras & jaringan berkala, teknisi on-site dedicated, serta respon cepat pemecahan masalah dengan jaminan SLA.',
      tags: ['24/7 SLA Helpdesk', 'Hardware & Network Support', 'Preventive Maintenance'],
      icon: Server,
    },
    {
      id: 'it-web',
      category: 'it',
      categoryLabel: 'WEB & DIGITAL SOLUTIONS',
      number: '04',
      title: 'Web Development & Company Profile',
      route: 'it-home',
      desc: 'Perancangan & pengembangan website profil perusahaan (Company Profile), web aplikasi kustom, sistem informasi terintegrasi, dan optimasi performa digital modern yang responsif.',
      tags: ['Company Profile Web', 'Custom Web Application', 'UI/UX & Responsive Design'],
      icon: Globe,
    },
    {
      id: 'it-tel',
      category: 'it',
      categoryLabel: 'TELECOMMUNICATION',
      number: '05',
      title: 'Menara Telekomunikasi & BTS',
      route: 'it-home',
      desc: 'Rancang bangun menara SST/Monopole, instalasi feeder antena RF, shelter BTS, dan komunikasi IP PBX korporat.',
      tags: ['Tower Erection', 'BTS Shelter & RF', 'IP PBX / VoIP'],
      icon: Radio,
    },
    {
      id: 'cme-me',
      category: 'cme',
      categoryLabel: 'MECHANICAL ELECTRICAL',
      number: '06',
      title: 'HVAC, Panel LVMDP & Genset',
      route: 'it-home',
      desc: 'Instalasi pendingin VRV/Chiller, panel distribusi daya listrik, genset standby, dan manajemen energi gedung.',
      tags: ['Central HVAC & VRV', 'Panel LVMDP/SDP', 'Genset Standby Power'],
      icon: Zap,
    },
    {
      id: 'cme-civil',
      category: 'cme',
      categoryLabel: 'CIVIL & PLUMBING',
      number: '07',
      title: 'Konstruksi Sipil & Fire Hydrant',
      route: 'it-home',
      desc: 'Struktur sipil, sistem perpipaan air & STP, serta instalasi proteksi kebakaran pipa hydrant dan sprinkler otomatis.',
      tags: ['Fire Hydrant & Sprinkler', 'Industrial Plumbing & STP', 'Struktur Baja & Fit-Out'],
      icon: Building2,
    },
    {
      id: 'eo-mice',
      category: 'eo',
      categoryLabel: 'EVENT MANAGEMENT',
      number: '08',
      title: 'MICE & Corporate Event Production',
      route: 'eo-home',
      desc: 'Penyelenggaraan RUPS, seminar nasional, konferensi, festival, dan gala dinner dengan tata suara & visual spektakuler.',
      tags: ['RUPS & Konferensi', 'Sound & Stage Lighting', 'Live Streaming Hybrid'],
      icon: Calendar,
    },
    {
      id: 'eo-expo',
      category: 'eo',
      categoryLabel: 'EXHIBITION & STAGE',
      number: '09',
      title: 'Custom Exhibition Booth & Backdrop',
      route: 'eo-home',
      desc: 'Fabrikasi booth pameran paviliun, backdrop 3D panggung, dan display produk langsung dari workshop mandiri.',
      tags: ['Custom Stand Booth', '3D Stage Backdrop', 'In-House Woodworking'],
      icon: Layers,
    },
    {
      id: 'ad-ooh',
      category: 'advertising',
      categoryLabel: 'OUTDOOR ADVERTISING',
      number: '10',
      title: 'Billboard Tol & Pylon Signage',
      route: 'eo-home',
      desc: 'Titik reklame strategis jalan tol & arteri, pylon sign gedung, dan neon box dengan kelengkapan izin pajak SKPD.',
      tags: ['Billboard Jalan Tol', 'Pylon Sign & Totem', 'Pajak Reklame SKPD'],
      icon: Megaphone,
    },
    {
      id: 'ad-brand',
      category: 'advertising',
      categoryLabel: 'BRAND ACTIVATION',
      number: '11',
      title: 'Branding Mobil, Mural & Merchandise',
      route: 'eo-home',
      desc: 'Wrapping stiker armada mobil/truk, seni mural lukis dinding promosi, dan produksi suvenir merchandise korporat.',
      tags: ['Car Fleet Wrapping', 'Wall Painting Mural', 'Corporate Souvenir'],
      icon: Palette,
    },
  ];

  const filteredServices = activeFilter === 'all'
    ? serviceCatalog
    : serviceCatalog.filter((s) => s.category === activeFilter);

  return (
    <div className="w-full bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">

      {/* =====================================================================
          SECTION 1: STICKY HERO HEADER (Background & Header stay fixed at top)
      ====================================================================== */}
      <section 
        className="sticky top-0 z-0 w-full min-h-[580px] lg:min-h-[640px] bg-cover bg-center bg-no-repeat pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-neutral-200 overflow-hidden"
        style={{
          backgroundImage: `url('/images/background-service.jpg')`,
        }}
      >
        {/* Giant Headline */}
        <div className="w-full overflow-hidden whitespace-nowrap select-none opacity-90 mb-4 sm:mb-8 pointer-events-none text-center flex justify-center">
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-bold tracking-tighter text-neutral-900 leading-none uppercase text-center">
            GRASINDO PRO
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Overlapping Editorial Showcase Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="w-full max-w-md bg-white border border-neutral-200 p-4 sm:p-6 shadow-xl relative group rounded-xl">
                <div className="aspect-[4/4] overflow-hidden bg-white relative mb-4 rounded-lg">
                  <img
                    src="/images/corporate_hero_headquarters.jpg"
                    alt="Grasindopro Multi-Service Facilities"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
                      End-to-End Enterprise Services
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      Integrated Contractor &amp; Event Management
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    EST. INDONESIA
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Section Overview & Division Switcher */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-xs border border-neutral-200 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700">
                  SERVICES &amp; SOLUTIONS CATALOG
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Accelerate enterprise momentum with dual-core technical and creative execution.
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg">
                PT Integra Aneksa Kreasindo menghadirkan sinergi penuh antara rekayasa infrastruktur modern (IT &amp; CME) dan strategi pemasaran kreatif (Event Organizer &amp; Media Advertising) di bawah standar SLA yang teruji.
              </p>

              {/* Quick Action Navigation */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate && onNavigate('it-home')}
                  className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm cursor-pointer"
                >
                  <span>IT &amp; CME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate && onNavigate('eo-home')}
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all border border-neutral-300 cursor-pointer shadow-xs"
                >
                  <span>EO &amp; MEDIA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SCROLLING OVERLAY CONTAINER (Scrolls UP over Section 1)
      ====================================================================== */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">

        {/* =====================================================================
            SECTION 2: 2 CORE PILLARS OVERVIEW (Editorial Style)
        ====================================================================== */}
        <section className="w-full bg-[#f4f4f4] py-16 sm:py-24 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="md:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                Two Dedicated Divisions.<br />One Integrated Governance.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Setiap divisi didukung oleh tenaga ahli bersertifikat, peralatan mutakhir, dan workshop mandiri untuk memastikan setiap tahap implementasi berjalan tepat waktu dan sesuai spesifikasi teknis klien.
              </p>
            </div>
          </div>

          {/* 2 Big Core Division Editorial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Core 1: IT & CME Infrastructure */}
            <div className="bg-white border border-neutral-300 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-neutral-950 text-white rounded-xl flex items-center justify-center font-bold">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        IT &amp; CME Infrastructure
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  Penyediaan solusi infrastruktur jaringan data berkecepatan tinggi, sistem otomasi keamanan, transmisi telekomunikasi, dan tata udara mekanikal elektrikal gedung.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Fiber Optics Cabling, Splicing & OTDR Testing',
                    'Security Systems: IP CCTV, Access Control & Panic Button',
                    'Telecommunication Towers (BTS & RF Feeder Lines)',
                    'Mechanical Electrical: Central HVAC, LVMDP & Genset Backup',
                    'Civil Construction, Hydrant Sprinkler & STP Plumbing',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate && onNavigate('it-home')}
                  className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>Buka IT &amp; CME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Core 2: Event Organizer & Media Advertising */}
            <div className="bg-white border border-neutral-300 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 text-neutral-950 rounded-xl flex items-center justify-center font-bold">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        Event Organizer &amp; Media
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  Penyelenggaraan event korporat nasional berstandar premium, pembuatan panggung pameran spektakuler, dan kampanye reklame luar ruang dengan perizinan resmi.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'MICE (Meeting, Incentive, Convention, Exhibition) & RUPS',
                    'Corporate Brand Activation, Festival & Gala Dinner',
                    'Highway Billboard, Pylon Sign & Neon Box Reklame',
                    'Custom Exhibition Booth & Spatial Stage Production',
                    'Commercial Fleet Branding & Executive Merchandise',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate && onNavigate('eo-home')}
                  className="bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center shadow-xs"
                >
                  <span>Buka EO &amp; Media</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: STREAMLINED TEXT DIRECTORY (Minimal & Clean, Direct Navigation)
      ====================================================================== */}
      <section className="w-full py-12 sm:py-16 bg-white border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="mb-8 pb-4 border-b border-neutral-900">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Layanan &amp; Spesifikasi Proyek
              </h2>
            </div>
          </div>

          {/* Clean Editorial Text List with Direct Routing */}
          <div className="divide-y divide-neutral-200">
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  onClick={() => onNavigate && onNavigate(srv.route)}
                  className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 hover:bg-neutral-50 px-3 -mx-3 rounded-lg transition-colors cursor-pointer group"
                >
                  {/* Left: Number + Icon + Title */}
                  <div className="flex items-center gap-3.5 md:w-5/12">
                    <span className="text-xs font-mono font-bold text-neutral-400 w-6">
                      {srv.number}
                    </span>
                    <IconComp className="w-4 h-4 text-neutral-400 group-hover:text-amber-600 transition-colors flex-shrink-0" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                        {srv.title}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block sm:hidden">
                        {srv.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Center: Concise Description */}
                  <div className="md:w-5/12 pl-9 md:pl-0">
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Right: Direct Navigation Action */}
                  <div className="md:w-2/12 flex justify-end items-center pl-9 md:pl-0">
                    <span className="text-xs font-bold text-neutral-900 group-hover:text-amber-600 inline-flex items-center gap-1.5">
                      Buka Layanan
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 4: SERVICE LEVEL ASSURANCE & WORKFLOW (Editorial 3-Col Strip)
      ====================================================================== */}
      <section className="w-full bg-[#111] text-white py-20 sm:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
              STANDARD OPERATING PROCEDURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              SLA &amp; Jaminan Kualitas Pengerjaan
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Komitmen penuh terhadap ketepatan waktu, spesifikasi material orisinal, serta keselamatan kerja (K3) di setiap proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-neutral-900/90 border border-neutral-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Garansi Material &amp; Mutu</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Seluruh material kabel, perangkat keras, lampu panggung, dan struktur billboard menggunakan standar industri tersertifikasi dan bergaransi resmi pabrikan.
              </p>
            </div>

            <div className="bg-neutral-900/90 border border-neutral-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Dedicated On-Site Support</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Tim teknisi bersiaga 24/7 untuk pemeliharaan jaringan, respon cepat penanganan kendala perangkat, serta standby penuh selama jalannya event korporat.
              </p>
            </div>

            <div className="bg-neutral-900/90 border border-neutral-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Legalitas &amp; Perizinan Lengkap</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Pengurusan pajak reklame (SKPD), izin kelayakan struktur konstruksi, serta sertifikasi keselamatan kerja resmi dari dinas berwenang.
              </p>
            </div>

          </div>

          <div className="pt-12 flex justify-center">
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-white hover:bg-neutral-200 text-neutral-950 text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>Hubungi Kantor Pusat Grasindopro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      </div>

    </div>
  );
};
