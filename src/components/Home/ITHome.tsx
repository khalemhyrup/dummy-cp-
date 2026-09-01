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

  // 7 Services with local SVG illustrations from public/IT
  const servicesList = [
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure & System Integration',
      image: '/IT/ou-service1.svg',
      description:
        'End-to-end architecture and implementation of resilient computing environments. We engineer high-availability server racks, enterprise SAN/NAS storage clusters, core routing & switching backbones, operating systems, and Next-Gen Firewall (NGFW) cybersecurity frameworks tailored for modern business agility.',
    },
    {
      id: 'cabling-solutions',
      title: 'Cabling & Optical Fiber Solutions',
      image: '/IT/ou-service2.svg',
      description:
        'Certified structured cabling and mission-critical transmission networks. Our technical team handles precision optical fiber fusion splicing, OTDR Fluke verification, Cat6/Cat6A UTP installations, organized cable tray distribution, and electrical wiring to eliminate latency and downtime.',
    },
    {
      id: 'data-center-environment',
      title: 'Data Center & CME Environment',
      image: '/IT/ou-service3.svg',
      description:
        'Turnkey data center engineering and mission-critical facility infrastructure. We build anti-static raised flooring, precision air conditioning (PAC/HVAC) thermal controls, FM200 clean-agent gas fire suppression, biometric access interlocking doors, and real-time Environmental Monitoring Systems (EMS).',
    },
    {
      id: 'procurement-sales',
      title: 'Hardware Procurement & Enterprise Sales',
      image: '/IT/ou-service4.svg',
      description:
        'Direct authorized supply and custom provisioning of enterprise IT hardware. We deliver multi-brand enterprise servers, high-performance workstations, commercial laptops, network peripherals, barcode printing & scanning systems, and genuine software licensing with comprehensive unit warranty support.',
    },
    {
      id: 'surveillance-security',
      title: 'Integrated Surveillance & Security Systems',
      image: '/IT/ou-service5.svg',
      description:
        'Advanced electronic security systems to safeguard enterprise premises. We deploy high-resolution IP CCTV cameras, long-range PTZ units, enterprise NVR/VMS storage, AI biometric facial recognition access doors, turnstiles, and 24/7 multi-site centralized surveillance command centers.',
    },
    {
      id: 'managed-services',
      title: 'Managed IT Support & Technical Services',
      image: '/IT/ou-service6.svg',
      description:
        'Proactive technology management and dedicated technical assistance to ensure zero downtime. Our services include Annual Maintenance Contracts (AMC), preventive hardware upkeep, desktop support, network health monitoring, IT asset lifecycle management, and SLA-guaranteed 24/7 helpdesk.',
    },
    {
      id: 'web-development',
      title: 'Web & Software Development',
      image: '/IT/ou-service7.svg',
      description:
        'Custom full-stack web development, enterprise portal solutions, API integrations, and cloud-native business applications designed for high performance, dynamic user experiences, and automated digital workflows.',
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
            Innovating IT Integration and CME Services to Build Reliable Connections, Enhance Security, and Drive Industrial Growth.
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

        {/* Section Header */}
        <div ref={servicesHeaderRef} className="text-center mb-14 sm:mb-18 px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
            Our Service
          </h2>
          <div className="w-12 h-[3px] bg-[#2f6596] mx-auto mt-3" />
        </div>

        {/* Seamless Checkerboard Grid (Edge-to-Edge Alternating 2-Column Split Layout) */}
        <div ref={servicesContainerRef} className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col shadow-2xl overflow-hidden">
            {servicesList.map((svc, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={svc.id} className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                  {/* Image Block */}
                  <div
                    className={`relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden bg-neutral-950 group ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2'
                      }`}
                  >
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                  </div>

                  {/* Light Text Card with Centered Accent Underline */}
                  <div
                    className={`w-full h-[320px] sm:h-[380px] lg:h-[420px] bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors duration-300 flex flex-col items-center justify-center text-center px-8 sm:px-12 lg:px-16 py-10 border border-slate-200/70 ${isEven ? 'order-2 md:order-2' : 'order-2 md:order-1'
                      }`}
                  >
                    <div className="max-w-md flex flex-col items-center">
                      <div className="inline-block border-b-[2px] border-[#2f6596] pb-1.5 mb-4 sm:mb-5">
                        <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium text-neutral-900 tracking-tight">
                          {svc.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
          href="https://wa.me/6287777288810"
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
