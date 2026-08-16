import React from 'react';
import { Phone, Mail, User, MapPin, Instagram, QrCode } from 'lucide-react';

interface EOContactProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOContact: React.FC<EOContactProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#030917] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* =========================================================================
          SECTION 1: KONTAK & ALAMAT KAMI (NETWORK MESH BANNER)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-[#020714] via-[#051433] to-[#020b1e] border-b border-blue-900/40 overflow-hidden">
        
        {/* Cyber Network Grid Overlay Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(6,182,212,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Direct Contacts & QR Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* PIC Contact */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                    Lia Yuliantina
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <a href="tel:081398479044" className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors block">
                    0813-9847-9044
                  </a>
                  <a href="tel:0217452304" className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors block">
                    (021) 745 2304
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <a href="mailto:admin@grasindopro.com" className="text-base sm:text-lg font-extrabold text-white hover:text-amber-400 transition-colors">
                    admin@grasindopro.com
                  </a>
                </div>
              </div>

              {/* SCAN ME! Card with QR Code */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-4 bg-white text-slate-900 px-5 py-3 rounded-2xl shadow-2xl border-2 border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-12 border-2 border-slate-800 rounded-lg flex items-center justify-center relative">
                      <div className="w-3 h-0.5 bg-slate-800 rounded-full mb-8" />
                    </div>
                    <div className="text-left font-black tracking-tight leading-tight">
                      <span className="text-sm block text-slate-900">SCAN</span>
                      <span className="text-base block text-sky-500">ME!</span>
                    </div>
                  </div>
                  
                  {/* QR Box with Amber Corner Accents */}
                  <div className="p-1 border border-amber-400 rounded-lg bg-white relative">
                    <QrCode className="w-14 h-14 text-slate-950" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Title & Office Addresses */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
                Kontak &amp; Alamat Kami
              </h1>

              {/* Location Pin & Addresses */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 shadow-md mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <div className="space-y-4 text-xs sm:text-sm text-neutral-200">
                  {/* Head Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-amber-500 uppercase tracking-wide">
                      Head Office
                    </h2>
                    <p className="leading-relaxed text-neutral-200 mt-1">
                      Bintaro Trade Center Sektor 7, Jl. Jend Sudirman Blok B2 No. 10, Kel. Pondok Jaya Kec. Pondok Aren Kota Tangerang Selatan
                    </p>
                  </div>

                  {/* Representatif Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-amber-500 uppercase tracking-wide">
                      Representatif Office
                    </h2>
                    <p className="leading-relaxed text-neutral-200 mt-1">
                      Griya Serpong Asri Bougenville Blok F No. 17 Suradita, Kec. Cisauk, Tangerang, Banten 15220
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline bottom right */}
              <div className="text-right pt-6">
                <span className="text-amber-500 font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
                  Take it, Do it, Love it
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: WORKSHOP KAMI (FABRIKASI & PRODUKSI)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#030917] via-[#051433] to-[#020714] overflow-hidden">
        
        {/* Top Banner: Punya Ide Proyek Hebat? Mari Berkolaborasi! */}
        <div className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-3.5 px-4 text-center mb-12 shadow-md">
          <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-950 max-w-4xl mx-auto tracking-wide">
            Punya Ide Proyek Hebat? Mari Berkolaborasi!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo & Section Title */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3">
              <img
                src="/images/logo.png"
                alt="Grasindo Pro"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
                Workshop Kami
              </h2>
            </div>
          </div>

          {/* 7 Workshop Production Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            
            {/* Photo 1: Big Vertical Steel Assembly */}
            <div className="lg:col-span-4 aspect-[4/5] bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
              <img
                src="/EO/workshop/Screenshot 2026-08-16 051131.png"
                alt="Perakitan Rangka Besi Baja Billboard di Lantai Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Photos 2 & 3: Welding & Signage Assembly */}
            <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
              <div className="aspect-square bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051138.png"
                  alt="Pengelasan Struktur Konstruksi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051143.png"
                  alt="Perakitan Panel Signage dan Lampu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Photos 4 & 5: Custom Curved Booth & Finishing */}
            <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
              <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051149.png"
                  alt="Produksi Booth Pameran Kayu Putih"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051156.png"
                  alt="Pengecatan dan Finishing Counter Curved Booth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Photos 6 & 7: Modular Stage & Finishing Decor */}
            <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
              <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051202.png"
                  alt="Perakitan Furniture dan Meja Receptionist"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051208.png"
                  alt="Finishing Spirella Decor Exhibition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Bottom Golden-Slate Gradient Contact Strip */}
        <div className="w-full bg-gradient-to-r from-[#6b8299] via-[#3a5874] to-[#6b8299] py-6 sm:py-8 px-6 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-slate-400/30 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Logo & Circular Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
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

            {/* Right: Company Name & Direct Contacts */}
            <div className="text-center md:text-right space-y-1">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl tracking-wide uppercase text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                PT. INTEGRA ANEKSA KREASINDO
              </h4>
              <div className="space-y-0.5">
                <div>
                  <a
                    href="tel:+6281398479044"
                    className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-amber-300 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    +62 813-9847-9044
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@grasindopro.com"
                    className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-amber-300 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
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
