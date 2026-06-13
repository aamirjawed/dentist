"use client";

import React from "react";
import Image from "next/image";

export default function Doctor() {
  return (
    <section className="py-20 md:py-28 bg-transparent border-y border-gray-300/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-150 shadow-lg reveal reveal-fade-up">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Doctor Photo */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
              <Image
                src="/doctor.png"
                alt="Dr. Marcus Vance DDS, MS"
                fill
                sizes="(max-w-768px) 150px, 200px"
                className="object-cover"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75]">
                Lead Dentist
              </span>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mt-1 mb-2">
                Dr. Marcus Vance, DDS, MS
              </h3>
              
              <div className="text-sm text-[#0A2540] font-bold leading-relaxed mb-4">
                <div>Doctor of Dental Surgery, Columbia University</div>
                <div className="text-gray-400 font-medium">Board Certified Orthodontist & Implant Specialist</div>
              </div>
              
              <p className="text-sm text-[#6B7280] font-medium leading-relaxed mb-6 max-w-2xl">
                With over 15 years of dedicated experience, Dr. Vance combines cutting-edge dental technology with a gentle, patient-focused touch to deliver exceptional smiles. He is passionate about making every visit comfortable, pain-free, and transformative for patients of all ages.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center text-sm font-extrabold text-[#0D9E75] hover:text-[#0B8562] transition-colors"
              >
                <span>Meet the Team</span>
                <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
