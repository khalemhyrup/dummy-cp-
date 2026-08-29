import React, { useState } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ClientPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ClientPage: React.FC<ClientPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Pelanggan');

  const sidebarMenuItems = [
    { label: 'Struktur Organisasi', id: 'org-structure' },
    { label: 'Client (Pelanggan)', id: 'client' },
    { label: 'Rekam Jejak', id: 'about' },
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

            {/* Client Images Stacked (Atas - Bawah) */}
            <div className="space-y-8 pt-2">
              <img
                src="/EO/ClientEO.svg"
                alt="Client Event Organizer & Media Advertising"
                className="w-full h-auto object-contain"
              />

              <img
                src="/IT/our-client-it.svg"
                alt="Client IT & CME Solutions"
                className="w-full h-auto object-contain"
              />
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
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer ${item.id === 'client'
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
