import React from 'react';
import { ArrowRight, Phone, Mail, Instagram, CheckCircle2, Award, Users, Clock, Target, TrendingUp, HelpCircle } from 'lucide-react';

interface ITAboutProps {
  onNavigate: (page: string) => void;
}

export const ITAbout: React.FC<ITAboutProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full min-h-screen font-sans text-white overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950 bg-slate-950">

      {/* =========================================================================
          SECTION 1: HERO - TENTANG KAMI (IT Solutions & CME Infrastructure)
      ========================================================================== */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-between py-16 px-6 sm:px-8 lg:px-12 border-b border-black/40 overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/it_solution/background-it-page.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/it_solution/background-it.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for optimal contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto w-full my-auto py-12 relative z-10 space-y-8 text-center sm:text-left">
          
          {/* Logo Header */}
          <div className="flex justify-center sm:justify-start items-center mb-6">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white drop-shadow-md">
              Tentang Kami
            </h1>
            <p className="text-cyan-400 font-bold text-sm sm:text-base mt-2 font-mono uppercase tracking-wider drop-shadow-md">
              IT Solutions &amp; CME Infrastructure
            </p>
          </div>

          {/* 3-Column Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4">
            
            {/* Column 1 */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-6 rounded-2xl text-xs sm:text-sm text-slate-100 leading-relaxed text-justify shadow-xl hover:shadow-cyan-500/10 transition-all">
              Kami merupakan sebuah perusahaan yang bergerak di bidang layanan jasa <strong className="text-cyan-400 font-semibold">IT Solutions</strong> dan <strong className="text-cyan-400 font-semibold">CME Infrastructure</strong>. Dengan komitmen dan motivasi tinggi untuk senantiasa mampu memberikan yang terbaik untuk klien.
            </div>

            {/* Column 2 */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-6 rounded-2xl text-xs sm:text-sm text-slate-100 leading-relaxed text-justify shadow-xl hover:shadow-cyan-500/10 transition-all">
              Dalam perjalanan dan kiprah karirnya hingga saat ini <strong className="text-cyan-400 font-semibold">PT Integra Aneksa Kreasindo</strong> telah mampu dan mendapat kepercayaan penuh dari mitra usahanya untuk bekerjasama mewujudkan instalasi jaringan, otomasi keamanan, dan konstruksi mekanikal elektrikal berskala nasional.
            </div>

            {/* Column 3 */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-6 rounded-2xl text-xs sm:text-sm text-slate-100 leading-relaxed text-justify shadow-xl hover:shadow-cyan-500/10 transition-all">
              Sebuah komitmen harus dipertahankan dan terus dikembangkan secara sistematis agar kepercayaan senantiasa dapat kita peroleh dari mitra usaha.
            </div>

          </div>

        </div>

        {/* Bottom Elements: Hubungi Kami & Tagline */}
        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
          <button
            onClick={() => onNavigate('it-contact')}
            className="group flex items-center bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 p-0.5 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2">
              <span className="p-1 bg-black/40 text-white rounded-full text-xs">
                👤
              </span>
              <span>Hubungi Kami</span>
            </div>
          </button>

          <div className="text-cyan-300 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide font-mono uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Precision • Power • Connectivity
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: VISI & MISI + 3 NILAI UTAMA (Kualitas, Fleksibilitas, Komitmen)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 border-b border-black/40 overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/it_solution/background-it-page.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/it_solution/background-it.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for optimal contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Logo Header */}
          <div className="flex justify-center items-center mb-10">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Visi & Misi */}
            <div className="lg:col-span-5 space-y-6">
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase border-b-2 border-cyan-400 pb-2 inline-block drop-shadow-md">
                Visi &amp; Misi
              </h2>

              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed text-justify font-medium drop-shadow-sm">
                Menempatkan <strong className="text-cyan-400 font-semibold">PT Integra Aneksa Kreasindo</strong> menjadi satu mitra usaha terpercaya dan handal bagi para kolega ditengah situasi dan persaingan bisnis secara global yang kian ketat, serta mampu memberikan solusi rekayasa teknologi dan infrastruktur yang jauh lebih andal.
              </p>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify font-medium drop-shadow-sm">
                Perjalanan ke depan <strong className="text-cyan-400 font-semibold">PT Integra Aneksa Kreasindo</strong> senantiasa mengacu kepada pola kemitraan usaha yang saling memberikan keuntungan dengan menjunjung tinggi nilai:
              </p>

            </div>

            {/* Right Column: 3 Nilai Utama (Kualitas, Fleksibilitas, Komitmen) */}
            <div className="lg:col-span-7 space-y-5 relative">
              
              {/* Value 1: KUALITAS */}
              <div className="bg-slate-900/80 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400 p-5 sm:p-6 rounded-2xl shadow-xl relative group transition-all">
                <span className="text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">
                  KUALITAS
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Memberikan sebuah service yang terbaik secara prima, cepat, dan berkualitas berstandar SLA di dunia teknologi &amp; infrastruktur.
                </p>
              </div>

              {/* Value 2: FLEKSIBILITAS */}
              <div className="bg-slate-900/80 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400 p-5 sm:p-6 rounded-2xl shadow-xl relative group transition-all ml-0 sm:ml-6">
                <span className="text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">
                  FLEKSIBILITAS
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Senantiasa fleksibel mengikuti perkembangan teknologi terkini dan ikut memberikan inovasi serta solusi tepat bagi mitra usaha.
                </p>
              </div>

              {/* Value 3: KOMITMEN */}
              <div className="bg-slate-900/80 backdrop-blur-md border-2 border-cyan-500/30 hover:border-cyan-400 p-5 sm:p-6 rounded-2xl shadow-xl relative group transition-all ml-0 sm:ml-12">
                <span className="text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">
                  KOMITMEN
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Menjaga dan memelihara serta mengembangkan sikap dan etika bisnis secara profesional dengan standar keselamatan kerja (K3).
                </p>
              </div>

            </div>

          </div>

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-cyan-300 font-extrabold text-xl sm:text-2xl tracking-wide font-mono uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Precision • Power • Connectivity
            </span>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 3: KENAPA MEMILIH KAMI ? (3 Keunggulan Utama)
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 border-b border-black/40 overflow-hidden">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/it_solution/background-it-page.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source src="/it_solution/background-it.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for optimal contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Top Quote Banner */}
          <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 py-3.5 px-6 text-center mb-12 shadow-lg text-white rounded-xl border border-cyan-400/30">
            <p className="text-xs sm:text-sm md:text-base font-semibold max-w-4xl mx-auto leading-relaxed">
              &ldquo;Kami Menjadi perusahaan penyedia solusi bisnis dan infrastruktur teknologi terintegrasi yang terdepan, tepercaya, dan inovatif.&rdquo;
            </p>
          </div>

          {/* Logo & Section Title */}
          <div className="text-center mb-12">
            <img
              src="/images/logo.png"
              alt="Grasindo Pro"
              className="h-12 w-auto object-contain mx-auto mb-3 drop-shadow-md"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase text-white drop-shadow-md">
              Kenapa Memilih Kami ?
            </h2>
          </div>

          {/* 3 Distinct Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Tim Berpengalaman */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-8 rounded-3xl flex flex-col justify-between shadow-2xl hover:shadow-cyan-500/20 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-cyan-400 mb-3">
                  Tim Berpengalaman &amp; Profesional
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Didukung oleh para teknisi jaringan bersertifikasi, insinyur sistem, dan tim ahli konstruksi mekanikal elektrikal yang berpengalaman.
                </p>
              </div>
            </div>

            {/* Card 2: Berorientasi pada Kualitas & Hasil */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-8 rounded-3xl flex flex-col justify-between shadow-2xl hover:shadow-cyan-500/20 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-cyan-400 mb-3">
                  Berorientasi pada Kualitas &amp; Hasil
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Setiap instalasi dan infrastruktur dirancang berbasis standar teknis presisi untuk memastikan efisiensi dan keandalan operasional bisnis Anda.
                </p>
              </div>
            </div>

            {/* Card 3: Ketepatan Waktu & Presisi */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-8 rounded-3xl flex flex-col justify-between shadow-2xl hover:shadow-cyan-500/20 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-cyan-400 mb-3">
                  Ketepatan Waktu &amp; Presisi
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Kami menghargai waktu Anda. Setiap proyek dieksekusi berdasarkan timeline yang ketat dengan jaminan kualitas terbaik dan kepatuhan K3.
                </p>
              </div>
            </div>

          </div>

          {/* Right Bottom Tagline */}
          <div className="text-right pt-8">
            <span className="text-cyan-300 font-extrabold text-xl sm:text-2xl tracking-wide font-mono uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Precision • Power • Connectivity
            </span>
          </div>

        </div>

      </section>

    </div>
  );
};
