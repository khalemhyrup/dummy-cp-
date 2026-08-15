import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CoreDisciplinesProps {
  onNavigate?: (page: string) => void;
}

export const CoreDisciplines: React.FC<CoreDisciplinesProps> = ({ onNavigate }) => {
  const disciplines = [
    {
      id: '01',
      title: 'IT Infrastructure & Telecommunication',
      desc: 'Comprehensive network design, fiber optic deployment, and secure data center integrations designed for maximum uptime and scalability.',
      route: 'it-solutions',
    },
    {
      id: '02',
      title: 'Mechanical & Electrical (ME)',
      desc: 'Precision-engineered HVAC systems, power distribution, and automated control environments that form the lifeblood of physical infrastructure.',
      route: 'cme-main',
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-20 sm:py-28 lg:py-32 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-neutral-900 leading-tight">
              Core Disciplines
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
              Our expertise spans critical infrastructure domains, ensuring seamless integration and operational excellence for high-demand environments.
            </p>
          </div>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate?.(item.route)}
              className="group bg-white border border-neutral-200 p-8 sm:p-12 flex flex-col justify-between cursor-pointer hover:border-neutral-400 hover:shadow-md transition-all duration-300 min-h-[320px]"
            >
              <div>
                {/* Number */}
                <span className="block text-sm sm:text-base font-mono font-medium text-neutral-400 mb-8">
                  {item.id}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-4 group-hover:text-black transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-md mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="pt-2">
                <ArrowRight className="w-5 h-5 text-neutral-900 group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
