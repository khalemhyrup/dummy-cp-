import React from 'react';

export interface SolutionItem {
  id: string;
  title: string;
  bgColor: string;
  icon: React.ReactNode;
}

export const OurSolution: React.FC = () => {
  const solutions: SolutionItem[] = [
    {
      id: 'hybrid-infrastructure',
      title: 'HYBRID INFRASTRUCTURE',
      bgColor: 'bg-[#7967a9]', // Purple
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Central gear processor */}
          <rect x="22" y="22" width="20" height="20" rx="4" strokeWidth="2.5" />
          <path d="M32 26v12M26 32h12" strokeWidth="2" />
          {/* Connected outer nodes */}
          <circle cx="12" cy="16" r="3" />
          <circle cx="52" cy="16" r="3" />
          <circle cx="12" cy="48" r="3" />
          <circle cx="52" cy="48" r="3" />
          {/* Connector lines */}
          <path d="M15 16h7v8" />
          <path d="M49 16h-7v8" />
          <path d="M15 48h7v-8" />
          <path d="M49 48h-7v-8" />
        </svg>
      ),
    },
    {
      id: 'digital-platforms',
      title: 'DIGITAL PLATFORMS & SERVICES',
      bgColor: 'bg-[#e8af38]', // Golden Yellow
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Interconnected node network */}
          <circle cx="32" cy="32" r="5" strokeWidth="3" />
          <circle cx="14" cy="20" r="4" />
          <circle cx="50" cy="20" r="4" />
          <circle cx="18" cy="48" r="4" />
          <circle cx="46" cy="48" r="4" />
          <path d="M17.5 22.5L27.5 28.5" />
          <path d="M46.5 22.5L36.5 28.5" />
          <path d="M21 45.5L28.5 35.5" />
          <path d="M43 45.5L35.5 35.5" />
        </svg>
      ),
    },
    {
      id: 'business-solution',
      title: 'BUSINESS SOLUTION PLATFORMS & SERVICES',
      bgColor: 'bg-[#57a6c5]', // Teal / Cyan
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Lightbulb with gears */}
          <path d="M32 10a14 14 0 0 0-10 23.8c2.2 2.3 3.5 4.7 3.8 7.7h12.4c.3-3 1.6-5.4 3.8-7.7A14 14 0 0 0 32 10z" />
          <path d="M26 47h12M28 52h8" />
          {/* Gear teeth details */}
          <path d="M32 4v3M32 57v3M10 26h3M51 26h3" />
          <circle cx="32" cy="24" r="3" />
        </svg>
      ),
    },
    {
      id: 'digital-insights',
      title: 'DIGITAL INSIGHTS',
      bgColor: 'bg-[#8cc44f]', // Lime Green
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Magnifying glass over chart */}
          <circle cx="30" cy="30" r="16" strokeWidth="3" />
          <path d="M42 42l12 12" strokeWidth="3.5" />
          <path d="M24 36v-6M30 36v-12M36 36v-8" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 'security-platforms',
      title: 'SECURITY PLATFORMS & SERVICES',
      bgColor: 'bg-[#c64a45]', // Red
      icon: (
        <svg className="w-14 h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Globe with shield */}
          <circle cx="32" cy="32" r="20" strokeWidth="2.5" />
          <path d="M12 32h40" />
          <path d="M15 22h34M15 42h34" />
          <path d="M32 12c6 6 9 13.5 9 20s-3 14-9 20c-6-6-9-13.5-9-20s3-14 9-20z" />
          {/* Shield badge */}
          <path d="M40 32v8c0 5-4 9-8 11-4-2-8-6-8-11v-8l8-4 8 4z" fill="#c64a45" stroke="white" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#383838] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white tracking-wider mb-12 uppercase">
          OUR SOLUTION
        </h2>

        {/* 5 Column Colored Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 shadow-2xl rounded-sm overflow-hidden">
          {solutions.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} p-8 flex flex-col items-center justify-between text-center min-h-[240px] transition-all duration-300 hover:brightness-110 cursor-pointer group`}
            >
              <div className="my-auto transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-extrabold text-xs sm:text-sm tracking-wider leading-snug uppercase max-w-[190px] pt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
