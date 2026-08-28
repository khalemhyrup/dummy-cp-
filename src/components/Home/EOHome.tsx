import React from 'react';
import { ChevronDown, Phone, Mail, ArrowRight, Sparkles, Megaphone, Calendar, Users, Award, ExternalLink, Instagram, Home } from 'lucide-react';

interface EOHomeProps {
  onNavigate: (page: string) => void;
}

export const EOHome: React.FC<EOHomeProps> = ({ onNavigate }) => {
  const scrollToServices = () => {
    const el = document.getElementById('eo-services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#050e1f] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* =========================================================================
          SECTION 1: HERO SECTION (Cinematic Video Atmosphere)
      ========================================================================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden">
        
        {/* Background Video with Poster Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/eo_hero_doors.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/homepageEO.mp4" type="video/mp4" />
        </video>
        
        {/* Deep Blue Gradient Tint Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030917]/80 via-[#071738]/70 to-[#050e1f] pointer-events-none" />

        {/* Top Spacer / Back Link */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 w-full flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            aria-label="Back to Corporate Portal"
            title="Kembali ke Main Portal"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer flex items-center justify-center group"
          >
            <Home className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Center Main Hero Title */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto py-16 space-y-3 sm:space-y-4">
          
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-company-hero whitespace-nowrap uppercase">
            PT. INTEGRA ANEKSA KREASINDO
          </h1>

          <h2 className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-white/95">
            Media Advertising &amp; Event Organizer
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto pt-1 font-medium">
            Spesialis periklanan luar ruang (OOH) &amp; manajemen acara berkelas nasional untuk menghadirkan pengalaman tak terlupakan bagi setiap audiens.
          </p>

        </div>

        {/* Bottom Bar: Hubungi Kami, Chevron, Tagline */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8 w-full grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
          
          {/* Left: Hubungi Kami Badge */}
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => onNavigate('eo-contact')}
              className="group flex items-center bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400 p-0.5 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-gradient-to-r from-amber-500 to-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2">
                <span className="p-1 bg-black text-white rounded-full text-xs">
                  👤
                </span>
                <span>Hubungi Kami</span>
              </div>
            </button>
          </div>

          {/* Center: Scroll Down Chevron (Exact Center Alignment) */}
          <div className="flex justify-center">
            <button
              onClick={scrollToServices}
              className="text-amber-500 hover:text-amber-400 animate-bounce transition-colors cursor-pointer"
              aria-label="Scroll Down"
            >
              <div className="flex flex-col items-center">
                <ChevronDown className="w-8 h-8 stroke-[3]" />
                <ChevronDown className="w-8 h-8 -mt-5 stroke-[3]" />
              </div>
            </button>
          </div>

          {/* Right: Tagline */}
          <div className="flex justify-center sm:justify-end">
            <div className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: OUR SERVICE (Advertising vs Event Organizer)
      ========================================================================== */}
      <section id="eo-services-section" className="w-full relative py-16 sm:py-24 bg-gradient-to-b from-[#050e1f] via-[#081a3d] to-[#040b18] overflow-hidden">
        
        {/* Top Gradient Quote Banner */}
        <div className="w-full bg-gradient-to-r from-amber-600/90 via-amber-500 to-amber-600/90 py-3.5 px-4 text-center mb-12 shadow-md">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-950 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Spesialis Advertising &amp; Event Organizer yang bekerja dengan hati. Kami tidak hanya mengelola acara, kami menciptakan pengalaman yang tak terlupakan.&rdquo;
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10">
          
          {/* Grasindopro Logo Header */}
          <div className="flex justify-center items-center mb-4">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-amber-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-14">
            OUR SERVICE
          </h2>

          {/* 2 Big Glowing Pillar Choices: Advertising & Event Organizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            
            {/* Pillar 1: Advertising */}
            <div className="group relative bg-gradient-to-b from-blue-900/40 via-blue-950/60 to-black/80 border-2 border-blue-500/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-400/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] transition-all duration-300">
              
              <div>
                {/* Glowing Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] group-hover:text-amber-300 transition-colors">
                  Advertising
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Solusi periklanan luar ruang (OOH) dan media promosi visual bernilai dampak tinggi untuk memperluas jangkauan merek Anda di lokasi-lokasi strategis.
                </p>

                {/* Sub-services list */}
                <div className="space-y-2.5 text-left text-xs sm:text-sm text-neutral-300 bg-black/40 p-4 rounded-xl border border-white/5 mb-8">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Konstruksi Billboard Jalan Tol &amp; Protokol</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Corporate Signage, Letter Sign &amp; Pylon Signs</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Neon Box, Baliho &amp; Pengurusan Pajak SKPD</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Vehicle Fleet Wrapping &amp; Wall Painting</span>
                  </div>
                </div>
              </div>

              {/* Info Lengkap Button (Styled like reference) */}
              <div>
                <button
                  onClick={() => onNavigate('media-advertising')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#f7e4b5] to-[#d4a853] hover:from-white hover:to-amber-400 text-blue-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.5)] border border-amber-200 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Info Lengkap</span>
                  <span className="text-amber-700 font-bold">&gt;</span>
                </button>
              </div>

            </div>

            {/* Pillar 2: Event Organizer */}
            <div className="group relative bg-gradient-to-b from-blue-900/40 via-blue-950/60 to-black/80 border-2 border-blue-500/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-400/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] transition-all duration-300">
              
              <div>
                {/* Glowing Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] group-hover:text-amber-300 transition-colors">
                  Event Organizer
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Manajemen acara terintegrasi dari konsep kreatif, manajemen produksi, hingga eksekusi panggung berskala besar untuk menciptakan momen tak terlupakan.
                </p>

                {/* Sub-services list */}
                <div className="space-y-2.5 text-left text-xs sm:text-sm text-neutral-300 bg-black/40 p-4 rounded-xl border border-white/5 mb-8">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>MICE (Meeting, Incentive, Convention, Exhibition)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Brand Activation &amp; Nationwide Roadshows</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Company Gathering, Gala Dinner &amp; Outings</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Custom Expo Booth Production &amp; Stage Decor</span>
                  </div>
                </div>
              </div>

              {/* Info Lengkap Button (Styled like reference) */}
              <div>
                <button
                  onClick={() => onNavigate('eo')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#f7e4b5] to-[#d4a853] hover:from-white hover:to-amber-400 text-blue-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.5)] border border-amber-200 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Info Lengkap</span>
                  <span className="text-amber-700 font-bold">&gt;</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR CLIENT (High-Visibility Client Grid Image)
      ========================================================================== */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#040b18] via-[#0a1b38] to-[#040d1c] border-t border-blue-900/40">
        
        {/* Top Quote */}
        <p className="text-xs sm:text-sm font-semibold text-neutral-300 text-center px-4 mb-6">
          &ldquo;Mengubah Ide Menjadi Kenyataan : Event Berkesan untuk Setiap Kesempatan.&rdquo;
        </p>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          
          {/* Logo */}
          <div className="flex justify-center items-center mb-3">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-amber-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-10">
            OUR CLIENT
          </h2>

          {/* Client Showcase Image */}
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 group hover:border-amber-400/50 transition-colors">
            <img
              src="/EO/ClientEO.png"
              alt="Our Clients - PT Integra Aneksa Kreasindo"
              className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
            />
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
