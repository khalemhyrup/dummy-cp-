import React from 'react';
import { Phone, Mail, Instagram, ChevronRight, ArrowRight, Sparkles, Award } from 'lucide-react';

interface EOPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const EOPage: React.FC<EOPageProps> = ({ onNavigate, onContactClick }) => {
  const merchandiseList = [
    { name: 'Tumbler Rumah BUMN', tag: 'Rumah BUMN', img: '/EO/Event organizer/Merchandise1.png' },
    { name: 'Tumbler Pajak Kita', tag: 'Pajak Kita', img: '/EO/Event organizer/Merchandise2.png' },
    { name: 'Paper Bag Kapolri Cup', tag: 'Shooting Championship', img: '/EO/Event organizer/Merchandise3.png' },
    { name: 'Pouch & Pen Set', tag: 'Startup Studio ID', img: '/EO/Event organizer/Merchandise4.png' },
    { name: 'T-Shirt BPK RI', tag: 'BPK Perwakilan', img: '/EO/Event organizer/Merchandise5.png' },
    { name: 'Spunbond Bag Leker', tag: 'Leker Brand', img: '/EO/Event organizer/Merchandise6.png' },
    { name: 'Topi Bordir PLN', tag: 'PLN Nusantara Power', img: '/EO/Event organizer/Merchandise7.png' },
    { name: 'Gift Set Tumbler & Book', tag: 'Corporate Premium', img: '/EO/Event organizer/Merchandise8.png' },
    { name: 'Powerbank Robot MM', tag: 'Custom Tech Gift', img: '/EO/Event organizer/Merchandise9.png' },
    { name: 'Mug Karikatur Pilkada', tag: 'Custom Print Mug', img: '/EO/Event organizer/Merchandise10.png' },
    { name: 'Tumbler Prime Video', tag: 'Streaming Service', img: '/EO/Event organizer/Merchandise11.png' },
    { name: 'Korek Gas Custom', tag: 'Pentas Jenaka', img: '/EO/Event organizer/Merchandise12.png' },
    { name: 'Executive Powerbank Wallet', tag: 'VIP Gift Set', img: '/EO/Event organizer/Merchandise13.png' },
    { name: 'Canvas Tote Bag Ilustrasi', tag: 'Event Souvenir', img: '/EO/Event organizer/Merchandise14.png' },
  ];

