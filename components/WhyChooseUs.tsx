"use client";

import React, { useState, useEffect, useRef } from "react";

// Custom Counter Component for Stats
const Counter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 1500,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-transparent border-y border-gray-300/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Value Bullet Points */}
          <div className="reveal reveal-slide-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75]">
              Why Apex Dental
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mt-2 mb-8 tracking-tight">
              Dental Care Centered Around You
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "Painless Procedures", desc: "Advanced sedation options and laser-dentistry ensure minimal discomfort." },
                { title: "State-of-the-Art Equipment", desc: "Digital 3D impressions, digital X-rays, and advanced sterilization labs." },
                { title: "Multilingual Clinical Staff", desc: "Fluent in English, Spanish, Cantonese, and Mandarin for your convenience." },
                { title: "0% Finance Options", desc: "Customized interest-free payment terms fitting easily within your budget." }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="w-6 h-6 rounded-full bg-[#E6F5F1] text-[#0D9E75] flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0A2540]">{item.title}</h4>
                    <p className="text-sm text-[#6B7280] font-medium leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Block */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-150 reveal reveal-slide-right flex flex-col justify-between h-full space-y-8 md:space-y-0">
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              
              <div className="text-center pt-6 md:pt-0 md:px-4 flex flex-col justify-center">
                <Counter target={15} suffix="+" />
                <div className="text-sm font-bold text-[#0A2540] mt-2">Years Service</div>
                <div className="text-xs text-[#6B7280] font-medium mt-1">Established since 2010</div>
              </div>

              <div className="text-center pt-6 md:pt-0 md:px-4 flex flex-col justify-center">
                <Counter target={5000} suffix="+" />
                <div className="text-sm font-bold text-[#0A2540] mt-2">Happy Patients</div>
                <div className="text-xs text-[#6B7280] font-medium mt-1">Smiles transformed</div>
              </div>

              <div className="text-center pt-6 md:pt-0 md:px-4 flex flex-col justify-center">
                <Counter target={99} suffix="%" />
                <div className="text-sm font-bold text-[#0A2540] mt-2">Satisfaction</div>
                <div className="text-xs text-[#6B7280] font-medium mt-1">Based on regular feedback</div>
              </div>

            </div>

            {/* Emergency card highlight */}
            <div className="bg-[#0A2540] rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 md:mt-8">
              <div>
                <h4 className="font-extrabold text-lg text-white">Need emergency assistance?</h4>
                <p className="text-xs text-gray-300 font-semibold mt-1">We guarantee same-day slots for immediate toothache relief.</p>
              </div>
              <a
                href="tel:4155550199"
                className="bg-[#0D9E75] hover:bg-[#0B8562] text-white text-center py-2.5 px-6 rounded-full font-bold text-xs shrink-0 transition-colors shadow"
              >
                Call Clinic
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
