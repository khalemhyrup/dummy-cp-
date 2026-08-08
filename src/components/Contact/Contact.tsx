import React, { useState } from 'react';
import {
  MapPin, Phone, Printer, Mail, Clock, Send, CheckCircle,
  Linkedin, Youtube, Instagram, Facebook, Home, ChevronUp,
  MessageSquare, Building2, Globe, User, AtSign
} from 'lucide-react';
import { footerData } from '../../data/homeData';

interface ContactProps {
  onNavigate?: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const contactCards = [
    {
      icon: MapPin,
      label: 'Head Office',
      value: footerData.address,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      icon: Phone,
      label: 'Telepon',
      value: footerData.phone,
      href: `tel:${footerData.phone.replace(/\D/g, '')}`,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
    {
      icon: Printer,
      label: 'Fax / WhatsApp',
      value: footerData.fax,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
    },
    {
      icon: Mail,
      label: 'Email Marketing',
      value: footerData.email,
      href: `mailto:${footerData.email}`,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
  ];

  const services = [
    'IT Support & Maintenance',
    'Fiber Optics & Network Installer',
    'Security Systems (CCTV & Access Door)',
    'Telecommunications & Network Tower',
    'Event Organizer & MICE Solutions',
    'Media Advertising & Billboard',
    'CME – Mekanikal & Elektrikal',
    'Lainnya',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20 relative">

      {/* ===== HERO BANNER ===== */}
      <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden relative bg-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.05) 39px,rgba(255,255,255,.05) 40px), repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.05) 39px,rgba(255,255,255,.05) 40px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/30" />
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-amber-500/20" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border border-amber-500/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-amber-500" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            <div className="w-8 h-0.5 bg-amber-500" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base text-center px-4 max-w-lg">
            Konsultasikan kebutuhan proyek Anda bersama tim ahli Grasindo Pro
          </p>
        </div>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Home className="w-3.5 h-3.5 text-slate-400" />
          <span>/</span>
          <button
            onClick={() => onNavigate?.('home')}
            className="hover:text-amber-600 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Contact</span>
        </div>
      </div>

      {/* ===== CONTACT INFO CARDS ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={`relative flex gap-4 p-5 rounded-2xl border ${card.border} ${card.bg} shadow-sm hover:shadow-md transition-shadow group overflow-hidden`}
              >
                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10 ${card.bg.replace('bg-', 'bg-')} border-l border-b ${card.border}`} />
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className={`text-sm font-semibold ${card.color} hover:underline break-words leading-snug`}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-700 leading-snug">{card.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== MAIN CONTENT: FORM + SIDEBAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* ---- LEFT: INQUIRY FORM ---- */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Form Header */}
              <div className="bg-slate-900 px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Kirim Pesan / Inquiry</h2>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Tim kami akan merespons dalam 1×24 jam kerja
                  </p>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                      <CheckCircle className="w-9 h-9 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Pesan Terkirim!</h3>
                    <p className="text-slate-500 text-sm max-w-sm">
                      Terima kasih telah menghubungi kami. Tim Grasindo Pro akan segera menghubungi Anda.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', subject: '', message: '' }); }}
                      className="mt-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" /> Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <AtSign className="w-3.5 h-3.5" /> Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" /> Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="PT. Nama Perusahaan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      />
                    </div>

                    {/* Subject / Service */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" /> Layanan yang Diminati <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition appearance-none cursor-pointer"
                      >
                        <option value="">-- Pilih Layanan --</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" /> Pesan / Deskripsi Kebutuhan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 font-bold text-sm transition-all duration-300 shadow-md hover:shadow-amber-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Kirim Pesan
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ---- RIGHT: SIDEBAR ---- */}
          <div className="lg:col-span-4 space-y-6">

            {/* Company Card */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                  <div className="bg-white rounded-xl p-2.5 w-12 h-12 flex items-center justify-center shadow">
                    <img
                      src="/images/logo.png"
                      alt="Grasindo Pro Logo"
                      className="h-7 w-auto object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm">Grasindo Pro</p>
                    <p className="text-slate-400 text-[11px]">PT Integra Aneksa Kreasindo</p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Jam Operasional</span>
                  </div>
                  {[
                    { day: 'Senin – Jumat', time: '08.00 – 17.00 WIB' },
                    { day: 'Sabtu', time: '08.00 – 14.00 WIB' },
                    { day: 'Minggu & Libur', time: 'Tutup' },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between text-xs py-2 border-b border-slate-800 last:border-0">
                      <span className="text-slate-400">{item.day}</span>
                      <span className={`font-semibold ${item.time === 'Tutup' ? 'text-red-400' : 'text-white'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amber accent bottom */}
              <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
            </div>

            {/* Services Quick List */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 border-b border-slate-100 pb-3">
                Layanan Kami
              </h3>
              <ul className="space-y-2">
                {footerData.subsidiaries.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 border-b border-slate-100 pb-3">
                Ikuti Kami
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-amber-400 hover:border-slate-900 transition-all text-xs font-semibold"
                    >
                      <Icon className="w-4 h-4" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Map Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-sm font-bold text-slate-800">Lokasi Head Office</p>
              <p className="text-xs text-slate-500">{footerData.address}</p>
            </div>
          </div>
          {/* Google Maps Embed – Bintaro Trade Center Sektor 7 */}
          <div className="w-full h-72 sm:h-96 bg-slate-100 relative">
            <iframe
              title="Grasindo Pro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6428!2d106.7327!3d-6.2729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d5c2bdfeab%3A0x7c7e43bb85b6c2bb!2sBintaro%20Trade%20Center!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* ===== BACK TO TOP ===== */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-lg hover:shadow-xl text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-300 z-50 group hover:scale-110"
        title="Kembali ke Atas"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

    </div>
  );
};
