import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Instagram } from 'lucide-react';

interface EOGalleryProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOGallery: React.FC<EOGalleryProps> = ({ onNavigate, onContactClick }) => {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string } | null>(null);

  // Lock background scroll when video modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else if (onNavigate) {
      onNavigate('eo-contact');
    }
  };

  return (
    <div className="relative w-full bg-[#020714] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* =========================================================================
          SLIDE 1: GALERI UTAMA (4 FOTO SEJAJAR - VIDEO BACKGROUND TERANG & JELAS)
      ========================================================================== */}
      <section className="relative w-full pt-8 sm:pt-14 lg:pt-20 pb-2 sm:pb-3 px-2.5 sm:px-6 lg:px-8 border-b border-blue-950/60 bg-[#020714] overflow-hidden">
        
        {/* Background Video Terang & Jelas */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/gallery-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90"
        >
          <source src="/EO/gallery-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Light Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Title "Our Gallery Project" */}
          <div className="text-center mb-5 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] select-none">
              Our Gallery Project
            </h1>
          </div>

          {/* 4 Image Cards Row - ALWAYS FLEX-ROW (HORIZONTAL 1 ROW) ON BOTH MOBILE & LAPTOP */}
          <div className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-3.5 md:gap-4 lg:gap-5 w-full select-none">
            
            {/* Foto 1 (Pylon Sign Outdoor) - Flex 2.4 */}
            <div className="flex-[2.4] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[220px] md:h-[280px] lg:h-[330px] xl:h-[360px] relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black/80">
              <img
                src="/EO/canva_gallery/galeri_img1.jpg"
                alt="Galeri Proyek 1"
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Foto 2 (Billboard Berger / Mowilex) - Flex 4.2 */}
            <div className="flex-[4.2] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[220px] md:h-[280px] lg:h-[330px] xl:h-[360px] relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black/80">
              <img
                src="/EO/canva_gallery/galeri_img3.jpg"
                alt="Galeri Proyek 2"
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Foto 3 (Branding Kaca LIXIL / American Standard) - Flex 1.7 */}
            <div className="flex-[1.7] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[220px] md:h-[280px] lg:h-[330px] xl:h-[360px] relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black/80">
              <img
                src="/EO/canva_gallery/galeri_img4.jpg"
                alt="Galeri Proyek 3"
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Foto 4 (Letter Signage Wisma Nugraha Santana Night) - Flex 3.1 */}
            <div className="flex-[3.1] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[220px] md:h-[280px] lg:h-[330px] xl:h-[360px] relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black/80">
              <img
                src="/EO/canva_gallery/galeri_img2.jpg"
                alt="Galeri Proyek 4"
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>

          </div>

          {/* Slogan Right Bottom "Take it, Do it, Love it" */}
          <div className="text-right mt-8 sm:mt-12 lg:mt-16 select-none">
            <span className="font-slogan font-bold italic text-[#e07609] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              take it, do it, love it !
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SLIDE 2: BANNER PITA EMAS 1
      ========================================================================== */}
      <section className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 sm:py-4 px-4 sm:px-6 shadow-md border-y border-amber-300/30 text-center select-none">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-semibold text-xs sm:text-base md:text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Kreativitas Tanpa Batas, Eksekusi Berkelas
          </h2>
        </div>
      </section>

      {/* =========================================================================
          SLIDE 3: VIDEO GALERI BAGIAN 1 (VIDEO BACKGROUND TERANG & JELAS)
      ========================================================================== */}
      <section className="relative w-full pt-8 sm:pt-14 lg:pt-20 pb-2 sm:pb-3 px-2.5 sm:px-6 lg:px-8 border-b border-blue-950/60 bg-[#020714] overflow-hidden">
        
        {/* Background Video Terang & Jelas */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/gallery-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90"
        >
          <source src="/EO/gallery-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Light Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Logo Center Header */}
          <div className="flex justify-center mb-5 sm:mb-8 lg:mb-10 select-none">
            <img
              src="/images/logo.png"
              alt="Grasindopro"
              className="h-8 sm:h-11 md:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* 3 Video Cards Row - ALWAYS FLEX-ROW (HORIZONTAL 1 ROW) */}
          <div className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-4 md:gap-6 w-full max-w-4xl mx-auto">
            
            {/* Video 1 (Left - galeri_vid2.mp4) */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid2.mp4' })}
              className="flex-1 min-w-0 h-[175px] min-[400px]:h-[210px] sm:h-[290px] md:h-[360px] lg:h-[400px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Video 2 (Center - galeri_vid5.mp4) */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid5.mp4' })}
              className="flex-1 min-w-0 h-[175px] min-[400px]:h-[210px] sm:h-[290px] md:h-[360px] lg:h-[400px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid5.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Video 3 (Right - galeri_vid4.mp4) */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid4.mp4' })}
              className="flex-1 min-w-0 h-[175px] min-[400px]:h-[210px] sm:h-[290px] md:h-[360px] lg:h-[400px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Slogan Right Bottom */}
          <div className="text-right mt-8 sm:mt-12 lg:mt-16 select-none">
            <span className="font-slogan font-bold italic text-[#e07609] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              take it, do it, love it !
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SLIDE 4: BANNER PITA EMAS 2
      ========================================================================== */}
      <section className="relative z-10 w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-3 sm:py-4 px-4 sm:px-6 shadow-md border-y border-amber-300/30 text-center select-none">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-semibold text-xs sm:text-base md:text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Mitra Profesional untuk Setiap Promosi dan Acara
          </h2>
        </div>
      </section>

      {/* =========================================================================
          SLIDE 5: VIDEO GALERI BAGIAN 2 (VIDEO BACKGROUND TERANG & JELAS)
      ========================================================================== */}
      <section className="relative w-full pt-8 sm:pt-14 lg:pt-20 pb-2 sm:pb-3 px-2.5 sm:px-6 lg:px-8 border-b border-blue-950/60 bg-[#020714] overflow-hidden">
        
        {/* Background Video Terang & Jelas */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/EO/gallery-EO.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90"
        >
          <source src="/EO/gallery-EO.mp4" type="video/mp4" />
        </video>

        {/* Subtle Light Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Logo Center Header */}
          <div className="flex justify-center mb-5 sm:mb-8 lg:mb-10 select-none">
            <img
              src="/images/logo.png"
              alt="Grasindopro"
              className="h-8 sm:h-11 md:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* 3 Video Cards Row - ALWAYS FLEX-ROW (HORIZONTAL 1 ROW) */}
          <div className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-3.5 md:gap-4 lg:gap-5 w-full">
            
            {/* Video 1 (Left Vertical - galeri_vid6.mp4) - Flex 1 */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid6.mp4' })}
              className="flex-[1] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[230px] md:h-[290px] lg:h-[350px] xl:h-[380px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid6.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Video 2 (Center Wide - galeri_vid3.mp4) - Flex 3.1 */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid3.mp4' })}
              className="flex-[3.1] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[230px] md:h-[290px] lg:h-[350px] xl:h-[380px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Video 3 (Right Vertical - galeri_vid1.mp4) - Flex 1 */}
            <div
              onClick={() => setSelectedVideo({ src: '/EO/canva_gallery/galeri_vid1.mp4' })}
              className="flex-[1] min-w-0 h-[135px] min-[400px]:h-[160px] sm:h-[230px] md:h-[290px] lg:h-[350px] xl:h-[380px] group relative border-[2px] sm:border-[3px] lg:border-[3.5px] border-[#fea121] rounded-lg sm:rounded-2xl overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/35"
            >
              <video
                src="/EO/canva_gallery/galeri_vid1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#fea121] text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Slogan Right Bottom */}
          <div className="text-right mt-8 sm:mt-12 lg:mt-16 select-none">
            <span className="font-slogan font-bold italic text-[#e07609] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              take it, do it, love it !
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SLIDE 6: FOOTER STRIP KONTAK EMAS
      ========================================================================== */}
      <footer className="relative z-10 w-full select-none">
        {/* Solid Golden Strip Footer */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#ca9035] via-[#dfa545] to-[#ebb65b] py-5 sm:py-8 px-4 sm:px-10 lg:px-12 text-white shadow-2xl border-t border-amber-300/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            
            {/* Left: Logo & Circular Socials */}
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <img
                src="/images/logo.png"
                alt="Grasindopro"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
              />
              <div className="flex items-center gap-2 sm:gap-3 text-slate-900">
                <a
                  href="https://www.tiktok.com/@grasindopro.advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="TikTok"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/grasindo.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-pink-600 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Center: Quick Hubungi Kami Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#f7e4b5] to-[#d4a853] hover:from-white hover:to-amber-400 text-blue-950 font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md border border-amber-200 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Hubungi Kami</span>
                <span className="text-amber-700 font-bold">&gt;</span>
              </button>
            </div>

            {/* Right: Company Name & Direct Contacts */}
            <div className="text-center md:text-right space-y-0.5 sm:space-y-1">
              <h4 className="font-extrabold text-xs sm:text-base md:text-lg tracking-wide uppercase text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                PT. INTEGRA ANEKSA KREASINDO
              </h4>
              <div className="space-y-0.5">
                <div>
                  <a
                    href="tel:+6281398479044"
                    className="text-[11px] sm:text-sm font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    +62 813-9847-9044
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@grasindopro.com"
                    className="text-[11px] sm:text-sm font-bold text-white hover:text-slate-950 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] inline-block"
                  >
                    admin@grasindopro.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </footer>

      {/* =========================================================================
          LIGHTBOX / FULLSCREEN MODAL PREVIEW UNTUK VIDEO (PORTAL DI DOCUMENT.BODY)
      ========================================================================== */}
      {selectedVideo && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#fea121] hover:text-slate-950 text-white flex items-center justify-center transition-all z-50 cursor-pointer shadow-2xl"
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Video Container Box */}
          <div
            className="max-w-4xl w-full bg-black border-2 sm:border-4 border-[#fea121] rounded-2xl overflow-hidden shadow-2xl relative z-40 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full bg-black flex items-center justify-center overflow-hidden max-h-[85vh]">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
