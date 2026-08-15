import React from 'react';
import { ArrowRight, Phone, Mail, Instagram, CheckCircle2, Award, Users, Clock, Target, TrendingUp, HelpCircle } from 'lucide-react';

interface EOAboutProps {
  onNavigate: (page: string) => void;
}

export const EOAbout: React.FC<EOAboutProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#050e1f] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* =========================================================================
          SECTION 1: HERO - TENTANG KAMI (Media Advertising & Event Organizer)
      ========================================================================== */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-between py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#030917] via-[#081b3d] to-[#050e1f] overflow-hidden border-b border-blue-900/40">
        
        {/* Subtle background luminous wave grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e40af15_1px,transparent_1px),linear-gradient(to_bottom,#1e40af15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Top Breadcrumb / Return to EO Home */}
        <div className="max-w-6xl mx-auto w-full relative z-10 flex items-center justify-between">
          <button
            onClick={() => onNavigate('eo-home')}
            className="text-xs font-mono text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10"
          >
            <span>← Back to EO &amp; Advertising Portal</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto w-full my-auto py-12 relative z-10 space-y-8 text-center sm:text-left">
          
          {/* Logo Header */}
          <div className="flex justify-center sm:justify-start items-center mb-6">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain"
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
            <div className="bg-blue-950/40 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
              Kami merupakan sebuah perusahaan yang bergerak di bidang layanan jasa <strong className="text-amber-400">Media Advertising</strong> dan <strong className="text-amber-400">Event Organizer</strong>. Dengan komitmen dan motivasi tinggi untuk senantiasa mampu memberikan yang terbaik untuk klien.
            </div>

            {/* Column 2 */}
            <div className="bg-blue-950/40 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
              Dalam perjalanan dan kiprah karirnya hingga saat ini <strong className="text-amber-400">PT Integra Aneksa Kreasindo</strong> telah mampu dan mendapat kepercayaan penuh dari mitra usahanya untuk bekerjasama mewujudkan sebuah penyelenggaraan Media Advertising Outdoor maupun Indoor berskala nasional.
            </div>

            {/* Column 3 */}
            <div className="bg-blue-950/40 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-xs text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify shadow-md">
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

          <div className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
            Take it, Do it, Love it
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: VISI & MISI + 3 NILAI UTAMA (Kualitas, Fleksibilitas, Komitmen)
      ========================================================================== */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#050e1f] via-[#091f47] to-[#040c1a] border-b border-blue-900/40 relative overflow-hidden">
        
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
              <div className="bg-gradient-to-r from-blue-950/80 to-blue-900/40 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  KUALITAS
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Memberikan sebuah service yang terbaik secara prima, cepat dan berkualitas di dunia advertising.
                </p>
              </div>

              {/* Value 2: FLEKSIBILITAS */}
              <div className="bg-gradient-to-r from-blue-950/80 to-blue-900/40 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors ml-0 sm:ml-6">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  FLEKSIBILITAS
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Senantiasa flexible mengikuti perkembangan media dan ikut memberikan inovasi dan solusi bagi mitra usaha.
                </p>
              </div>

              {/* Value 3: KOMITMEN */}
              <div className="bg-gradient-to-r from-blue-950/80 to-blue-900/40 border border-blue-400/30 p-5 sm:p-6 rounded-2xl shadow-lg relative group hover:border-amber-400/60 transition-colors ml-0 sm:ml-12">
                <span className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest block mb-1">
                  KOMITMEN
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Menjaga dan memelihara serta mengembangkan sikap dan etika bisnis secara professional.
                </p>
              </div>

            </div>

          </div>

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-xl sm:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 3: KENAPA MEMILIH KAMI ? (3 Keunggulan Utama)
      ========================================================================== */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#040c1a] via-[#081a3d] to-[#040a17] border-b border-blue-900/40">
        
        {/* Top Quote Banner */}
        <div className="w-full bg-gradient-to-r from-amber-600/90 via-amber-500 to-amber-600/90 py-3.5 px-4 text-center mb-12 shadow-md">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-950 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Kami Menjadi perusahaan penyedia solusi bisnis terintegrasi yang terdepan, tepercaya, dan inovatif.&rdquo;
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          {/* Logo & Section Title */}
          <div className="text-center mb-12">
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
            <div className="bg-gradient-to-b from-blue-950/60 to-black/80 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group">
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
            <div className="bg-gradient-to-b from-blue-950/60 to-black/80 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group">
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
            <div className="bg-gradient-to-b from-blue-950/60 to-black/80 border border-blue-500/30 p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400 transition-all group">
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

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-xl sm:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: BOTTOM BANNER & DIRECT CONTACT STRIP
      ========================================================================== */}
      <section className="w-full bg-[#030814] border-t border-neutral-800">
        
        {/* Tagline text centered */}
        <div className="py-6 sm:py-8 text-center bg-gradient-to-b from-[#040d1c] to-[#0a1b38]">
          <span className="text-[#f57c00] font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,124,0,0.5)]">
            Take it, Do it, Love it
          </span>
        </div>

        {/* Golden Gradient Contact Strip (Balanced Medium Proportions) */}
        <div className="w-full bg-gradient-to-r from-[#ca9035] via-[#dfa545] to-[#ebb65b] py-6 sm:py-8 px-6 sm:px-10 lg:px-12 text-white shadow-xl border-t border-amber-300/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Left: Logo & Circular Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <img
                src="/images/logo.png"
                alt="Grasindopro"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
              />
              <div className="flex items-center gap-3 text-slate-900">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                  aria-label="TikTok"
                >
                  Tk
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                  aria-label="LinkedIn"
                >
                  in
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
