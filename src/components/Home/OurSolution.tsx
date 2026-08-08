import React from 'react';

export interface SolutionItem {
  id: string;
  title: string;
  bgColor: string;
  icon: React.ReactNode;
  page?: string;
}

interface OurSolutionProps {
  onNavigate?: (page: string) => void;
}

export const OurSolution: React.FC<OurSolutionProps> = ({ onNavigate }) => {
  const solutions: SolutionItem[] = [
    {
      id: 'it-telecommunication',
      title: 'IT & TELECOMMUNICATION',
      bgColor: 'bg-[#7967a9]', // Purple
      page: 'it-solutions',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Telecom Tower & Signal Waves */}
          <path d="M32 12v40M20 52l12-40 12 40M24 36h16M27 26h10" />
          <circle cx="32" cy="12" r="2.5" fill="currentColor" />
          <path d="M22 14a12 12 0 0 1 20 0M16 10a20 20 0 0 1 32 0" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'mechanical-electrical',
      title: 'MECHANICAL & ELECTRICAL',
      bgColor: 'bg-[#e8af38]', // Golden Yellow
      page: 'service',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Gear (Mechanical) */}
          <circle cx="26" cy="28" r="9" strokeWidth="2.5" />
          <path d="M26 15v4M26 37v4M13 28h4M39 28h4M17 19l3 3M32 34l3 3M17 37l3-3M32 19l3-3" strokeWidth="2" />
          {/* Lightning Bolt (Electrical) */}
          <path d="M44 12l-14 22h11l-7 18 19-24h-11l8-16z" strokeWidth="2.5" strokeLinejoin="miter" />
        </svg>
      ),
    },
    {
      id: 'security-automation',
      title: 'SECURITY & AUTOMATION',
      bgColor: 'bg-[#57a6c5]', // Teal / Cyan
      page: 'security-systems',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Security Shield */}
          <path d="M32 10L14 18v15c0 13 8 22 18 25 10-3 18-12 18-25V18L32 10z" strokeWidth="2.5" />
          {/* Automation Check & Lock */}
          <circle cx="32" cy="27" r="4" strokeWidth="2" />
          <path d="M32 31v7" strokeWidth="2.5" />
          <path d="M25 43l5 5 9-9" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 'software-managed-services',
      title: 'SOFTWARE & MANAGED SERVICES',
      bgColor: 'bg-[#8cc44f]', // Lime Green
      page: 'software-managed',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Software Window */}
          <rect x="10" y="12" width="44" height="34" rx="4" strokeWidth="2.5" />
          <path d="M10 22h44M16 17h2M22 17h2M28 17h2" strokeWidth="2" />
          {/* Code Brackets < /> */}
          <path d="M22 29l-5 5 5 5M42 29l5 5-5 5M34 27l-4 14" strokeWidth="2.5" />
          {/* Stand */}
          <path d="M24 46h16M32 46v6" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 'advertising-event-organizer',
      title: 'ADVERTISING & EVENT ORGANIZER',
      bgColor: 'bg-[#c64a45]', // Red
      page: 'eo',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Broadcast Megaphone */}
          <path d="M12 24v16M12 28h8l18-12v32L20 36h-8a2 2 0 0 1-2-2V30a2 2 0 0 1 2-2z" strokeWidth="2.5" />
          <path d="M16 36v12a3 3 0 0 0 3 3h2" strokeWidth="2.5" />
          {/* Sound Broadcast & Waves */}
          <path d="M44 22a10 10 0 0 1 0 20M50 16a18 18 0 0 1 0 32" strokeWidth="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#2d2d2d] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white tracking-widest mb-8 sm:mb-12 uppercase">
          SOLUSI KAMI
        </h2>

        {/* 2 Column Mobile, 5 Column Desktop Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 shadow-2xl rounded-sm overflow-hidden">
          {solutions.map((item) => (
            <div
              key={item.id}
              onClick={() => item.page && onNavigate?.(item.page)}
              className={`${item.bgColor} p-4 sm:p-8 flex flex-col items-center justify-center text-center aspect-square transition-all duration-300 hover:brightness-110 cursor-pointer group`}
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-extrabold text-[11px] sm:text-xs tracking-wider leading-tight uppercase max-w-[160px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

