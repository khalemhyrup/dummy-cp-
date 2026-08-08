import React, { useState } from 'react';
import {
  Home,
  ChevronDown,
  ChevronUp,
  Wrench,
  CheckCircle2,
  Zap,
  Send,
  ShieldCheck,
  Camera,
  Flame,
  Droplets,
  Layers,
  ArrowRight
} from 'lucide-react';

interface MechanicalPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const MechanicalPage: React.FC<MechanicalPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Mekanikal (Mechanical)');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const sidebarMenuItems = [
    { label: 'CME Overview', id: 'cme-main' },
    { label: 'Mekanikal (Mechanical)', id: 'civil-construction' },
    { label: 'Elektrikal (Electrical)', id: 'me-installation' },
  ];

  const mechanicalServices = [
    {
      id: 'hvac',
      title: '1. Sistem HVAC (Heating, Ventilation, and Air Conditioning)',
      desc: 'Perencanaan, instalasi, dan pemeliharaan sistem pemanas, ventilasi, dan pendingin udara presisi gedung & industri.',
      icon: Zap,
      items: [
        'Perencanaan & Perhitungan Load Thermal Pendingin Gedung',
        'Instalasi Central AC (VRV / VRF System), Chiller & Precision Air Conditioning',
        'Fabrikasi & Pemasangan Ducting Polyurethane / BJLS',
        'Sistem Ventilasi Udara Bersih, Exhaust Fan Industri, & Air Filter System',
        'Pemeliharaan Berkala & Maintenance Preventive AC Gedung'
      ]
    },
    {
      id: 'plumbing',
      title: '2. Plumbing System',
      desc: 'Desain dan instalasi sistem perpipaan untuk air bersih, air kotor, air limbah, dan sistem sanitasi.',
      icon: Droplets,
      items: [
        'Desain & Instalasi Perpipaan Air Bersih Gedung & Industri',
        'Instalasi Perpipaan Air Kotor, Air Limbah, & Septic Tank System',
        'Sistem Sanitasi, Pompa Transfer, Booster Pump, & Submersible Pump',
        'Pengolahan Air Limbah & Sewage Treatment Plant (STP) Piping'
      ]
    },
    {
      id: 'fire-protection',
      title: '3. Pemadam Kebakaran (Fire Protection)',
      desc: 'Perencanaan dan pemasangan sistem pemadam kebakaran seperti sprinkler, hydrant, dan sistem deteksi kebakaran.',
      icon: Flame,
      items: [
        'Perencanaan & Instalasi Jaringan Fire Hydrant (Hydrant Pillar & Box)',
        'Pemasangan Sprinkler System Otomatis & Main Control Valve (MCV)',
        'Pompa Pemadam Kebakaran (Electric Fire Pump, Diesel Pump, Jockey Pump)',
        'Sistem Deteksi Kebakaran (Smoke Detector, Heat Detector, & Fire Alarm Panel)'
      ]
    },
    {
      id: 'gas-piping',
      title: '4. Sistem Pemipaan Gas',
      desc: 'Perencanaan dan instalasi sistem pipa gas untuk industri, komersial, dan perumahan.',
      icon: Wrench,
      items: [
        'Perencanaan & Instalasi Pipa Gas Industri (LPG & Natural Gas/NG)',
        'Pemasangan Pipa Gas Medis & Laboratorium Presisi Tinggi',
        'Instalasi Gas Leak Detector, Automatic Shut-off Valve, & Pressure Regulator',
        'Uji Tekanan Pipa (Hydrostatic / Pneumatic Pressure Test) & Sertifikasi'
      ]
    }
  ];

  const photoGallery = [
    {
      src: '/CME/Mechanical/CME_pipa.png',
      title: 'Instalasi System Perpipaan Plumbing & Gas Industri',
      desc: 'Pemasangan jaringan perpipaan air bersih, limbah, dan pemipaan gas presisi oleh engineer Grasindo Pro.',
    },
    {
      src: '/CME/Mechanical/Screenshot 2026-08-08 024958.png',
      title: 'Pekerjaan Rekayasa Mekanikal & Fire Protection',
      desc: 'Instalasi sistem pemadam kebakaran hydrant & sprinkler di lokasi proyek.',
    },
    {
      src: '/CME/Mechanical/Screenshot 2026-08-08 025152.png',
      title: 'Maintenance & Testing Tekanan Pipa Lapangan',
      desc: 'Pengujian hydrostatic pressure test pipa gas & pemeliharaan unit HVAC gedung.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Survei & Perencanaan Teknis',
      desc: 'Studi beban pendingin (HVAC), debit air plumbing, & tekanan pipa gas sesuai kebutuhan lokasi.'
    },
    {
      step: '02',
      title: 'Desain & Spesifikasi Material',
      desc: 'Penyusunan gambar teknik (Shop Drawing), BOM material standar SNI, & perhitungan K3.'
    },
    {
      step: '03',
      title: 'Instalasi & Fabrikasi Lapangan',
      desc: 'Pemasangan pipa, ducting, unit AC, pompa hydrant, & katup kontrol oleh tim teknisi teruji.'
    },
    {
      step: '04',
      title: 'Testing, Hydrotest & Serah Terima',
      desc: 'Uji komisioning, tes tekanan pipa, pengujian sensor kebocoran, & pembuatan sertifikat kelayakan.'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryOpen(false);
      setFormSubmitted(false);
      setInquiryForm({ name: '', email: '', phone: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">
      
      {/* ================= HERO BANNER ================= */}
      <div className="w-full h-56 sm:h-72 lg:h-80 overflow-hidden relative bg-slate-900">
        <img
          src="/CME/Mechanical/CME_pipa.png"
          alt="Mekanikal Hero Banner"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Mekanikal (Mechanical) Services
          </h1>
        </div>
      </div>

      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto">
          <button onClick={() => onNavigate?.('home')} className="hover:text-amber-600 flex items-center gap-1 font-medium transition-colors cursor-pointer">
            <Home className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('service')} className="hover:text-amber-600 font-medium transition-colors cursor-pointer">
            Produk & Layanan
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('cme-main')} className="hover:text-amber-600 font-medium transition-colors cursor-pointer">
            CME (Mekanikal & Elektrikal)
          </button>
          <span>/</span>
          <span className="text-slate-800 font-semibold whitespace-nowrap">Mekanikal (Mechanical)</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT (2 COLUMNS) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT 8 COLUMNS: DETAILED SERVICE CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Introductory Statement */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-7 bg-slate-800 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Layanan Rekayasa & Instalasi Mekanikal Spesialis Terpadu.
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Grasindo Pro menangani proyek mekanikal terpadu dari pengondisian udara presisi (HVAC), jaringan perpipaan air bersih dan sanitasi (Plumbing), sistem proteksi pemadam kebakaran otomatis (Hydrant & Sprinkler), hingga sistem instalasi pipa gas industri & komersial dengan standar mutu nasional.
              </p>
            </div>

            {/* SUB-SERVICES GRID */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">KATEGORI LAYANAN</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  Cakupan Layanan Spesifikasi Mekanikal
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {mechanicalServices.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="bg-slate-50 p-6 rounded-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                          <ServiceIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900">
                            {service.title}
                          </h4>
                          <p className="text-slate-700 text-xs sm:text-sm mt-1 leading-relaxed text-justify">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 space-y-1.5 border-t border-slate-200/60">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* KEY ADVANTAGES / KENAPA MEMILIH KAMI */}
            <div className="bg-slate-50 rounded-sm p-6 border border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                Keunggulan Layanan Mekanikal Grasindo Pro
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Sertifikasi Standar Keselamatan Kerja (K3 / QHSE) di Lokasi Proyek.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Tim Engineer Spesialis HVAC, Plumbing & Fire Protection Berpengalaman.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Penggunaan Pipa, Ducting, & Pompa Teruji Standar Industri (SNI / NFPA).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Jaminan Tes Tekanan (Hydrotest) & Garansi Maintenance Berkelanjutan.</span>
                </div>
              </div>
            </div>

            {/* METHODOLOGY / PROCESS STEPS */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 border-b border-slate-200 pb-3">
                Tahapan Alur Pekerjaan Mekanikal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((p, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-sm border border-slate-200 space-y-1.5 relative overflow-hidden">
                    <div className="text-xl font-black text-slate-200 absolute top-2 right-3">
                      {p.step}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      {p.title}
                    </h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PHOTO GALLERY WITH LIGHTBOX */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-600" />
                Dokumentasi Lapangan & Galeri Foto
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photoGallery.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPhoto(item)}
                    className="group cursor-pointer rounded-sm overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs hover:shadow-md transition-all"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                        <Camera className="w-4 h-4" />
                        <span>Perbesar Foto</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h4 className="font-bold text-xs text-slate-900 line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLUMNS: STICKY SIDEBAR MENU */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Navigation Menu Box */}
              <div className="bg-white rounded-sm border border-slate-200 p-5 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-slate-900 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2">
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                    CME MENU
                  </span>
                </div>

                <div className="mt-4 divide-y divide-slate-100 rounded-sm overflow-hidden border border-slate-100">
                  {sidebarMenuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActiveTab(item.label);
                        if (onNavigate) {
                          onNavigate(item.id);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 text-xs transition-all flex items-center justify-between cursor-pointer ${
                        activeTab === item.label
                          ? 'bg-slate-900 text-white font-bold border-l-4 border-amber-500'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeTab === item.label && <ChevronDown className="w-4 h-4 text-amber-400 rotate-[-90deg]" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="bg-slate-900 rounded-sm overflow-hidden max-w-3xl w-full border border-slate-800 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full h-80 sm:h-96 object-cover" />
              <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 bg-slate-950/80 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
                ✕
              </button>
            </div>
            <div className="p-5 text-white space-y-1">
              <h4 className="font-bold text-lg text-white">{selectedPhoto.title}</h4>
              <p className="text-slate-300 text-xs sm:text-sm">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* INQUIRY FORM MODAL (SAMA SEPERTI IT SUPPORT PAGE) */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">FORMULIR KONSULTASI & PENAWARAN</span>
                <h3 className="text-xl font-bold mt-1">Mekanikal (Mechanical)</h3>
              </div>
              <button onClick={() => setInquiryOpen(false)} className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer">✕</button>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Permintaan Terkirim!</h4>
                  <p className="text-xs text-slate-600">Tim engineer Mekanikal Grasindo Pro akan menghubungi Anda segera.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Perusahaan</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Telepon / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Kebutuhan Mekanikal</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan HVAC, Plumbing, Pemadam Kebakaran, atau Pemipaan Gas..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-slate-800 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-md text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Konsultasi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FLOATING BACK TO TOP BUTTON */}
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-lg hover:shadow-xl text-slate-600 flex items-center justify-center transition-all z-40">
        <ChevronUp className="w-6 h-6" />
      </button>

    </div>
  );
};
