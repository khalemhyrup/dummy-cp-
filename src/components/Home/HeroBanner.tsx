import React, { useState, useEffect } from 'react';
import { heroSlidesData } from '../../data/homeData';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Cpu, Award, Zap } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlidesData[currentSlide];

  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[580px] bg-slate-950 text-white overflow-hidden flex items-center">
      
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          {slide.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
                {slide.badge}
              </span>
            </div>
          )}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Actions & CTA */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5">
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 backdrop-blur-md text-slate-200 font-semibold px-6 py-3.5 rounded-lg transition-colors">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-amber-600 text-white border border-slate-700 hover:border-amber-500 backdrop-blur-md transition-all hidden sm:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-amber-600 text-white border border-slate-700 hover:border-amber-500 backdrop-blur-md transition-all hidden sm:flex"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {heroSlidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
