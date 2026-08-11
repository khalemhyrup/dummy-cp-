import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  ChevronDown,
  ChevronUp,
  Zap,
  Cpu,
  CheckCircle2,
  Send,
  ShieldCheck,
  Camera,
  Activity,
  Layers,
  Sliders
} from 'lucide-react';
import { scrollAnimate, clipPathReveal } from '../../animations';

interface ElectricalPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const ElectricalPage: React.FC<ElectricalPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('Elektrikal (Electrical)');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const introRef    = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const stepsRef    = useRef<HTMLDivElement>(null);
  const galleryRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers = [
      ...(introRef.current    ? scrollAnimate(introRef.current,    { type: 'slide-left',  distance: 50, duration: 0.7, start: 'top 88%' }) : []),
      ...(servicesRef.current ? scrollAnimate(
          Array.from(servicesRef.current.querySelectorAll('[data-service-card]')),
          { type: 'slide-up', stagger: 0.12, distance: 45, duration: 0.65, start: 'top 90%' }
        ) : []),
      ...(stepsRef.current ? scrollAnimate(
          Array.from(stepsRef.current.querySelectorAll('[data-step-card]')),
          { type: 'slide-up', stagger: 0.11, distance: 40, duration: 0.6, start: 'top 90%' }
        ) : []),
      ...(galleryRef.current ? clipPathReveal(
          Array.from(galleryRef.current.querySelectorAll('[data-gallery-item]')),
          { direction: 'up', duration: 1.0, start: 'top 92%' }
        ) : []),
    ];
    return () => triggers.forEach((t) => t.kill());
  }, []);

  const sidebarMenuItems = [
    { label: 'CME Overview', id: 'cme-main' },
    { label: 'Mekanikal (Mechanical)', id: 'civil-construction' },
    { label: 'Elektrikal (Electrical)', id: 'me-installation' },
  ];

  const electricalServices = [
    {
      id: 'instalasi-listrik',
      title: '1. Instalasi Listrik',
      desc: 'Desain, instalasi, dan pemeliharaan sistem kelistrikan, termasuk pencahayaan, stopkontak, dan jaringan kabel.',
      icon: Zap,
      items: [
        'Desain & Instalasi Sistem Pencahayaan Indoor/Outdoor & Smart Lighting',
        'Pemasangan Terminal Stopkontak, Sakelar, & Armatur Listrik Gedung',
        'Penarikan & Perapihan Jaringan Kabel Power (Low Voltage Distribution)',
        'Cable Tray, Ladder, Busduct, & Protective Conduit Installation',
        'Inspeksi Berkelanjutan & Preventive Maintenance Sistem Kelistrikan'
      ]
    },
    {
      id: 'sistem-tenaga',
      title: '2. Sistem Tenaga (Trafo, Panel & Genset)',
      desc: 'Perencanaan dan instalasi sistem distribusi listrik, transformator, panel listrik, dan generator cadangan.',
      icon: Activity,
      items: [
        'Perencanaan & Instalasi Jaringan Distribusi Listrik Tegangan Menengah/Rendah (TM/TR)',
        'Pemasangan Substation & Transformator (Trafo Step Down)',
        'Fabrikasi & Wiring Panel Listrik (LVKR, Main Switchboard, Distribution Board)',
        'Panel Otomatis ATS / AMF (Auto Transfer Switch & Auto Main Failure)',
        'Instalasi & Uji Beban Generator Cadangan (Genset Backup Power)'
      ]
    },
    {
      id: 'integrasi-sistem',
      title: '3. Integrasi Sistem Mekanikal Elektrikal',
      desc: 'Penggabungan berbagai sistem mekanikal dan elektrikal untuk meningkatkan efisiensi dan fungsionalitas bangunan atau instalasi.',
      icon: Layers,
      items: [
        'Sinkronisasi Terpadu Antara HVAC, Kelistrikan, Genset, & Plumbing',
        'Peningkatan Fungsionalitas Operasional Gedung & Fasilitas Industri',
        'Integrasi Sistem Keamanan, Fire Alarm, & Central Control Monitor'
      ]
    },
    {
      id: 'otomatisasi',
      title: '4. Otomatisasi Kontrol',
      desc: 'Implementasi sistem otomatisasi untuk meningkatkan kontrol dan efisiensi penggunaan energi.',
      icon: Cpu,
      items: [
        'Penerapan Building Automation System (BAS) & Smart Controller',
        'Otomatisasi Penjadwalan Pencahayaan, Pendingin Udara, & Beban Daya',
        'Sistem Monitoring & Kontrol Jarak Jauh Operasional Fasilitas'
      ]
    },
    {
      id: 'manajemen-energi',
      title: '5. Manajemen Energi',
      desc: 'Perencanaan dan implementasi strategi untuk mengoptimalkan penggunaan energi dan meningkatkan efisiensi operasional.',
      icon: Sliders,
      items: [
        'Audit Konsumsi Energi Operasional Gedung & Pabrik',
        'Perencanaan Strategi Optimasi Beban Listrik & Reduksi Power Waste',
        'Implementasi Solusi Efisiensi Energi Berkelanjutan & Monitoring Real-Time'
      ]
    }
  ];

  const photoGallery = [
    {
      src: '/CME/Electrical/cme_electrical.png',
      title: 'Instalasi Jaringan Kelistrikan & Panel Daya',
      desc: 'Perakitan & wiring panel sakelar utama (Main Switchboard) oleh engineer kelistrikan Grasindo Pro.',
    },
    {
      src: '/CME/Electrical/CME_AC.png',
      title: 'Pemasangan Central AC & Otomatisasi Perangkat',
      desc: 'Sistem pengondisian udara presisi & integrasi kontrol daya otomatisasi gedung.',
    },
    {
      src: '/CME/Electrical/Screenshot 2026-08-08 024025.png',
      title: 'Pengujian Substation, Trafo & Genset Backup Power',
      desc: 'Pengujian beban (Load Bank Testing) generator cadangan listrik & substation.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Survei & Calculation Load Daya',
      desc: 'Perhitungan kapasitas daya listrik (kVA), beban trafo, & spesifikasi kabel kelistrikan.'
    },
    {
      step: '02',
      title: 'Wiring Design & Single Line Diagram',
      desc: 'Penyusunan Single Line Diagram (SLD), tata letak panel listrik, & penataan cable tray.'
    },
    {
      step: '03',
      title: 'Instalasi, Panel Wiring & Substation',
      desc: 'Penarikan kabel power, pemasangan trafo, perakitan ATS/AMF, & instalasi genset backup.'
    },
    {
      step: '04',
      title: 'Komisioning & Megger / Load Test',
      desc: 'Pengujian tahanan isolasi (Megger Test), uji beban genset, & penyerahan sertifikat laik operasi.'
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
          src="/CME/Electrical/cme_electrical.png"
          alt="Elektrikal Hero Banner"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Elektrikal (Electrical) Services
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
          <span className="text-slate-800 font-semibold whitespace-nowrap">Elektrikal (Electrical)</span>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT (2 COLUMNS) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT 8 COLUMNS: DETAILED SERVICE CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Introductory Statement */}
            <div ref={introRef} className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-7 bg-slate-800 flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-slate-800">
                  Layanan Kelistrikan, Otomatisasi & Manajemen Energi Terpercaya.
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                Grasindo Pro menyediakan solusi kelistrikan menyeluruh mulai dari instalasi jaringan kabel daya, distribusi tenaga listrik (trafo, panel, genset), hingga integrasi sistem otomatisasi cerdas dan strategi manajemen energi untuk menghemat konsumsi operasional gedung & fasilitas industri.
              </p>
            </div>

            {/* SUB-SERVICES GRID */}
            <div ref={servicesRef} className="space-y-6 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">KATEGORI LAYANAN</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  Cakupan Layanan Spesifikasi Elektrikal
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {electricalServices.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <div
                      key={service.id}
                      data-service-card
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
                Keunggulan Layanan Elektrikal Grasindo Pro
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Sertifikasi Laik Operasi (SLO) & Pengujian Megger Kabel Power.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Tim Engineer Elektrikal Tersertifikasi Proyek Nasional.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Penggunaan Trafo, Kabel, & Breaker Teruji Standar SNI & IEC.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Jaminan Load Bank Testing Genset & Dukungan Penanganan Darurat 24/7.</span>
                </div>
              </div>
            </div>

            {/* METHODOLOGY / PROCESS STEPS */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 border-b border-slate-200 pb-3">
                Tahapan Alur Pekerjaan Elektrikal
              </h3>

              <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((p, idx) => (
                  <div key={idx} data-step-card className="bg-white p-4 rounded-sm border border-slate-200 space-y-1.5 relative overflow-hidden">
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

              <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photoGallery.map((item, idx) => (
                  <div
                    key={idx}
                    data-gallery-item
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
                <h3 className="text-xl font-bold mt-1">Elektrikal (Electrical)</h3>
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
                  <p className="text-xs text-slate-600">Tim engineer Elektrikal Grasindo Pro akan menghubungi Anda segera.</p>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Kebutuhan Elektrikal</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan kebutuhan instalasi listrik, trafo, panel, genset, otomatisasi, atau manajemen energi..."
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
