import React from 'react';
import { Briefcase, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

interface CareerBannerProps {
  onCareerClick: () => void;
}

export const CareerBanner: React.FC<CareerBannerProps> = ({ onCareerClick }) => {
  return (
    <section className="py-16 bg-[#383838] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#2a2a2a] border border-[#4a4a4a] p-8 sm:p-12 rounded-3xl shadow-xl">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#444444] border border-[#555555] text-amber-400 font-bold text-xs tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>CAREERS AT DUMMY TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Shape Your Future with Tech Innovation
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed">
              Join Indonesia's premier IT systems integrator. We are looking for passionate cloud architects, cybersecurity engineers, AI developers, and business strategists to empower enterprise growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-200">
              <div className="flex items-center gap-2 bg-[#444444] border border-[#555555] px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Global Certifications</span>
              </div>
              <div className="flex items-center gap-2 bg-[#444444] border border-[#555555] px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-[#444444] border border-[#555555] px-3 py-1.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Competitive Package</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onCareerClick}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 group text-sm sm:text-base"
            >
              <Briefcase className="w-5 h-5 text-slate-950" />
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
