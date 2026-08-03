import React from 'react';
import { Briefcase, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

interface CareerBannerProps {
  onCareerClick: () => void;
}

export const CareerBanner: React.FC<CareerBannerProps> = ({ onCareerClick }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-950/10 backdrop-blur-md border border-slate-950/10 p-8 sm:p-12 rounded-3xl">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/15 font-bold text-xs tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>CAREERS AT MULTIPOLAR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Shape Your Future with Tech Innovation
            </h2>

            <p className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
              Join Indonesia\'s premier IT systems integrator. We are looking for passionate cloud architects, cybersecurity engineers, AI developers, and business strategists to empower enterprise growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-900">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Global Certifications</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Competitive Package</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onCareerClick}
              className="inline-flex items-center gap-3 bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-slate-950/40 transition-all transform hover:-translate-y-0.5 group text-sm sm:text-base"
            >
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
