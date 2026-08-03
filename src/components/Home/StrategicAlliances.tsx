import React from 'react';
import { strategicPartnersData } from '../../data/homeData';

export const StrategicAlliances: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-600 font-bold text-xs tracking-widest uppercase block">
            GLOBAL TECHNOLOGY PARTNERS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Strategic Alliances
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Collaborating with world-class technology leaders to deliver enterprise-grade digital platforms, cybersecurity, and cloud solutions.
          </p>
        </div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {strategicPartnersData.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="h-12 flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-10 max-w-[130px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to stylized text badge if svg fails to load
                    (e.target as HTMLElement).style.display = 'none';
                    (e.target as HTMLElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-black text-slate-800 text-lg tracking-wider">
                  {partner.name}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {partner.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
