"use client";

import React from "react";

export default function TrustBar() {
  const trustItems = [
    "Same-Day Appointments",
    "Flexible Payment Plans",
    "Family-Friendly Environment",
    "Emergency Care Available",
    "All Insurances Accepted",
  ];

  return (
    <section className="bg-transparent border-y border-gray-300/30 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-150 text-center items-center">
          {trustItems.map((text, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center justify-center gap-2 px-2 py-4 md:py-0 first:border-t-0"
            >
              <div className="w-6 h-6 rounded-full bg-[#E6F5F1] flex items-center justify-center text-[#0D9E75] font-black shrink-0 shadow-sm">
                ✓
              </div>
              <span className="text-xs md:text-sm font-bold text-[#0A2540] tracking-tight">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
