import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ITContactProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ITContact: React.FC<ITContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Mohon lengkapi Nama dan Pesan Anda.');
      return;
    }

    const text = `Halo Grasindo Pro,\n\nNama: ${formData.name}\nEmail: ${formData.email || '-'}\n\nPesan:\n${formData.message}`;
    const waUrl = `https://wa.me/6287777288810?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full min-h-screen font-sans text-white overflow-x-hidden bg-[#141212]">
      
      {/* =========================================================================
          BACKGROUND VIDEO WITH OVERLAY (Preserved)
      ========================================================================== */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/IT/background-it-page.jpg"
          className="w-full h-full object-cover object-center opacity-40"
        >
          <source src="/IT/background-it.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* =========================================================================
          MAIN CONTACT SECTION
      ========================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24">
        
        {/* Header Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight mb-10 sm:mb-14">
          Get in touch with us!
        </h1>

        {/* 2-Column Split: Left Map & Details, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Map + Contact Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            
            {/* Interactive Google Maps Frame */}
            <div className="w-full h-[200px] sm:h-[240px] rounded-lg overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900 relative">
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

            {/* Address Info */}
            <div className="flex items-start gap-3.5 pt-1">
              <MapPin className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
              <div className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-light">
                <p className="font-medium text-white">Head Office</p>
                <p className="text-neutral-300 mt-0.5">
                  Bintaro Trade Center Sektor 7, Jl. Jend Sudirman Blok B2 No. 10, Kel. Pondok Jaya, Kec. Pondok Aren, Kota Tangerang Selatan, Banten 15220
                </p>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-center gap-3.5">
              <Mail className="w-5 h-5 text-[#cca362] shrink-0" />
              <a
                href="mailto:marketing_it@grasindopro.com"
                className="text-sm sm:text-[15px] text-[#cca362] hover:text-[#e0bb7d] transition-colors font-light"
              >
                marketing_it@grasindopro.com
              </a>
            </div>

            {/* WhatsApp / Phone Info */}
            <div className="flex items-center gap-3.5">
              <Phone className="w-5 h-5 text-[#cca362] shrink-0" />
              <a
                href="https://wa.me/6287777288810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-[15px] text-[#cca362] hover:text-[#e0bb7d] transition-colors font-light"
              >
                0877-7728-8810
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="contact-name" className="block text-base font-normal text-white mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#1e1c1b]/90 border border-[#8a7238]/70 focus:border-[#cca362] focus:outline-none focus:ring-1 focus:ring-[#cca362] text-white text-sm sm:text-base rounded-none transition-colors placeholder:text-neutral-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="block text-base font-normal text-white mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#1e1c1b]/90 border border-[#8a7238]/70 focus:border-[#cca362] focus:outline-none focus:ring-1 focus:ring-[#cca362] text-white text-sm sm:text-base rounded-none transition-colors placeholder:text-neutral-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="contact-message" className="block text-base font-normal text-white mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-[#1e1c1b]/90 border border-[#8a7238]/70 focus:border-[#cca362] focus:outline-none focus:ring-1 focus:ring-[#cca362] text-white text-sm sm:text-base rounded-none transition-colors resize-none placeholder:text-neutral-500"
                />
              </div>

              {/* Send Button (Gold / Bronze Bar) */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#8a7238] hover:bg-[#9d8241] active:bg-[#7b6531] text-white font-medium text-base tracking-wide rounded-none transition-colors shadow-lg cursor-pointer"
              >
                Send
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