  return (
    <div className="w-full bg-[#040b18] font-sans text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* =========================================================================
          SLIDE 1: EVENT ORGANIZER OVERVIEW & SERVICES LIST
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#030917] via-[#081a3d] to-[#040c1a] border-b border-blue-900/40 overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading + Paragraph + Panorama Image */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
                Event Organizer
              </h1>

              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed text-justify">
                Dari perencanaan hingga eksekusi, kami memastikan setiap momen berjalan tanpa hambatan dan memberikan pengalaman yang tidak terlupakan.
              </p>

              {/* Panorama event banner photo */}
              <div className="w-full aspect-[21/9] bg-neutral-900 border-2 border-amber-500/80 rounded-xl overflow-hidden shadow-xl relative group">
                <img
                  src="/EO/Event organizer/CorporateEvent1.png"
                  alt="Grasindopro Event Production and Cheerful Audience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Layanan Kami Meliputi */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                Layanan Kami Meliputi :
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong className="text-white">Corporate Events</strong> (Rapat Umum Pemegang Saham, Seminar Nasional, Conference, Gala Dinner).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong className="text-white">Brand Activation &amp; Product Launch</strong> (Peluncuran produk baru, roadshow, pameran dagang).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong className="text-white">Entertainment &amp; Festivals</strong> (Konser musik, festival budaya, gathering komunitas).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong className="text-white">Virtual &amp; Hybrid Events</strong> (Manajemen live streaming interaktif, webinar skala besar).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong className="text-white">Exhibition Production &amp; Merchandise</strong> (Pembuatan Booth Pameran dan Souvenir)</span>
                </li>
              </ul>

              {/* Tagline bottom right */}
              <div className="text-right pt-6">
                <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
                  Take it, Do it, Love it
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Gradient Quote Banner */}
        <div className="w-full bg-gradient-to-r from-sky-900/80 via-blue-950/90 to-sky-900/80 py-3.5 px-4 text-center mt-12 border-t border-blue-800/40">
          <p className="text-xs sm:text-sm font-semibold text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Komitmen kami menyelenggarakan acara (event) berkualitas tinggi dengan manajemen yang presisi dan konsep kreatif yang berkesan.&rdquo;
          </p>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 2: CORPORATE EVENTS & BRAND ACTIVATION & PRODUCT LAUNCH
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040c1a] via-[#081a3d] to-[#040b18] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="mb-8">
            <span className="text-xs sm:text-sm font-mono font-extrabold text-amber-500 uppercase tracking-widest block">
              OUR EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Corporate Events */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                Corporate Events
              </h2>

              <div className="grid grid-cols-2 gap-3">
                
                {/* RUPS Photo */}
                <div className="col-span-2 space-y-1">
                  <div className="aspect-[16/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/CorporateEvent1.png"
                      alt="Rapat Umum Pemegang Saham Boardroom"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-neutral-300 font-medium block">
                    Rapat Umum Pemegang Saham
                  </span>
                </div>

                {/* Gala Dinner Photo */}
                <div className="space-y-1">
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/CorporateEvent2.png"
                      alt="Gala Dinner Corporate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-neutral-300 font-medium block">
                    Gala Dinner
                  </span>
                </div>

                {/* Seminar Photo */}
                <div className="space-y-1">
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/CorporateEvent3.png"
                      alt="Seminar Nasional & Gathering"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-neutral-300 font-medium block">
                    Seminar Nasional
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Brand Activation & Product Launch */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                Brand Activation &amp; Product Launch
              </h2>

              <div className="space-y-4">
                
                <div className="grid grid-cols-2 gap-3">
                  {/* Pembukaan Cabang Baru */}
                  <div className="space-y-1">
                    <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                      <img
                        src="/EO/Event organizer/BrandActivation1.png"
                        alt="Pembukaan Cabang Baru"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs text-neutral-300 font-medium block">
                      Pembukaan Cabang Baru
                    </span>
                  </div>

                  {/* Peluncuran Produk Baru */}
                  <div className="space-y-1">
                    <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                      <img
                        src="/EO/Event organizer/productLauhnch1.png"
                        alt="Peluncuran Produk Baru Asian Paints"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs text-neutral-300 font-medium block">
                      Peluncuran Produk Baru
                    </span>
                  </div>
                </div>

                {/* Pameran Dagang */}
                <div className="space-y-1">
                  <div className="aspect-[21/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/pamerandagang1.png"
                      alt="Pameran Dagang Expo Showcase"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-neutral-300 font-medium block">
                    Pameran Dagang
                  </span>
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

        {/* Client Strip 2: PEFINDO, LIXIL, asianpaints */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16 md:gap-20">
            <img src="/EO/logo-client/pefindo-logo.svg" alt="PEFINDO" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/Lixil-logo.svg" alt="LIXIL" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/asian-paint-logo.svg" alt="Asian Paints" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 3: ENTERTAINMENT & FESTIVALS, VIRTUAL & HYBRID, BIMTEK
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040b18] via-[#081a3d] to-[#040c1a] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="mb-8">
            <span className="text-xs sm:text-sm font-mono font-extrabold text-amber-500 uppercase tracking-widest block">
              OUR EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* 1. Entertainment & Festivals */}
            <div className="md:col-span-5 space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
                Entertainment &amp; Festivals
              </h2>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/Entertainment1.png"
                      alt="Festival Kerukunan Panggung Upacara"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/Entertainment2.png"
                      alt="Peresmian Kanvas Festival"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="aspect-[16/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Event organizer/Entertainment3.png"
                    alt="Panggung Musik Festival Pabuaran"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="text-xs text-neutral-300 font-medium block">
                  Festival Kerukunan Desa Pabuaran, Gn. Sindur
                </span>
              </div>
            </div>

            {/* 2. Virtual & Hybrid Events */}
            <div className="md:col-span-4 space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
                Virtual &amp; Hybrid Events
              </h2>

              <div className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="aspect-[16/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/virtualEvents1.png"
                      alt="Hybrid Conference Room Setup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[16/9] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/virtualEvents2.png"
                      alt="Webinar & Interactive Streaming Room"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Bimtek */}
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
                Bimtek
              </h2>

              <div className="space-y-3">
                <div className="aspect-[3/4] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Event organizer/bimtek.png"
                    alt="Bimbingan Teknis dan Pelatihan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs text-neutral-300 font-medium block">
                  Bimbingan Teknis Profesional
                </span>
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

        {/* Client Strip 3: LIXIL, KEMENAG RI, asianpaints */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16 md:gap-20">
            <img src="/EO/logo-client/Lixil-logo.svg" alt="LIXIL" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/kementrian-agama-logo.svg" alt="Kementerian Agama RI" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/asian-paint-logo.svg" alt="Asian Paints" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 4: EXHIBITION PRODUCTION & BACKDROP
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040c1a] via-[#081a3d] to-[#040b18] border-b border-blue-900/40 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="mb-8">
            <span className="text-xs sm:text-sm font-mono font-extrabold text-amber-500 uppercase tracking-widest block">
              OUR EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Exhibition Production */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                Exhibition Production
              </h2>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="space-y-2 sm:space-y-3 sm:col-span-1">
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction1.png"
                      alt="Booth Exhibition Stand"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction2.png"
                      alt="Booth Exhibition LIXIL Construction"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 sm:col-span-1">
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction3.png"
                      alt="Asian Paints Expo Pavilion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction4.png"
                      alt="Custom Booth Decor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 sm:col-span-1">
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction5.png"
                      alt="Atrium Mall Expo Exhibition"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-neutral-900 border sm:border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                    <img
                      src="/EO/Event organizer/ExhibitionProduction6.png"
                      alt="Exhibition Stand Production Detail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <span className="text-xs text-neutral-300 font-medium block">
                Booth Exhibition
              </span>
            </div>

            {/* Right: Backdrop Image */}
            <div className="lg:col-span-4 space-y-4 pt-0 sm:pt-11">
              <div className="space-y-3">
                <div className="aspect-[16/10] bg-neutral-900 border-2 border-amber-500 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src="/EO/Event organizer/ExhibitionProduction2.png"
                    alt="Backdrop Panggung UNS Home Coming"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs text-neutral-300 font-medium block">
                  Stage &amp; Photobooth Backdrop
                </span>
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

        {/* Client Strip 4: LIXIL, PT DOVER CHEMICAL, asianpaints */}
        <div className="w-full bg-gradient-to-r from-[#c68e34] via-[#dba244] to-[#e6b156] py-4 sm:py-5 px-6 mt-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-10 sm:gap-16 md:gap-20">
            <img src="/EO/logo-client/Lixil-logo.svg" alt="LIXIL" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/dover-chemical-logo.svg" alt="PT Dover Chemical" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
            <img src="/EO/logo-client/asian-paint-logo.svg" alt="Asian Paints" className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          SLIDE 5: MERCHANDISE + BOTTOM CONTACT FOOTER STRIP
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#040b18] via-[#081a3d] to-[#030814] overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="mb-2">
            <span className="text-xs sm:text-sm font-mono font-extrabold text-amber-500 uppercase tracking-widest block">
              OUR EXPERIENCE
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide mt-1">
              Merchandise
            </h2>
          </div>

          {/* 14 Merchandise Item Cards in 2 Rows of 7 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3.5 my-8">
            {merchandiseList.map((item, idx) => (
              <div
                key={idx}
                className="aspect-square bg-neutral-900 border-2 border-amber-500/80 rounded-lg overflow-hidden shadow-md group relative hover:border-amber-400 transition-colors"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Tagline right */}
          <div className="text-right pt-4">
            <span className="text-amber-500 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
              Take it, Do it, Love it
            </span>
          </div>

        </div>

        {/* Bottom Golden-Amber Contact Strip with Advertising Button */}
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
                  href="https://www.instagram.com/grasindo.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white hover:bg-pink-600 text-slate-900 hover:text-white flex items-center justify-center transition-all shadow-sm text-xs font-extrabold cursor-pointer"
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

            {/* Center: Advertising Switcher Button */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                Advertising
              </span>
              <button
                onClick={() => onNavigate?.('media-advertising')}
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
