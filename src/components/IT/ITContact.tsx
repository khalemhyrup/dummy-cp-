import React from 'react';
import { Phone, Mail, User, MapPin, ExternalLink, QrCode } from 'lucide-react';

interface ITContactProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ITContact: React.FC<ITContactProps> = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* =========================================================================
          SECTION 1: KONTAK & ALAMAT KAMI (LIGHT THEME MESH BANNER)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 border-b border-slate-200 overflow-hidden">
        
        {/* Soft Grid Overlay Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Direct Contacts & QR Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* PIC Contact */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-wide">
                    Deny Taufik
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <a href="tel:081398479044" className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors block">
                    0813-9847-9044
                  </a>
                  <a href="tel:0217452304" className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors block">
                    (021) 745 2304
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-blue-500 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <a href="mailto:marketing_it@grasindopro.com" className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors block">
                    marketing_it@grasindopro.com
                  </a>
                  <a href="mailto:admin@grasindopro.com" className="text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors block">
                    admin@grasindopro.com
                  </a>
                </div>
              </div>

              {/* SCAN ME! Card with QR Code */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-4 bg-white text-slate-900 px-5 py-3 rounded-2xl shadow-lg border-2 border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-12 border-2 border-slate-800 rounded-lg flex items-center justify-center relative">
                      <div className="w-3 h-0.5 bg-slate-800 rounded-full mb-8" />
                    </div>
                    <div className="text-left font-black tracking-tight leading-tight">
                      <span className="text-sm block text-slate-900">SCAN</span>
                      <span className="text-base block text-blue-600">ME!</span>
                    </div>
                  </div>
                  
                  {/* QR Box with Blue Corner Accents */}
                  <div className="p-1 border border-blue-500 rounded-lg bg-white relative">
                    <QrCode className="w-14 h-14 text-slate-950" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Title & Office Addresses */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-wide uppercase">
                Kontak &amp; Alamat Kami
              </h1>

              {/* Location Pin & Addresses */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Head Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-blue-600 uppercase tracking-wide">
                      Head Office
                    </h2>
                    <p className="leading-relaxed text-slate-700 mt-1">
                      Bintaro Trade Center Sektor 7, Jl. Jend Sudirman Blok B2 No. 10, Kel. Pondok Jaya Kec. Pondok Aren Kota Tangerang Selatan
                    </p>
                  </div>

                  {/* Representatif Office */}
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-blue-600 uppercase tracking-wide">
                      Representatif Office
                    </h2>
                    <p className="leading-relaxed text-slate-700 mt-1">
                      Griya Serpong Asri Bougenville Blok F No. 17 Suradita, Kec. Cisauk, Tangerang, Banten 15220
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline bottom right */}
              <div className="text-right pt-6">
                <span className="text-blue-600 font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide font-mono uppercase">
                  Precision • Power • Connectivity
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: LOKASI & PETA KAMI (GOOGLE MAPS)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        
        {/* Top Banner: Punya Ide Proyek Hebat? Mari Berkolaborasi! */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 py-3.5 px-4 text-center mb-12 shadow-sm text-white">
          <p className="text-xs sm:text-sm md:text-base font-extrabold max-w-4xl mx-auto tracking-wide">
            Punya Ide Proyek Hebat? Mari Berkolaborasi!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo & Section Title with Direction CTA */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3">
              <img
                src="/images/logo.png"
                alt="Grasindo Pro"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-slate-900 uppercase">
                Peta &amp; Lokasi Kantor
              </h2>
            </div>

            <a
              href="https://maps.app.goo.gl/TnmLe8SBs5ngg82S8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg self-start sm:self-auto cursor-pointer"
            >
              <span>Buka Petunjuk Arah</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Google Maps Embed Container */}
          <div className="w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border-2 border-blue-500 shadow-lg bg-slate-100 relative">
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

          {/* Tagline right */}
          <div className="text-right pt-8">
            <span className="text-blue-600 font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide font-mono uppercase">
              Precision • Power • Connectivity
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
