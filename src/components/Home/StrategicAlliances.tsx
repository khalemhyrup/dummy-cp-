import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  subtext?: string;
  logoUrl: string;
  brandColor?: string;
}

export const StrategicAlliances: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Mouse Drag-to-Scroll State for Row 1
  const [isDraggingRow1, setIsDraggingRow1] = useState(false);
  const [startXRow1, setStartXRow1] = useState(0);
  const [scrollLeftRow1, setScrollLeftRow1] = useState(0);

  // Mouse Drag-to-Scroll State for Row 2
  const [isDraggingRow2, setIsDraggingRow2] = useState(false);
  const [startXRow2, setStartXRow2] = useState(0);
  const [scrollLeftRow2, setScrollLeftRow2] = useState(0);

  const clients: ClientItem[] = [
    {
      id: 'kemenkeu',
      name: 'Kementerian Keuangan',
      subtext: 'REPUBLIK INDONESIA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logo_Kementerian_Keuangan_Republik_Indonesia.png/480px-Logo_Kementerian_Keuangan_Republik_Indonesia.png',
      brandColor: '#003366',
    },
    {
      id: 'kemenhub',
      name: 'Kementerian Perhubungan',
      subtext: 'REPUBLIK INDONESIA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_Kementerian_Perhubungan_Republik_Indonesia.png/480px-Logo_Kementerian_Perhubungan_Republik_Indonesia.png',
      brandColor: '#1d3557',
    },
    {
      id: 'kemenperin',
      name: 'Kementerian Perindustrian',
      subtext: 'REPUBLIK INDONESIA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Logo_Kementerian_Perindustrian_Republik_Indonesia.png/480px-Logo_Kementerian_Perindustrian_Republik_Indonesia.png',
      brandColor: '#0077b6',
    },
    {
      id: 'pln',
      name: 'PLN',
      subtext: 'PT PLN (PERSERO)',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PT_PLN_%28Persero%29.png/480px-Logo_PT_PLN_%28Persero%29.png',
      brandColor: '#e63946',
    },
    {
      id: 'ajaib',
      name: 'Ajaib',
      subtext: 'SEKURITAS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Ajaib_Sekuritas_Logo.svg',
      brandColor: '#2563eb',
    },
    {
      id: 'asian-paints',
      name: 'Asian Paints',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Asian_Paints_logo.svg',
      brandColor: '#e11d48',
    },
    {
      id: 'chevrolet',
      name: 'Chevrolet',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.svg',
      brandColor: '#d97706',
    },
    {
      id: 'ciputra',
      name: 'Ciputra',
      subtext: 'CIPUTRA GROUP',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ciputra_Group.svg',
      brandColor: '#0f766e',
    },
    {
      id: 'cushman-wakefield',
      name: 'Cushman & Wakefield',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Cushman_%26_Wakefield_logo.svg',
      brandColor: '#dc2626',
    },
    {
      id: 'djarum',
      name: 'Djarum',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Djarum_logo.svg',
      brandColor: '#b91c1c',
    },
    {
      id: 'herbalife',
      name: 'Herbalife',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Herbalife_Logo.svg',
      brandColor: '#16a34a',
    },
    {
      id: 'indofood',
      name: 'Indofood',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Indofood_logo.svg',
      brandColor: '#1d4ed8',
    },
    {
      id: 'kolega',
      name: 'Kolega',
      subtext: 'COWORKING SPACE',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_Kolega.png',
      brandColor: '#334155',
    },
    {
      id: 'nestle',
      name: 'Nestlé',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_text_logo.svg',
      brandColor: '#1e3a8a',
    },
    {
      id: 'ocbc',
      name: 'OCBC NISP',
      subtext: 'BANK OCBC',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/OCBC_Bank_logo.svg',
      brandColor: '#e11d48',
    },
    {
      id: 'panasonic',
      name: 'Panasonic',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Panasonic_logo_%28blue%29.svg',
      brandColor: '#0284c7',
    },
    {
      id: 'pefindo',
      name: 'PEFINDO',
      subtext: 'PEMERINGKAT EFEK',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PEFINDO_Logo.png/480px-PEFINDO_Logo.png',
      brandColor: '#0369a1',
    },
    {
      id: 'permata-bank',
      name: 'Permata Bank',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/PermataBank_logo.svg',
      brandColor: '#059669',
    },
    {
      id: 'sucorinvest',
      name: 'Sucorinvest',
      subtext: 'SUCOR SEKURITAS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sucor_Sekuritas_logo.png',
      brandColor: '#c026d3',
    },
    {
      id: 'tempo-scan',
      name: 'Tempo Scan',
      subtext: 'TEMPO SCAN PACIFIC',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tempo_Scan_Pacific_logo.png/480px-Tempo_Scan_Pacific_logo.png',
      brandColor: '#0284c7',
    },
    {
      id: 'xl-axiata',
      name: 'XL Axiata',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/XL_Axiata_logo_2016.svg',
      brandColor: '#2563eb',
    },
  ];

  const row1 = clients.slice(0, 11);
  const row2 = clients.slice(11);

  const scrollRow = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Drag handlers for Row 1
  const handleMouseDownRow1 = (e: React.MouseEvent) => {
    if (!row1Ref.current) return;
    setIsDraggingRow1(true);
    setStartXRow1(e.pageX - row1Ref.current.offsetLeft);
    setScrollLeftRow1(row1Ref.current.scrollLeft);
  };
  const handleMouseLeaveRow1 = () => setIsDraggingRow1(false);
  const handleMouseUpRow1 = () => setIsDraggingRow1(false);
  const handleMouseMoveRow1 = (e: React.MouseEvent) => {
    if (!isDraggingRow1 || !row1Ref.current) return;
    e.preventDefault();
    const x = e.pageX - row1Ref.current.offsetLeft;
    const walk = (x - startXRow1) * 1.5; // Drag speed multiplier
    row1Ref.current.scrollLeft = scrollLeftRow1 - walk;
  };

  // Drag handlers for Row 2
  const handleMouseDownRow2 = (e: React.MouseEvent) => {
    if (!row2Ref.current) return;
    setIsDraggingRow2(true);
    setStartXRow2(e.pageX - row2Ref.current.offsetLeft);
    setScrollLeftRow2(row2Ref.current.scrollLeft);
  };
  const handleMouseLeaveRow2 = () => setIsDraggingRow2(false);
  const handleMouseUpRow2 = () => setIsDraggingRow2(false);
  const handleMouseMoveRow2 = (e: React.MouseEvent) => {
    if (!isDraggingRow2 || !row2Ref.current) return;
    e.preventDefault();
    const x = e.pageX - row2Ref.current.offsetLeft;
    const walk = (x - startXRow2) * 1.5;
    row2Ref.current.scrollLeft = scrollLeftRow2 - walk;
  };

  return (
    <section className="bg-[#383838] py-14 px-2 sm:px-4 lg:px-6 border-b border-slate-700">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase mb-6">
          OUR CLIENT
        </h2>

        {/* BARIS 1 (Group hover triggers arrow visibility) */}
        <div className="relative flex items-center group/row1">
          {/* Left Arrow Button - Appears only on Hover */}
          <button
            onClick={() => scrollRow(row1Ref, 'left')}
            className="p-1 sm:p-2 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 flex-shrink-0 opacity-0 group-hover/row1:opacity-100 pointer-events-none group-hover/row1:pointer-events-auto"
            title="Geser Kiri"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </button>

          {/* Row 1 Draggable Slider Container */}
          <div
            ref={row1Ref}
            onMouseDown={handleMouseDownRow1}
            onMouseLeave={handleMouseLeaveRow1}
            onMouseUp={handleMouseUpRow1}
            onMouseMove={handleMouseMoveRow1}
            className={`overflow-x-auto scrollbar-none flex-1 px-1 ${
              isDraggingRow1 ? 'cursor-grabbing select-none' : 'cursor-grab scroll-smooth'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-3 min-w-max py-1">
              {row1.map((client) => (
                <div
                  key={client.id}
                  className="w-44 sm:w-52 h-28 bg-white p-3 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all duration-300 group/card cursor-pointer border border-gray-200 flex-shrink-0 select-none"
                >
                  <div className="w-full h-full flex items-center justify-center relative pointer-events-none">
                    <img
                      src={client.logoUrl}
                      alt={client.name}
                      className="max-h-12 max-w-[130px] object-contain group-hover/card:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                        const fallback = (e.target as HTMLElement).nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />

                    {/* Fallback Typography */}
                    <div className="hidden flex flex-col items-center justify-center text-center">
                      <span
                        className="font-black text-sm tracking-wide uppercase leading-tight"
                        style={{ color: client.brandColor || '#0f172a' }}
                      >
                        {client.name}
                      </span>
                      {client.subtext && (
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mt-0.5">
                          {client.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button - Appears only on Hover */}
          <button
            onClick={() => scrollRow(row1Ref, 'right')}
            className="p-1 sm:p-2 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 flex-shrink-0 opacity-0 group-hover/row1:opacity-100 pointer-events-none group-hover/row1:pointer-events-auto"
            title="Geser Kanan"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </button>
        </div>

        {/* BARIS 2 (Group hover triggers arrow visibility) */}
        <div className="relative flex items-center pt-2 group/row2">
          {/* Left Arrow Button - Appears only on Hover */}
          <button
            onClick={() => scrollRow(row2Ref, 'left')}
            className="p-1 sm:p-2 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 flex-shrink-0 opacity-0 group-hover/row2:opacity-100 pointer-events-none group-hover/row2:pointer-events-auto"
            title="Geser Kiri"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </button>

          {/* Row 2 Draggable Slider Container */}
          <div
            ref={row2Ref}
            onMouseDown={handleMouseDownRow2}
            onMouseLeave={handleMouseLeaveRow2}
            onMouseUp={handleMouseUpRow2}
            onMouseMove={handleMouseMoveRow2}
            className={`overflow-x-auto scrollbar-none flex-1 px-1 ${
              isDraggingRow2 ? 'cursor-grabbing select-none' : 'cursor-grab scroll-smooth'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-3 min-w-max py-1">
              {row2.map((client) => (
                <div
                  key={client.id}
                  className="w-44 sm:w-52 h-28 bg-white p-3 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all duration-300 group/card cursor-pointer border border-gray-200 flex-shrink-0 select-none"
                >
                  <div className="w-full h-full flex items-center justify-center relative pointer-events-none">
                    <img
                      src={client.logoUrl}
                      alt={client.name}
                      className="max-h-12 max-w-[130px] object-contain group-hover/card:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                        const fallback = (e.target as HTMLElement).nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />

                    {/* Fallback Typography */}
                    <div className="hidden flex flex-col items-center justify-center text-center">
                      <span
                        className="font-black text-sm tracking-wide uppercase leading-tight"
                        style={{ color: client.brandColor || '#0f172a' }}
                      >
                        {client.name}
                      </span>
                      {client.subtext && (
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mt-0.5">
                          {client.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button - Appears only on Hover */}
          <button
            onClick={() => scrollRow(row2Ref, 'right')}
            className="p-1 sm:p-2 text-slate-300 hover:text-white transition-all duration-200 transform hover:scale-125 flex-shrink-0 opacity-0 group-hover/row2:opacity-100 pointer-events-none group-hover/row2:pointer-events-auto"
            title="Geser Kanan"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
