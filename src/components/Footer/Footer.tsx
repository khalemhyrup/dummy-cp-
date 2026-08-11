import React from 'react';
import { footerData } from '../../data/homeData';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.842L.055 23.513l5.808-1.523A11.936 11.936 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.819 0-3.543-.483-5.043-1.328l-.361-.203-3.738.98.997-3.644-.223-.37A9.943 9.943 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

interface FooterProps {
  onLinkClick: (linkName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const socials = [
    { icon: Mail,         href: 'mailto:marketing@grasindopro.com', label: 'Email'     },
    { icon: WhatsAppIcon, href: 'https://wa.me/6281398479044',       label: 'WhatsApp'  },
    { icon: Instagram,    href: '#',                                label: 'Instagram' },
  ];

  const navLinks = ['Home', 'About', 'Product & Service', 'Information'];

  return (
    <footer className="bg-[#111111] text-gray-400 border-t border-neutral-800">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Left: Logo + tagline */}
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="Grasindopro"
              className="h-10 w-auto object-contain brightness-0 invert opacity-80"
            />
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Leading IT Support, Solutions, and Event Management Provider in Indonesia.
            </p>
          </div>

          {/* Center: Address & Phone */}
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-gray-400">{footerData.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{footerData.phone}</span>
            </div>
          </div>

          {/* Right: Nav + Socials */}
          <div className="space-y-5">
            {/* Nav links */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => onLinkClick(item)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-900 py-4 text-center text-[11px] text-gray-600">
        © 2026 PT Integra Aneksa Kreasindo (Grasindopro). All Rights Reserved.
      </div>

    </footer>
  );
};
