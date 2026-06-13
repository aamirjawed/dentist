"use client";

import React from "react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const servicesList: ServiceItem[] = [
    {
      title: "Teeth Whitening",
      desc: "Brighten your smile up to 8 shades with safe, laser-activated whitening technology.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      title: "Invisalign®",
      desc: "Straighten teeth discreetly using customized, comfortable, and clear removable aligners.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Dental Implants",
      desc: "Permanent, premium titanium replacements that look, feel, and function like real teeth.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Emergency Care",
      desc: "Immediate relief and same-day dental visits for toothaches, accidents, and root canals.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Kids Dentistry",
      desc: "Friendly, gentle cleanings and interactive dental checkups tailored for growing smiles.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Routine Checkups",
      desc: "Comprehensive exams, scaling, plaque removal, and cancer screenings every 6 months.",
      icon: (
        <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 reveal reveal-fade-up">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75] bg-[#E6F5F1] px-4 py-1.5 rounded-full">
            Specialized Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] mt-4 mb-4 tracking-tight">
            Our Dental Services
          </h2>
          <p className="text-sm md:text-base text-[#6B7280] font-medium max-w-xl mx-auto">
            We provide advanced, customized clinical treatments with a gentle touch.
          </p>
        </div>

        {/* Minimalist Card-Free Interactive Rows */}
        <div className="divide-y divide-gray-200">
          {servicesList.map((svc, i) => (
            <a
              href="#contact"
              key={i}
              className="group block py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:scale-[1.01] hover:px-4 cursor-pointer"
            >
              {/* Left Side: Index, Icon, and Texts */}
              <div className="flex items-start gap-6">
                <span className="text-sm font-black text-[#0D9E75]/40 group-hover:text-[#0D9E75] transition-colors pt-1">
                  0{i + 1}
                </span>
                
                {/* Icon Container with stateful classes */}
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F1] group-hover:bg-[#0D9E75] text-[#0D9E75] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm mt-0.5">
                  {svc.icon}
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0A2540] group-hover:text-[#0D9E75] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#6B7280] font-semibold mt-1.5 max-w-xl leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Animated Hover Button */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-extrabold text-[#0D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 self-start md:self-center">
                <span>Book Service</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
