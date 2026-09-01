import React from 'react';
import { Instagram } from 'lucide-react';

interface EOServicePageProps {
  onNavigate: (page: string) => void;
  onContactClick?: () => void;
}

export const EOServicePage: React.FC<EOServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full bg-[#050e1f] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black min-h-screen flex flex-col justify-between">
      
      {/* =========================================================================
          SECTION: OUR SERVICE (Advertising vs Event Organizer)
      ========================================================================== */}
      <section className="w-full relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#050e1f] overflow-hidden flex-1">

        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/our-services.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/our-services.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-amber-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-14">
            OUR SERVICE
          </h1>

          {/* 2 Big Glowing Pillar Choices: Advertising & Event Organizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Pillar 1: Advertising */}
            <div className="group relative bg-gradient-to-b from-blue-900/40 via-blue-950/60 to-black/80 border-2 border-blue-500/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-400/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] transition-all duration-300">

              <div>
                {/* Glowing Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] group-hover:text-amber-300 transition-colors">
                  Advertising
                </h2>

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

              {/* Info Lengkap Button */}
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
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] group-hover:text-amber-300 transition-colors">
                  Event Organizer
                </h2>

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

              {/* Info Lengkap Button */}
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

          {/* Bottom Quote of Service Section */}
          <div className="text-center pt-10 sm:pt-14">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-neutral-300 px-4">
              &ldquo;Mengubah Ide Menjadi Kenyataan : Event Berkesan untuk Setiap Kesempatan.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM SLATE GRADIENT CONTACT STRIP
      ========================================================================== */}
      <div className="relative w-full bg-gradient-to-r from-[#6b8299] via-[#3a5874] to-[#6b8299] py-4 sm:py-8 px-4 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-slate-400/30">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Logo & Circular Socials */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src="/images/logo.png"
              alt="Grasindopro"
              className="h-7 sm:h-10 lg:h-12 w-auto object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
            />
            <div className="flex items-center gap-1.5 sm:gap-3 text-slate-900">
              <a
                href="https://www.tiktok.com/@grasindopro.advertising"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                aria-label="TikTok"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/grasindo.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-pink-600 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Right: Company Name & Direct Contacts */}
          <div className="text-right space-y-0.5">
            <h4 className="font-extrabold text-[10px] sm:text-base lg:text-xl tracking-wide uppercase text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              PT. INTEGRA ANEKSA KREASINDO
            </h4>
            <div className="space-y-0.5">
              <div>
                <a
                  href="https://wa.me/6281398479044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] sm:text-sm lg:text-base font-bold text-white hover:text-amber-300 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                >
                  +62 813-9847-9044
                </a>
              </div>
              <div>
                <a
                  href="mailto:admin@grasindopro.com"
                  className="text-[9px] sm:text-sm lg:text-base font-bold text-white hover:text-amber-300 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                >
                  admin@grasindopro.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
