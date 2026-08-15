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
  Send,
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
  Tv
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onContactClick }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'cme' | 'eo' | 'advertising'>('all');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; serviceName: string }>({
    isOpen: false,
    serviceName: '',
  });
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Paket Solusi Terpadu (IT + EO)',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenInquiry = (serviceName: string) => {
    setInquiryModal({ isOpen: true, serviceName });
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryModal({ isOpen: false, serviceName: '' });
      setInquiryForm({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Paket Solusi Terpadu (IT + EO)',
        message: '',
      });
      setFormSubmitted(false);
    }, 2200);
  };

  // Comprehensive Services Catalog
  const serviceCatalog = [
    // IT & Telecom
    {
      id: 'it-fo',
      category: 'it',
      categoryLabel: 'IT INFRASTRUCTURE',
      number: '01',
      title: 'Fiber Optics & Network Engineering',
      route: 'network-fo',
      desc: 'Instalasi backbone fiber optic, penyambungan splicing presisi tinggi, pengujian OTDR berkala, dan penataan kabel terstruktur Cat6/Cat6A untuk gedung bertingkat & kawasan industri.',
      specs: [
        'Fusion Splicing & OTDR Loss Certification',
        'Backbone FO Single-Mode / Multi-Mode Deployment',
        'Wireless Backhaul & Microwave Link Point-to-Point',
        'Rack Server Cable Management & Fluke Testing',
      ],
      icon: Network,
    },
    {
      id: 'it-sec',
      category: 'it',
      categoryLabel: 'SECURITY & ACCESS',
      number: '02',
      title: 'Security Systems & Smart Building Automation',
      route: 'security-systems',
      desc: 'Integrasi sistem keamanan komprehensif mulai dari IP Camera CCTV resolusi tinggi, kontrol akses pintu biometrik/RFID, hingga sistem deteksi alarm kebakaran dan panic button.',
      specs: [
        'Enterprise IP CCTV Surveillance & NVR Storage Array',
        'Biometric, Facial Recognition & RFID Access Door',
        'Fire Alarm Addressable & Barrier Gate Integration',
        'Perimeter Intrusion Detection & Central Monitoring',
      ],
      icon: Lock,
    },
    {
      id: 'it-sup',
      category: 'it',
      categoryLabel: 'MANAGED SERVICES',
      number: '03',
      title: 'IT Support, Data Center & Managed Maintenance',
      route: 'it-support',
      desc: 'Layanan pemeliharaan sistem berkala, perbaikan perangkat keras & perangkat lunak, optimasi performa data center, serta dukungan teknisi dedicated sesuai Standard Service Level Agreement (SLA).',
      specs: [
        'Dedicated On-Site & Remote Helpdesk SLA 99.9%',
        'Server Virtualization, Backup & Disaster Recovery',
        'Preventive & Corrective Hardware Maintenance',
        'Network Operating Center (NOC) 24/7 Monitoring',
      ],
      icon: Server,
    },
    {
      id: 'it-tel',
      category: 'it',
      categoryLabel: 'TELECOMMUNICATION',
      number: '04',
      title: 'Telecommunication Infrastructure & Towers',
      route: 'telecom',
      desc: 'Rancang bangun menara telekomunikasi (SST / Guyed Mast / Monopole), feeder line installation, perakitan shelter BTS, serta instalasi sistem komunikasi PABX korporat.',
      specs: [
        'Tower Erection, Strenghtening & Site Acquisition',
        'RF Antenna, Feeder & Waveguide Installation',
        'Shelter BTS Assembly, Rectifier & Battery Backup',
        'IP PBX, VoIP & Enterprise Unified Communication',
      ],
      icon: Radio,
    },

    // CME (Civil Mechanical Electrical)
    {
      id: 'cme-me',
      category: 'cme',
      categoryLabel: 'MECHANICAL ELECTRICAL',
      number: '05',
      title: 'Mechanical, Electrical & HVAC Engineering',
      route: 'me-installation',
      desc: 'Penyediaan dan instalasi sistem pendingin udara terpusat (VRV/Chiller), distribusi daya listrik gedung, instalasi genset kapasitas besar, dan panel kontrol otomatis (AMF/ATS).',
      specs: [
        'Central HVAC System, Ducting & Ventilation Airflow',
        'Panel LVMDP/SDP, Trafo & Kapasitor Bank Industri',
        'Genset Standby Power Supply & Auto Synchronizing',
        'Energy Audit & Smart Power Management Systems',
      ],
      icon: Zap,
    },
    {
      id: 'cme-civil',
      category: 'cme',
      categoryLabel: 'CIVIL & PLUMBING',
      number: '06',
      title: 'Civil Construction & Hydrant Fire Protection',
      route: 'civil-construction',
      desc: 'Konstruksi sipil gedung & fasilitas industri, instalasi sistem perpipaan air bersih/kotor, jaringan pipa gas, serta sistem proteksi kebakaran hydrant dan sprinkle otomatis.',
      specs: [
        'Fire Hydrant Piping, Booster Pump & Sprinkler System',
        'Industrial Plumbing, Deep Well & Sewage Treatment (STP)',
        'Steel Structural Fabrication & Heavy Equipment Foundation',
        'Interior Fit-Out, Raised Floor & Clean Room Construction',
      ],
      icon: Building2,
    },

    // EO & MICE
    {
      id: 'eo-mice',
      category: 'eo',
      categoryLabel: 'EVENT MANAGEMENT',
      number: '07',
      title: 'MICE & Corporate Event Production',
      route: 'eo',
      desc: 'Manajemen acara korporat berskala nasional, mulai dari RUPS (Rapat Umum Pemegang Saham), Gala Dinner, Brand Launching, Hybrid Bimtek, hingga Seminar & Konferensi Internasional.',
      specs: [
        'Turnkey Event Concept, Creative Design & Rundown Flow',
        'Professional Sound System, Rigging & Stage Lighting',
        'LED Videowall Screen, Live Streaming & Hybrid Setup',
        'VIP Hospitality, Protocol & Crowd Management',
      ],
      icon: Calendar,
    },
    {
      id: 'eo-expo',
      category: 'eo',
      categoryLabel: 'EXHIBITION & STAGE',
      number: '08',
      title: 'Exhibition Booth & Spatial Stage Fabrication',
      route: 'eo',
      desc: 'Pembuatan custom booth pameran, backdrop 3D interaktif, podium megah, serta display produk ergonomis langsung dari workshop produksi mandiri berpengalaman.',
      specs: [
        'Custom Exhibition Stand / Pavilion Construction',
        '3D Scenic Stage Backdrop & Interactive Photo Booth',
        'In-House Workshop Woodworking, Acrylic & Metal Finishing',
        'Dismantling, Logistics & Nationwide Storage Handling',
      ],
      icon: Layers,
    },

    // Media Advertising
    {
      id: 'ad-ooh',
      category: 'advertising',
      categoryLabel: 'OUTDOOR ADVERTISING',
      number: '09',
      title: 'Billboard Jalan Tol & Pylon Signage',
      route: 'media-advertising',
      desc: 'Penyewaan dan pembangunan titik reklame strategis di jalan tol, jalur arteri utama, serta pembuatan pylon sign dan neon box megah berizin resmi SKPD lengkap.',
      specs: [
        'Prime Highway & Arterial Billboard Structural Locations',
        'Architectural Pylon Sign, Totem & Shop Sign Production',
        'Heavy-Duty Signage Steel Framing & High-Lumen Illumination',
        'Permit, Local Tax (SKPD) & Structural Safety Assurance',
      ],
      icon: Megaphone,
    },
    {
      id: 'ad-brand',
      category: 'advertising',
      categoryLabel: 'BRAND ACTIVATION',
      number: '10',
      title: 'Fleet Branding, Wall Painting & Merchandising',
      route: 'media-advertising',
      desc: 'Branding stiker armada kendaraan perusahaan (Car / Truck Wrapping), seni mural promosi wall painting, serta produksi merchandise korporat premium (souvenir & seminar kit).',
      specs: [
        'Commercial Fleet Vinyl Wrapping & Weatherproof Laminate',
        'Large-Scale Exterior & Interior Wall Graphic Mural',
        'Custom Executive Souvenirs, Apparel & Seminar Kits',
        'Event Manpower: MC, SPG/SPB, Usher & Liaison Officers',
      ],
      icon: Palette,
    },
  ];

  const filteredServices = activeFilter === 'all'
    ? serviceCatalog
    : serviceCatalog.filter((s) => s.category === activeFilter);

  return (
    <div className="w-full bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">

      {/* =====================================================================
          SECTION 1: MASSIVE KINETIC EDITORIAL HEADER
          (Matching Homepage Main Template & Editorial Typography)
      ====================================================================== */}
      <section className="w-full bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-neutral-200 relative overflow-hidden">
        
        {/* Giant Kinetic Marquee Headline */}
        <div className="w-full overflow-hidden whitespace-nowrap select-none opacity-90 mb-4 sm:mb-8 pointer-events-none">
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-bold tracking-tighter text-neutral-900 leading-none inline-block animate-marquee uppercase">
            Services &amp; Capabilities &nbsp;•&nbsp; Grasindo Pro &nbsp;•&nbsp; IT Solutions &nbsp;•&nbsp; CME Engineering &nbsp;•&nbsp; Event &amp; Advertising &nbsp;•&nbsp;
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Overlapping Editorial Showcase Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="w-full max-w-md bg-neutral-100 border border-neutral-200 p-4 sm:p-6 shadow-xl relative group">
                <div className="aspect-[4/4] overflow-hidden bg-white relative mb-4">
                  <img
                    src="/images/corporate_hero_headquarters.jpg"
                    alt="Grasindopro Multi-Service Facilities"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase">
                    CAPABILITIES PORTFOLIO
                  </div>
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
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full w-fit">
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
                  <span>PORTAL IT &amp; CME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate && onNavigate('eo-home')}
                  className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all border border-neutral-300 cursor-pointer"
                >
                  <span>PORTAL EO &amp; MEDIA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: 2 CORE PILLARS OVERVIEW (Editorial Style)
      ====================================================================== */}
      <section className="w-full bg-[#f4f4f4] py-16 sm:py-24 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="md:col-span-5">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                02 DIVISI OPERASIONAL UTAMA
              </span>
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
                      <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                        DIVISION 01
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900">
                        IT &amp; CME Infrastructure
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-neutral-100 px-3 py-1 text-neutral-700">
                    ENGINEERING
                  </span>
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
                  <span>Buka Portal IT &amp; CME</span>
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
                      <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                        DIVISION 02
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900">
                        Event Organizer &amp; Media
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-3 py-1">
                    CREATIVE &amp; MICE
                  </span>
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
                  <span>Buka Portal EO &amp; Media</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: INTERACTIVE CAPABILITIES MATRIX / EXPLORER
      ====================================================================== */}
      <section className="w-full py-20 sm:py-28 bg-white border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                DETAILED DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
                Layanan &amp; Spesifikasi Proyek
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-full border border-neutral-200 w-fit">
              {[
                { id: 'all', label: 'Semua Layanan' },
                { id: 'it', label: 'IT & Data Center' },
                { id: 'cme', label: 'Mechanical & Civil' },
                { id: 'eo', label: 'Event Organizer' },
                { id: 'advertising', label: 'Media Advertising' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-neutral-50/70 border border-neutral-200 p-7 rounded-2xl hover:bg-white hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 px-2.5 py-1 bg-white border border-neutral-200 rounded-md">
                        {srv.categoryLabel}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-neutral-400 block mb-1">
                        SPEC. {srv.number}
                      </span>
                      <h4 className="text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                        {srv.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-neutral-200/80">
                      {srv.specs.map((sp, spIdx) => (
                        <div key={spIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                          <span className="text-neutral-400 font-bold mt-0.5">•</span>
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="pt-6 mt-4 border-t border-neutral-200 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenInquiry(srv.title)}
                      className="text-xs font-bold text-neutral-900 group-hover:text-amber-600 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Konsultasikan Spesifikasi</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
                Tim teknisi bersiaga 24/7 untuk pemeliharaan jaringan, respon insiden cepat data center, serta standby penuh selama jalannya event korporat.
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

      {/* =====================================================================
          INQUIRY & CONSULTATION MODAL
      ====================================================================== */}
      {inquiryModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 max-w-lg w-full overflow-hidden text-neutral-900">
            
            {/* Modal Header */}
            <div className="bg-neutral-950 text-white p-6 sm:p-7 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  KONSULTASI SPESIFIKASI PROYEK
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {inquiryModal.serviceName}
                </h3>
              </div>
              <button
                onClick={() => setInquiryModal({ isOpen: false, serviceName: '' })}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <div className="p-6 sm:p-7">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-neutral-900 text-lg">Permintaan Terkirim!</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
                    Tim PT Integra Aneksa Kreasindo akan segera menghubungi Anda melalui WhatsApp / Email untuk menindaklanjuti detail teknis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Nama Lengkap / Instansi
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso (PT Contoh)"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Email Resmi
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Nomor WhatsApp / Telp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Kategori Layanan
                    </label>
                    <select
                      value={inquiryForm.serviceType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none bg-white"
                    >
                      <option value="IT Infrastructure & Data Center">IT Infrastructure &amp; Data Center</option>
                      <option value="Security System & Access Control">Security System &amp; Access Control</option>
                      <option value="Mechanical Electrical & HVAC">Mechanical Electrical &amp; HVAC</option>
                      <option value="Civil & Fire Hydrant Protection">Civil &amp; Fire Hydrant Protection</option>
                      <option value="MICE & Event Management">MICE &amp; Corporate Event Management</option>
                      <option value="Billboard & Media Advertising">Billboard &amp; Media Advertising</option>
                      <option value="Paket Solusi Terpadu (IT + EO)">Paket Solusi Terpadu (IT + EO Combined)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Deskripsi Kebutuhan Proyek
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan perkiraan volume kabel, titik CCTV, lokasi billboard, atau konsep acara yang diinginkan..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold py-3.5 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Formulir Konsultasi</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
