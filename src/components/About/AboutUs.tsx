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
    <div className="bg-[#050e1f] min-h-screen font-sans text-white relative">

      {/* ================= TOP HERO MONOCHROME BANNER ================= */}
      <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden relative bg-slate-900">
        <img
          src="/about_us_hero_banner.png"
          alt="Tentang Grasindo Pro Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* ================= CONTENT SECTION WITH VIDEO BACKGROUND ================= */}
      <div className="relative w-full overflow-hidden pb-20">

        {/* Background Video with AutoPlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/about-main.png?v=20260901"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/images/about-main.mp4?v=20260901" type="video/mp4" />
        </video>

        <div className="relative z-10">

          {/* ================= PAGE TITLE & BREADCRUMBS ================= */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Tentang Grasindo Pro
            </h1>

            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-xs text-neutral-300 mt-2 drop-shadow-sm">
              <Home className="w-3.5 h-3.5 text-neutral-400" />
              <span>/</span>
              <span>Tentang Kami</span>
              <span>/</span>
              <span>Profil</span>
              <span>/</span>
              <span className="text-white font-semibold">Tentang Grasindo Pro</span>
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
                <div className="w-1.5 h-7 bg-amber-400 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-amber-400 drop-shadow-sm">
                  Berkembang Kokoh, Terus Bertumbuh
                </h2>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
                Mitra Terpercaya dalam Integrasi IT, Infrastruktur CME, dan Media Kreatif
              </h3>
            </div>

            {/* Paragraph 1 */}
            <p className="text-neutral-100 text-sm sm:text-base leading-relaxed text-justify drop-shadow-md">
              PT Integra Aneksa Kreasindo (Grasindo Pro) merupakan perusahaan general contractor dan integrator berpengalaman yang berbasis di bidang Teknologi Informasi (IT), Civil, Mechanical & Electrical (CME), serta Media Advertising dan Event Organizer. Kami menyediakan layanan terpadu mulai dari perencanaan, desain, hingga implementasi proyek secara efisien, presisi, dan berkelanjutan di berbagai sektor industri.
            </p>

            {/* Paragraph 2 */}
            <p className="text-neutral-100 text-sm sm:text-base leading-relaxed text-justify drop-shadow-md">
              Sumber daya manusia merupakan aset utama kami dalam memberikan layanan terbaik bagi mitra bisnis. Kami terus mengembangkan kapabilitas tim melalui penerapan teknologi terkini serta penyediaan peralatan kerja profesional. Sinergi yang kuat antar-divisi—mulai dari solusi infrastruktur jaringan & telekomunikasi, instalasi mekanikal elektrikal (HVAC, perpipaan, kelistrikan), hingga eksekusi kampanye media reklame (outdoor/indoor) dan manajemen acara berskala nasional—membuat kami siap menangani proyek dalam berbagai tingkat kompleksitas dengan service point yang tersebar di wilayah Indonesia.
            </p>

            {/* Paragraph 3 */}
            <p className="text-neutral-100 text-sm sm:text-base leading-relaxed text-justify drop-shadow-md">
              Reputasi dan kualitas layanan kami telah terbukti melalui kemitraan jangka panjang dengan kementerian, BUMN, serta perusahaan swasta multinasional. Portofolio klien kami mencakup nama-nama besar seperti Panasonic, XL Axiata, Permata Bank, BRI, Kementerian Keuangan, Kementerian Perindustrian, Indofood, Nestle, Djarum, Asian Paints, Herbalife, Chevrolet, OCBC, Pefindo, dan Ciputra
            </p>

            {/* Centered Brand Logo Graphic */}
            <div className="py-8 flex justify-center items-center">
              <img
                src="/grasindo_pro_symbol_logo.svg"
                alt="Grasindo Pro Symbol Logo"
                className="max-w-full sm:max-w-xs h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Sub-section: Visi & Misi Perusahaan */}
            <div className="space-y-6 pt-4 border-t border-white/20">
              
              {/* Visi Perusahaan */}
              <div className="space-y-2">
                <h3 className="text-amber-400 font-extrabold text-lg sm:text-xl drop-shadow-sm">
                  Visi Perusahaan
                </h3>
                <p className="text-neutral-100 text-sm sm:text-base leading-relaxed text-justify drop-shadow-md">
                  Menjadi perusahaan terkemuka di Indonesia sekaligus mitra usaha terpercaya dan handal di tengah ketatnya persaingan bisnis global, dengan senantiasa memberikan solusi terbaik, inovatif, dan menarik dalam bidang Teknologi Informasi, mekanikal elektrikal, telekomunikasi, event organizer, serta layanan media advertising.
                </p>
              </div>

              {/* Misi Perusahaan */}
              <div className="space-y-3">
                <h3 className="text-amber-400 font-extrabold text-lg sm:text-xl drop-shadow-sm">
                  Misi Perusahaan
                </h3>
                <ul className="space-y-3 text-neutral-100 text-sm sm:text-base leading-relaxed text-justify">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Kualitas &amp; Layanan (Quality):</strong> Memberikan layanan berkualitas terbaik secara prima dan cepat secara menyeluruh, mencakup layanan integrasi jaringan LAN/IT, mekanikal elektrikal, telekomunikasi, servis perangkat komputer, hingga jasa media advertising dan event organizer.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Kemitraan &amp; Profesionalisme (Commitment):</strong> Mengembangkan hubungan jangka panjang dan pola kemitraan usaha yang saling memberikan keuntungan dengan pelanggan dan mitra bisnis, dengan senantiasa menjaga serta menjunjung tinggi etika bisnis profesional.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Inovasi &amp; Adaptasi (Flexible):</strong> Menyediakan solusi yang efisien dan berkelanjutan untuk memenuhi kebutuhan teknologi pelanggan, sekaligus bersikap fleksibel dalam mengikuti perkembangan media untuk terus memberikan inovasi.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Kreativitas &amp; Dampak:</strong> Menghadirkan event dan promosi kreatif yang mampu meningkatkan brand awareness pelanggan dan memberikan warna baru yang jauh lebih menarik di dunia layanan jasa media.
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
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="text-white font-extrabold text-sm tracking-wider uppercase flex items-center gap-2 drop-shadow-sm">
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                  TENTANG KAMI
                </span>
              </div>

              {/* Sidebar Menu Items List */}
              <div className="border border-white/15 rounded-xl bg-black/40 backdrop-blur-md divide-y divide-white/10 overflow-hidden shadow-xl">
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
                      ? 'bg-white/15 font-extrabold text-white border-l-4 border-amber-400 shadow-sm'
                      : 'text-neutral-300 hover:bg-white/10 hover:text-white font-medium'
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

      </div>
    </div>

      {/* ================= FLOATING BACK TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 z-50 group hover:scale-110"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

    </div>
  );
};
