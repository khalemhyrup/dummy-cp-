import React from 'react';

interface ProjectShowcaseProps {
  onNavigate?: (page: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 'proj-1',
      image: '/images/project_billboard.jpg',
      category: 'Activation | Build',
      title: 'Billboard Structures',
      route: 'media-advertising',
    },
    {
      id: 'proj-2',
      image: '/images/project_signage.jpg',
      category: 'Brand Infrastructure',
      title: 'Corporate Signage',
      route: 'media-advertising',
    },
    {
      id: 'proj-3',
      image: '/images/project_booth.jpg',
      category: 'Spatial Design',
      title: 'Booth Activation',
      route: 'eo',
    },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-neutral-900 leading-tight">
              Precision Executed.<br />
              Infrastructure Realized.
            </h2>
          </div>
          <div>
            <button
              onClick={() => onNavigate?.('client')}
              className="text-xs sm:text-sm font-medium text-neutral-600 hover:text-black transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-black pb-1"
            >
              View All Projects
            </button>
          </div>
        </div>

        {/* 3 Showcase Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate?.(item.route)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] bg-neutral-100 overflow-hidden relative mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Category Subtitle */}
              <p className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide uppercase">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 mt-1 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
