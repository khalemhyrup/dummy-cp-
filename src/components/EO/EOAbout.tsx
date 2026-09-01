import React from 'react';
import { Users, Clock, TrendingUp, Instagram } from 'lucide-react';

interface EOAboutProps {
  onNavigate: (page: string) => void;
}

export const EOAbout: React.FC<EOAboutProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full bg-[#030917] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* =========================================================================
          SECTION 1: HERO - TENTANG KAMI (Media Advertising & Event Organizer)
      ========================================================================== */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-between py-12 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-blue-900/40 bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/about-us-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/about-us-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto w-full my-auto py-12 relative z-10 space-y-8 text-center sm:text-left">
          
          {/* Logo Header */}
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain mx-auto"
            />
          </div>

          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              Tentang Kami
            </h1>
            <p className="text-amber-400 font-bold text-sm sm:text-base mt-2">
              Media Advertising &amp; Event Organizer
            </p>
          </div>

          {/* 3-Column Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4">
            
            {/* Column 1 */}
            <div className="bg-blue-950/60 border border-blue-500/30 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
              Kami merupakan sebuah perusahaan yang bergerak di bidang layanan jasa <strong className="text-amber-400">Media Advertising</strong> dan <strong className="text-amber-400">Event Organizer</strong>. Dengan komitmen dan motivasi tinggi untuk senantiasa mampu memberikan yang terbaik untuk klien.
            </div>

            {/* Column 2 */}
            <div className="bg-blue-950/60 border border-blue-500/30 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
              Dalam perjalanan dan kiprah karirnya hingga saat ini <strong className="text-amber-400">PT Integra Aneksa Kreasindo</strong> telah mampu dan mendapat kepercayaan penuh dari mitra usahanya untuk bekerjasama mewujudkan sebuah penyelenggaraan Media Advertising Outdoor maupun Indoor berskala nasional.
            </div>

            {/* Column 3 */}
            <div className="bg-blue-950/60 border border-blue-500/30 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
              Sebuah komitmen harus dipertahankan dan terus dikembangkan secara sistematis agar kepercayaan senantiasa dapat kita peroleh dari mitra usaha.
            </div>

          </div>

        </div>

        {/* Bottom Elements: Hubungi Kami & Tagline */}
        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="group flex items-center bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400 p-0.5 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="bg-gradient-to-r from-amber-500 to-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="p-1 bg-black text-white rounded-full text-xs">
                👤
              </span>
              <span>Hubungi Kami</span>
            </div>
          </button>

          <div className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)] pt-4 sm:pt-6">
            take it, do it, love it !
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: VISI & MISI + 3 NILAI UTAMA (Kualitas, Fleksibilitas, Komitmen)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/about-us-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/about-us-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo Header */}
          <div className="flex justify-center items-center mb-10">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Visi & Misi */}
            <div className="lg:col-span-5 space-y-6">
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase border-b-2 border-amber-400 pb-2 inline-block">
                Visi &amp; Misi
              </h2>

              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Menempatkan <strong className="text-amber-400">PT Integra Aneksa Kreasindo</strong> menjadi satu mitra usaha terpercaya dan handal bagi para kolega ditengah situasi dan persaingan bisnis secara global yang kian ketat, serta mampu memberikan warna dunia layanan jasa media advertising jauh lebih menarik.
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify">
                Perjalanan ke depan <strong className="text-amber-400">PT Integra Aneksa Kreasindo</strong> senantiasa mengacu kepada pola kemitraan usaha yang saling memberikan keuntungan dengan menjunjung tinggi nilai:
              </p>

            </div>

            {/* Right Column: 3 Nilai Utama (Kualitas, Fleksibilitas, Komitmen) */}
            <div className="lg:col-span-7 space-y-5 relative">
              
              {/* Value 1: KUALITAS */}
              <div className="bg-gradient-to-r from-blue-950/85 to-blue-900/50 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors backdrop-blur-xs">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  KUALITAS
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Memberikan sebuah service yang terbaik secara prima, cepat dan berkualitas di dunia advertising.
                </p>
              </div>

              {/* Value 2: FLEKSIBILITAS */}
              <div className="bg-gradient-to-r from-blue-950/85 to-blue-900/50 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors ml-0 sm:ml-6 backdrop-blur-xs">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  FLEKSIBILITAS
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Senantiasa flexible mengikuti perkembangan media dan ikut memberikan inovasi dan solusi bagi mitra usaha.
                </p>
              </div>

              {/* Value 3: KOMITMEN */}
              <div className="bg-gradient-to-r from-blue-950/85 to-blue-900/50 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors ml-0 sm:ml-12 backdrop-blur-xs">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  KOMITMEN
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Menjaga dan memelihara serta mengembangkan sikap dan etika bisnis secara professional.
                </p>
              </div>

            </div>

          </div>

          {/* Right Bottom Tagline - Directly above Golden Banner */}
          <div className="text-right pt-8 sm:pt-12 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Golden Quote Banner - Directly below the slogan */}
        <div className="relative z-10 w-full bg-gradient-to-r from-amber-600/90 via-amber-500 to-amber-600/90 py-3.5 px-4 text-center shadow-md border-t border-amber-400/30">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-950 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Kami Menjadi perusahaan penyedia solusi bisnis terintegrasi yang terdepan, tepercaya, dan inovatif.&rdquo;
          </p>
        </div>

      </section>

      {/* =========================================================================
          SECTION 3: KENAPA MEMILIH KAMI ? (3 Keunggulan Utama)
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/about-us-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/about-us-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo & Section Title */}
          <div className="text-center mb-10 sm:mb-12">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 w-auto object-contain mx-auto mb-3"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
              Kenapa Memilih Kami ?
            </h2>
          </div>

          {/* 3 Distinct Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Tim Berpengalaman */}
            <div className="bg-gradient-to-b from-blue-950/70 to-black/85 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group backdrop-blur-xs">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-amber-400 mb-3">
                  Tim Berpengalaman &amp; Profesional
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Didukung oleh para kreator konten, event planner dan team ahli konstruksi yang berpengalaman.
                </p>
              </div>
            </div>

            {/* Card 2: Berorientasi pada Data & Hasil */}
            <div className="bg-gradient-to-b from-blue-950/70 to-black/85 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group backdrop-blur-xs">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-amber-400 mb-3">
                  Berorientasi pada Data &amp; Hasil
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Setiap kampanye periklanan dan sistem dirancang berbasis data empiris untuk memastikan pengembalian investasi (ROI) yang optimal bagi bisnis Anda.
                </p>
              </div>
            </div>

            {/* Card 3: Ketepatan Waktu & Presisi */}
            <div className="bg-gradient-to-b from-blue-950/70 to-black/85 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group backdrop-blur-xs">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-amber-400 mb-3">
                  Ketepatan Waktu &amp; Presisi
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Kami menghargai waktu Anda. Setiap proyek dieksekusi berdasarkan timeline yang ketat dengan jaminan kualitas terbaik.
                </p>
              </div>
            </div>

          </div>

          {/* Right Bottom Tagline - Directly above Golden Footer Strip */}
          <div className="text-right pt-8 sm:pt-12 pb-3 sm:pb-4">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: BOTTOM GOLDEN CONTACT STRIP
      ========================================================================== */}
      <section className="relative z-10 w-full bg-[#030814]/90 border-t border-neutral-800">

        {/* Golden Gradient Contact Strip (Balanced Medium Proportions) */}
        <div className="w-full bg-gradient-to-r from-[#ca9035] via-[#dfa545] to-[#ebb65b] py-6 sm:py-8 px-6 sm:px-10 lg:px-12 text-white shadow-xl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Left: Logo & Circular Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <img
                src="/images/logo.png"
                alt="Grasindo Pro"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
              />
              <div className="flex items-center gap-3 text-slate-900">
                <a
                  href="https://www.tiktok.com/@grasindopro.advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/grasindo.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white hover:bg-pink-600 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Company Name & Contacts */}
            <div className="text-center md:text-right space-y-1">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl tracking-wide uppercase text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                PT. INTEGRA ANEKSA KREASINDO
              </h4>
              <div className="space-y-0.5">
                <div>
                  <a
                    href="tel:+6281398479044"
                    className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    +62 813-9847-9044
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@grasindopro.com"
                    className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    admin@grasindopro.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};
