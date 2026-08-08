import React, { useState } from 'react';
import {
  Home,
  ChevronDown,
  ChevronUp,
  Megaphone,
  CheckCircle2,
  Sparkles,
  Award,
  Star,
  Send,
  Camera,
  MapPin,
  Building,
  FileCheck,
  Palette
} from 'lucide-react';

interface EOAdverstingProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOAdversting: React.FC<EOAdverstingProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Media Advertising & Billboard');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    advertisingType: 'Billboard Jalan Tol',
    message: ''
  });

  const sidebarMenuItems = [
    { label: 'EO Overview', id: 'eo-main' },
    { label: 'EO (Event Organizer & MICE)', id: 'eo' },
    { label: 'Media Advertising & Billboard', id: 'media-advertising' },
  ];

  const photoGallery = [
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 034857.png',
      title: 'Media Outdoor Billboard Jalan Tol',
      desc: 'Pemasangan Media Outdoor Billboard Jalan Tol Sedyatmo, Jagorawi & Sentul untuk Pertamina, Herbalife, & Chevrolet.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 034911.png',
      title: 'Reklame & Signage Jalur Protokol Utama',
      desc: 'Penempatan media reklame outdoor di jalur arteri utama Jakarta, Bandung, dan kota besar Indonesia.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 034918.png',
      title: 'Konstruksi Baja Billboard & Lampu LED',
      desc: 'Fabrikasi struktur baja reklame kokoh lengkap dengan lampu penerangan LED malam hari.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 034930.png',
      title: 'Neon Box & Architectural Building Signage',
      desc: 'Produksi dan pemasangan Letter Sign, Neon Box Acrylick/Vinyl, & Signage Gedung BEJ & SCBD Jakarta.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 035034.png',
      title: 'Pylon Sign Office & Shopsign Retail',
      desc: 'Pabrikasi Pylon Sign perkantoran dan Shopsign promosi retail di berbagai pusat perbelanjaan.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 035044.png',
      title: 'Baliho, Spanduk & T-Banner Promosi',
      desc: 'Cetak digital high-resolution dan pemasangan Baliho, Spanduk, & T-Banner event.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 035114.png',
      title: 'Vehicle Wrapping & Branding Mobil',
      desc: 'Pelapisan stiker branding mobil perusahaan (Vehicle Wrapping) dan custom wall painting.',
    },
    {
      src: '/EO/Advertising/Screenshot 2026-08-08 035135.png',
      title: 'Legalisasi & Perizinan SKPD Pajak Reklame',
      desc: 'Pengurusan perizinan reklame ke dinas pemerintah daerah & penerbitan SKPD resmi.',
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
      setInquiryForm({ name: '', email: '', phone: '', company: '', advertisingType: 'Billboard Jalan Tol', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">

      {/* ================= 1. HERO BANNER (BAGIAN ATAS) ================= */}
      <div className="w-full h-56 sm:h-72 lg:h-80 overflow-hidden relative bg-slate-900">
        <img
          src="/EO/Advertising/Screenshot 2026-08-08 034857.png"
          alt="Media Advertising & Outdoor Billboard Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Floating Headline inside Banner */}
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Media Advertising & Outdoor Billboard
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
          <button onClick={() => onNavigate?.('eo-main')} className="hover:text-amber-600 font-medium transition-colors cursor-pointer">
            Event Organizer & Media
          </button>
          <span>/</span>
          <span className="text-slate-800 font-semibold whitespace-nowrap">Media Advertising & Billboard</span>
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
                <div className="w-1.5 h-7 bg-amber-600 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Spesialis Media Reklame Luar Ruang (Billboard Jalan Tol), Signage, & Legalitas SKPD Resmi.
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Dengan pengalaman luas dan jaringan titik lokasi strategis berskala nasional, PT. Integra Aneksa Kreasindo (Grasindopro) hadir sebagai penyedia layanan profesional periklanan outdoor & indoor advertising. Kami menyajikan solusi komprehensif mulai dari penempatan Billboard jalur tol & protokol, Signage gedung, Neon Box, Pylon Sign, Baliho, T-Banner, hingga pengurusan perizinan SKPD Pajak Reklame resmi.
              </p>
            </div>

            {/* ================= 2. LAYANAN UTAMA (CORE SERVICES - 4 CARDS) ================= */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">KATEGORI LAYANAN ADVERTISING</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Layanan Utama Media Advertising
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Kami mengelompokkan layanan media periklanan menjadi empat pilar utama berikut:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Core Service 1: Billboard */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-amber-600 text-white flex items-center justify-center font-bold">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    1. Billboard Jalan Tol & Arteri Utama
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Penempatan media Billboard di titik strategis ber-traffic tinggi seperti Jalan Tol Sedyatmo, Jagorawi, Sentul, serta jalur protokol kota besar di Indonesia.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Billboard Jalan Tol Sedyatmo, Jagorawi & Sentul</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Billboard Jalan Protokol Jakarta, Bandung, Surabaya</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Konstruksi Reklame Baja Kokoh & Pencahayaan LED</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 2: Signage & Neonbox */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
                    <Building className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    2. Signage, Neon Box & Pylon Sign
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Desain, fabrikasi, dan pemasangan Architectural Building Signage, Letter Sign, Neon Box, Pylon Sign Gedung, & Shopsign retail modern.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Architectural Signage Gedung SCBD & BEJ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Neon Box Acrylick / Vinyl High Quality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Pylon Sign Office Building & Shopsign Retail</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 3: Baliho & Branding */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    3. Baliho, T-Banner & Branding Armada
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Cetak digital high-resolution, pemasangan Baliho, T-Banner event, spanduk, hingga Branding Mobil (vehicle wrapping) & custom wall painting.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Baliho, T-Banner & Spanduk High Digital Print</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Branding Mobil Perusahaan (Vehicle Wrapping)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 flex-shrink-0" />
                      <span>Wall Painting Artistic & Display Promotional Table</span>
                    </li>
                  </ul>
                </div>

                {/* Core Service 4: Legalitas SKPD */}
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-amber-600 text-white flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    4. Izin SKPD Pajak Reklame Resmi
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Layanan pengurusan perizinan reklame ke dinas pemerintahan daerah, pembayaran SKPD Pajak Reklame resmi, & garansi legalitas tempat.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Pengurusan Perizinan Dinas Reklame Daerah</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Penerbitan SKPD Pajak Reklame Resmi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Pemeliharaan & Garansi Legalitas Konstruksi</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* ================= 3. KENAPA MEMILIH KAMI? (SERVICE EXCELLENCE) ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">SERVICE EXCELLENCE</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Kenapa Memilih Media Advertising Kami?
                </h3>
                <div className="p-4 bg-slate-100/80 border-l-4 border-slate-800 text-slate-800 font-semibold text-sm italic">
                  &ldquo;Bagaimana memastikan promosi produk Anda terlihat oleh jutaan audiens di titik jalan terstrategis Indonesia?&rdquo; &mdash; Komitmen dari Grasindo Pro.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                
                {/* Point 1 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Titik Emas Strategis</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Penempatan billboard di lokasi dengan visibilitas tinggi dan lalu lintas kendaraan terpadat.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Legalitas & SKPD Resmi</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Seluruh perizinan reklame dan pajak SKPD dijamin legal sesuai aturan pemerintah daerah.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Konstruksi Kokoh & Aman</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Struktur baja reklame dirancang presisi berbasis standar keamanan & keselamatan publik.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Pemeliharaan Berkala</h4>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                    Tim teknisi siap melakukan inspeksi penerangan lampu LED dan perawatan visual reklame.
                  </p>
                </div>

              </div>
            </div>

            {/* ================= 4. DOKUMENTASI FOTO ================= */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-amber-600 uppercase flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" /> DOKUMENTASI LAPANGAN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Galeri Dokumentasi Media Advertising
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed">
                Berikut adalah dokumentasi penempatan Billboard jalan tol, signage gedung, & reklame Grasindo Pro:
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
                      <h4 className="font-bold text-sm leading-snug group-hover:text-amber-300 transition-colors">
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
                <h4 className="font-bold text-base sm:text-lg">Ingin Memasang Billboard atau Signage Gedung?</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">Konsultasikan titik lokasi strategis, spesifikasi ukuran, & legalitas SKPD bersama kami.</p>
              </div>
              <button
                onClick={() => setInquiryOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-sm text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                Minta Penawaran Billboard
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
                  EO & ADVERTISING MENU
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
              <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 bg-slate-950/80 hover:bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
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
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">FORMULIR PENAWARAN ADVERTISING</span>
                <h3 className="text-xl font-bold mt-1">Media Advertising & Billboard</h3>
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
                  <p className="text-xs text-slate-600">Tim Advertising Manager Grasindo Pro akan menghubungi Anda segera.</p>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Jenis Media Advertising</label>
                    <select
                      value={inquiryForm.advertisingType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, advertisingType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    >
                      <option value="Billboard Jalan Tol">Billboard Jalan Tol & Protokol Utama</option>
                      <option value="Architectural Signage">Architectural Signage & Letter Sign Gedung</option>
                      <option value="Neon Box & Pylon Sign">Neon Box & Pylon Sign Office</option>
                      <option value="Branding Mobil">Branding Mobil & Vehicle Wrapping</option>
                      <option value="Izin SKPD Reklame">Pengurusan Izin SKPD Pajak Reklame</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Detail Titik Lokasi & Ukuran</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan titik lokasi tol/kota yang diminati, perkiraan ukuran reklame, dan durasi tayang..."
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
                    <span>Kirim Permintaan Penawaran Billboard</span>
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
