import React, { useState } from 'react';
import { Home, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';

interface OrgNode {
  id: string;
  title: string;
  subtitle?: string;
  name: string;
  department: string;
  headerBg: string;
  roleDescription?: string;
}

interface OrgStructurePageProps {
  onNavigate?: (page: string) => void;
}

export const OrgStructurePage: React.FC<OrgStructurePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Struktur Organisasi');
  const [selectedNode, setSelectedNode] = useState<OrgNode | null>(null);

  const sidebarMenuItems = [
    { label: 'Struktur Organisasi', id: 'org-structure' },
    { label: 'Client (Pelanggan)', id: 'client' },
    { label: 'Rekam Jejak', id: 'about' },
  ];

  const orgNodes: Record<string, OrgNode> = {
    ceo: {
      id: 'ceo',
      title: 'DIREKTUR UTAMA',
      subtitle: 'Chief Executive Officer',
      name: 'Deny Taufik',
      department: 'Executive Board',
      headerBg: '#2D4263',
      roleDescription: 'Memimpin arah strategis, tata kelola perusahaan, dan ekspansi pertumbuhan bisnis PT Integra Aneksa Kreasindo (Grasindo Pro).'
    },
    audit: {
      id: 'audit',
      title: 'Internal Audit',
      subtitle: 'Head of Internal Audit',
      name: 'Nefo Kardoyo',
      department: 'Internal Audit',
      headerBg: '#C84B31',
      roleDescription: 'Melakukan pengawasan independen, penjaminan kualitas operasional, dan kepatuhan standar internal perusahaan.'
    },
    dirFinance: {
      id: 'dirFinance',
      title: 'Finance & Risk Mgmt',
      subtitle: 'Director of Finance & Risk Management',
      name: 'Wiwit D Rahayu',
      department: 'Finance & Risk',
      headerBg: '#4A6B9C',
      roleDescription: 'Mengelola strategi keuangan, manajemen risiko investasi, efisiensi anggaran, dan perencanaan fiskal korporasi.'
    },
    mgrAdminFinance: {
      id: 'mgrAdminFinance',
      title: 'Admin & Finance',
      subtitle: 'Administration & Finance Manager',
      name: 'Pramono',
      department: 'Finance & Risk',
      headerBg: '#D97706',
      roleDescription: 'Mengatur operasional administrasi harian, pengelolaan arus kas, serta pencatatan keuangan operasional.'
    },
    mgrAE: {
      id: 'mgrAE',
      title: 'Account Executive',
      subtitle: 'Account Executive Manager',
      name: 'Nova Kristina',
      department: 'Finance & Risk',
      headerBg: '#D97706',
      roleDescription: 'Supervisi hubungan klien, pengelolaan akun proyek strategis, dan penagihan komersial perusahaan.'
    },
    mgrTax: {
      id: 'mgrTax',
      title: 'Tax & Accounting',
      subtitle: 'Tax & Accounting Manager',
      name: 'Kasiyanto',
      department: 'Finance & Risk',
      headerBg: '#D97706',
      roleDescription: 'Memastikan kepatuhan perpajakan nasional, audit pembukuan, dan penyusunan laporan keuangan periodik.'
    },
    dirHC: {
      id: 'dirHC',
      title: 'Human Capital & Dev',
      subtitle: 'Director of Human Capital & Development',
      name: 'Ganaf Margi',
      department: 'Human Capital',
      headerBg: '#4A6B9C',
      roleDescription: 'Mengembangkan potensi sumber daya manusia, manajemen talenta, serta budaya kerja profesional berorientasi hasil.'
    },
    dirQHSE: {
      id: 'dirQHSE',
      title: 'QHSE Director',
      subtitle: 'Quality, Health Safety & Environment Director',
      name: 'Nano Gifari',
      department: 'QHSE',
      headerBg: '#4A6B9C',
      roleDescription: 'Memastikan implementasi standar keselamatan kerja (K3), manajemen lingkungan hidup, dan kontrol kualitas proyek.'
    },
    dirIT: {
      id: 'dirIT',
      title: 'IT Infrastructure',
      subtitle: 'Director of IT Infrastructure',
      name: 'Alam R',
      department: 'IT Infrastructure',
      headerBg: '#4A6B9C',
      roleDescription: 'Memimpin divisi teknologi informasi, infrastruktur jaringan fiber optik, data center, dan integrasi sistem IT.'
    },
    dirAdvEO: {
      id: 'dirAdvEO',
      title: 'Advertising & EO',
      subtitle: 'Director of Advertising & Event Organizer',
      name: 'Lia Yuliantina',
      department: 'Advertising & EO',
      headerBg: '#4A6B9C',
      roleDescription: 'Mengkoordinasikan divisi media iklan outdoor/indoor, kampanye promosi, serta penyelenggaraan acara dan MICE.'
    },
    dirME: {
      id: 'dirME',
      title: 'Director M & E',
      subtitle: 'Mechanical & Electrical Director',
      name: 'Miko',
      department: 'Mechanical & Electrical',
      headerBg: '#4A6B9C',
      roleDescription: 'Supervisi perencanaan dan eksekusi proyek instalasi mekanikal, elektrikal, perpipaan, serta infrastruktur CME.'
    }
  };

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
                  className="w-full h-auto select-none"
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
                      .node-grp { cursor: pointer; transition: filter 0.15s ease; }
                      .node-grp:hover { filter: drop-shadow(0 4px 6px rgba(0,0,0,0.12)); }
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
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.ceo)}>
                    <rect x="390" y="10" width="170" height="24" rx="4" ry="4" fill="#2D4263" />
                    <text x="475" y="26" className="title-txt">DIREKTUR UTAMA</text>
                    <rect x="390" y="34" width="170" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="475" y="56" className="name-bold">Deny Taufik</text>
                  </g>

                  {/* ================= 2. INTERNAL AUDIT ================= */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.audit)}>
                    <rect x="215" y="90" width="170" height="24" rx="4" ry="4" fill="#C84B31" />
                    <text x="300" y="106" className="title-txt">Internal Audit</text>
                    <rect x="215" y="114" width="170" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="300" y="136" className="name-bold">Nefo Kardoyo</text>
                  </g>

                  {/* ================= 3. THE 6 DIRECTORS ================= */}
                  
                  {/* DIR 1: Finance & Risk Mgmt */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirFinance)}>
                    <rect x="5" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="80" y="226" className="title-txt">Finance &amp; Risk Mgmt</text>
                    <rect x="5" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="80" y="256" className="name-bold">Wiwit D Rahayu</text>
                  </g>

                  {/* DIR 2: Human Capital & Dev */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirHC)}>
                    <rect x="163" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="238" y="226" className="title-txt">Human Capital &amp; Dev</text>
                    <rect x="163" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="238" y="256" className="name-bold">Ganaf Margi</text>
                  </g>

                  {/* DIR 3: QHSE Director */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirQHSE)}>
                    <rect x="321" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="396" y="226" className="title-txt">QHSE Director</text>
                    <rect x="321" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="396" y="256" className="name-bold">Nano Gifari</text>
                  </g>

                  {/* DIR 4: IT Infrastructure */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirIT)}>
                    <rect x="479" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="554" y="226" className="title-txt">IT Infrastructure</text>
                    <rect x="479" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="554" y="256" className="name-bold">Alam R</text>
                  </g>

                  {/* DIR 5: Advertising & EO */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirAdvEO)}>
                    <rect x="637" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="712" y="226" className="title-txt">Advertising &amp; EO</text>
                    <rect x="637" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="712" y="256" className="name-bold">Lia Yuliantina</text>
                  </g>

                  {/* DIR 6: Director M & E */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.dirME)}>
                    <rect x="795" y="210" width="150" height="24" rx="4" ry="4" fill="#4A6B9C" />
                    <text x="870" y="226" className="title-txt">Director M &amp; E</text>
                    <rect x="795" y="234" width="150" height="36" rx="2" ry="2" className="box-bg" />
                    <text x="870" y="256" className="name-bold">Miko</text>
                  </g>

                  {/* ================= 4. THE 3 MANAGERS ================= */}

                  {/* MGR 1: Admin & Finance */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.mgrAdminFinance)}>
                    <rect x="105" y="310" width="160" height="60" rx="6" ry="6" className="mgr-bg" />
                    <text x="185" y="334" className="title-dark">Admin &amp; Finance</text>
                    <text x="185" y="354" className="name-dark">Pramono</text>
                  </g>

                  {/* MGR 2: Account Executive */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.mgrAE)}>
                    <rect x="105" y="400" width="160" height="60" rx="6" ry="6" className="mgr-bg" />
                    <text x="185" y="424" className="title-dark">Account Executive</text>
                    <text x="185" y="444" className="name-dark">Nova Kristina</text>
                  </g>

                  {/* MGR 3: Tax & Accounting */}
                  <g className="node-grp" onClick={() => setSelectedNode(orgNodes.mgrTax)}>
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

      {/* ================= NODE DETAIL MODAL ================= */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200 space-y-5">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-3 rounded-xl text-white shadow-xs"
                  style={{ backgroundColor: selectedNode.headerBg }}
                >
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                    {selectedNode.department}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedNode.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase">Nama Pejabat</span>
                <p className="text-sm font-bold text-slate-800">{selectedNode.name}</p>
                {selectedNode.subtitle && (
                  <p className="text-xs text-slate-500 italic">{selectedNode.subtitle}</p>
                )}
              </div>

              {selectedNode.roleDescription && (
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">Tanggung Jawab Divisi</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {selectedNode.roleDescription}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedNode(null)}
                className="px-5 py-2 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all shadow-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

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
