import React, { useState } from 'react';
import {
  Home,
  ChevronDown,
  ChevronUp,
  Radio,
  CheckCircle2,
  PhoneCall,
  TowerControl as Tower,
  ShieldCheck,
  Award,
  Star,
  Send,
  Camera,
  MapPin,
  Building2,
  Cpu,
  Zap
} from 'lucide-react';

interface TelecomunicationProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const Telecomunication: React.FC<TelecomunicationProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Telecommunications & Tower');
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
      title: 'Pemasangan Menara SST & Antena Seluler',
      desc: 'Konstruksi menara baja SST (Self Supporting Tower) & alignment antena sektor seluler.',
    },
    {
      src: '/it_solution/security/Screenshot 2026-08-08 024113.png',
      title: 'Shelter Telekomunikasi & Rack Equipment',
      desc: 'Fabrikasi dan instalasi shelter knockdown telekomunikasi lengkap dengan pendingin AC & rack server.',
    },
    {
      src: '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024419.png',
      title: 'Kabel Feeder RF & System Grounding',
      desc: 'Penarikan kabel feeder coaxial RF, penyambungan connector, & instalasi penangkal petir grounding.',
    },
    {
      src: '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024124.png',
      title: 'Instalasi Server PABX & IP Telephony Gedung',
      desc: 'Integrasi sistem komunikasi suara IP-PBX, VoIP interkom gedung, & auto-attendant perkantoran.',
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
          src="/it_solution/network/Screenshot 2026-08-08 024038.png"
          alt="Telecommunication Solutions Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Floating Headline inside Banner */}
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Infrastruktur & Layanan Telekomunikasi
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
          <span className="text-slate-800 font-semibold whitespace-nowrap">Telecommunications & Network Tower</span>
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
                <div className="w-1.5 h-7 bg-red-700 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Solusi Terpadu Peralatan GSM/CDMA, Menara SST, Shelter, Feeder, PABX, & IP Telephony.
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Sebagai integrator general contractor berpengalaman di bidang Telekomunikasi & IT, PT Integra Aneksa Kreasindo (Grasindopro) menyediakan pengadaan, pembangunan, instalasi, serta pemeliharaan infrastruktur jaringan telekomunikasi seluler maupun gedung. Layanan kami mencakup peralatan GSM/CDMA, shelter outdoor/indoor, menara baja SST, kabel feeder RF, hingga sistem telepon PABX & IP-PBX profesional.
              </p>
            </div>

            {/* ================= 2. LAYANAN UTAMA (CORE SERVICES - 4 CARDS) ================= */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-red-700 uppercase">KATEGORI SOLUSI TELEKOMUNIKASI</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Layanan Utama Infrastruktur Telekomunikasi
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Kami mengelompokkan spesifikasi proyek telekomunikasi ke dalam 4 pilar utama berikut:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">

                {/* Core Service 1 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-red-700 text-white flex items-center justify-center font-bold">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    1. Peralatan GSM & CDMA (Equipment)
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Pengadaan, pengujian, dan instalasi perangkat radio pemancar GSM & CDMA, modul BTS, rectifier, & sistem transmisi operator telekomunikasi.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Transceiver Radio GSM & CDMA Base Station</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Rectifier Power System & Backup Battery Bank</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Commissioning & Integration BTS Hardware</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 2 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
                    <Tower className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    2. Menara SST & Shelter Telekomunikasi
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Pembangunan menara baja SST (Self Supporting Tower), pole antenna rooftop, serta pabrikasi shelter knockdown tahan cuaca ekstrem.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Konstruksi Menara Baja SST 4 kaki & 3 kaki</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Pabrikasi Shelter Outdoor & Indoor Knockdown</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Dudukan Pole Antena & Mounting Bracket</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 3 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    3. Kabel Feeder & Sistem Grounding RF
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Penarikan kabel feeder RF 1/2&quot;, 7/8&quot;, connectorizing, instalasi arrester penangkal petir, serta grounding sistem keselamatan menara.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Penarikan Kabel Feeder RF Coaxial & Fiber Jumper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Instalasi Grounding Kit & Arrester Penangkal Petir</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Pengujian VSWR Feeder & Feeder Line Inspection</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 4 */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-red-700 text-white flex items-center justify-center font-bold">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    4. Sistem PABX & IP Telephony Gedung
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Instalasi jaringan komunikasi suara internal perkantoran, sistem PABX analog/digital, IP-PBX Server, VoIP gateway, & interkom.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Instalasi PABX Analog, Hybrid & Full IP-PBX</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Cabling Multi-Pair Telepon & MDF Terminal Block</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 flex-shrink-0" />
                      <span>Integrasi VoIP Interkom & Auto-Attendant Interactive</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* ================= 3. KENAPA MEMILIH KAMI? (SERVICE EXCELLENCE) ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-red-700 uppercase">SERVICE EXCELLENCE</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Kenapa Memilih Layanan Telekomunikasi Kami?
                </h3>
                <div className="p-4 bg-slate-100/80 border-l-4 border-slate-800 text-slate-800 font-semibold text-sm italic">
                  &ldquo;Bagaimana menjaga kestabilan sinyal dan konektivitas infrastruktur telekomunikasi bisnis Anda tanpa gangguan?&rdquo; &mdash; Komitmen dari Grasindo Pro.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">

                {/* Point 1 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Standar Industri Seluler</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Pengerjaan konstruksi menara dan instalasi RF mematuhi standar presisi teknis operator telekomunikasi utama.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Struktur Menara Kokoh</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Kualitas material baja SST dan instalasi grounding tahan petir berstandar keselamatan tinggi.
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
                    Tim rigger dan technician kami siap menangani pengerjaan infrastruktur telekomunikasi di seluruh Indonesia.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-red-50 text-red-700 flex items-center justify-center font-bold flex-shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Tim Certified Engineer</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    SDM berkualifikasi dengan sertifikasi keselamatan kerja menara tinggi & commissioning telekomunikasi.
                  </p>
                </div>

              </div>
            </div>

            {/* ================= 4. DOKUMENTASI FOTO ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-red-700 uppercase flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" /> DOKUMENTASI LAPANGAN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Galeri Dokumentasi Infrastruktur Telekomunikasi
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                Berikut adalah dokumentasi pengerjaan instalasi menara SST, shelter equipment, kabel feeder, & PABX telekomunikasi Grasindo Pro:
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
                <h4 className="font-bold text-base sm:text-lg">Butuh Konsultasi Pembangunan Telekomunikasi?</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">Diskusikan kebutuhan menara SST, shelter, feeder, PABX, & integrasi sinyal bersama kami.</p>
              </div>
              <button
                onClick={() => setInquiryOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-sm text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                Minta Penawaran Telekomunikasi
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
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">FORMULIR PENAWARAN PROYEK</span>
                <h3 className="text-xl font-bold mt-1">Infrastruktur Telekomunikasi</h3>
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
                  <p className="text-xs text-slate-600">Tim Engineer Telekomunikasi Grasindo Pro akan menghubungi Anda segera.</p>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pesan / Spesifikasi Kebutuhan Telekomunikasi</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan menara SST, shelter, feeder, PABX, atau maintenance seluler..."
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
                    <span>Kirim Permintaan Penawaran</span>
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
