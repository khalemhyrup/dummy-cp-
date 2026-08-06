import React, { useState } from 'react';
import {
  Network,
  ShieldCheck,
  Cpu,
  Server,
  Zap,
  PhoneCall,
  CheckCircle2,
  Wrench,
  Flame,
  Lock,
  Radio,
  FileCode,
  Layers,
  Building2,
  ArrowRight,
  Send,
  Sparkles,
  ChevronRight,
  Headphones,
  MapPin,
  Clock
} from 'lucide-react';

interface ITPageProps {
  onContactClick?: () => void;
  initialCategory?: string;
}

export const ITPage: React.FC<ITPageProps> = ({ onContactClick, initialCategory = 'all' }) => {
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

  // Strengths from PDF
  const strengths = [
    {
      title: 'Service Management System',
      desc: 'Menyederhanakan proses penanganan masalah & ticketing bagi pelanggan secara terstruktur.',
      icon: Clock,
    },
    {
      title: 'Great Support',
      desc: 'Respon cepat 24/7 adalah bagian dari komitmen kami untuk memberikan layanan terbaik.',
      icon: Headphones,
    },
    {
      title: 'Focus Solution',
      desc: 'Selalu berfikir memberikan solusi terbaik dan tepat sesuai kebutuhan spesifik bisnis Anda.',
      icon: Zap,
    },
    {
      title: 'Professional Team',
      desc: 'SDM bersertifikasi profesional & peralatan modern terkini untuk menunjang pekerjaan.',
      icon: Wrench,
    },
    {
      title: 'Service Point Nasional',
      desc: 'Cakupan titik lokasi layanan yang komprehensif di berbagai wilayah kota besar di Indonesia.',
      icon: MapPin,
    },
    {
      title: 'Best Partners',
      desc: 'Bermitra resmi dengan produsen hardware & vendor teknologi terkemuka dunia.',
      icon: ShieldCheck,
    },
  ];

  // Services breakdown from PDF
  const services = [
    {
      id: 'it-support',
      category: 'it-support',
      title: 'IT Support & Maintenance',
      badge: 'Dukungan & Pemeliharaan IT',
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      description: 'Layanan dukungan teknis IT 24/7, pemeliharaan preventif & kuratif hardware/software, troubleshooting jaringan, dan manajemen ticketing service.',
      items: [
        '24/7 IT Helpdesk & On-Site Technical Support',
        'Preventive & Curative Hardware/Software Maintenance',
        'PC, Workstation, Server & Peripheral Maintenance',
        'Network Troubleshooting & Remote Desktop Support',
        'SLA (Service Level Agreement) Dedicated Response Time'
      ]
    },
    {
      id: 'networks',
      category: 'network',
      title: 'Network Solutions & Fiber Optics',
      badge: 'Jaringan & Kabel Fiber',
      icon: Network,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      description: 'Layanan instalasi, perencanaan, pengadaan, dan optimasi jaringan komputer baik wireline (Serat Optik) maupun nirkabel (Wireless Radio).',
      items: [
        'Fiber Optics Material, Splicing & Testing OTDR',
        'Wireless Network (Mikrotik, Ubiquiti, Cambium, Microwave, PTP/PTMP)',
        'Network Planning, Design & Installer Services',
        'Cabling System (Data Cat6/Cat6A, Multi Pair, Coaxial)',
        'Maintenance & Network Infrastructure Optimization'
      ]
    },
    {
      id: 'security',
      category: 'security',
      title: 'Security Systems & Automation',
      badge: 'Keamanan & Otomasi',
      icon: Lock,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      description: 'Sistem otomasi keamanan, pengawasan, dan pengendalian aset bergerak maupun tidak bergerak yang terintegrasi penuh.',
      items: [
        'Security Camera (CCTV IP & High Definition)',
        'Access Door System & Security Door Lock',
        'Fire Alarm System & Panic Button Integration',
        'Infrastruktur Input Alarm & Central Monitoring',
        'Asset Tracking & Asset Protection Control'
      ]
    },
    {
      id: 'software',
      category: 'software',
      title: 'Software Solutions & IT Managed Services',
      badge: 'Software & Support',
      icon: FileCode,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Solusi total pengembangan sistem aplikasi bisnis serta pengelolaan dan pemeliharaan infrastruktur IT secara berkala.',
      items: [
        'Custom Enterprise Software & Business Application',
        'IT Managed Services (Perangkat keras & lunak)',
        'Maintenance Services Hardware, Software & Integrator',
        'Data Center & Server Administration Support',
        'IT Procurement & Technology Optimization'
      ]
    },
    {
      id: 'me',
      category: 'me',
      title: 'Mechanical & Electrical (M&E) Integration',
      badge: 'Mekanikal & Elektrikal',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Perencanaan, instalasi, dan pemeliharaan sistem mekanikal, kelistrikan, serta manajemen energi gedung dan fasilitas industri.',
      items: [
        'Sistem HVAC (Heating, Ventilation & Air Conditioning / AC)',
        'Plumbing (Air Bersih, Air Kotor, Sanitasi & Pemipaan Gas)',
        'Sistem Pemadam Kebakaran (Hydrant, Sprinkler, Detektor)',
        'Instalasi Listrik, Transformator, Panel Listrik & Generator (Genset)',
        'Otomatisasi Bangunan & Sistem Manajemen Energi'
      ]
    },
    {
      id: 'telecom',
      category: 'telecom',
      title: 'Telecommunication & Infrastructure',
      badge: 'Telekomunikasi',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      description: 'Penyediaan dan instalasi perangkat telekomunikasi skala kecil hingga besar di seluruh wilayah Indonesia.',
      items: [
        'Perangkat Telekomunikasi GSM & CDMA Equipment',
        'Shelter, SST Tower, dan Feeder Line',
        'Sistem PABX & IP Telephony Corporate',
        'Site Maintenance & Base Station Support'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>IT & MECHANICAL ELECTRICAL SOLUTIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Solusi Integrasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">IT & Infrastructure</span> Terpercaya
            </h1>

            <p className="text-gray-300 text-base sm:text-xl leading-relaxed font-normal">
              PT. Integra Aneksa Kreasindo (Grasindopro) menyediakan layanan terpadu mulai dari jaringan Fiber Optics, Network Solutions, Security Systems, Software, IT Managed Services, hingga Mechanical Electrical (M&E).
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Jelajahi Layanan IT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6281398479044"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Hubungi Marketing (Ibu Lia)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEKUATAN KAMI / CORE STRENGTHS ================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kekuatan Layanan IT Grasindopro
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Komitmen kami dalam memberikan kualitas terbaik dan hubungan jangka panjang bagi mitra bisnis.
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
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                KATALOG SOLUSI IT & INFRASTRUKTUR
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Layanan & Spesifikasi Produk
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              {[
                { id: 'all', label: 'Semua Layanan' },
                { id: 'it-support', label: 'IT Support' },
                { id: 'network', label: 'Network & FO' },
                { id: 'security', label: 'Security Systems' },
                { id: 'software', label: 'Software & Managed' },
                { id: 'me', label: 'Mechanical Electrical' },
                { id: 'telecom', label: 'Telekomunikasi' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
                  {/* Left Column: Info & List */}
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

                    {/* Features Checklist */}
                    <div className="space-y-2.5 pt-2">
                      {service.items.map((itemStr, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{itemStr}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleOpenInquiry(service.title)}
                        className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                      >
                        <span>Minta Penawaran / Konsultasi</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href="tel:0217452804"
                        className="text-slate-600 hover:text-slate-900 font-semibold text-xs sm:text-sm flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-200/60 transition-colors"
                      >
                        <PhoneCall className="w-4 h-4 text-amber-600" />
                        <span>Telp: (021) 7452804</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
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
                  KONSULTASI TEKNIS IT & INFRASTRUKTUR
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
                    Tim IT Engineer Grasindopro akan segera menghubungi Anda melalui kontak yang dicantumkan.
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Kebutuhan Spesifikasi Proyek</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan lokasi, jumlah titik CCTV/jaringan/server/HVAC..."
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
