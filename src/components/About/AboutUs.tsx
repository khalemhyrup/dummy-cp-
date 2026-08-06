import React, { useState } from 'react';
import { Home, ChevronDown, ChevronUp } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Tentang Grasindo Pro');

  const sidebarMenuItems = [
    'Tentang Grasindo Pro',
    'Rekam Jejak',
    'Pencapaian Kami',
    'Nilai-Nilai',
    'Struktur Organisasi',
    'Dewan Komisaris',
    'Direksi',
    'Struktur Perusahaan',
    'Pelanggan',
    'Mitra Strategis',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">

      {/* ================= TOP HERO MONOCHROME BANNER ================= */}
      <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden relative bg-slate-900">
        <img
          src="/about_us_hero_banner.png"
          alt="Tentang Grasindo Pro Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* ================= PAGE TITLE & BREADCRUMBS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Tentang Grasindo Pro
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mt-2">
          <Home className="w-3.5 h-3.5 text-slate-400" />
          <span>/</span>
          <span>Tentang Kami</span>
          <span>/</span>
          <span>Profil</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Tentang Grasindo Pro</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT (2 COLUMNS) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* LEFT COLUMN: MAIN ARTICLE CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Sub-headline & Tagline */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-7 bg-slate-800 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Berkembang Kokoh, Terus Bertumbuh
                </h2>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                Mitra Terpercaya dalam Integrasi IT, Infrastruktur CME, dan Media Kreatif
              </h3>
            </div>

            {/* Paragraph 1 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              PT Integra Aneksa Kreasindo (Grasindo Pro) merupakan perusahaan general contractor dan integrator berpengalaman yang berbasis di bidang Teknologi Informasi (IT), Civil, Mechanical & Electrical (CME), serta Media Advertising dan Event Organizer. Kami menyediakan layanan terpadu mulai dari perencanaan, desain, hingga implementasi proyek secara efisien, presisi, dan berkelanjutan di berbagai sektor industri.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              Sumber daya manusia merupakan aset utama kami dalam memberikan layanan terbaik bagi mitra bisnis. Kami terus mengembangkan kapabilitas tim melalui penerapan teknologi terkini serta penyediaan peralatan kerja profesional. Sinergi yang kuat antar-divisi—mulai dari solusi infrastruktur jaringan & telekomunikasi, instalasi mekanikal elektrikal (HVAC, perpipaan, kelistrikan), hingga eksekusi kampanye media reklame (outdoor/indoor) dan manajemen acara berskala nasional—membuat kami siap menangani proyek dalam berbagai tingkat kompleksitas dengan service point yang tersebar di wilayah Indonesia.
            </p>

            {/* Paragraph 3 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              Reputasi dan kualitas layanan kami telah terbukti melalui kemitraan jangka panjang dengan kementerian, BUMN, serta perusahaan swasta multinasional. Portofolio klien kami mencakup nama-nama besar seperti Panasonic, XL Axiata, Permata Bank, BRI, Kementerian Keuangan, Kementerian Perindustrian, Indofood, Nestle, Djarum, Asian Paints, Herbalife, Chevrolet, OCBC, Pefindo, dan Ciputra
            </p>

            {/* Centered Brand Logo Graphic */}
            <div className="py-8 flex justify-center items-center">
              <img
                src="/grasindo_pro_symbol_logo.svg"
                alt="Grasindo Pro Symbol Logo"
                className="max-w-full sm:max-w-xs h-auto object-contain"
              />
            </div>

            {/* Sub-section: Logo */}
            <div className="space-y-3 pt-2">
              <h3 className="text-red-700 font-extrabold text-lg sm:text-xl">
                Logo
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                PT Grasindo Pro (PT Integra Aneksa Kreasindo) adalah perusahaan teknologi yang berfokus membantu pelanggan dalam penyediaan solusi dan layanan teknologi yang paling tepat untuk kebutuhan bisnisnya, mengintegrasikan ke sistem yang digunakan, dan memastikan transisi yang mulus bagi para pemangku kepentingan.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Logo perusahaan ini memperkuat identitas Grasindo Pro dalam mencapai Visi Perusahaan – Menjadi penyedia jasa teknologi terkemuka, yang memberikan nilai berkesinambungan bagi para pemangku kepentingan dan dampak positif bagi kehidupan.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: SIDEBAR NAVIGATION MENU (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">

              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-slate-900 font-extrabold text-sm tracking-wider uppercase flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                  TENTANG KAMI
                </span>
              </div>

              {/* Sidebar Menu Items List */}
              <div className="border border-slate-200/90 rounded-sm bg-slate-50/50 divide-y divide-slate-200/70 overflow-hidden shadow-xs">
                {sidebarMenuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm transition-colors flex items-center justify-between ${activeTab === item
                      ? 'bg-white font-extrabold text-slate-900 border-l-4 border-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                      }`}
                  >
                    <span>{item}</span>
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

    </div>
  );
};
