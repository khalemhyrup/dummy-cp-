import React from 'react';
import { footerData } from '../../data/homeData';
import { MapPin, Phone, Printer, Mail, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onLinkClick: (linkName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-black text-gray-300 border-t border-neutral-800">
      
      {/* Main 3-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase border-b border-neutral-800 pb-2">
              Sitemap & Navigation
            </h3>
            
            <div className="grid grid-cols-1 gap-2 text-xs">
              {['Home', 'About', 'Product & Service', 'Information'].map((item) => (
                <button
                  key={item}
                  onClick={() => onLinkClick(item)}
                  className="text-left text-gray-400 hover:text-white transition-colors py-1 flex items-center gap-1 group"
                >
                  <span className="text-amber-500/80 group-hover:text-amber-400">›</span>
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-900">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Core Services
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>IT Support & Maintenance</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>EO (Event Organizer & Tech Events)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Head Office Contact */}
          <div className="space-y-6">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase border-b border-neutral-800 pb-2">
              Head Office Contact
            </h3>
            
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{footerData.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Tel: {footerData.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Fax: {footerData.fax}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${footerData.email}`} className="text-amber-400 hover:underline">
                  {footerData.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-neutral-900">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                Connect With Us
              </h4>
              <div className="flex items-center space-x-3">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                ].map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.href}
                      className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 text-gray-300 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Brand & Copyright */}
          <div className="space-y-6">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase border-b border-neutral-800 pb-2">
              Corporate Identity
            </h3>

            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="bg-white p-4 rounded-xl flex items-center justify-center border border-neutral-700 shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Grasindopro - PT Integra Aneksa Kreasindo"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Leading IT Support, Solutions, and Event Management Provider in Indonesia.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-900 text-[11px]">
                <span className="text-gray-400">Legal Name</span>
                <span className="font-semibold text-amber-400 text-[10px]">
                  PT INTEGRA ANEKSA KREASINDO
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 leading-relaxed">
              Disclaimer: All product names, logos, and brands are property of their respective owners.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-6 border-t border-neutral-900 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 PT Integra Aneksa Kreasindo (Grasindopro). All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
