import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onExplore?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore }) => {
  return (
    <section className="w-full bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            
            {/* Tagline / Kicker */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase font-mono">
              TAKE IT, OR IT, LEAVE IT
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-neutral-900 leading-[1.12]">
              IT &amp; Infrastructure<br />
              Solutions for the<br />
              Modern<br />
              Enterprise
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
              We deliver highly efficient, sustainable, and scalable infrastructure ecosystems. From advanced telecommunications to robust mechanical engineering, we build the foundations of tomorrow.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100">
              <img
                src="/images/hero_datacenter.jpg"
                alt="Modern Enterprise Data Center Corridor"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
