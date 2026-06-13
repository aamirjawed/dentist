"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

type TreatmentType = "whitening" | "invisalign" | "implants";

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<TreatmentType>("whitening");
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Handle Dragging / Sliding logic
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-transparent border-y border-gray-300/30 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal reveal-fade-up">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75]">
            Smile Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mt-2 mb-4 tracking-tight">
            Before & After Results
          </h2>
          <p className="text-sm text-[#6B7280] font-medium">
            Explore actual transformations accomplished by Dr. Vance. Click and slide or toggle below to review the changes.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 reveal reveal-fade-up">
          {(["whitening", "invisalign", "implants"] as TreatmentType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#0D9E75] text-white shadow-md"
                  : "bg-white/80 text-[#0A2540] hover:bg-white"
              }`}
            >
              {tab === "whitening" && "Teeth Whitening"}
              {tab === "invisalign" && "Invisalign®"}
              {tab === "implants" && "Dental Implants"}
            </button>
          ))}
        </div>

        {/* Main Content Viewer */}
        <div className="max-w-3xl mx-auto reveal reveal-fade-up">
          {activeTab === "whitening" && (
            <div className="flex flex-col items-center">
              {/* Slider Explanation */}
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
                Drag the divider left or right
              </p>

              {/* Interactive Comparison Slider */}
              <div
                ref={containerRef}
                onMouseDown={() => {
                  isDragging.current = true;
                }}
                onTouchStart={() => {
                  isDragging.current = true;
                }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize"
              >
                {/* AFTER image (Underneath) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/smile-after.png"
                    alt="After Whitening teeth result"
                    fill
                    sizes="(max-w-768px) 100vw, 768px"
                    className="object-cover pointer-events-none"
                    priority
                  />
                  <div className="absolute bottom-4 right-4 bg-[#0D9E75]/90 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow uppercase tracking-wider backdrop-blur-sm">
                    After
                  </div>
                </div>

                {/* BEFORE image (Overlay, clipped based on sliderPosition) */}
                <div
                  className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  {/* We duplicate the image but apply CSS filters to make teeth look yellowed/darkened for the before state */}
                  <div className="relative w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
                    <Image
                      src="/smile-after.png"
                      alt="Before Whitening teeth"
                      fill
                      sizes="(max-w-768px) 100vw, 768px"
                      className="object-cover filter saturate-[0.6] sepia-[0.35] brightness-[0.84] contrast-[0.98] pointer-events-none"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#0A2540]/90 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow uppercase tracking-wider backdrop-blur-sm" style={{ left: "16px" }}>
                      Before
                    </div>
                  </div>
                </div>

                {/* Slider divider line and handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0D9E75] border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "invisalign" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Before Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-150 shadow-sm bg-white p-6 text-center">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
                  🦷
                </div>
                <h4 className="font-extrabold text-lg text-[#0A2540] mb-2">Before Treatment</h4>
                <p className="text-sm text-[#6B7280] font-medium max-w-xs mx-auto leading-relaxed">
                  Severe crowding, overlapping front teeth, and misalignment causing chewing discomfort and speech barriers.
                </p>
                <div className="inline-block bg-red-100/70 text-red-700 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-6">
                  Misaligned
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-100 shadow-md bg-emerald-50/20 p-6 text-center">
                <div className="w-20 h-20 bg-[#E6F5F1] text-[#0D9E75] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
                  ✨
                </div>
                <h4 className="font-extrabold text-lg text-[#0A2540] mb-2">After 12 Months</h4>
                <p className="text-sm text-[#6B7280] font-medium max-w-xs mx-auto leading-relaxed">
                  Perfect tooth spacing, a straight archway, and a clean alignment that optimizes bite pattern and smile cosmetics.
                </p>
                <div className="inline-block bg-[#E6F5F1] text-[#0D9E75] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-6">
                  Perfect Alignment
                </div>
              </div>
            </div>
          )}

          {activeTab === "implants" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Before Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-150 shadow-sm bg-white p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
                  🕳️
                </div>
                <h4 className="font-extrabold text-lg text-[#0A2540] mb-2">Before Procedure</h4>
                <p className="text-sm text-[#6B7280] font-medium max-w-xs mx-auto leading-relaxed">
                  Missing tooth due to physical damage, causing surrounding teeth to shift and a noticeable aesthetic gap.
                </p>
                <div className="inline-block bg-gray-150 text-gray-600 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-6">
                  Missing Space
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-100 shadow-md bg-emerald-50/20 p-6 text-center">
                <div className="w-20 h-20 bg-[#E6F5F1] text-[#0D9E75] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
                  💎
                </div>
                <h4 className="font-extrabold text-lg text-[#0A2540] mb-2">After Implant Placement</h4>
                <p className="text-sm text-[#6B7280] font-medium max-w-xs mx-auto leading-relaxed">
                  Custom-milled porcelain crown supported by a secure titanium root. Blends seamlessly and restores full bite functionality.
                </p>
                <div className="inline-block bg-[#E6F5F1] text-[#0D9E75] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-6">
                  Fully Restored
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
