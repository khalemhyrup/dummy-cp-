import React from 'react';
import { Phone, Mail, User, MapPin, ExternalLink, QrCode } from 'lucide-react';

interface ITContactProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ITContact: React.FC<ITContactProps> = () => {
  return (
    <div className="relative w-full min-h-screen font-sans text-white overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950 bg-slate-950">
      
      {/* =========================================================================
          SECTION 1: KONTAK & ALAMAT KAMI (VIDEO BANNER)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 border-b border-black/40 overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/IT/background-it-page.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/IT/background-it.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for optimal contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Direct Contacts & QR Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* PIC Contact */}
              <div className="flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    Person in Charge
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                    Admin
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <a href="tel:087777288810" className="text-base sm:text-lg font-extrabold text-white hover:text-cyan-300 transition-colors block">
                    0877-7728-8810
                  </a>
                  <a href="tel:0217452304" className="text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors block">
                    (021) 745 2304
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-xl border-2 border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <a href="mailto:marketing_it@grasindopro.com" className="text-base sm:text-lg font-extrabold text-white hover:text-cyan-300 transition-colors block">
                    marketing_it@grasindopro.com
                  </a>
                  <a href="mailto:admin@grasindopro.com" className="text-xs sm:text-sm font-bold text-slate-300 hover:text-cyan-300 transition-colors block">
                    admin@grasindopro.com
                  </a>
                </div>
              </div>

              {/* SCAN ME! Card with QR Code */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-4 bg-slate-900/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-xl border-2 border-cyan-500/40 hover:border-cyan-400 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-12 border-2 border-cyan-400 rounded-lg flex items-center justify-center relative">
                      <div className="w-3 h-0.5 bg-cyan-400 rounded-full mb-8" />
                    </div>
                    <div className="text-left font-black tracking-tight leading-tight">
                      <span className="text-sm block text-white">SCAN</span>
                      <span className="text-base block text-cyan-400">ME!</span>
                    </div>
                  </div>
                  
                  {/* QR Box with Blue Corner Accents */}
                  <div className="p-1 border border-cyan-400 rounded-lg bg-white relative">
                    <QrCode className="w-14 h-14 text-slate-950" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Title & Office Addresses */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
                Kontak &amp; Alamat Kami
              </h1>

              {/* Location Pin & Addresses */}
              <div className="flex items-start gap-5 bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-xl">
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                  {/* Head Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-cyan-400 uppercase tracking-wide">
                      Head Office
                    </h2>
                    <p className="leading-relaxed text-slate-200 mt-1">
                      Bintaro Trade Center Sektor 7, Jl. Jend Sudirman Blok B2 No. 10, Kel. Pondok Jaya Kec. Pondok Aren Kota Tangerang Selatan
                    </p>
                  </div>

                  {/* Representatif Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-cyan-400 uppercase tracking-wide">
                      Representatif Office
                    </h2>
                    <p className="leading-relaxed text-slate-200 mt-1">
                      Griya Serpong Asri Bougenville Blok F No. 17 Suradita, Kec. Cisauk, Tangerang, Banten 15220
                    </p>
                  </div>
                </div>
              </div>



            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: LOKASI & PETA KAMI (GOOGLE MAPS)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 border-b border-black/40 overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/IT/background-it-page.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/IT/background-it.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for optimal contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Top Banner: Punya Ide Proyek Hebat? Mari Berkolaborasi! */}
          <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 py-3.5 px-6 text-center mb-10 shadow-lg text-white rounded-xl border border-cyan-400/30">
            <p className="text-xs sm:text-sm md:text-base font-extrabold max-w-4xl mx-auto tracking-wide">
              Punya Ide Proyek Hebat? Mari Berkolaborasi!
            </p>
          </div>

          {/* Logo & Section Title with Direction CTA */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3">
              <img
                src="/images/logo.png"
                alt="Grasindo Pro"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-white uppercase drop-shadow-md">
                Peta &amp; Lokasi Kantor
              </h2>
            </div>

            <a
              href="https://maps.app.goo.gl/TnmLe8SBs5ngg82S8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-cyan-500/25 hover:scale-105 self-start sm:self-auto cursor-pointer"
            >
              <span>Buka Petunjuk Arah</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Google Maps Embed Container */}
          <div className="w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden border-2 border-cyan-400 shadow-2xl bg-slate-900 relative">
            <iframe
              title="Grasindo Pro Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8816!2d106.7156975!3d-6.2792818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb000114bd8f%3A0x257b923aa9a944b9!2sPT.%20Integra%20Aneksa%20Kreasindo!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>



        </div>

      </section>

    </div>
  );
};
