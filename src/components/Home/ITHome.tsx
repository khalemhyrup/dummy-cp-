import React, { useEffect, useRef } from 'react';
import {
  Home,
  ChevronDown,
  MessageCircle,
  Building2,
  Landmark,
  Briefcase,
  Factory,
  Store,
  Layers,
  Compass,
  Sparkles,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutUsImg from '../../assets/about_usIT.jpg';

gsap.registerPlugin(ScrollTrigger);

interface ITHomeProps {
  onNavigate: (page: string) => void;
}

export const ITHome: React.FC<ITHomeProps> = ({ onNavigate }) => {
  const aboutImgRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const partnersHeaderRef = useRef<HTMLDivElement>(null);
  const partnersContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. About Us Section Animation (Fast & Snappy)
      if (aboutImgRef.current) {
        gsap.fromTo(
          aboutImgRef.current,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutImgRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (aboutTextRef.current) {
        gsap.fromTo(
          aboutTextRef.current,
          { opacity: 0, x: 35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutTextRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Services Section Header Animation (Instant trigger top 96%)
      if (servicesHeaderRef.current) {
        gsap.fromTo(
          servicesHeaderRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: servicesHeaderRef.current,
              start: 'top 96%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Services Cards - Instant entrance without delay (top 96%, duration 0.4s)
      if (servicesContainerRef.current) {
        const cards = Array.from(servicesContainerRef.current.children);
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 96%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // 3. Partners Header Animation
      if (partnersHeaderRef.current) {
        gsap.fromTo(
          partnersHeaderRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: partnersHeaderRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Partners Grid Logos Stagger Animation (Fast 0.35s)
      if (partnersContainerRef.current) {
        const logos = Array.from(partnersContainerRef.current.children);
        gsap.fromTo(
          logos,
          { opacity: 0, y: 20, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.025,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: partnersContainerRef.current,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('it-about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 8 Services with shuffled order and fresh, unique descriptions
  const servicesList = [
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure & System Integration',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <circle cx="12" cy="3" r="2" fill="currentColor" />
          <circle cx="12" cy="21" r="2" fill="currentColor" />
          <circle cx="3" cy="12" r="2" fill="currentColor" />
          <circle cx="21" cy="12" r="2" fill="currentColor" />
          <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" />
          <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor" />
          <circle cx="5.5" cy="18.5" r="1.5" fill="currentColor" />
          <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor" />
          <line x1="12" y1="5" x2="12" y2="9.5" />
          <line x1="12" y1="14.5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="9.5" y2="12" />
          <line x1="14.5" y1="12" x2="19" y2="12" />
          <line x1="7" y1="7" x2="10" y2="10" />
          <line x1="14" y1="14" x2="17" y2="17" />
          <line x1="7" y1="17" x2="10" y2="14" />
          <line x1="14" y1="10" x2="17" y2="7" />
        </svg>
      ),
      description:
        'End-to-end architecture and implementation of resilient computing environments. We engineer high-availability server racks, enterprise SAN/NAS storage clusters, core routing & switching backbones, operating systems, and Next-Gen Firewall (NGFW) cybersecurity frameworks tailored for modern business agility.',
    },
    {
      id: 'cabling-solutions',
      title: 'Cabling & Optical Fiber Solutions',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 8h10v5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8Z" />
          <line x1="9" y1="10" x2="9" y2="13" />
          <line x1="11" y1="10" x2="11" y2="13" />
          <line x1="13" y1="10" x2="13" y2="13" />
          <line x1="15" y1="10" x2="15" y2="13" />
        </svg>
      ),
      description:
        'Certified structured cabling and mission-critical transmission networks. Our technical team handles precision optical fiber fusion splicing, OTDR Fluke verification, Cat6/Cat6A UTP installations, organized cable tray distribution, and electrical wiring to eliminate latency and downtime.',
    },
    {
      id: 'data-center-environment',
      title: 'Data Center & CME Environment',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="4.5" rx="7" ry="2" fill="currentColor" fillOpacity="0.1" />
          <path d="M5 4.5v3.5c0 1.1 3.13 2 7 2s7-.9 7-2V4.5" />
          <path d="M5 8v3.5c0 1.1 3.13 2 7 2s7-.9 7-2V8" />
          <path d="M5 11.5v3.5c0 1.1 3.13 2 7 2s7-.9 7-2v-3.5" />
          <line x1="12" y1="17" x2="12" y2="20.5" />
          <line x1="6" y1="20.5" x2="18" y2="20.5" />
          <rect x="4" y="20" width="3.5" height="2" rx="0.5" fill="currentColor" />
          <rect x="10.25" y="20" width="3.5" height="2" rx="0.5" fill="currentColor" />
          <rect x="16.5" y="20" width="3.5" height="2" rx="0.5" fill="currentColor" />
        </svg>
      ),
      description:
        'Turnkey data center engineering and mission-critical facility infrastructure. We build anti-static raised flooring, precision air conditioning (PAC/HVAC) thermal controls, FM200 clean-agent gas fire suppression, biometric access interlocking doors, and real-time Environmental Monitoring Systems (EMS).',
    },
    {
      id: 'procurement-sales',
      title: 'Hardware Procurement & Enterprise Sales',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="12" cy="14.5" r="0.5" fill="currentColor" />
        </svg>
      ),
      description:
        'Direct authorized supply and custom provisioning of enterprise IT hardware. We deliver multi-brand enterprise servers, high-performance workstations, commercial laptops, network peripherals, barcode printing & scanning systems, and genuine software licensing with comprehensive unit warranty support.',
    },
    {
      id: 'surveillance-security',
      title: 'Integrated Surveillance & Security Systems',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16.75 12.13 21.2 8.7a1 1 0 0 0 .8-1.2l-1.5-6a1 1 0 0 0-1.2-.8l-15.5 3.9a1 1 0 0 0-.7 1.2l1.5 6a1 1 0 0 0 1.2.8l3.4-.8" />
          <path d="m11 16-2 6" />
          <path d="M15 16l2 6" />
          <path d="M7 22h10" />
          <circle cx="10" cy="8" r="2" />
        </svg>
      ),
      description:
        'Advanced electronic security systems to safeguard enterprise premises. We deploy high-resolution IP CCTV cameras, long-range PTZ units, enterprise NVR/VMS storage, AI biometric facial recognition access doors, turnstiles, and 24/7 multi-site centralized surveillance command centers.',
    },
    {
      id: 'managed-services',
      title: 'Managed IT Support & Technical Services',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      ),
      description:
        'Proactive technology management and dedicated technical assistance to ensure zero downtime. Our services include Annual Maintenance Contracts (AMC), preventive hardware upkeep, desktop support, network health monitoring, IT asset lifecycle management, and SLA-guaranteed 24/7 helpdesk.',
    },
    {
      id: 'web-development',
      title: 'Web & Software Development',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="m7 8-3 3 3 3" />
          <path d="m17 8 3 3-3 3" />
          <line x1="14" y1="7.5" x2="10" y2="14.5" />
        </svg>
      ),
      description:
        'Custom full-stack web development, enterprise portal solutions, API integrations, and cloud-native business applications designed for high performance, dynamic user experiences, and automated digital workflows.',
    },
    {
      id: 'cme-solutions',
      title: 'Civil, Mechanical & Electrical (CME)',
      icon: (
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-neutral-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M13 3 7 13h5l-1 8 7-10h-5l1-8Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M13 3 7 13h5l-1 8 7-10h-5l1-8Z" />
        </svg>
      ),
      description:
        'Comprehensive industrial CME engineering covering power distribution panels, backup generators (Genset/UPS), industrial HVAC ducting & ventilation, plumbing systems, lightning protection, and telecommunication tower civil foundations.',
    },
  ];





  return (
    <div className="w-full bg-white font-sans text-neutral-900 overflow-x-hidden relative">

      {/* =========================================================================
          SECTION 0: GRAND HERO BANNER
      ========================================================================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#030917] text-white">
        
        {/* Background Video with Poster Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/IT/homepage-it.mp4" type="video/mp4" />
        </video>
        
        {/* Deep Tech Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020714]/80 via-[#061533]/70 to-[#030917] pointer-events-none" />

        {/* Top Spacer / Back Link */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 w-full flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            aria-label="Back to Corporate Portal"
            title="Kembali ke Main Portal"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer flex items-center justify-center group"
          >
            <Home className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Center Main Hero Title */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 text-center my-auto py-16 space-y-3 sm:space-y-4">
          
          <h1 className="text-[clamp(14px,5.1vw,24px)] sm:text-3xl md:text-4xl lg:text-5xl font-company-hero whitespace-nowrap uppercase tracking-tighter sm:tracking-tight leading-tight">
            PT. INTEGRA ANEKSA KREASINDO
          </h1>

          <h2 className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-blue-200">
            IT Solutions &amp; CME Infrastructure
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xs sm:max-w-2xl mx-auto pt-1 font-medium leading-relaxed">
            Rekayasa infrastruktur jaringan fiber optik, sistem keamanan biometrik, telekomunikasi transmisi, serta tata udara mekanikal &amp; elektrikal industri berstandar enterprise.
          </p>

        </div>

        {/* Bottom Bar: Hubungi Kami, Chevron, Tagline */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-8 w-full grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
          
          {/* Left: Hubungi Kami Badge */}
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => onNavigate('it-contact')}
              className="group flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 p-0.5 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2">
                <span className="p-1 bg-black text-white rounded-full text-xs">
                  👤
                </span>
                <span>Hubungi Kami</span>
              </div>
            </button>
          </div>

          {/* Center: Scroll Down Chevron */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="text-cyan-400 hover:text-cyan-300 animate-bounce transition-colors cursor-pointer"
              aria-label="Scroll Down"
            >
              <div className="flex flex-col items-center">
                <ChevronDown className="w-8 h-8 stroke-[3]" />
                <ChevronDown className="w-8 h-8 -mt-5 stroke-[3]" />
              </div>
            </button>
          </div>

          {/* Right: Empty spacer to keep center aligned */}
          <div className="hidden sm:block" />

        </div>

      </section>

      {/* =========================================================================
          SECTION 1: ABOUT US
      ========================================================================== */}
      <section id="it-about-section" className="w-full bg-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Custom User Image */}
            <div ref={aboutImgRef} className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                <img
                  src={aboutUsImg}
                  alt="PT Integra Aneksa Kreasindo About Us"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>

            {/* Right Column: About Us Text Content */}
            <div ref={aboutTextRef} className="md:col-span-7 space-y-4 sm:space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
                About Us
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug">
                Specializing in IT Infrastructure &amp; CME
              </h3>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal pt-1">
                We provide comprehensive solutions and services for IT infrastructure, web development, and Civil Mechanical Electrical (CME) projects, including data centers, telecommunications, and cellular network equipment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR SERVICE
      ========================================================================== */}
      <section id="services" className="w-full bg-white pt-8 sm:pt-12 pb-24 sm:pb-32 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div ref={servicesHeaderRef} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
              Our Service
            </h2>
            <div className="w-12 h-[3px] bg-[#2f6596] mx-auto mt-3" />
          </div>

          {/* Stacked Full-Width Rounded Service Cards */}
          <div ref={servicesContainerRef} className="space-y-8 sm:space-y-10">
            {servicesList.map((svc) => (
              <div
                key={svc.id}
                className="bg-[#dce3eb] hover:bg-[#d2dbe5] rounded-3xl p-8 sm:p-12 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-[#c4cfdc] flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Left Icon Container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
                  {svc.icon}
                </div>

                {/* Right Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-3.5 tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR PARTNERS
      ========================================================================== */}
      <section id="partner" className="w-full bg-white pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div ref={partnersHeaderRef} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
              Our Partners
            </h2>
            <div className="w-12 h-[3px] bg-[#2f6596] mx-auto mt-3" />
          </div>

          {/* Single Combined Partners SVG Banner */}
          <div ref={partnersContainerRef} className="w-full flex items-center justify-center">
            <img
              src="/IT/our-partner-it.svg"
              alt="Our Partners"
              loading="lazy"
              className="w-full max-w-5xl h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR CLIENTS
      ========================================================================== */}
      <section id="client" className="w-full bg-white pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
              Our Clients
            </h2>
            <div className="w-12 h-[3px] bg-[#2f6596] mx-auto mt-3" />
          </div>

          {/* Single Combined Clients SVG Banner */}
          <div className="w-full flex items-center justify-center">
            <img
              src="/IT/our-client-it.svg"
              alt="Our Clients"
              loading="lazy"
              className="w-full max-w-5xl h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          FLOATING WHATSAPP BUTTON
      ========================================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:block bg-white text-neutral-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-neutral-200 animate-pulse">
          Message us
        </div>
        <a
          href="https://wa.me/628111696090"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        </a>
      </div>

    </div>
  );
};
