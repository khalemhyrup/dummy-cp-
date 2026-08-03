import React, { useState } from 'react';
import { companyValuesData } from '../../data/homeData';
import { Users, ShieldCheck, HeartHandshake, Award, CheckCircle2 } from 'lucide-react';

export const WeCareValues: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('C');

  const activeValue = companyValuesData.find((val) => val.key === activeKey) || companyValuesData[0];

  const renderIcon = (key: string) => {
    switch (key) {
      case 'C': return <Users className="w-8 h-8" />;
      case 'A': return <ShieldCheck className="w-8 h-8" />;
      case 'R': return <HeartHandshake className="w-8 h-8" />;
      case 'E': return <Award className="w-8 h-8" />;
      default: return <Award className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block">
            CORPORATE CULTURE & ETHICS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            We CARE Values
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Guiding every interaction, project delivery, and strategic partnership with integrity and dedication.
          </p>
        </div>

        {/* C.A.R.E. Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {companyValuesData.map((val) => {
            const isSelected = activeKey === val.key;

            return (
              <button
                key={val.key}
                onClick={() => setActiveKey(val.key)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 transform ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 -translate-y-1'
                    : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-4xl font-black ${isSelected ? 'text-slate-950' : 'text-amber-400'}`}>
                    {val.key}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-900 text-amber-400'}`}>
                    {renderIcon(val.key)}
                  </div>
                </div>
                <h3 className={`font-bold text-lg leading-tight mb-1 ${isSelected ? 'text-slate-950' : 'text-white'}`}>
                  {val.title}
                </h3>
                <p className={`text-xs ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                  {val.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Detail Banner */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-8 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wider uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>CORE VALUE HIGHLIGHT: {activeValue.title}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {activeValue.title} – {activeValue.tagline}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
              {activeValue.description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <span className="text-5xl font-black">{activeValue.key}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
