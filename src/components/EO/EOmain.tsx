import React, { useState } from 'react';
import {
  Calendar,
  Megaphone,
  Building2,
  Users,
  Zap,
  PhoneCall,
  CheckCircle2,
  Wrench,
  Lock,
  ArrowRight,
  Send,
  Sparkles,
  ChevronRight,
  Headphones,
  MapPin,
  Clock,
  Award,
  Star,
  Palette
} from 'lucide-react';

interface EOmainProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  initialCategory?: string;
}

export const EOmain: React.FC<EOmainProps> = ({ onNavigate, onContactClick, initialCategory = 'all' }) => {
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

  // Strengths / Core Values
  const strengths = [
    {
      title: 'Konsep Kreatif & Dinamis',
      desc: 'Inovasi konsep acara dan desain media periklanan sesuai pesan brand mitra bisnis Anda.',
      icon: Sparkles,
    },
    {
      title: 'Titik Reklame Strategis',
      desc: 'Penempatan Billboard di lokasi emas jalan tol & arteri nasional dengan dukungan resmi SKPD.',
      icon: MapPin,
    },
    {
      title: 'On-Time Execution',
      desc: 'Kedisiplinan waktu tinggi dalam manajemen rundown acara & pemasangan media promosi.',
      icon: Clock,
    },
    {
      title: 'Perangkat & Stage Modern',
      desc: 'Perlengkapan sound system concert-grade, LED videotron, & rigging panggung kualitas terbaik.',
      icon: Wrench,
    },
    {
      title: 'Cakupan Layanan Nasional',
      desc: 'Service point dan tim eksekusi profesional yang siap melayani di seluruh wilayah kota besar Indonesia.',
      icon: Headphones,
    },
    {
      title: 'Talent & Crew Berpengalaman',
      desc: 'Dukungan MC jam terbang tinggi, SPG/Usher prima, serta kru panggung yang terlatih.',
      icon: Award,
    },
  ];

  // Services Breakdown
  const services = [
    {
      id: 'eo-mice',
      category: 'eo-mice',
      title: 'Event Organizer & MICE Corporate',
      badge: 'Event & Konferensi',
      icon: Calendar,
      image: '/EO/Event organizer/Screenshot 2026-08-08 035300.png',
      description: 'Solusi komprehensif penyelenggaraan MICE (Meeting, Incentive, Convention, Exhibition), Company Gathering, Product Launching, Gala Dinner, dan Brand Activation Mall.',
      items: [
        'MICE & Conference Management (Meeting, Convention & Expo)',
        'Company Gathering, Employee Outing & Customer Gala Dinner',
        'Brand Activation, Roadshow Mall & Launching Produk Baru',
        'Manajemen Rundown & Stage Management Professional',
        'SLA Execution On-Time & Respon Cepat 24/7'
      ]
    },
    {
      id: 'billboard',
      category: 'billboard',
      title: 'Media Outdoor Advertising & Billboard',
      badge: 'Reklame & Periklanan',
      icon: Megaphone,
      image: '/EO/Advertising/Screenshot 2026-08-08 034857.png',
      description: 'Penempatan media periklanan Billboard di lokasi strategis jalan tol & arteri nasional, Signage, Neon Box, Pylon Sign, serta pengurusan izin SKPD Pajak Reklame.',
      items: [
        'Billboard Jalan Tol (Jagorawi, Sedyatmo, Sentul) & Arteri Utama',
        'Architectural Signage, Letter Sign, Neon Box & Pylon Sign',
        'Pengurusan Legalitas & Izin SKPD Pajak Reklame Daerah',
        'Baliho, T-Banner, Spanduk & Print Digital High Resolution',
        'Layanan Pemeliharaan & Perbaikan Konstruksi Reklame'
      ]
    },
    {
      id: 'production',
      category: 'production',
      title: 'Event Production & Stage Construction',
      badge: 'Konstruksi & Multimedia',
      icon: Building2,
      image: '/EO/Event organizer/Screenshot 2026-08-08 035318.png',
      description: 'Desain dan konstruksi panggung pameran, booth expo custom, rigging lighting, sound system concert-grade, LED Videotron, & dekorasi panggung.',
      items: [
        'Desain & Konstruksi Booth Expo Custom & Stand Pameran',
        'Sound System Concert-Grade, LED Screen Videotron & Lighting',
        'Konstruksi Panggung Utama, Rigging Truss & Backdrop Design',
        'Instalasi Kelistrikan Panggung & Generator Backup',
        'Tim Teknisi Lapangan Standby Selama Acara Berlangsung'
      ]
    },
    {
      id: 'talent',
      category: 'talent',
      title: 'Branding Armada & Manpower Talent',
      badge: 'Branding & Talent',
      icon: Users,
      image: '/EO/Event organizer/Screenshot 2026-08-08 035357.png',
      description: 'Branding mobil perusahaan (vehicle wrapping), custom wall painting, meja display promosi, penyediaan talent MC profesional, SPG/SPB, Usher, & souvenir merchandise.',
      items: [
        'Branding Mobil Perusahaan & Vehicle Wrapping High Durable',
        'Talent MC Profesional Jam Terbang Tinggi',
        'SPG / SPB Pameran & Usher Event dengan Standar Prima',
        'Liaison Officer (LO) & Kru Lapangan Berpengalaman',
        'Corporate Souvenir & Executive Merchandise Custom'
      ]
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
          src="/EO/Event organizer/Screenshot 2026-08-08 035300.png"
          alt="Event Organizer & Advertising Background"
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
              Solusi Terpadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Event Organizer & Advertising</span> Terpercaya
            </h1>

            <p className="text-gray-300 text-base sm:text-xl leading-relaxed font-normal">
              PT. Integra Aneksa Kreasindo (Grasindopro) menyediakan layanan komprehensif mulai dari Event Management, MICE, Media Advertising Outdoor (Billboard), Konstruksi Panggung, hingga Manpower Talent.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Jelajahi Layanan EO</span>
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
              Kekuatan Layanan EO & Advertising Grasindopro
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Komitmen kami dalam memberikan kualitas terbaik dan hasil terbaik bagi setiap event dan kampanye periklanan mitra bisnis.
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

          <div className="mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              KATALOG SOLUSI EVENT & MEDIA ADVERTISING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan & Spesifikasi Produk
            </h2>
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
                  KONSULTASI ACARA & MEDIA ADVERTISING
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
                    Tim Event & Advertising Manager Grasindopro akan segera menghubungi Anda melalui kontak yang dicantumkan.
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Kebutuhan Event / Media Promosi</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan perkiraan tanggal acara, lokasi venue, titik billboard yang diminati, atau jumlah talent..."
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
