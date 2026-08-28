import React from 'react';
import { footerData } from '../../data/homeData';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onLinkClick: (linkName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
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

          {/* Right: Spacer */}
          <div className="hidden md:block" />

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-900 py-4 text-center text-[11px] text-gray-600">
        © 2026 PT Integra Aneksa Kreasindo (Grasindopro). All Rights Reserved.
      </div>

    </footer>
  );
};

