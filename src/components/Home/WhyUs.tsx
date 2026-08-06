import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

interface WhyUsProps {
  onContactClick?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onContactClick }) => {
  const cards = [
    {
      number: '01',
      text: 'Berpengalaman dibidang IT & EO lebih dari 10 tahun',
      textColor: 'text-slate-800',
    },
    {
      number: '02',
      text: 'Layanan kami tersebar di berbagai titik di Indonesia',
      textColor: 'text-[#ea580c]', // Orange highlight
    },
    {
      number: '03',
      text: 'Layanan berbasis digital untuk kemudahan Anda',
      textColor: 'text-slate-800',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Poster + Blue CTA Bar */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-50 flex flex-col">
              
              {/* Main Poster Image */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src="/why_us_banner_poster.png"
                  alt="Kami Terintegrasi Sistem Digital"
                  className="w-full h-auto max-h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Blue CTA Bar */}
              <button
                onClick={onContactClick}
                className="bg-[#3b66ac] hover:bg-[#2d5291] p-5 text-white flex items-center justify-between transition-colors w-full text-left group"
              >
                <span className="font-bold text-base sm:text-lg tracking-wide">
                  Punya Pertanyaan Untuk Kami?
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3b66ac] group-hover:scale-110 transition-transform flex-shrink-0 shadow-md">
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </div>
              </button>

            </div>
          </div>

          {/* Right Column: Title + Subtitle + 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Tag */}
            <div>
              <span className="text-[#ea580c] font-bold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#ea580c] pb-1 inline-block">
                KENAPA MEMILIH KAMI
              </span>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-3">
                Menghadirkan Solusi <br className="hidden sm:inline" /> Infrastruktur &amp; Media Anda
              </h2>
            </div>

            {/* Description Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Didukung oleh tim profesional yang cepat tanggap serta jaringan mitra terkemuka dengan jangkauan skala nasional, kami senantiasa berkomitmen menghadirkan solusi terintegrasi yang fleksibel, berkualitas prima, dan tepat sasaran untuk memastikan kesuksesan setiap proyek bisnis Anda.
            </p>

            {/* 3 Feature Cards */}
            <div className="space-y-4 pt-2">
              {cards.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#f3f4f6] hover:bg-[#e5e7eb] p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm"
                >
                  {/* Left Orange Circle Number */}
                  <div className="w-11 h-11 rounded-full bg-[#ea580c] text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md">
                    {item.number}
                  </div>

                  {/* Card Title Text */}
                  <p className={`font-extrabold text-sm sm:text-base leading-snug px-4 flex-1 ${item.textColor}`}>
                    {item.text}
                  </p>

                  {/* Right Dark Teal Circle Checkmark */}
                  <div className="w-8 h-8 rounded-full bg-[#0f4c5c] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
