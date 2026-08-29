import React, { useState } from 'react';
import { Home, ChevronDown, ChevronUp } from 'lucide-react';

interface OrgStructurePageProps {
  onNavigate?: (page: string) => void;
}

export const OrgStructurePage: React.FC<OrgStructurePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Struktur Organisasi');

  const sidebarMenuItems = [
    { label: 'Struktur Organisasi', id: 'org-structure' },
    { label: 'Client (Pelanggan)', id: 'client' },
    { label: 'Rekam Jejak', id: 'about' },
  ];

  const handleSidebarClick = (item: { label: string; id: string }) => {
    setActiveTab(item.label);
    if (item.id !== 'org-structure' && onNavigate) {
      onNavigate(item.id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">

      {/* ================= TOP HERO BANNER WITH BACKGROUND IMAGE ================= */}
      <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden relative bg-slate-900">
        <img
          src="/about_us_hero_banner.png"
          alt="Struktur Organisasi Hero Banner"
          className="w-full h-full object-cover object-center grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
      </div>

      {/* ================= PAGE TITLE & BREADCRUMB ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Struktur Organisasi
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mt-2">
          <Home className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>/</span>
          <span className="hover:text-slate-900 cursor-pointer" onClick={() => onNavigate && onNavigate('about')}>Tentang Kami</span>
          <span>/</span>
          <span>Manajemen</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Struktur Organisasi</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT (2 COLUMNS) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN: ORG CHART DIAGRAM (8 COLS) */}
          <div className="lg:col-span-8">
            <div className="bg-white overflow-x-auto p-2">
              <div className="min-w-[880px]">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 950 580"
                  className="w-full h-auto select-none pointer-events-none"
                  style={{ backgroundColor: '#FFFFFF', fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}
                >
                  <defs>
                    <style>{`
                      .line { stroke: #CBD5E1; stroke-width: 2.5px; fill: none; stroke-linecap: round; stroke-linejoin: round; }
                      .box-bg { fill: #F8FAFC; stroke: #E2E8F0; stroke-width: 1px; }
                      .mgr-bg { fill: #F9F9F7; stroke: #C84B31; stroke-width: 1.5px; }
                      .title-txt { fill: #FFFFFF; font-size: 11.5px; font-weight: 700; text-anchor: middle; }
                      .name-bold { fill: #1E293B; font-size: 12px; font-weight: 700; text-anchor: middle; }
                      .title-dark { fill: #1E293B; font-size: 11.5px; font-weight: 700; text-anchor: middle; }
                      .name-dark { fill: #475569; font-size: 11px; text-anchor: middle; }
                    `}</style>
                  </defs>

                  {/* CONNECTING LINES */}
                  {/* Main vertical from DU down to Directors line */}
                  <path d="M 475 70 L 475 180" className="line" />

                  {/* Internal Audit horizontal branch */}
                  <path d="M 475 120 L 385 120" className="line" />

                  {/* Horizontal line for 6 Directors */}
                  <path d="M 80 180 L 870 180" className="line" />

                  {/* Vertical drops to 6 Directors */}
                  <path d="M 80 180 L 80 210" className="line" />
                  <path d="M 238 180 L 238 210" className="line" />
                  <path d="M 396 180 L 396 210" className="line" />
                  <path d="M 554 180 L 554 210" className="line" />
                  <path d="M 712 180 L 712 210" className="line" />
                  <path d="M 870 180 L 870 210" className="line" />

                  {/* Vertical drop for Managers from Finance Director */}
                  <path d="M 80 270 L 80 520" className="line" />

                  {/* Horizontal branches for 3 Managers */}
                  <path d="M 80 340 L 105 340" className="line" />
                  <path d="M 80 430 L 105 430" className="line" />
                  <path d="M 80 520 L 105 520" className="line" />

                  {/* ================= 1. DIREKTUR UTAMA ================= */}
                  <g>
                    <rect x="390" y="10" width="170" height="24" rx="4" ry="4" fill="#2D4263" />
                    <text x="475" y="26" className="title-txt">DIREKTUR UTAMA</text>
                    <rect x="390" y="34" width="170" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="475" y="56" className="name-bold">Deny Taufik</text>
                  </g>

                  {/* ================= 2. INTERNAL AUDIT ================= */}
                  <g>
                    <rect x="215" y="90" width="170" height="24" rx="4" ry="4" fill="#C84B31" />
                    <text x="300" y="106" className="title-txt">Internal Audit</text>
                    <rect x="215" y="114" width="170" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="300" y="136" className="name-bold">Nefo Kardoyo</text>
                  </g>

                  {/* ================= 3. THE 6 DIRECTORS ================= */}
                  
                  {/* DIR 1: Finance & Risk Mgmt */}
                  <g>
                    <rect x="5" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="80" y="226" className="title-txt">Finance &amp; Risk Mgmt</text>
                    <rect x="5" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="80" y="256" className="name-bold">Wiwit D Rahayu</text>
                  </g>

                  {/* DIR 2: Human Capital & Dev */}
                  <g>
                    <rect x="163" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="238" y="226" className="title-txt">Human Capital &amp; Dev</text>
                    <rect x="163" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="238" y="256" className="name-bold">Ganaf Margi</text>
                  </g>

                  {/* DIR 3: QHSE Director */}
                  <g>
                    <rect x="321" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="396" y="226" className="title-txt">QHSE Director</text>
                    <rect x="321" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="396" y="256" className="name-bold">Nano Gifari</text>
                  </g>

                  {/* DIR 4: IT Infrastructure */}
                  <g>
                    <rect x="479" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="554" y="226" className="title-txt">IT Infrastructure</text>
                    <rect x="479" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="554" y="256" className="name-bold">Alam R</text>
                  </g>

                  {/* DIR 5: Advertising & EO */}
                  <g>
                    <rect x="637" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="712" y="226" className="title-txt">Advertising &amp; EO</text>
                    <rect x="637" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="712" y="256" className="name-bold">Lia Yuliantina</text>
                  </g>

                  {/* DIR 6: Director M & E */}
                  <g>
                    <rect x="795" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="870" y="226" className="title-txt">Director M &amp; E</text>
                    <rect x="795" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="870" y="256" className="name-bold">Miko</text>
                  </g>

                  {/* ================= 4. THE 3 MANAGERS ================= */}

                  {/* MGR 1: Admin & Finance */}
                  <g>
                    <rect x="105" y="310" width="160" height="60" rx="6" ry="6" className="mgr-bg" />
                    <text x="185" y="334" className="title-dark">Admin &amp; Finance</text>
                    <text x="185" y="354" className="name-dark">Pramono</text>
                  </g>

                  {/* MGR 2: Account Executive */}
                  <g>
                    <rect x="105" y="400" width="160" height="60" rx="6" ry="6" className="mgr-bg" />
                    <text x="185" y="424" className="title-dark">Account Executive</text>
                    <text x="185" y="444" className="name-dark">Nova Kristina</text>
                  </g>

                  {/* MGR 3: Tax & Accounting */}
                  <g>
                    <rect x="105" y="490" width="160" height="60" rx="6" ry="6" className="mgr-bg" />
                    <text x="185" y="514" className="title-dark">Tax &amp; Accounting</text>
                    <text x="185" y="534" className="name-dark">Kasiyanto</text>
                  </g>

                </svg>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR MENU (4 COLS) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">

              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-2">
                <span className="text-slate-900 font-extrabold text-base tracking-wider uppercase flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                  TENTANG KAMI
                </span>
              </div>

              {/* Sidebar Menu Items List */}
              <div className="border border-slate-200/90 rounded-sm bg-slate-50/50 divide-y divide-slate-200/70 overflow-hidden shadow-xs">
                {sidebarMenuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleSidebarClick(item)}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm transition-colors flex items-center justify-between ${
                      activeTab === item.label
                        ? 'bg-white font-extrabold text-slate-900 border-l-4 border-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FLOATING BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-lg hover:shadow-xl text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-300 z-40 group hover:scale-110"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
