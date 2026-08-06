import React, { useState, useEffect } from 'react';
import { heroSlidesData } from '../../data/homeData';
import { ChevronLeft, ChevronRight, ArrowRight, Award } from 'lucide-react';

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
    <div className="w-full">
      {/* 1. Pure Image Banner */}
      <section className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        
        {/* Navigation Arrows */}
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
      </section>

      {/* 2. Text & Actions Section Below Image */}
      <section className="bg-[#0b0f19] border-b border-slate-800/80 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-5">
            
            {/* Badge */}
            {slide.badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/40">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                  {slide.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5">
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 backdrop-blur-md text-slate-200 font-semibold px-6 py-3.5 rounded-lg transition-colors">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Slide Pagination Dots */}
          <div className="flex items-center space-x-2 self-start lg:self-end pt-4 lg:pt-0">
            {heroSlidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};


