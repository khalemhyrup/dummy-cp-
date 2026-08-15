import React, { useState } from 'react';
import { Home, ChevronDown, ChevronUp } from 'lucide-react';

interface AboutUsProps {
  onNavigate?: (page: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Tentang Grasindo Pro');

  const sidebarMenuItems = [
    { label: 'Struktur Organisasi', id: 'org-structure' },
    { label: 'Client (Pelanggan)', id: 'client' },
    { label: 'Rekam Jejak', id: 'about' },
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

            {/* Sub-section: Visi & Misi Perusahaan */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              
              {/* Visi Perusahaan */}
              <div className="space-y-2">
                <h3 className="text-red-700 font-extrabold text-lg sm:text-xl">
                  Visi Perusahaan
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  Menjadi perusahaan terkemuka di Indonesia sekaligus mitra usaha terpercaya dan handal di tengah ketatnya persaingan bisnis global, dengan senantiasa memberikan solusi terbaik, inovatif, dan menarik dalam bidang Teknologi Informasi, mekanikal elektrikal, telekomunikasi, event organizer, serta layanan media advertising.
                </p>
              </div>

              {/* Misi Perusahaan */}
              <div className="space-y-3">
                <h3 className="text-red-700 font-extrabold text-lg sm:text-xl">
                  Misi Perusahaan
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-slate-900">Kualitas &amp; Layanan (Quality):</strong> Memberikan layanan berkualitas terbaik secara prima dan cepat secara menyeluruh, mencakup layanan integrasi jaringan LAN/IT, mekanikal elektrikal, telekomunikasi, servis perangkat komputer, hingga jasa media advertising dan event organizer.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-slate-900">Kemitraan &amp; Profesionalisme (Commitment):</strong> Mengembangkan hubungan jangka panjang dan pola kemitraan usaha yang saling memberikan keuntungan dengan pelanggan dan mitra bisnis, dengan senantiasa menjaga serta menjunjung tinggi etika bisnis profesional.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-slate-900">Inovasi &amp; Adaptasi (Flexible):</strong> Menyediakan solusi yang efisien dan berkelanjutan untuk memenuhi kebutuhan teknologi pelanggan, sekaligus bersikap fleksibel dalam mengikuti perkembangan media untuk terus memberikan inovasi.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-slate-900">Kreativitas &amp; Dampak:</strong> Menghadirkan event dan promosi kreatif yang mampu meningkatkan brand awareness pelanggan dan memberikan warna baru yang jauh lebih menarik di dunia layanan jasa media.
                    </div>
                  </li>
                </ul>
              </div>

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

    </div>
  );
};
