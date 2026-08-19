import React, { useState } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ClientPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

interface PartnerLogo {
  name: string;
  subtext: string;
  location?: string;
  projectType?: string;
  logoUrl: string;
}

export const ClientPage: React.FC<ClientPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Pelanggan');

  const sidebarMenuItems = [
    { label: 'Struktur Organisasi', id: 'org-structure' },
    { label: 'Client (Pelanggan)', id: 'client' },
    { label: 'Rekam Jejak', id: 'about' },
  ];

  // Official client list strictly matching sumber/Grasindo Company Profile EO & IT.pdf and local SVGs
  const partnerLogos: PartnerLogo[] = [
    {
      name: 'Grab Indonesia',
      subtext: 'Billboard & Outdoor Branding',
      location: 'Tangerang, Banten',
      projectType: 'Billboard Advertising',
      logoUrl: '/EO/logo-client/Grab-logo.svg',
    },
    {
      name: 'Ajaib Sekuritas',
      subtext: 'Neonbox BEJ & Perizinan SKPD',
      location: 'Gedung BEJ / SCBD Jakarta',
      projectType: 'Neonbox & SKPD',
      logoUrl: '/EO/logo-client/ajaib-logo.svg',
    },
    {
      name: 'Chevrolet',
      subtext: 'Billboard Outdoor Advertising',
      location: 'Bandung & Jakarta Buncit',
      projectType: 'Billboard',
      logoUrl: '/EO/logo-client/chevrolet-logo.svg',
    },
    {
      name: 'Herbalife Nutrition',
      subtext: 'Billboard Tol & Baliho T-Banner',
      location: 'Tol Sedyatmo, Jagorawi & Sentul',
      projectType: 'Billboard & T-Banner',
      logoUrl: '/EO/logo-client/herbalife-logo.svg',
    },
    {
      name: 'Asian Paints',
      subtext: 'Event MICE, Booth, Branding & Shopsign',
      location: 'Jakarta, Jogja, Manado & Pontianak',
      projectType: 'MICE & Brand Activation',
      logoUrl: '/EO/logo-client/asian-paint-logo.svg',
    },
    {
      name: 'Cushman & Wakefield',
      subtext: 'Pylon Sign, Shopsign & Perizinan SKPD',
      location: 'Sopodel, Deutsche & Menara Tendean',
      projectType: 'Pylon Sign & SKPD',
      logoUrl: '/EO/logo-client/Chusman-wakefield-logo.svg',
    },
    {
      name: 'LPS (Lembaga Penjamin Simpanan)',
      subtext: 'Event Organizer & Strategic Media',
      location: 'Jakarta',
      projectType: 'Corporate Event & Branding',
      logoUrl: '/EO/logo-client/LPS-logo.svg',
    },
    {
      name: 'Lixil Indonesia',
      subtext: 'Exhibition Booth & Spatial Production',
      location: 'Jakarta & BSD',
      projectType: 'Booth Exhibition',
      logoUrl: '/EO/logo-client/Lixil-logo.svg',
    },
    {
      name: 'PEFINDO',
      subtext: 'Pylon Sign & Perizinan SKPD',
      location: 'Equity Tower SCBD Jakarta',
      projectType: 'Pylon Sign & Legalitas SKPD',
      logoUrl: '/EO/logo-client/pefindo-logo.svg',
    },
    {
      name: 'IQOS Indonesia',
      subtext: 'T-Banner & Branding Outdoor',
      location: 'Tangerang Selatan',
      projectType: 'T-Banner & Branding',
      logoUrl: '/EO/logo-client/iqos-logo.svg',
    },
    {
      name: 'Dover Chemical',
      subtext: 'Corporate Event & Media Support',
      location: 'Cilegon, Banten',
      projectType: 'Industrial Event',
      logoUrl: '/EO/logo-client/dover-chemical-logo.svg',
    },
    {
      name: 'FKNK Law Firm',
      subtext: 'Corporate Signage & Executive Event',
      location: 'SCBD Jakarta',
      projectType: 'Corporate Branding',
      logoUrl: '/EO/logo-client/fknk-logo.svg',
    },
    {
      name: 'Kementerian Agama RI',
      subtext: 'Event Management & Media Instansi',
      location: 'Jakarta',
      projectType: 'Government Event',
      logoUrl: '/EO/logo-client/kementrian-agama-logo.svg',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE TITLE */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 font-sans">
          Our Clients
        </h1>

        {/* BREADCRUMB NAVIGATION */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 pb-4 border-b border-slate-100">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-amber-600 flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button
            onClick={() => onNavigate && onNavigate('about')}
            className="hover:text-amber-600 font-medium transition-colors cursor-pointer"
          >
            Tentang Kami
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Our Clients</span>
        </nav>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: INTRO PARAGRAPH & LOGO GRID (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong className="font-bold text-slate-900">PT. Integra Aneksa Kreasindo (Grasindo Pro)</strong> telah menjadi mitra kunci dan mendapat kepercayaan penuh dari berbagai korporasi nasional, instansi pemerintah, BUMN, perbankan, dan brand global yang meliputi Chevrolet, Pertamina, Grab, Herbalife, Nokia, OCBC NISP, Ajaib Sekuritas, Asian Paints, Ciputra Group, Sucorinvest, PEFINDO, Cushman & Wakefield, Kolega, dan lainnya dalam eksekusi proyek Media Advertising, Event Organizer / MICE, serta Integrasi Infrastruktur IT & Mechanical Electrical.
            </p>

            {/* LOGO GRID (3 COLS) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              {partnerLogos.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-sm p-6 flex flex-col items-center justify-center min-h-[120px] shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group cursor-pointer"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                    onError={(e) => {
                      // Fallback text if logo image URL fails to load
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement && !target.parentElement.querySelector('.fallback-title')) {
                        const textFallback = document.createElement('span');
                        textFallback.className = 'fallback-title font-extrabold text-slate-800 text-sm text-center';
                        textFallback.innerText = partner.name;
                        target.parentElement.appendChild(textFallback);
                      }
                    }}
                  />
                  <span className="text-[11px] font-bold text-slate-800 mt-2 text-center group-hover:text-amber-600 transition-colors">
                    {partner.name}
                  </span>
                  {partner.subtext && (
                    <span className="text-[10px] text-slate-400 text-center font-medium mt-0.5">
                      {partner.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR MENU (4 COLS) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* SIDEBAR NAVIGATION BOX */}
              <div className="border border-slate-200/90 rounded-sm bg-white divide-y divide-slate-100 overflow-hidden shadow-xs">
                {/* Header Title */}
                <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                  <span className="text-slate-900 font-extrabold text-xs tracking-wider uppercase">
                    TENTANG KAMI
                  </span>
                </div>

                {/* Sidebar Items */}
                {sidebarMenuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActiveTab(item.label);
                      if (onNavigate) {
                        onNavigate(item.id);
                      }
                    }}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer ${
                      item.id === 'client'
                        ? 'bg-white font-extrabold text-slate-900 border-l-4 border-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FLOATING BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-lg hover:shadow-xl text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-300 z-50 group hover:scale-110"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
