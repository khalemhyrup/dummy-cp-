import React from 'react';

interface AboutTechnologyProps {
  onLearnMore?: () => void;
}

export const AboutTechnology: React.FC<AboutTechnologyProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Content Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight uppercase leading-snug">
              TENTANG GRASINDO PRO
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Grasindo Pro menawarkan solusi menyeluruh di bidang infrastruktur teknologi, mekanikal elektrikal, hingga inovasi periklanan dan event organizer. Kami bertujuan untuk memberikan keunggulan kompetitif kepada klien melalui layanan terpadu yang efisien di segala sektor industri.
            </p>

            {/* Single Button exact from original image */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#333333] hover:bg-black text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <span>SELENGKAPNYA</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Illustration exact from original image */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <img
              src="/about_technology_illustration.png"
              alt="Tentang Grasindo Pro"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
