import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  ChevronRight,
  Headphones,
  MapPin,
  Clock,
  Award,
  Activity
} from 'lucide-react';

interface CMEmainProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const CMEmain: React.FC<CMEmainProps> = ({ onNavigate, initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; serviceName: string }>({
    isOpen: false,
    serviceName: '',
  });
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' });
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
      setInquiryForm({ name: '', email: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 2000);
  };

  // Strengths / Core Values for CME
  const strengths = [
    {
      title: 'Presisi & Standar K3',
      desc: 'Penerapan standar keselamatan dan presisi tinggi dalam perancangan serta instalasi sistem mekanikal & elektrikal.',
      icon: ShieldCheck,
    },
    {
      title: 'Tim Engineer Tersertifikasi',
      desc: 'Dukungan engineer spesialis HVAC, kelistrikan tegangan tinggi/rendah, dan otomatisasi kontrol sistem.',
      icon: Award,
    },
    {
      title: 'Material Standar Industri',
      desc: 'Penggunaan perangkat pendingin, pipa, kabel, panel, trafo, & genset teruji standar SNI dan internasional.',
      icon: Wrench,
    },
    {
      title: 'Efisiensi & Manajemen Energi',
      desc: 'Strategi optimasi daya dan otomatisasi sistem untuk menghemat penggunaan energi operasional gedung & fasilitas.',
      icon: Activity,
    },
    {
      title: 'Cakupan Service Point Nasional',
      desc: 'Kemampuan eksekusi teknisi dan pengawasan proyek instalasi Mekanikal Elektrikal di seluruh wilayah Indonesia.',
      icon: MapPin,
    },
    {
      title: 'Maintenance 24/7 & Incident Support',
      desc: 'Layanan pemeliharaan berkala (*preventive maintenance*) dan penanganan darurat kelistrikan & sistem pendingin.',
      icon: Headphones,
    },
  ];

  // Exactly 2 CME Services: 1. Mekanikal & 2. Elektrikal
  const services = [
    {
      id: 'cme-mechanical',
      category: 'mechanical',
      title: '1. Mekanikal (Mechanical)',
      badge: 'Mekanikal & Pemipaan',
      icon: Wrench,
      image: '/CME/Mechanical/CME_pipa.png',
      pageId: 'cme-mechanical',
      description: 'Layanan perencanaan, instalasi, dan pemeliharaan sistem mekanikal terpadu untuk pendingin udara, plumbing air, pemadam kebakaran, serta pemipaan gas industri & komersial.',
      subSections: [
        {
          name: '1. Sistem HVAC (Heating, Ventilation, and Air Conditioning)',
          desc: 'Perencanaan, instalasi, dan pemeliharaan sistem pemanas, ventilasi, dan pendingin udara.'
        },
        {
          name: '2. Plumbing',
          desc: 'Desain dan instalasi sistem perpipaan untuk air bersih, air kotor, air limbah, dan sistem sanitasi.'
        },
        {
          name: '3. Pemadam Kebakaran',
          desc: 'Perencanaan dan pemasangan sistem pemadam kebakaran seperti sprinkler, hydrant, dan sistem deteksi kebakaran.'
        },
        {
          name: '4. Sistem Pemipaan Gas',
          desc: 'Perencanaan dan instalasi sistem pipa gas untuk industri, komersial, dan perumahan.'
        }
      ],
    },
    {
      id: 'cme-electrical',
      category: 'electrical',
      title: '2. Elektrikal & Integrasi Sistem (Electrical)',
      badge: 'Kelistrikan & Tenaga',
      icon: Zap,
      image: '/CME/Electrical/cme_electrical.png',
      pageId: 'cme-electrical',
      description: 'Perencanaan, instalasi, dan pemeliharaan jaringan distribusi listrik, sistem tenaga (trafo, panel, genset), integrasi mekanikal elektrikal, otomatisasi, dan manajemen energi.',
      subSections: [
        {
          name: '1. Instalasi Listrik',
          desc: 'Desain, instalasi, dan pemeliharaan sistem kelistrikan, termasuk pencahayaan, stopkontak, dan jaringan kabel.'
        },
        {
          name: '2. Sistem Tenaga',
          desc: 'Perencanaan dan instalasi sistem distribusi listrik, transformator, panel listrik, dan generator cadangan.'
        },
        {
          name: '3. Integrasi Sistem Mekanikal Elektrikal',
          desc: 'Penggabungan berbagai sistem mekanikal dan elektrikal untuk meningkatkan efisiensi dan fungsionalitas bangunan atau instalasi.'
        },
        {
          name: '4. Otomatisasi & Manajemen Energi',
          desc: 'Implementasi sistem otomatisasi dan strategi untuk mengoptimalkan penggunaan energi dan efisiensi operasional.'
        }
      ],
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden min-h-[480px] flex items-center">
        {/* Background Image */}
        <img
          src="/CME/Electrical/cme_electrical.png"
          alt="CME Infrastructure Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter brightness-90 contrast-110"
        />

        {/* Dark Gradient Overlay for High Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-amber-950/60" />

        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Solusi Terpadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Mekanikal & Elektrikal (CME)</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl leading-relaxed font-normal">
              PT. Integra Aneksa Kreasindo (Grasindopro) menyediakan layanan komprehensif mulai dari Sistem HVAC, Plumbing, Pemadam Kebakaran, Pemipaan Gas, Instalasi Listrik, Sistem Tenaga (Trafo & Genset), hingga Otomatisasi Integrasi Sistem & Manajemen Energi.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Jelajahi Solusi CME</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEKUATAN KAMI / CORE STRENGTHS ================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kekuatan Layanan Mekanikal & Elektrikal Grasindopro
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Komitmen kami dalam memberikan efisiensi fungsional, standar K3 tinggi, dan otomatisasi kontrol sistem energi terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION WITH FILTER TABS ================= */}
      <section id="services-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                KATALOG BIDANG USAHA CME GRASINDOPRO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Layanan & Ruang Lingkup Pekerjaan
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Bidang
              </button>
              <button
                onClick={() => setActiveCategory('mechanical')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'mechanical'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Mekanikal
              </button>
              <button
                onClick={() => setActiveCategory('electrical')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'electrical'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Elektrikal
              </button>
            </div>
          </div>

          {/* Services List Grid */}
          <div className="space-y-12">
            {filteredServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-all duration-300"
                >
                  {/* Left Column: Info & Sub-sections */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold">
                      <ServiceIcon className="w-4 h-4 text-amber-600" />
                      <span>{service.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sub-Sections Accordion / Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.subSections.map((sub, idx) => (
                        <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                            {sub.name}
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {sub.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => {
                          if (onNavigate) onNavigate(service.pageId);
                        }}
                        className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                      >
                        <span>Lihat Halaman Khusus {service.badge}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleOpenInquiry(service.title)}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Konsultasi Proyek</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CONSULTATION INQUIRY MODAL ================= */}
      {inquiryModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden">

            {/* Header */}
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  KONSULTASI BIDANG MEKANIKAL & ELEKTRIKAL
                </span>
                <h3 className="text-xl font-bold mt-1">
                  {inquiryModal.serviceName}
                </h3>
              </div>
              <button
                onClick={() => setInquiryModal({ isOpen: false, serviceName: '' })}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
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
                    Tim Engineer Mekanikal & Elektrikal Grasindopro akan segera menghubungi Anda melalui kontak yang dicantumkan.
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Kebutuhan Pekerjaan Mekanikal / Elektrikal</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan pekerjaan (HVAC, Plumbing, Pemadam Kebakaran, Pemipaan Gas, Instalasi Listrik, Trafo, Genset, atau Otomatisasi)..."
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
