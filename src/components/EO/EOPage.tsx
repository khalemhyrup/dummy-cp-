import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Users,
  Award,
  ArrowRight,
  Send,
  PhoneCall,
  CheckCircle2,
  MapPin,
  Megaphone,
  Palette,
  Briefcase,
  Star,
  Layers,
  ChevronRight,
  Image as ImageIcon,
  Building,
  Heart
} from 'lucide-react';

interface EOPageProps {
  onContactClick?: () => void;
}

export const EOPage: React.FC<EOPageProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inquiryModal, setInquiryModal] = useState<{ isOpen: boolean; serviceName: string }>({
    isOpen: false,
    serviceName: '',
  });
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Company Gathering',
    estimatedBudget: '',
    message: ''
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
        eventType: 'Company Gathering',
        estimatedBudget: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 2000);
  };

  // Values from PDF
  const coreValues = [
    {
      title: 'FLEXIBLE',
      tagline: 'Solusi Dinamis',
      desc: 'Senantiasa fleksibel mengikuti perkembangan media & memberikan inovasi kreatif terbaik bagi mitra usaha.',
      icon: Sparkles,
    },
    {
      title: 'COMMITMENT',
      tagline: 'Profesionalisme Tinggi',
      desc: 'Menjaga dan memelihara etika bisnis secara profesional dengan tanggung jawab penuh di setiap tahap acara.',
      icon: Award,
    },
    {
      title: 'QUALITY',
      tagline: 'Service Prima & Cepat',
      desc: 'Memberikan service terbaik secara prima, cepat, dan berkualitas tinggi di dunia advertising & event management.',
      icon: Star,
    },
  ];

  // Portfolio items from PDF
  const portfolioProjects = [
    {
      client: 'Asian Paints',
      category: 'Brand Activation & Expo',
      location: 'Rita Mall Purwokerto & GBK Jakarta',
      desc: 'Penyelenggaraan Pameran Brand Activation, Produksi Booth Expo & Meja Display.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    },
    {
      client: 'Asian Paints',
      category: 'Company Gathering & Talent',
      location: 'Pontianak & Yogyakarta',
      desc: 'Pelaksanaan Customer & Employee Gathering lengkap dengan Manpower SPG, Usher & MC.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    },
    {
      client: 'Herbalife',
      category: 'Outdoor Billboard & T-Banner',
      location: 'Tol Sedyatmo, Jagorawi & Sentul',
      desc: 'Pemasangan Media Outdoor Billboard Jalan Tol & Kampanye T-Banner Nasional.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80',
    },
    {
      client: 'Chevrolet & Pertamina',
      category: 'National Billboard Campaign',
      location: 'Jakarta Selatan, Bandung, Warung Buncit',
      desc: 'Pengadaan & Pemasangan Billboard Lokasi Strategis Nasional.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    },
    {
      client: 'Ajaib & Sucorinvest',
      category: 'Neonbox & Building Signage',
      location: 'Gedung BEJ & Equity Tower SCBD',
      desc: 'Produksi & Pemasangan Architectural Letter Sign, Neon Box & Pylon Sign.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      client: 'Grab, Nokia, OCBC NISP',
      category: 'Advertising & SKPD Reklame',
      location: 'Jakarta, Tangerang, Banten, Purwokerto',
      desc: 'Layanan Pengurusan Izin Pajak Reklame & Penempatan Titik Strategis.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Services list from PDF
  const services = [
    {
      id: 'eo-mice',
      category: 'eo',
      title: 'Event Organizer & MICE Solutions',
      badge: 'Event & Conference',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      description: 'Konsep dan eksekusi penyelenggaraan event perusahaan, pameran, serta konferensi berskala nasional dengan hasil yang berkesan.',
      items: [
        'MICE (Meeting, Incentive, Convention, Exhibition)',
        'Company Gathering & Corporate Anniversary Event',
        'Brand Activation (Pameran Mall & Public Venue)',
        'Produksi Booth Expo & Stand Pameran Custom',
        'Produksi Backdrop, panggung & Sound Lighting Rigging'
      ]
    },
    {
      id: 'advertising',
      category: 'advertising',
      title: 'Media Advertising Outdoor & Indoor',
      badge: 'Advertising & Billboard',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
      description: 'Penyelenggaraan dan penataan media periklanan terbuka di titik-titik lokasi strategis nasional.',
      items: [
        'Billboard Jalan Tol & Jalan Protokol Utama',
        'Signage, Letter Sign, Neon Box, Pylon Sign & Shopsign',
        'Baliho, Spanduk, Backdrop & T-Banner Promo',
        'Pengurusan Izin & Pajak Reklame (SKPD Resmi)',
        'Penempatan Titik Strategis & Pemeliharaan Media'
      ]
    },
    {
      id: 'branding',
      category: 'branding',
      title: 'Branding & Production Design',
      badge: 'Branding & Produksi',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      description: 'Layanan branding kreatif armada kendaraan dan fasilitas gedung untuk meningkatkan visibilitas brand Anda.',
      items: [
        'Branding Mobil & Armada Perusahaan (Vehicle Wrapping)',
        'Wall Painting & Custom Interior Design Branding',
        'Produksi Meja Display & Counter Promosi',
        'Design & Cetak Media Promosi Massal'
      ]
    },
    {
      id: 'manpower',
      category: 'manpower',
      title: 'Manpower Procurement & Talent',
      badge: 'Talent & SPG',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      description: 'Penyediaan SDM profesional dan talent berpengalaman untuk mendukung suksesnya acara dan pameran.',
      items: [
        'Talent Master of Ceremony (MC Professional)',
        'Usher & Event Protocol Personnel',
        'Sales Promotion Girl (SPG) & Sales Promotion Boy (SPB)',
        'Event Crew, Liaison Officer (LO) & Event Coordinator'
      ]
    },
    {
      id: 'merchandise',
      category: 'merchandise',
      title: 'Corporate Merchandise Custom',
      badge: 'Souvenir & Gift',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      description: 'Pengadaan souvenir dan merchandise eksklusif perusahaan sesuai dengan karakter brand Anda.',
      items: [
        'Executive Gift Sets & Corporate Souvenirs',
        'Custom Apparel (T-shirt, Polo, Jacket, Topi Event)',
        'Seminar Kits, Tumbler, Flashdisk & Promotional Items'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>EVENT ORGANIZER & MEDIA ADVERTISING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Wujudkan Event & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Branding Nasional</span> Berkesan
            </h1>

            <p className="text-gray-300 text-base sm:text-xl leading-relaxed font-normal">
              PT. Integra Aneksa Kreasindo (Grasindopro) adalah mitra terpercaya penyelenggaraan Media Advertising (Billboard, Neonbox, Signage) dan Event Organizer (MICE, Gathering, Brand Activation) berskala nasional.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('eo-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Jelajahi Layanan EO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6281398479044"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Konsultasi Event (Ibu Lia)</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES (WHO ARE WE) ================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Komitmen Layanan Grasindopro EO
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Pola kemitraan usaha yang saling memberikan keuntungan dengan menjunjung tinggi nilai profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                    {val.tagline}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="eo-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                LAYANAN EVENT & ADVERTISING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Spesialis Event Organizer & Outdoor Media
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              {[
                { id: 'all', label: 'Semua Layanan' },
                { id: 'eo', label: 'Event & MICE' },
                { id: 'advertising', label: 'Billboard & Media' },
                { id: 'branding', label: 'Branding & Produksi' },
                { id: 'manpower', label: 'Talent & SPG' },
                { id: 'merchandise', label: 'Merchandise' },
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

          {/* Service Cards */}
          <div className="space-y-12">
            {filteredServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-all duration-300"
                >
                  {/* Left Column */}
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
                        <span>Rencanakan Event / Billboard</span>
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

                  {/* Right Image */}
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

      {/* ================= PORTFOLIO PROJECTS SHOWCASE ================= */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              PORTFOLIO PROYEK REAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Rekam Jejak Proyek & Klien Kami
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Kepercayaan penuh dari berbagai instansi & brand terkemuka Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 border border-slate-700">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-amber-400">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

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
                  KONSULTASI EVENT & ADVERTISING
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
                  <h4 className="font-bold text-slate-900 text-lg">Permintaan Terkirim!</h4>
                  <p className="text-xs text-slate-600">
                    Tim Event & Advertising Manager Grasindopro akan segera me-followup konsep & estimasi biaya Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap / Instansi</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ibu Rina (PT Contoh)"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Jenis Layanan / Event</label>
                    <select
                      value={inquiryForm.eventType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                    >
                      <option value="Company Gathering">Company Gathering / Anniversary</option>
                      <option value="MICE & Conference">MICE & Konferensi</option>
                      <option value="Billboard & Advertising">Billboard & Pajak Reklame</option>
                      <option value="Brand Activation & Expo">Brand Activation & Booth Expo</option>
                      <option value="Talent SPG & Usher">Talent SPG / Usher / MC</option>
                      <option value="Merchandise Custom">Merchandise Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Rencana Lokasi & Detail Konsep</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan perkiraan tanggal, lokasi kota, jumlah peserta / titik billboard..."
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
                    <span>Kirim Permintaan Konsultasi Event</span>
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
