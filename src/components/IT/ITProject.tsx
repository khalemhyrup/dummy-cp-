import React, { useState } from 'react';

interface ProjectCategoryGroup {
  id: string;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const PROJECT_GROUPS: ProjectCategoryGroup[] = [
  {
    id: 'cctv',
    title: 'Integrated Surveillance & Security Systems',
    images: [
      { src: '/IT/IT-solution/security1.jpeg', alt: 'CCTV & Access Control' },
      { src: '/IT/IT-solution/security2.png', alt: 'Surveillance Camera System' },
      { src: '/IT/IT-solution/security3.png', alt: 'Security Barrier & Turnstile' },
    ],
  },
  {
    id: 'network',
    title: 'Network, Cabling & Optical Fiber Solutions',
    images: [
      { src: '/IT/IT-solution/fiber1.png', alt: 'Optical Fiber Splicing' },
      { src: '/IT/IT-solution/network1.jpeg', alt: 'Server Rack & Patch Panel' },
      { src: '/IT/IT-solution/network2.jpeg', alt: 'Structured Cabling' },
      { src: '/IT/IT-solution/network3.png', alt: 'Core Network Distribution' },
    ],
  },
  {
    id: 'cme',
    title: 'Civil, Mechanical & Electrical (CME)',
    images: [
      { src: '/IT/CME/Electrical/CME_AC.png', alt: 'Precision AC & HVAC' },
      { src: '/IT/CME/Electrical/cme_electrical.png', alt: 'Electrical Power Panel' },
      { src: '/IT/CME/Electrical/Screenshot 2026-08-08 024025.png', alt: 'Cable Tray Installation' },
      { src: '/IT/CME/Mechanical/CME_pipa.png', alt: 'Mechanical Piping Infrastructure' },
      { src: '/IT/CME/Mechanical/Screenshot 2026-08-08 024958.png', alt: 'HVAC Ducting System' },
      { src: '/IT/CME/Mechanical/Screenshot 2026-08-08 025152.png', alt: 'Mechanical Assembly' },
    ],
  },
  {
    id: 'telecom',
    title: 'Telecommunication & PABX Systems',
    images: [
      { src: '/IT/IT-solution/telecomunication1.jpg', alt: 'Transmission Links' },
      { src: '/IT/IT-solution/telecomunication2.png', alt: 'PABX Telephony System' },
      { src: '/IT/IT-solution/telecomunication3.jpeg', alt: 'Base Station Node' },
      { src: '/images/it_telecom_pabx_system.jpg', alt: 'Central Telephony Hub' },
    ],
  },
  {
    id: 'datacenter',
    title: 'Data Center & Managed IT Support',
    images: [
      { src: '/images/hero_datacenter.jpg', alt: 'Tier III Data Center' },
      { src: '/images/editorial_gallery_1.jpg', alt: 'Backbone Cabling' },
      { src: '/images/editorial_gallery_2.jpg', alt: 'Site Integration' },
      { src: '/images/editorial_gallery_3.jpg', alt: 'Rack Equipment' },
      { src: '/IT/IT-solution/maintanance1.png', alt: 'Periodic Maintenance' },
      { src: '/IT/IT-solution/maintanance2.png', alt: 'Network Diagnostic' },
    ],
  },
];

interface ITProjectProps {
  onNavigate?: (page: string) => void;
}

export const ITProject: React.FC<ITProjectProps> = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#fafcff] relative overflow-hidden font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">
      
      {/* =========================================================================
          AMBIENT BACKGROUND VISUALS (Pattern & Subtle Gradient Glows)
      ========================================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Tech Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#004B87 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-gradient-to-br from-cyan-400/10 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-400/10 to-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* =========================================================================
          MAIN GALLERY CONTENT CONTAINER
      ========================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {PROJECT_GROUPS.map((group) => (
          <section key={group.id} className="space-y-8 sm:space-y-10 group/section">
            
            {/* Category Header (Sesuai gaya Our Service di Homepage IT) */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
                {group.title}
              </h2>
              <div className="w-12 h-[3px] bg-[#2f6596] mt-3" />
            </div>

            {/* Photos Grid with Framed Glassmorphic Visual Polish */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 items-start">
              {group.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(img.src)}
                  className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white p-1.5 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.25)] hover:border-cyan-400 transition-all duration-500 cursor-pointer"
                >
                  
                  {/* Photo Inner Container */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/service_it_support.png';
                      }}
                    />

                    {/* Subtle Gradient Shadow Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Diagonal Shimmer Light Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                    {/* Viewfinder Technical Corner Accents (Cyan) */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                </div>
              ))}
            </div>

          </section>
        ))}

      </div>

      {/* =========================================================================
          FULLSCREEN VISUAL PREVIEW MODAL (Click anywhere to close, no buttons)
      ========================================================================== */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/50"
            onClick={() => setSelectedPhoto(null)}
          >
            <img
              src={selectedPhoto}
              alt="Project Preview"
              className="w-auto h-auto max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
