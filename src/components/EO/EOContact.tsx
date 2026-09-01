import React from 'react';
import { Instagram } from 'lucide-react';

interface EOContactProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOContact: React.FC<EOContactProps> = () => {
  return (
    <div className="relative w-full bg-[#020714] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black min-h-screen">
      
      {/* =========================================================================
          SECTION 1: KONTAK & ALAMAT KAMI (EXACT SCREENSHOT MATCH)
      ========================================================================== */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-between py-12 sm:py-16 px-6 sm:px-10 lg:px-12 overflow-hidden border-b border-blue-900/40 bg-[#020714]">
        
        {/* Background Video with AutoPlay - Full Brightness & Complete Graphic Visibility */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/contact-eo.png"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        >
          <source src="/EO/contact-eo.mp4" type="video/mp4" />
        </video>

        {/* Minimal Transparent Overlay - No Darkening */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start">
            
            {/* =====================================================================
                LEFT COLUMN: Contact Items & SCAN ME Badge
            ====================================================================== */}
            <div className="col-span-5 space-y-3 sm:space-y-6 lg:space-y-7">
              
              {/* 1. PIC Contact */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-[1.5px] sm:border-[2.5px] border-[#f97316] flex items-center justify-center shrink-0 shadow-md bg-transparent">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-[#f97316]" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs sm:text-base lg:text-lg font-bold text-white tracking-wide block">
                    Lia Yuliantina
                  </span>
                </div>
              </div>

              {/* 2. Phone Numbers */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-[1.5px] sm:border-[2.5px] border-[#f97316] flex items-center justify-center shrink-0 shadow-md bg-transparent">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-[#f97316]" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <a 
                    href="https://wa.me/6281398479044" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] sm:text-base lg:text-lg font-bold text-white hover:text-[#f97316] transition-colors block cursor-pointer"
                  >
                    0813-9847-9044
                  </a>
                  <a 
                    href="tel:0217452304" 
                    className="text-[11px] sm:text-base lg:text-lg font-bold text-white hover:text-[#f97316] transition-colors block"
                  >
                    (021) 745 2304
                  </a>
                </div>
              </div>

              {/* 3. Email Contact */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    <circle cx="12" cy="13" r="2.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href="mailto:admin@grasindopro.com" 
                    className="text-[11px] sm:text-base lg:text-lg font-bold text-white hover:text-[#f97316] transition-colors block"
                  >
                    admin@grasindopro.com
                  </a>
                </div>
              </div>

              {/* 4. SCAN ME! Badge */}
              <div className="pt-1 sm:pt-2">
                <div className="inline-flex items-center gap-2 sm:gap-3.5 lg:gap-4 bg-white text-slate-900 px-2.5 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl shadow-2xl">
                  {/* Smartphone Graphic */}
                  <div className="w-6 h-10 sm:w-8 sm:h-14 lg:w-9 lg:h-16 border-[1.5px] sm:border-[2.5px] border-slate-900 rounded-lg sm:rounded-xl flex flex-col justify-between items-center py-1 sm:py-1.5 shrink-0">
                    <div className="w-1.5 sm:w-2.5 h-0.5 bg-slate-900 rounded-full" />
                    <div className="w-3 sm:w-4 h-0.5 bg-slate-900 rounded-full" />
                  </div>

                  {/* SCAN ME! Text */}
                  <div className="flex flex-col leading-none select-none">
                    <span className="text-xs sm:text-lg lg:text-xl text-slate-900 font-extrabold tracking-wider">
                      SCAN
                    </span>
                    <span className="text-sm sm:text-xl lg:text-2xl text-[#0284c7] font-black tracking-wider">
                      ME!
                    </span>
                  </div>
                  
                  {/* QR Code with 4 Orange Corner Accents */}
                  <div className="relative p-1 sm:p-1.5 bg-white shrink-0">
                    <div className="absolute top-0 left-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 border-t-[1.5px] sm:border-t-[2.5px] border-l-[1.5px] sm:border-l-[2.5px] border-[#f97316]" />
                    <div className="absolute top-0 right-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 border-t-[1.5px] sm:border-t-[2.5px] border-r-[1.5px] sm:border-r-[2.5px] border-[#f97316]" />
                    <div className="absolute bottom-0 left-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 border-b-[1.5px] sm:border-b-[2.5px] border-l-[1.5px] sm:border-l-[2.5px] border-[#f97316]" />
                    <div className="absolute bottom-0 right-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 border-b-[1.5px] sm:border-b-[2.5px] border-r-[1.5px] sm:border-r-[2.5px] border-[#f97316]" />
                    <img
                      src="/EO/barcode-contact-EO.png"
                      alt="Scan Me Barcode"
                      className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain block"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* =====================================================================
                RIGHT COLUMN: Title, Map Pin Address & Tagline
            ====================================================================== */}
            <div className="col-span-7 space-y-3 sm:space-y-6 lg:space-y-8 pl-1 sm:pl-4">
              
              {/* Header Title */}
              <h1 className="text-base sm:text-3xl md:text-4xl lg:text-[46px] font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(37,99,235,0.6)] leading-tight">
                Kontak &amp; Alamat Kami
              </h1>

              {/* Location Pin & Addresses */}
              <div className="flex items-start gap-2.5 sm:gap-4 lg:gap-6 pt-1">
                
                {/* Custom Map Pin with Home inside and Base Ring */}
                <div className="w-9 sm:w-14 lg:w-16 h-12 sm:h-18 lg:h-20 shrink-0 relative flex flex-col items-center mt-0.5">
                  <svg className="w-8 sm:w-12 lg:w-14 h-11 sm:h-16 lg:h-18 drop-shadow-lg" viewBox="0 0 48 56" fill="none">
                    {/* Map Pin Body */}
                    <path
                      d="M24 2C13.5 2 5 10.5 5 21C5 32 24 50 24 50C24 50 43 32 43 21C43 10.5 34.5 2 24 2Z"
                      fill="#f97316"
                      stroke="#020714"
                      strokeWidth="2"
                    />
                    {/* House inside Pin */}
                    <path
                      d="M24 12L14 20H18V28H30V20H34L24 12Z"
                      fill="#020714"
                    />
                    {/* Small Inner Door */}
                    <rect x="22" y="23" width="4" height="5" fill="#f97316" />
                    {/* Base Oval Ring */}
                    <ellipse cx="24" cy="52" rx="14" ry="3.5" stroke="#f97316" strokeWidth="2.5" fill="none" />
                  </svg>
                </div>
                
                <div className="space-y-2 sm:space-y-4 lg:space-y-5 text-neutral-100 max-w-xl">
                  {/* Head Office */}
                  <div>
                    <h2 className="text-xs sm:text-base lg:text-lg font-bold text-[#f97316] tracking-wide">
                      Head Office
                    </h2>
                    <p className="leading-snug sm:leading-relaxed text-white text-[10px] sm:text-sm lg:text-base font-normal mt-0.5">
                      Bintaro Trade Center Sektor 7, Jl. Jend Sudirman Blok B2 No. 10, Kel. Pondok Jaya Kec. Pondok Aren Kota Tangerang Selatan
                    </p>
                  </div>

                  {/* Representatif Office */}
                  <div>
                    <h2 className="text-xs sm:text-base lg:text-lg font-bold text-[#f97316] tracking-wide">
                      Representatif Office
                    </h2>
                    <p className="leading-snug sm:leading-relaxed text-white text-[10px] sm:text-sm lg:text-base font-normal mt-0.5">
                      Griya Serpong Asri Bougenville Blok F No. 17 Suradita, Kec. Cisauk, Tangerang, Banten 15220
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Tagline: Positioned directly above Section 2 Banner */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-10 lg:px-12 relative z-10 text-right pt-10 sm:pt-16 pb-4">
          <span className="font-slogan font-bold italic text-[#f97316] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_2px_10px_rgba(249,115,22,0.5)]">
            take it, do it, love it !
          </span>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: WORKSHOP KAMI (FABRIKASI & PRODUKSI)
      ========================================================================== */}
      <section className="relative w-full pt-0 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/contact-eo.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/contact-eo.mp4" type="video/mp4" />
        </video>

        {/* Minimal Transparent Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Top Banner: Punya Ide Proyek Hebat? Mari Berkolaborasi! */}
        <div className="relative z-10 w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-3.5 px-4 text-center mb-8 sm:mb-12 shadow-md">
          <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-950 max-w-4xl mx-auto tracking-wide">
            Punya Ide Proyek Hebat? Mari Berkolaborasi!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Logo & Section Title */}
          <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2 sm:space-y-3">
              <img
                src="/images/logo.png"
                alt="Grasindo Pro"
                className="h-8 sm:h-12 w-auto object-contain"
              />
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
                Workshop Kami
              </h2>
            </div>
          </div>

          {/* 7 Workshop Production Photos (Laptop side-by-side composition preserved on mobile) */}
          <div className="grid grid-cols-12 gap-1.5 sm:gap-4 lg:gap-6 items-stretch">
            
            {/* Photo 1: Big Vertical Steel Assembly */}
            <div className="col-span-4 aspect-[4/5] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
              <img
                src="/EO/workshop/Screenshot 2026-08-16 051131.png"
                alt="Perakitan Rangka Besi Baja Billboard di Lantai Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Photos 2 & 3: Welding & Signage Assembly */}
            <div className="col-span-2 flex flex-col gap-1.5 sm:gap-4 lg:gap-6">
              <div className="aspect-square bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051138.png"
                  alt="Pengelasan Struktur Konstruksi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051143.png"
                  alt="Perakitan Panel Signage dan Lampu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Photos 4 & 5: Custom Curved Booth & Finishing */}
            <div className="col-span-3 flex flex-col gap-1.5 sm:gap-4 lg:gap-6">
              <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051149.png"
                  alt="Produksi Booth Pameran Kayu Putih"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051156.png"
                  alt="Pengecatan dan Finishing Counter Curved Booth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Photos 6 & 7: Modular Stage & Finishing Decor */}
            <div className="col-span-3 flex flex-col gap-1.5 sm:gap-4 lg:gap-6">
              <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051202.png"
                  alt="Perakitan Furniture dan Meja Receptionist"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                <img
                  src="/EO/workshop/Screenshot 2026-08-16 051208.png"
                  alt="Finishing Spirella Decor Exhibition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

          {/* Tagline right */}
          <div className="text-right pt-12 sm:pt-16 pb-2">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          BOTTOM SLATE GRADIENT CONTACT STRIP
      ========================================================================== */}
      <div className="relative w-full bg-gradient-to-r from-[#6b8299] via-[#3a5874] to-[#6b8299] py-4 sm:py-6 px-4 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-slate-400/30">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 sm:gap-6">
          
          {/* Left: Logo & Circular Socials */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
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

          {/* Shifted Slightly Right: Hubungi Kami via WhatsApp Button */}
          <div className="flex items-center justify-center px-1 sm:px-2 translate-x-2 sm:translate-x-4 md:translate-x-6">
            <a
              href="https://wa.me/6281398479044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-[10px] sm:text-xs md:text-sm lg:text-base px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] border border-emerald-300/40 transition-all transform hover:scale-105 cursor-pointer group whitespace-nowrap"
            >
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span>Hubungi Kami via WhatsApp</span>
            </a>
          </div>

          {/* Right: Company Name & Direct Contacts */}
          <div className="text-right space-y-0.5 shrink-0">
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
