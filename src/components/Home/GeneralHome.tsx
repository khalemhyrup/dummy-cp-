import React from 'react';

interface GeneralHomeProps {
  onNavigate: (page: string) => void;
}

export const GeneralHome: React.FC<GeneralHomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">

      {/* =====================================================================
          HERO SECTION: EXECUTIVE STRATEGY CINEMATIC HERO
      ====================================================================== */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-neutral-950">

        {/* Background Video with Poster Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/main-homepage.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/images/homepage-main.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark/Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75 pointer-events-none" />

        {/* Top Minimal Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 w-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="PT Integra Aneksa Kreasindo - Grasindopro"
              className="h-8 sm:h-11 w-auto object-contain drop-shadow-md cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onNavigate('home')}
            />
          </div>
          <div className="flex items-center gap-3.5 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium">
            <button onClick={() => onNavigate('service')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              Services
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              About
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer drop-shadow-xs">
              Contact
            </button>
          </div>
        </div>

        {/* Center Main Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 text-center mt-24 sm:mt-10 md:mt-14 py-2 space-y-2.5 sm:space-y-3">
          <h1 className="text-[clamp(14px,5.1vw,24px)] sm:text-3xl md:text-4xl lg:text-5xl font-company-hero whitespace-nowrap uppercase tracking-tighter sm:tracking-tight leading-tight">
            PT. INTEGRA ANEKSA KREASINDO
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-white/95 max-w-xs sm:max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            Inovasi Karya Terbaik Solusi kreatif untuk kebutuhan bisnis Anda
          </p>
        </div>

        {/* Portal Gateway Buttons: IT SOLUTION (Left) & EVENT ORGANIZER (Right) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 w-full pb-32 sm:pb-28 md:pb-36 mt-auto -translate-y-24 sm:-translate-y-8 md:-translate-y-10">
          
          {/* Single Centered Core Business Label */}
          <div className="text-center mb-4 sm:mb-8">
            <span className="text-lg sm:text-2xl md:text-3xl font-extrabold font-mono tracking-[0.22em] sm:tracking-[0.25em] text-white drop-shadow-md uppercase">
              Core Business
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-12 md:gap-24 lg:gap-32 w-full max-w-4xl mx-auto px-2 sm:px-4">

            {/* Left Gateway: IT & CME SOLUTION */}
            <button
              onClick={() => onNavigate('it-home')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 md:px-10 py-3.5 sm:py-3.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-neutral-950 border border-white/30 backdrop-blur-xs transition-all duration-300 cursor-pointer font-bold text-xs sm:text-sm md:text-base tracking-normal sm:tracking-wider uppercase whitespace-nowrap text-center shadow-lg"
            >
              <span>IT &amp; CME SOLUTION</span>
            </button>

            {/* Right Gateway: EO & ADVERTISING */}
            <button
              onClick={() => onNavigate('eo-home')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 md:px-10 py-3.5 sm:py-3.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-neutral-950 border border-white/30 backdrop-blur-xs transition-all duration-300 cursor-pointer font-bold text-xs sm:text-sm md:text-base tracking-normal sm:tracking-wider uppercase whitespace-nowrap text-center shadow-lg"
            >
              <span>EO &amp; ADVERTISING</span>
            </button>

          </div>
        </div>

      </section>

    </div>
  );
};
