"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  treatment: string;
}

const StarRating: React.FC<{ count: number; active: boolean }> = ({ count, active }) => {
  return (
    <div className="flex space-x-1.5 justify-center mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 transition-all duration-500 ${
            i < count ? "text-amber-400 fill-amber-400" : "text-gray-250"
          } ${active ? "scale-100 opacity-100" : "scale-90 opacity-40"}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsList: Testimonial[] = [
    {
      stars: 5,
      quote: "The best dental experience I've ever had! The staff was incredibly welcoming, and the Invisalign treatment was smooth, fast, and completely painless. I couldn't be happier with my new smile.",
      name: "Sarah Jenkins",
      treatment: "Invisalign Transformation"
    },
    {
      stars: 5,
      quote: "State-of-the-art office and phenomenal service. My dental implants look natural, and the 0% financing option made the entire procedure stress-free. Highly recommend Dr. Vance!",
      name: "Dr. Michael Chang",
      treatment: "Dental Implants Procedure"
    },
    {
      stars: 5,
      quote: "Finding emergency dental care on a weekend is stressful, but they took me in immediately and treated me with utmost care. Safe, friendly, and highly professional clinic.",
      name: "Emily Rodriguez",
      treatment: "Emergency Relief Care"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal reveal-fade-up">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75] bg-[#E6F5F1] px-4 py-1.5 rounded-full">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] mt-4 mb-4 tracking-tight">
            Loved by Our Patients
          </h2>
          <p className="text-sm md:text-base text-[#6B7280] font-medium">
            Read real feedback from people who have transformed their smiles and oral health.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative reveal reveal-fade-up px-4 sm:px-12">
          
          {/* Main Card (One long card) */}
          <div className="bg-white rounded-3xl border border-gray-150 p-8 sm:p-12 md:p-16 shadow-lg relative min-h-[320px] flex flex-col justify-between overflow-hidden">
            
            {/* Visual background quote icon */}
            <div className="absolute -top-4 -left-4 text-[#E6F5F1] text-9xl font-serif select-none pointer-events-none opacity-40">
              &ldquo;
            </div>

            {/* Testimonials Slides Wrapper */}
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialsList.map((test, idx) => (
                  <div key={idx} className="w-full shrink-0 text-center px-2">
                    <StarRating count={test.stars} active={idx === currentIndex} />
                    
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] leading-relaxed italic max-w-3xl mx-auto mb-8">
                      &ldquo;{test.quote}&rdquo;
                    </blockquote>
                    
                    <div className="mt-6">
                      <div className="font-extrabold text-base text-[#0A2540] tracking-tight">{test.name}</div>
                      <div className="text-xs text-[#0D9E75] font-black uppercase tracking-wider mt-1">{test.treatment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-8px] sm:left-[-12px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-150 text-[#0A2540] hover:text-[#0D9E75] flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Previous story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-8px] sm:right-[-12px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-150 text-[#0A2540] hover:text-[#0D9E75] flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Next story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Carousel Pagination dots */}
        <div className="flex justify-center space-x-2.5 mt-8 reveal reveal-fade-up">
          {testimonialsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#0D9E75] w-7" : "bg-gray-300"
              }`}
              aria-label={`Go to story ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
