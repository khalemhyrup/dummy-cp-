import React, { useState, useEffect } from 'react';
import { heroSlidesData } from '../../data/homeData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="relative w-full h-screen -mt-20 bg-slate-950 overflow-hidden">
      {/* Pure Image Banner */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark gradient overlay — top darker for navbar readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
      
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

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {heroSlidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};



