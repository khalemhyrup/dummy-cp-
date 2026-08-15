import React from 'react';
import { Phone, Mail, Instagram, ChevronRight, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface EOAdverstingProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOAdversting: React.FC<EOAdverstingProps> = ({ onNavigate, onContactClick }) => {
  return (
    <div className="w-full bg-[#040b18] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* Top Breadcrumb Header */}
      <div className="bg-[#030814] py-3 px-6 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('eo-home')}
            className="text-xs font-mono text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>← Back to EO &amp; Advertising Portal</span>
          </button>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            Media Advertising Division
          </span>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 1: ADVERTISING - BILLBOARD
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#030917] via-[#081a3d] to-[#040c1a] border-b border-blue-900/40 overflow-hidden">
        
        {/* Background wave texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none" />

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
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Membangun <strong>top-of-mind awareness</strong> produk secara massal dan kontinu yang memanfaatkan ukuran raksasa untuk mendominasi ruang pandang pengendara di jalan protokol. Sangat efektif untuk kampanye nasional, peluncuran produk baru, dan penguatan citra perusahaan skala besar.
              </p>
            </div>

            {/* Right: OUR EXPERIENCE Photo Cards */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex justify-end">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider">
                  OUR EXPERIENCE
                </span>
              </div>

              {/* 3 Billboard Photo Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Photo 1 */}
                <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner1.png"
                    alt="Billboard Nokia Arteri Kota"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Photo 2 */}
                <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner2.png"
                    alt="Billboard Herbalife Jalan Tol Jagorawi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Photo 3 */}
                <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Advertising/baner3.png"
                    alt="Billboard Grab & BPR BBA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Client Strip 1: Grab, Herbalife, Chevrolet */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16">
            <div className="flex items-center gap-2 bg-emerald-600 px-4 py-1 rounded-full text-white font-extrabold text-xs tracking-wider shadow-sm">
              <span>Grab</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 text-[#2d5f27] font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              <span>HERBALIFE</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 text-[#8c6b12] font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              <span>CHEVROLET</span>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 2: NEON BOX & SHOP SIGN
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040c1a] via-[#081a3d] to-[#040b18] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Neon Box */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Neon Box
              </h2>
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Menjaga visibilitas dan operasional bisnis tetap terlihat 24 jam penuh. Menjadi panduan visual di area padat pertokoan.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
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
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Memberikan informasi nama toko, jenis usaha, dan sponsor secara lugas di garis depan.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
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

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Client Strip 2: Ajaib, Asian Paints, Cushman & Wakefield */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16">
            <span className="font-extrabold text-blue-900 text-xs sm:text-sm tracking-tight uppercase">
              🧞 ajaib
            </span>
            <span className="font-extrabold text-[#d84315] text-xs sm:text-sm tracking-tight uppercase">
              ap asianpaints
            </span>
            <span className="font-extrabold text-[#c62828] text-xs sm:text-sm tracking-tight uppercase">
              CUSHMAN &amp; WAKEFIELD
            </span>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 3: PYLON SIGN & T-BANNER
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040b18] via-[#081a3d] to-[#040c1a] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Pylon Sign */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Pylon Sign
              </h2>
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Menjadi bangunan penanda resmi (landmark) kawasan bisnis terpadu atau ritel besar yang Menampilkan daftar penyewa (tenant) atau logo utama pada struktur vertikal yang sangat tinggi.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
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
                      alt="Pylon Sign Tower Jakarta"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/phylonsign3.png"
                      alt="Pylon Sign Tenant List"
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
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Menciptakan efek urgensi, kemeriahan, dan keramaian untuk promosi jangka pendek.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
                  OUR EXPERIENCE
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Advertising/Tbaner1.png"
                      alt="T-Banner IQOS Pinggir Jalan"
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

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Client Strip 3: PEFINDO, IQOS */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-12 sm:gap-20">
            <span className="font-extrabold text-blue-900 text-xs sm:text-sm tracking-tight uppercase">
              PEFINDO CREDIT RATING AGENCY
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight uppercase flex items-center gap-1">
              <span>●</span> IQOS
            </span>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 4: SIGNAGE & LETTER SIGNAGE
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040c1a] via-[#081a3d] to-[#040b18] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Signage */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Signage
              </h2>
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Media ini menggunakan simbol, teks, gambar, atau kombinasi keduanya untuk menyampaikan informasi, petunjuk arah, identitas, maupun pesan pemasaran kepada publik.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
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
              
              <span className="text-sm font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Menanamkan persepsi premium, bonafide, dan kredibilitas tinggi pada identitas toko.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-2 text-right">
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

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Client Strip 4: LPS, FKNK */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-12 sm:gap-20">
            <span className="font-extrabold text-amber-950 text-xs sm:text-sm tracking-tight uppercase">
              LPS LEMBAGA PENJAMIN SIMPANAN
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight uppercase">
              FKNK LAW FIRM
            </span>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 5: BRANDING CAR, WALL PAINTING, TAX & PERMIT + CONTACT FOOTER
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040b18] via-[#081a3d] to-[#030814] overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
            
            {/* Column 1: Branding Car */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide text-center sm:text-left">
                Branding Car
              </h3>
              
              <span className="text-xs font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs text-neutral-200 leading-relaxed text-justify">
                Menjemput bola dengan membawa pesan iklan langsung ke wilayah pemukiman dan pusat kota. Mengubah aset transportasi statis menjadi papan reklame bergerak bebas hambatan geografis.
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-1 text-right">
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
              
              <span className="text-xs font-extrabold text-amber-500 uppercase tracking-wide block">
                Fungsi Utama
              </span>
              <p className="text-xs text-neutral-200 leading-relaxed text-justify">
                Melakukan pendekatan iklan secara organik, artistik, dan membaur dengan lingkungan lokal.
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-extrabold text-amber-500 uppercase tracking-wider block mb-1 text-right">
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
                Kami Siap Membantu Anda
              </span>
              
              <div className="space-y-1.5 text-xs text-neutral-200 bg-blue-950/40 p-3 rounded-lg border border-blue-500/20">
                <div className="font-semibold text-amber-300"># Izin Penyelenggaraan Reklame (IPR)</div>
                <div className="font-semibold text-amber-300"># Perizinan PBG/IMB Gedung, Rumah Dan Bangunan Lainnya</div>
                <div className="font-semibold text-amber-300"># Pengurusan Pajak Reklame/SKPD</div>
              </div>

              <div className="pt-2">
                <div className="w-full aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group flex items-center justify-center p-2 bg-white/5">
                  <img
                    src="/EO/Advertising/taxpermit1.png"
                    alt="Dokumen Perizinan Pajak Reklame SKPD & IPR"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Bottom Golden-Amber Contact Strip with Event Organizer Button */}
        <div className="w-full bg-gradient-to-r from-[#ca9035] via-[#dfa545] to-[#ebb65b] py-6 sm:py-8 px-6 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-amber-300/30 mt-10">
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

            {/* Center: Event Organizer Switcher Button */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
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
