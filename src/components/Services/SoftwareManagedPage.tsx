import React, { useState } from 'react';
import {
  FileCode,
  CheckCircle2,
  Cpu,
  ChevronRight,
  Send,
  Sparkles,
  Home,
  Server,
  Code2,
  Database,
  Layers
} from 'lucide-react';

export const SoftwareManagedPage: React.FC = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryOpen(false);
      setFormSubmitted(false);
      setInquiryForm({ name: '', email: '', phone: '', company: '', message: '' });
    }, 2000);
  };

  const features = [
    {
      title: 'Custom Enterprise Software Development',
      desc: 'Pengembangan aplikasi bisnis custom, Portal Web ERP, CRM, Dashboard Monitoring, dan Mobile Apps sesuai kebutuhan spesifik perusahaan.',
      icon: Code2
    },
    {
      title: 'IT Managed Services & Cloud Infrastructure',
      desc: 'Pengelolaan infrastruktur cloud, server fisik, virtualisasi, dan pemeliharaan lisensi perangkat lunak secara periodik.',
      icon: Server
    },
    {
      title: 'Server & System Administration',
      desc: 'Administrasi basis data, optimasi performa query, manajemen backup berkala, dan penanganan infrastruktur server perusahaan.',
      icon: Database
    },
    {
      title: 'IT Procurement & Software Maintenance',
      desc: 'Pengadaan lisensi resmi software enterprise, migrasi sistem, serta garansi update & pemeliharaan teknis berkelanjutan.',
      icon: Layers
    }
  ];

  const scopeList = [
    'Pengembangan Aplikasi Web & Mobile Custom (React, Node.js, Python, Mobile)',
    'Pengelolaan IT Managed Services (Hardware, Software, & Network Support)',
    'Administrasi Server Linux/Windows, Active Directory, & Domain Management',
    'Manajemen Virtualisasi Server (VMware, Proxmox, Hyper-V) & Cloud Service',
    'Penyusunan Backup & Disaster Recovery Plan (DRP) Data Perusahaan',
    'Pengadaan Lisensi Software Enterprise & Konsultasi Arsitektur Digital'
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      
      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-purple-300/80 mb-6">
            <Home className="w-3.5 h-3.5" />
            <span>/</span>
            <span>Product & Service</span>
            <span>/</span>
            <span>IT Solutions</span>
            <span>/</span>
            <span className="text-white font-semibold">Software & IT Managed Services</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>CUSTOM SOFTWARE & CLOUD MANAGED SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">IT Managed Services</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Solusi pengembangan aplikasi bisnis custom, pengelolaan infrastruktur cloud server, administrasi basis data, serta pemeliharaan software enterprise secara terpadu.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setInquiryOpen(true)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Konsultasi Software & Cloud</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">TRANSFORMASI DIGITAL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fitur Software & Managed Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SCOPE OF WORK ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">RUANG LINGKUP LAYANAN</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Cakupan Solusi Software Perusahaan
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pengembangan perangkat lunak kami didukung oleh standar arsitektur modern yang aman, efisien, dan dapat diskalakan sesuai pertumbuhan bisnis Anda.
              </p>

              <div className="space-y-3 pt-2">
                {scopeList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-800 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="bg-slate-900 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer"
                >
                  Minta Diskusi Proyek Software
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Software Development & IT Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INQUIRY MODAL ================= */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden">
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">FORMULIR PENAWARAN</span>
                <h3 className="text-xl font-bold mt-1">Software & IT Managed Services</h3>
              </div>
              <button onClick={() => setInquiryOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="p-6">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Permintaan Terkirim!</h4>
                  <p className="text-xs text-slate-600">Tim Software Architect Grasindo Pro akan menghubungi Anda segera.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap / Perusahaan</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda / PT..."
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Corporate</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / HP</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Detail Kebutuhan Software / Managed Services</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Kebutuhan fitur software custom, server cloud, atau IT managed services..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Permintaan Penawaran</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
