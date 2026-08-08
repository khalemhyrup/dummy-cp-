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

  // Official client list strictly matching sumber/Grasindo Company Profile EO & IT.pdf
  const partnerLogos: PartnerLogo[] = [
    {
      name: 'Chevrolet',
      subtext: 'Billboard Outdoor Advertising',
      location: 'Bandung & Jakarta Buncit',
      projectType: 'Billboard',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.svg',
    },
    {
      name: 'PT Pertamina (Persero)',
      subtext: 'Billboard & Advertising',
      location: 'Jakarta Selatan',
      projectType: 'Billboard & Reklame',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Pertamina_Logo.svg',
    },
    {
      name: 'Grab Indonesia',
      subtext: 'Billboard & Outdoor Branding',
      location: 'Tangerang, Banten',
      projectType: 'Billboard Advertising',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Grab_Logo.svg',
    },
    {
      name: 'Herbalife Nutrition',
      subtext: 'Billboard Tol & Baliho T-Banner',
      location: 'Tol Sedyatmo, Jagorawi & Sentul',
      projectType: 'Billboard & T-Banner',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Herbalife_Logo.svg',
    },
    {
      name: 'NOKIA',
      subtext: 'Billboard Seluler & Infrastruktur',
      location: 'Purwokerto & Bandung',
      projectType: 'Billboard & Telecommunication',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg',
    },
    {
      name: 'Bank OCBC NISP',
      subtext: 'Billboard, SKPD & Signage',
      location: 'Jakarta',
      projectType: 'Billboard & Perizinan SKPD',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/OCBC_Bank_logo.svg',
    },
    {
      name: 'Ajaib Sekuritas',
      subtext: 'Neonbox BEJ & Perizinan SKPD',
      location: 'Gedung BEJ / SCBD Jakarta',
      projectType: 'Neonbox & SKPD',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Ajaib_Sekuritas_Logo.svg',
    },
    {
      name: 'Asian Paints',
      subtext: 'Event MICE, Booth, Branding & Shopsign',
      location: 'Jakarta, Jogja, Manado & Pontianak',
      projectType: 'MICE & Brand Activation',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Asian_Paints_logo.svg',
    },
    {
      name: 'Ciputra Group',
      subtext: 'Letter Sign & Signage Properti',
      location: 'Sentul & Tangerang',
      projectType: 'Letter Sign & Pylon',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ciputra_Group.svg',
    },
    {
      name: 'Sucorinvest / Sucor Sekuritas',
      subtext: 'Signage Gedung & Interior Branding',
      location: 'Equity Tower SCBD Jakarta',
      projectType: 'Signage & Letter Sign',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sucor_Sekuritas_logo.png',
    },
    {
      name: 'PEFINDO',
      subtext: 'Pylon Sign & Perizinan SKPD',
      location: 'Equity Tower SCBD Jakarta',
      projectType: 'Pylon Sign & Legalitas SKPD',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PEFINDO_Logo.png/480px-PEFINDO_Logo.png',
    },
    {
      name: 'Kolega Coworking Space',
      subtext: 'Signage Gedung & Interior Sign',
      location: 'Equity Tower SCBD Jakarta',
      projectType: 'Signage',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_Kolega.png',
    },
    {
      name: 'Cushman & Wakefield',
      subtext: 'Pylon Sign, Shopsign & Perizinan SKPD',
      location: 'Sopodel, Deutsche & Menara Tendean',
      projectType: 'Pylon Sign & SKPD',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Cushman_%26_Wakefield_logo.svg',
    },
    {
      name: 'Departemen Perdagangan RI',
      subtext: 'Billboard & Media Promosi',
      location: 'Ciputat, Tangerang Selatan',
      projectType: 'Billboard Instansi',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Logo_Kementerian_Perindustrian_Republik_Indonesia.png/480px-Logo_Kementerian_Perindustrian_Republik_Indonesia.png',
    },
    {
      name: 'VIU Indonesia',
      subtext: 'Billboard Strategic Point',
      location: 'Kuningan, Jakarta Selatan',
      projectType: 'Billboard Advertising',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Indofood_logo.svg',
    },
    {
      name: 'Pondok Indah Golf',
      subtext: 'Letter Sign & Outdoor Signage',
      location: 'Pondok Indah, Jakarta Selatan',
      projectType: 'Letter Signage',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/PermataBank_logo.svg',
    },
    {
      name: 'Matahari Department Store',
      subtext: 'T-Banner & Media Promosi Retail',
      location: 'Tangerang, Banten',
      projectType: 'T-Banner Advertising',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'IQOS Indonesia',
      subtext: 'T-Banner & Branding Outdoor',
      location: 'Tangerang Selatan',
      projectType: 'T-Banner & Branding',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_text_logo.svg',
    }
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
