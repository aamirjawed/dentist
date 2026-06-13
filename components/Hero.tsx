"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-32 pb-0 overflow-hidden bg-[#CBD6DC] min-h-[580px] flex items-stretch">
      {/* Background Watermark Droplet / Tooth Shape */}
      <div className="absolute top-12 left-10 w-28 h-28 opacity-15 text-white pointer-events-none select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C12 2 6 8.5 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8.5 12 2 12 2Z" />
        </svg>
      </div>

      {/* Main Content Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch relative">

          {/* Left Column: Headline, Actions & Reviews */}
          <div className="lg:col-span-6 flex flex-col justify-center py-16 md:py-24 z-10">
            <p className="text-[#1E293B] text-sm md:text-base font-semibold tracking-wide mb-4">
              We have a flossify on how to
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-[1.12] mb-8 tracking-tight">
              Keep your smile <br />
              clean & great.
            </h1>

            <div>
              <a
                href="#contact"
                className="bg-[#00788C] hover:bg-[#006070] text-white py-3 px-8 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-block cursor-pointer shadow-sm hover:shadow-md"
              >
                READ MORE
              </a>
            </div>

            {/* Bottom Rating Block */}
            <div className="mt-16 flex items-start">
              <div className="flex flex-col">
                <div className="text-[#0A2540] text-4xl font-extrabold tracking-tight leading-none">
                  12,398
                </div>
                {/* 5 gold stars */}
                <div className="flex space-x-0.5 mt-2 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Label text next to numbers */}
              <div className="ml-5 text-[#1E293B] text-xs sm:text-sm font-semibold leading-tight pt-1">
                5 star reviews from satisfied <br />
                customers
              </div>
            </div>
          </div>

          {/* Right Column Spacer on mobile */}
          <div className="lg:col-span-6 h-[420px] lg:h-auto" />

          {/* Absolute U-Shape Panel - Flush to top/bottom/right, tight next to text */}
          <div className="absolute right-0 lg:-right-12 bottom-0 w-[92%] sm:w-[480px] lg:w-[48%] h-[380px] sm:h-[440px] lg:h-[100%] rounded-t-none rounded-b-full overflow-hidden bg-[#B0C3CE] flex items-end justify-center shadow-lg z-0">
            <img
              src="/patient.png?v=3"
              alt="Smiling Patient laughing with curly hair"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
