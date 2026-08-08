import React, { useState } from 'react';
import {
  Home,
  ChevronDown,
  ChevronUp,
  Network,
  CheckCircle2,
  Zap,
  Wrench,
  MapPin,
  Send,
  ShieldCheck,
  Camera,
  Activity,
  Layers
} from 'lucide-react';

interface FiberOpticsPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const FiberOpticsPage: React.FC<FiberOpticsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Fiber Optics & Network');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const sidebarMenuItems = [
    { label: 'IT Support & Maintenance', id: 'it-support' },
    { label: 'Fiber Optics & Network', id: 'fiber-optics' },
    { label: 'Security Systems (CCTV & Access)', id: 'security-systems' },
    { label: 'Telecommunications & Tower', id: 'telecommunication' },
  ];

  const photoGallery = [
    {
      src: '/it_solution/network/Screenshot 2026-08-08 024038.png',
      title: 'Penyambungan Splicing Fiber Optic & OTDR',
      desc: 'Proses penyambungan serat optik core presisi tinggi & pengujian redaman OTDR oleh tim profesional Grasindo Pro.',
    },
    {
      src: '/it_solution/network/Screenshot 2026-08-08 024051.png',
      title: 'Instalasi & Cabling System Jaringan Gedung',
      desc: 'Penataan kabel data Cat6/Cat6A, patch panel, dan jaringan komputer terintegrasi.',
    },
    {
      src: '/it_solution/network/Screenshot 2026-08-08 024343.png',
      title: 'Pemeliharaan Perangkat Jaringan Wireless & Router',
      desc: 'Pemasangan dan optimasi perangkat jaringan nirkabel Mikrotik, Ubiquiti, dan sistem komunikasi data.',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryOpen(false);
      setFormSubmitted(false);
      setInquiryForm({ name: '', email: '', phone: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">

      {/* ================= 1. HERO BANNER (BAGIAN ATAS) ================= */}
      <div className="w-full h-56 sm:h-72 lg:h-80 overflow-hidden relative bg-slate-900">
        <img
          src="/images/service_it_support.png"
          alt="Fiber Optics & Network Installer Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Floating Headline inside Banner */}
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Fiber Optics & Network Installer
          </h1>
        </div>
      </div>

      {/* ================= PAGE TITLE & BREADCRUMBS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto">
          <button onClick={() => onNavigate?.('home')} className="hover:text-amber-600 flex items-center gap-1 font-medium transition-colors cursor-pointer">
            <Home className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('service')} className="hover:text-amber-600 font-medium transition-colors cursor-pointer">
            Produk & Layanan
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('it-solutions')} className="hover:text-amber-600 font-medium transition-colors cursor-pointer">
            Solusi IT
          </button>
          <span>/</span>
          <span className="text-slate-800 font-semibold whitespace-nowrap">Fiber Optics & Network</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT (2 COLUMNS) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* LEFT COLUMN: MAIN ARTICLE CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-10">

            {/* HERO INTRO SECTION */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-7 bg-slate-800 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Solusi Infrastruktur Kabel Fiber Optik & Jaringan Berkecepatan Tinggi.
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Dengan identitas kami sebagai penyedia solusi integrasi jaringan dan telekomunikasi di berbagai daerah di Indonesia, kami menawarkan perancangan, instalasi kabel Fiber Optics (FO), penyambungan Splicing presisi, pengujian OTDR, serta penataan instalasi jaringan kabel & wireless untuk mendukung efisiensi bisnis Anda.
              </p>
            </div>

            {/* ================= 2. LAYANAN UTAMA (CORE SERVICES) ================= */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-red-700 uppercase">KATEGORI LAYANAN</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Layanan Utama Fiber Optics & Jaringan
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Kami menyediakan dua fokus solusi jaringan berkinerja tinggi untuk kebutuhan kantor, gedung bertingkat, maupun kawasan industri:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Core Service 1 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-red-700 text-white flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Fiber Optics Splicing & OTDR Testing
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Penyambungan serat optik presisi tinggi (Single Mode/Multi Mode), terminasi ODF rack, pengisian joint closure, serta sertifikasi pengujian redaman menggunakan alat OTDR standar industri.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Splicing Core FO Presisi Tinggi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Pengujian & Sertifikasi Laporan OTDR</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Perbaikan Kabel Putus (Emergency Repair)</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 2 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
                    <Network className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Structured Cabling & Wireless Network
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Perancangan topologi LAN/WAN, penataan kabel data Cat6/Cat6A, manajemen patch panel & server rack, serta instalasi nirkabel jarak jauh (Wireless PTP/PTMP).
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Penataan Server Rack & Patch Panel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Wireless Point to Point / Multipoint</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Konfigurasi Router Mikrotik & Core Switch</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* ================= 3. KENAPA MEMILIH SUPPORT KAMI? (SERVICE EXCELLENCE) ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-red-700 uppercase">SERVICE EXCELLENCE</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Kenapa Memilih Layanan Jaringan Kami?
                </h3>
                <div className="p-4 bg-slate-100/80 border-l-4 border-slate-800 text-slate-800 font-semibold text-sm italic">
                  &ldquo;Bagaimana memastikan jaringan kabel perusahaan berkecepatan tinggi tanpa hambatan?&rdquo; &mdash; Jawaban keunggulan teknis Grasindo Pro.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                
                {/* Point 1 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Standar & OTDR Certificate</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Pengukuran redaman cahaya kabel FO dilakukan menggunakan instrumen OTDR terkalibrasi dengan laporan sertifikasi resmi standar pabrikan.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Emergency Repair (SLA)</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Tim reaksi cepat penanganan kabel serat optik putus (*Emergency Fiber Break Repair*) untuk meminimalkan gangguan konektivitas bisnis.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Service Point Nasional</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Didukung oleh jaringan tim instalasi di berbagai kota besar di Indonesia untuk menjangkau proyek kantor pusat maupun cabang perusahaan Anda.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Tim Engineer Berpengalaman</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Dikelola oleh teknisi sertifikasi jaringan dan penyambungan FO yang berpengalaman menangani proyek gedung, pabrik, dan perkantoran.
                  </p>
                </div>

              </div>
            </div>

            {/* ================= 4. DOKUMENTASI FOTO FOTO ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-red-700 uppercase flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" /> DOKUMENTASI LAPANGAN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Galeri Dokumentasi Instalasi Fiber Optics & Jaringan
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                Berikut adalah dokumentasi pengerjaan instalasi kabel FO, penyambungan Splicing, penataan server rack, dan pengujian OTDR tim Grasindo Pro:
              </p>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {photoGallery.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative rounded-sm overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-2xs hover:shadow-md transition-all"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-52 sm:h-60 object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="font-bold text-sm leading-snug group-hover:text-red-300 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Call-to-action Banner */}
            <div className="p-6 bg-slate-900 rounded-sm text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md mt-6">
              <div>
                <h4 className="font-bold text-base sm:text-lg">Butuh Layanan Fiber Optics & Instalasi Jaringan?</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">Konsultasikan kebutuhan instalasi kabel FO, Splicing, dan infrastruktur jaringan perusahaan Anda.</p>
              </div>
              <button
                onClick={() => setInquiryOpen(true)}
                className="bg-red-700 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-sm text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                Minta Penawaran Layanan
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: SIDEBAR NAVIGATION MENU (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">

              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-slate-900 font-extrabold text-sm tracking-wider uppercase flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                  SOLUSI IT MENU
                </span>
              </div>

              {/* Sidebar Menu Items List */}
              <div className="border border-slate-200/90 rounded-sm bg-slate-50/50 divide-y divide-slate-200/70 overflow-hidden shadow-xs">
                {sidebarMenuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActiveTab(item.label);
                      if (onNavigate) {
                        onNavigate(item.id);
                      }
                    }}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer ${activeTab === item.label
                      ? 'bg-white font-extrabold text-slate-900 border-l-4 border-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                      }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= FLOATING BACK TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-lg hover:shadow-xl text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-300 z-50 group hover:scale-110"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* ================= PHOTO LIGHTBOX MODAL ================= */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs" onClick={() => setSelectedPhoto(null)}>
          <div className="bg-slate-900 rounded-sm overflow-hidden max-w-3xl w-full border border-slate-800 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full h-80 sm:h-96 object-cover" />
              <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 bg-slate-950/80 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
                ✕
              </button>
            </div>
            <div className="p-5 text-white space-y-1">
              <h4 className="font-bold text-lg text-white">{selectedPhoto.title}</h4>
              <p className="text-slate-300 text-xs sm:text-sm">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= INQUIRY FORM MODAL ================= */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block">FORMULIR PENAWARAN</span>
                <h3 className="text-xl font-bold mt-1">Fiber Optics & Network Installer</h3>
              </div>
              <button onClick={() => setInquiryOpen(false)} className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer">✕</button>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Permintaan Terkirim!</h4>
                  <p className="text-xs text-slate-600">Tim Network Engineer Grasindo Pro akan menghubungi Anda segera.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Perusahaan</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Telepon / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Detail Kebutuhan Proyek FO / Jaringan</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan kabel FO, Splicing, LAN, lokasi kantor, atau spesifikasi jaringan..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-md text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan</span>
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

