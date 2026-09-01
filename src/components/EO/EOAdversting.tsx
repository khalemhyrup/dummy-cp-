import React from 'react';
import { Phone, Mail, Instagram, ChevronRight, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface EOAdverstingProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOAdversting: React.FC<EOAdverstingProps> = ({ onNavigate, onContactClick }) => {
  return (
    <div className="w-full bg-[#040b18] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* =========================================================================
          SLIDE 1: ADVERTISING - BILLBOARD
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/EO&Avertising.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/EO&Advertising.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Main Titles */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
              Advertising
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
              Billboard
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Description Column - Aligned with Photo Cards */}
            <div className="lg:col-span-5 space-y-4 lg:pt-8">
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Membangun <strong>top-of-mind awareness</strong> produk secara massal dan kontinu yang memanfaatkan ukuran raksasa untuk mendominasi ruang pandang pengendara di jalan protokol. Sangat efektif untuk kampanye nasional, peluncuran produk baru, dan penguatan citra perusahaan skala besar.
              </p>
            </div>

            {/* Right: OUR EXPERIENCE Photo Cards */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex justify-end mb-1">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
              </div>

              {/* 3 Billboard Photo Cards (Side by side on mobile and desktop) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                
                {/* Photo 1 */}
                <div className="aspect-[3/4] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner1.png"
                    alt="Billboard Nokia Arteri Kota"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Photo 2 */}
                <div className="aspect-[3/4] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner2.png"
                    alt="Billboard Herbalife Jalan Tol Jagorawi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Photo 3 */}
                <div className="aspect-[3/4] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner3.png"
                    alt="Billboard Grab & BPR BBA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Tagline right - Directly above Client Strip 1 */}
          <div className="text-right pt-6 sm:pt-10 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Client Strip 1: Grab, Herbalife, Chevrolet */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16 md:gap-20">
            <img src="/EO/logo-client/Grab-logo.svg" alt="Grab" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/herbalife-logo.svg" alt="Herbalife" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/chevrolet-logo.svg" alt="Chevrolet" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 2: NEON BOX & SHOP SIGN
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/EO&Avertising.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/EO&Advertising.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Neon Box */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Neon Box
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Menjaga visibilitas dan operasional bisnis tetap terlihat 24 jam penuh. Menjadi panduan visual di area padat pertokoan.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="w-full aspect-[16/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/neonbox1.png"
                    alt="Neon Box Ajaib Sekuritas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right: Shop Sign */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Shop Sign
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Memberikan informasi nama toko, jenis usaha, dan sponsor secara lugas di garis depan.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/shopsign1.png"
                      alt="Shop Sign Asian Paints"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/shopsign2.png"
                      alt="Shop Sign Cushman & Wakefield"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Tagline right - Directly above Client Strip 2 */}
          <div className="text-right pt-6 sm:pt-10 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Client Strip 2: Ajaib, Asian Paints, Cushman & Wakefield */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3.5 sm:py-4 px-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 sm:gap-14 md:gap-20">
            <img 
              src="/EO/logo-client/ajaib-logo.svg?v=3" 
              alt="Ajaib" 
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" 
            />
            <img 
              src="/EO/logo-client/asian-paint-logo.svg?v=3" 
              alt="Asian Paints" 
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" 
            />
            <img 
              src="/EO/logo-client/Chusman-wakefield-logo.svg?v=3" 
              alt="Cushman & Wakefield" 
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" 
            />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 3: PYLON SIGN & T-BANNER
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/EO&Avertising.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/EO&Advertising.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Pylon Sign */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Pylon Sign
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Menjadi bangunan penanda resmi (landmark) kawasan bisnis terpadu atau ritel besar yang Menampilkan daftar penyewa (tenant) atau logo utama pada struktur vertikal yang sangat tinggi.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/phylonsign1.png"
                      alt="Pylon Sign SCBD Equity Tower"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/phylonsign2.png"
                      alt="Pylon Sign Wisma Nugraha"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/phylonsign3.png"
                      alt="Pylon Sign Sopodel Tower"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: T-Banner */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                T-Banner
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                T-Banner efektif untuk promosi dinamis, event, dan penanda lokasi dengan jangkauan luas.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/Tbaner1.png"
                      alt="T-Banner IQOS Event"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/Tbaner2.png"
                      alt="T-Banner Herbalife Event"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Tagline right - Directly above Client Strip 3 */}
          <div className="text-right pt-6 sm:pt-10 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Client Strip 3: PEFINDO, IQOS */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-12 sm:gap-20 md:gap-24">
            <img src="/EO/logo-client/pefindo-logo.svg" alt="PEFINDO" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/iqos-logo.svg" alt="IQOS" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 4: SIGNAGE & LETTER SIGNAGE
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 border-b border-blue-900/40 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/EO&Avertising.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/EO&Advertising.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Signage */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Signage
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Media ini menggunakan simbol, teks, gambar, atau kombinasi keduanya untuk menyampaikan informasi, petunjuk arah, identitas, maupun pesan pemasaran kepada publik.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/signage1.png"
                      alt="Signage Gedung LPS Lembaga Penjamin Simpanan"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/signage2.png"
                      alt="Pemasangan Signage LPS Scaffolding"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Letter Signage */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Letter Signage
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-neutral-100 leading-relaxed text-justify">
                Menanamkan persepsi premium, bonafide, dan kredibilitas tinggi pada identitas toko.
              </p>

              <div className="pt-2">
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 uppercase tracking-wider block mb-2 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/lettersignage1.png"
                      alt="Letter Sign Wisma Nugraha"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/lettersignage2.png"
                      alt="Illuminated Letter Sign FKNK Law Firm"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Tagline right - Directly above Client Strip 4 */}
          <div className="text-right pt-6 sm:pt-10 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Client Strip 4: LPS, FKNK */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-12 sm:gap-20 md:gap-24">
            <img src="/EO/logo-client/LPS-logo.svg" alt="LPS" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/fknk-logo.svg" alt="FKNK Law Firm" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 5: BRANDING CAR, WALL PAINTING, TAX & PERMIT + CONTACT FOOTER
      ========================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 pb-0 overflow-hidden bg-[#030917]">
        
        {/* Background Video with AutoPlay - Full Brightness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/EO&Avertising.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/EO/EO&Advertising.mp4" type="video/mp4" />
        </video>

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
            
            {/* Column 1: Branding Car */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Branding Car
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-100 leading-relaxed text-justify">
                Menjemput bola dengan membawa pesan iklan langsung ke wilayah pemukiman dan pusat kota. Mengubah aset transportasi statis menjadi papan reklame bergerak bebas hambatan geografis.
              </p>

              <div className="pt-2">
                <span className="text-xs sm:text-sm md:text-base font-black text-amber-400 uppercase tracking-wider block mb-1.5 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="w-full aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/brandingcar.png"
                    alt="Branding Mobil Van Asian Paints"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Wall Painting */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Wall Painting
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-100 leading-relaxed text-justify">
                Melakukan pendekatan iklan secara organik, artistik, dan membaur dengan lingkungan lokal.
              </p>

              <div className="pt-2">
                <span className="text-xs sm:text-sm md:text-base font-black text-amber-400 uppercase tracking-wider block mb-1.5 text-right drop-shadow-sm">
                  OUR EXPERIENCE
                </span>
                <div className="w-full aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/wallpainting.png"
                    alt="Wall Painting Mural Asian Paints"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 3: Tax & Permit */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Tax &amp; Permit
              </h3>
              
              <span className="text-xs font-extrabold text-amber-500 uppercase tracking-wide block">
                KAMI SIAP MEMBANTU ANDA
              </span>

              <div className="space-y-2 text-xs sm:text-sm text-amber-300 font-bold bg-blue-950/40 p-4 rounded-xl border border-blue-500/30">
                <div># Izin Penyelenggaraan Reklame (IPR)</div>
                <div># Perizinan PBG/IMB Gedung, Rumah Dan Bangunan Lainnya</div>
                <div># Pengurusan Pajak Reklame/SKPD</div>
              </div>

              <div className="pt-2">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden group flex items-center justify-center">
                  <img
                    src="/EO/Advertising/taxpermit1.png"
                    alt="Dokumen Perizinan Pajak Reklame SKPD & IPR"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Tagline right - Directly above Bottom Golden Contact Strip */}
          <div className="text-right pt-6 sm:pt-10 pb-2 sm:pb-3">
            <span className="font-slogan font-bold italic text-amber-500 text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
              take it, do it, love it !
            </span>
          </div>

        </div>

        {/* Bottom Golden-Amber Contact Strip with EO Button */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#ca9035] via-[#dfa545] to-[#ebb65b] py-6 sm:py-8 px-6 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-amber-300/30">
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

            {/* Center: Event Organizer Switcher Button */}
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-base font-extrabold text-slate-950 uppercase tracking-wider mb-1.5">
                Event Organizer
              </span>
              <button
                onClick={() => onNavigate?.('eo')}
                className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#f7e4b5] to-[#d4a853] hover:from-white hover:to-amber-400 text-blue-950 font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full shadow-md border border-amber-200 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Info Lengkap</span>
                <span className="text-amber-700 font-bold">&gt;</span>
              </button>
            </div>

            {/* Right: Company Name & Direct Contacts */}
            <div className="text-center md:text-right space-y-1">
              <h4 className="font-extrabold text-base sm:text-lg tracking-wide uppercase text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                PT. INTEGRA ANEKSA KREASINDO
              </h4>
              <div className="space-y-0.5">
                <div>
                  <a
                    href="tel:+6281398479044"
                    className="text-xs sm:text-sm font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    +62 813-9847-9044
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@grasindopro.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
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
