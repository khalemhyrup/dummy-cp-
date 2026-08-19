import React from 'react';
import { ArrowRight, Phone, Mail, Instagram, CheckCircle2, Award, Users, Clock, Target, TrendingUp, HelpCircle } from 'lucide-react';

interface ITAboutProps {
  onNavigate: (page: string) => void;
}

export const ITAbout: React.FC<ITAboutProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO - TENTANG KAMI (IT Solutions & CME Infrastructure)
      ========================================================================== */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-between py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 overflow-hidden border-b border-slate-200">
        
        {/* Subtle background luminous wave grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto w-full my-auto py-12 relative z-10 space-y-8 text-center sm:text-left">
          
          {/* Logo Header */}
          <div className="flex justify-center sm:justify-start items-center mb-6">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-slate-900 drop-shadow-xs">
              Tentang Kami
            </h1>
            <p className="text-blue-600 font-bold text-sm sm:text-base mt-2 font-mono uppercase tracking-wider">
              IT Solutions &amp; CME Infrastructure
            </p>
          </div>

          {/* 3-Column Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4">
            
            {/* Column 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed text-justify shadow-sm hover:shadow-md transition-shadow">
              Kami merupakan sebuah perusahaan yang bergerak di bidang layanan jasa <strong className="text-blue-600 font-semibold">IT Solutions</strong> dan <strong className="text-blue-600 font-semibold">CME Infrastructure</strong>. Dengan komitmen dan motivasi tinggi untuk senantiasa mampu memberikan yang terbaik untuk klien.
            </div>

            {/* Column 2 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed text-justify shadow-sm hover:shadow-md transition-shadow">
              Dalam perjalanan dan kiprah karirnya hingga saat ini <strong className="text-blue-600 font-semibold">PT Integra Aneksa Kreasindo</strong> telah mampu dan mendapat kepercayaan penuh dari mitra usahanya untuk bekerjasama mewujudkan instalasi jaringan, otomasi keamanan, dan konstruksi mekanikal elektrikal berskala nasional.
            </div>

            {/* Column 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed text-justify shadow-sm hover:shadow-md transition-shadow">
              Sebuah komitmen harus dipertahankan dan terus dikembangkan secara sistematis agar kepercayaan senantiasa dapat kita peroleh dari mitra usaha.
            </div>

          </div>

        </div>

        {/* Bottom Elements: Hubungi Kami & Tagline */}
        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <button
            onClick={() => onNavigate('it-contact')}
            className="group flex items-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 p-0.5 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="p-1 bg-white text-blue-600 rounded-full text-xs">
                👤
              </span>
              <span>Hubungi Kami</span>
            </div>
          </button>

          <div className="text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide font-mono uppercase">
            Precision • Power • Connectivity
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: VISI & MISI + 3 NILAI UTAMA (Kualitas, Fleksibilitas, Komitmen)
      ========================================================================== */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo Header */}
          <div className="flex justify-center items-center mb-10">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Visi & Misi */}
            <div className="lg:col-span-5 space-y-6">
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide uppercase border-b-2 border-blue-600 pb-2 inline-block">
                Visi &amp; Misi
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                Menempatkan <strong className="text-blue-600 font-semibold">PT Integra Aneksa Kreasindo</strong> menjadi satu mitra usaha terpercaya dan handal bagi para kolega ditengah situasi dan persaingan bisnis secara global yang kian ketat, serta mampu memberikan solusi rekayasa teknologi dan infrastruktur yang jauh lebih andal.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Perjalanan ke depan <strong className="text-blue-600 font-semibold">PT Integra Aneksa Kreasindo</strong> senantiasa mengacu kepada pola kemitraan usaha yang saling memberikan keuntungan dengan menjunjung tinggi nilai:
              </p>

            </div>

            {/* Right Column: 3 Nilai Utama (Kualitas, Fleksibilitas, Komitmen) */}
            <div className="lg:col-span-7 space-y-5 relative">
              
              {/* Value 1: KUALITAS */}
              <div className="bg-white border-2 border-blue-100 hover:border-blue-500 p-5 sm:p-6 rounded-2xl shadow-sm relative group transition-colors">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                  KUALITAS
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Memberikan sebuah service yang terbaik secara prima, cepat, dan berkualitas berstandar SLA di dunia teknologi &amp; infrastruktur.
                </p>
              </div>

              {/* Value 2: FLEKSIBILITAS */}
              <div className="bg-white border-2 border-blue-100 hover:border-blue-500 p-5 sm:p-6 rounded-2xl shadow-sm relative group transition-colors ml-0 sm:ml-6">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                  FLEKSIBILITAS
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Senantiasa fleksibel mengikuti perkembangan teknologi terkini dan ikut memberikan inovasi serta solusi tepat bagi mitra usaha.
                </p>
              </div>

              {/* Value 3: KOMITMEN */}
              <div className="bg-white border-2 border-blue-100 hover:border-blue-500 p-5 sm:p-6 rounded-2xl shadow-sm relative group transition-colors ml-0 sm:ml-12">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                  KOMITMEN
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Menjaga dan memelihara serta mengembangkan sikap dan etika bisnis secara profesional dengan standar keselamatan kerja (K3).
                </p>
              </div>

            </div>

          </div>

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-blue-600 font-extrabold text-xl sm:text-2xl tracking-wide font-mono uppercase">
              Precision • Power • Connectivity
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 3: KENAPA MEMILIH KAMI ? (3 Keunggulan Utama)
      ========================================================================== */}
      <section className="w-full py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        
        {/* Top Quote Banner */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 py-3.5 px-4 text-center mb-12 shadow-sm text-white">
          <p className="text-xs sm:text-sm md:text-base font-semibold max-w-4xl mx-auto leading-relaxed">
            &ldquo;Kami Menjadi perusahaan penyedia solusi bisnis dan infrastruktur teknologi terintegrasi yang terdepan, tepercaya, dan inovatif.&rdquo;
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          {/* Logo & Section Title */}
          <div className="text-center mb-12">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 w-auto object-contain mx-auto mb-3"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase text-slate-900 drop-shadow-xs">
              Kenapa Memilih Kami ?
            </h2>
          </div>

          {/* 3 Distinct Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Tim Berpengalaman */}
            <div className="bg-white border border-slate-200 hover:border-blue-500 p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-600 mb-3">
                  Tim Berpengalaman &amp; Profesional
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Didukung oleh para teknisi jaringan bersertifikasi, insinyur sistem, dan tim ahli konstruksi mekanikal elektrikal yang berpengalaman.
                </p>
              </div>
            </div>

            {/* Card 2: Berorientasi pada Kualitas & Hasil */}
            <div className="bg-white border border-slate-200 hover:border-blue-500 p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-600 mb-3">
                  Berorientasi pada Kualitas &amp; Hasil
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Setiap instalasi dan infrastruktur dirancang berbasis standar teknis presisi untuk memastikan efisiensi dan keandalan operasional bisnis Anda.
                </p>
              </div>
            </div>

            {/* Card 3: Ketepatan Waktu & Presisi */}
            <div className="bg-white border border-slate-200 hover:border-blue-500 p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-600 mb-3">
                  Ketepatan Waktu &amp; Presisi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami menghargai waktu Anda. Setiap proyek dieksekusi berdasarkan timeline yang ketat dengan jaminan kualitas terbaik dan kepatuhan K3.
                </p>
              </div>
            </div>

          </div>

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-blue-600 font-extrabold text-xl sm:text-2xl tracking-wide font-mono uppercase">
              Precision • Power • Connectivity
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
