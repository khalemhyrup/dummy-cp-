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
  Star,
  Users,
  Award,
  Layers
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'it' | 'eo'>('all');
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; serviceName: string }>({
    isOpen: false,
    serviceName: '',
  });
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', serviceType: 'IT & EO Combined', message: '' });
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
      setInquiryForm({ name: '', email: '', phone: '', serviceType: 'IT & EO Combined', message: '' });
      setFormSubmitted(false);
    }, 2000);
  };

  // Pillar 1: IT & M&E Services (from PDF IT)
  const itServices = [
    {
      title: 'Fiber Optics & Network Solutions',
      desc: 'Splicing, OTDR Testing, Wireless (Mikrotik/Ubiquiti/Cambium/Microwave), Cabling System (Cat6/Coaxial), & Maintenance.',
      icon: Network,
    },
    {
      title: 'Security Systems & Automation',
      desc: 'Security Camera CCTV, Access Door System, Fire Alarm, Panic Button, & Asset Control Automation.',
      icon: Lock,
    },
    {
      title: 'Software & IT Managed Services',
      desc: 'Custom Business Application Software, System Maintenance, Hardware/Software Support, & Data Center Admin.',
      icon: FileCode,
    },
    {
      title: 'Mechanical & Electrical (M&E)',
      desc: 'HVAC System (AC/Ventilasi), Plumbing & Hydrant Fire Fighting, Instalasi Listrik, Genset, & Energy Management.',
      icon: Building2,
    },
    {
      title: 'Telecommunication & PABX',
      desc: 'GSM/CDMA Equipment, Shelter & SST Tower, Feeder Line, & Corporate PABX Systems.',
      icon: Radio,
    },
  ];

  // Pillar 2: EO & Media Advertising Services (from PDF EO)
  const eoServices = [
    {
      title: 'Event Organizer & MICE Solutions',
      desc: 'MICE (Meeting, Incentive, Convention, Exhibition), Company Gathering, Brand Activation, & Booth Expo Production.',
      icon: Calendar,
    },
    {
      title: 'Media Advertising Outdoor & Indoor',
      desc: 'Billboard Jalan Tol & Protokol Utama, Signage, Letter Sign, Neon Box, Pylon Sign, Baliho, T-Banner, & SKPD Reklame.',
      icon: Megaphone,
    },
    {
      title: 'Branding Mobil & Wall Painting',
      desc: 'Vehicle Wrapping Armada Perusahaan, Custom Wall Painting Design, & Produksi Meja Display Promosi.',
      icon: Palette,
    },
    {
      title: 'Manpower Talent & SPG/Usher',
      desc: 'Talent Master of Ceremony (MC), Event Usher, SPG/SPB Pameran, LO & Event Coordinator Personnel.',
      icon: Users,
    },
    {
      title: 'Corporate Merchandise Custom',
      desc: 'Executive Souvenirs, Apparel Custom (T-shirt/Polo/Jaket Event), Seminar Kits, & Promotional Items.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">

      {/* ================= SECTION 1: HERO COMBINED ================= */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden min-h-[480px] flex items-center">
        {/* Background Image */}
        <img
          src="/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024419.png"
          alt="Layanan IT Solutions & Event Organizer Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter brightness-90 contrast-110"
        />

        {/* Dark Gradient Overlay for High Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-amber-950/60" />

        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Solusi Terpadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">IT Solutions & Event Organizer</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl leading-relaxed font-normal">
              PT. Integra Aneksa Kreasindo (Grasindopro) merupakan kontraktor terintegrasi berbasis Teknologi Informasi (IT), Mechanical Electrical (M&E), Media Advertising, dan Event Organizer (EO) di Indonesia.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THREE PILLARS SHOWCASE ================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              TIGA PILAR UTAMA KORPORAT
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Bidang Usaha Grasindopro
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1: Information Technology (IT) Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Network className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                  PILAR 1
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Information Technology (IT)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Perencanaan, instalasi, dan pemeliharaan integrasi jaringan Fiber Optics, Wireless, Security Systems (CCTV & Access Door), Software Aplikasi, serta IT Managed Services.
                </p>
                
                <div className="space-y-2 pt-2">
                  {['Network & Fiber Optics Splicing / OTDR', 'Security Camera (CCTV) & Access Control', 'Custom Software & IT Managed Services', 'IT Support & System Maintenance'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('it-solutions');
                    else {
                      const el = document.getElementById('it-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-xs flex items-center gap-2 cursor-pointer w-full justify-center"
                >
                  <span>Buka Halaman IT Support & Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pillar 2: Mechanical Electrical (M&E) Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest block">
                  PILAR 2
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Mechanical Electrical (M&E)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Perencanaan, instalasi, dan pemeliharaan sistem kelistrikan, HVAC (AC), Genset Backup, Fire Hydrant, perpipaan gas, serta infrastruktur mekanikal elektrikal gedung.
                </p>

                <div className="space-y-2 pt-2">
                  {['Sistem HVAC (Heating, Ventilation & AC)', 'Instalasi Listrik, Transformator & Panel Listrik', 'Genset Backup & Generator Systems', 'Fire Hydrant, Sprinkler & Plumbing Gas'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('service');
                    else {
                      const el = document.getElementById('cme-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-xs flex items-center gap-2 cursor-pointer w-full justify-center"
                >
                  <span>Buka Halaman Mechanical Electrical</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pillar 3: Event Organizer (EO) & Media Advertising Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                  <Calendar className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">
                  PILAR 3
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Event Organizer (EO) & Media Advertising
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Penyelenggaraan event perusahaan skala nasional (MICE, Gathering, Brand Activation) serta penataan Media Advertising outdoor/indoor (Billboard Jalan Tol, Neon Box, Signage, Baliho, Branding Mobil, & SKPD Reklame).
                </p>

                <div className="space-y-2 pt-2">
                  {['MICE (Meeting, Incentive, Convention, Exhibition)', 'Company Gathering & Corporate Event', 'Outdoor Billboard & Neon Box Signage Nasional', 'Manpower SPG, Usher, MC & Custom Merchandise'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('eo');
                    else {
                      const el = document.getElementById('eo-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-xs flex items-center gap-2 cursor-pointer w-full justify-center"
                >
                  <span>Buka Halaman Event Organizer</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: TABBED DETAILED BREAKDOWN ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                KATALOG RINGKASAN LAYANAN
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Penjelasan Lengkap IT & Event Organizer
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              {[
                { id: 'all', label: 'Semua Layanan' },
                { id: 'it', label: 'Solusi IT & M&E' },
                { id: 'eo', label: 'Event Organizer & Billboard' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* IT Section */}
          {(activeTab === 'all' || activeTab === 'it') && (
            <div id="it-section" className="mb-16 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">1. Layanan Teknologi Informasi (IT) & M&E</h3>
                    <p className="text-xs text-slate-500">Berdasarkan dokumen Grasindo Company Profile IT</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('it-solutions')}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat Detail IT Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, idx) => {
                  const IconComp = service.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-amber-600 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{service.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                      <button
                        onClick={() => handleOpenInquiry(service.title)}
                        className="text-xs font-bold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1 pt-2 cursor-pointer"
                      >
                        <span>Konsultasi Proyek</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* EO Section */}
          {(activeTab === 'all' || activeTab === 'eo') && (
            <div id="eo-section" className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">2. Layanan Event Organizer (EO) & Media Advertising</h3>
                    <p className="text-xs text-slate-500">Berdasarkan dokumen Grasindo Company Profile EO</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('eo')}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat Detail EO Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eoServices.map((service, idx) => {
                  const IconComp = service.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-orange-600 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{service.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                      <button
                        onClick={() => handleOpenInquiry(service.title)}
                        className="text-xs font-bold text-slate-900 hover:text-orange-600 inline-flex items-center gap-1 pt-2 cursor-pointer"
                      >
                        <span>Konsultasi Event</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ================= SECTION 4: CALL TO ACTION ================= */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            HUBUNGI TIM PT. INTEGRA ANEKSA KREASINDO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Siap Mengembangkan Proyek IT & Event Perusahaan Anda?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Konsultasikan kebutuhan infrastruktur IT, jaringan, billboard, maupun event organizer bersama tim profesional Grasindopro.
          </p>
        </div>
      </section>

      {/* ================= INQUIRY MODAL ================= */}
      {inquiryModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden text-slate-900">
            
            {/* Header */}
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  KONSULTASI SOLUSI GABUNGAN
                </span>
                <h3 className="text-xl font-bold mt-1">
                  {inquiryModal.serviceName}
                </h3>
              </div>
              <button
                onClick={() => setInquiryModal({ isOpen: false, serviceName: '' })}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs text-slate-600">
                    Tim PT. Integra Aneksa Kreasindo akan segera menghubungi Anda untuk menindaklanjuti kebutuhan proyek Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap / Perusahaan</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso (PT Contoh)"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Corporate</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nomor WhatsApp / HP</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pilihan Sektor Layanan</label>
                    <select
                      value={inquiryForm.serviceType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                    >
                      <option value="IT & M&E Solutions">IT & Mechanical Electrical (M&E)</option>
                      <option value="Event Organizer & MICE">Event Organizer & MICE</option>
                      <option value="Outdoor Billboard & Advertising">Media Advertising & Billboard</option>
                      <option value="IT & EO Combined">Paket Solusi Gabungan IT + EO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Detail Kebutuhan Proyek</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan spesifikasi teknis IT, titik billboard, atau konsep event Anda..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Permintaan Konsultasi</span>
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
