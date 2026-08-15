import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ElevateCtaProps {
  onContactClick?: () => void;
}

export const ElevateCta: React.FC<ElevateCtaProps> = ({ onContactClick }) => {
  return (
    <section className="w-full bg-black text-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8">
          Ready to Elevate Your<br />
          Infrastructure?
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
          Engage our experts to architect and deploy systems built for the demands of the modern enterprise.
        </p>

        {/* White CTA Button */}
        <div>
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-200"
          >
            <span>Connect with Our Experts</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
