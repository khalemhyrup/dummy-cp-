import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { footerData } from '../../data/homeData';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.842L.055 23.513l5.808-1.523A11.936 11.936 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.819 0-3.543-.483-5.043-1.328l-.361-.203-3.738.98.997-3.644-.223-.37A9.943 9.943 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

interface ContactProps {
  onNavigate?: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="relative min-h-screen font-sans text-white pt-12 pb-24 overflow-hidden">
      
      {/* Background Video with AutoPlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/contact-main.png?v=20260901"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/images/contact-main.mp4?v=20260901" type="video/mp4" />
      </video>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 drop-shadow-md">
          PT INTEGRA ANEKSA KREASINDO
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Hubungi Kami<span className="text-amber-400 font-normal">.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-100 max-w-xl font-medium leading-relaxed drop-shadow-md">
          Silakan hubungi tim kami untuk konsultasi layanan IT Support, Mechanical Electrical, Media Advertising, maupun Event Management.
        </p>
      </div>

      {/* Main Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-6 space-y-10 divide-y divide-white/20">
            
            {/* Office Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-amber-400 font-bold drop-shadow-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Head Office</span>
              </div>
              <p className="text-lg font-semibold text-white leading-relaxed max-w-lg drop-shadow-md">
                {footerData.address}
              </p>
              <a
                href="https://maps.app.goo.gl/TnmLe8SBs5ngg82S8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors pt-1 drop-shadow-sm"
              >
                <span>Buka Petunjuk Arah</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Channels */}
            <div className="pt-8 space-y-6">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-amber-400 font-bold drop-shadow-sm">
                Kontak Langsung
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Telepon */}
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm text-neutral-300 block font-semibold drop-shadow-sm">Telepon Kantor</span>
                  <a
                    href={`tel:${footerData.phone.replace(/\D/g, '')}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors block drop-shadow-md"
                  >
                    {footerData.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm text-neutral-300 block font-semibold drop-shadow-sm">Email Official</span>
                  <div className="space-y-1">
                    <a
                      href="mailto:marketing@grasindopro.com"
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors block break-all drop-shadow-md"
                    >
                      marketing@grasindopro.com
                    </a>
                    <a
                      href="mailto:marketing_it@grasindopro.com"
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors block break-all drop-shadow-md"
                    >
                      marketing_it@grasindopro.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-6 h-[480px] lg:h-[580px] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm relative bg-zinc-100">
            <iframe
              title="Grasindo Pro Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8816!2d106.7156975!3d-6.2792818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb000114bd8f%3A0x257b923aa9a944b9!2sPT.%20Integra%20Aneksa%20Kreasindo!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>

    </div>
  );
};
