"use client";

import React from "react";

export default function LocationHours() {
  return (
    <section className="py-20 md:py-28 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Styled Map Frame */}
          {/* <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[350px] border border-gray-150 reveal reveal-slide-left">
            <iframe
              title="Apex Dental Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.186532454659!2d-122.4194155!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bedb1c1d9%3A0x64cfde66d773295f!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
              allowFullScreen
              loading="lazy"
            />
          </div> */}

          {/* Right Column: Address, Contacts & Hours Table */}
          <div className="flex flex-col justify-between reveal reveal-slide-right">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0D9E75]">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-[#0A2540] mt-2 mb-6 tracking-tight">
                Contact Information & Hours
              </h2>

              {/* Contact Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3.5">
                  <svg className="w-5 h-5 text-[#0D9E75] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-bold text-[#0A2540]">
                    100 Pine St Suite 1200, San Francisco, CA 94111
                  </span>
                </div>

                <div className="flex items-center space-x-3.5">
                  <svg className="w-5 h-5 text-[#0D9E75] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:4155550199" className="text-sm font-bold text-[#0A2540] hover:text-[#0D9E75] transition-colors">
                    (415) 555-0199
                  </a>
                </div>

                <div className="flex items-center space-x-3.5">
                  <svg className="w-5 h-5 text-[#0D9E75] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@apexdental.com" className="text-sm font-bold text-[#0A2540] hover:text-[#0D9E75] transition-colors">
                    hello@apexdental.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#E6F5F1] text-[#0A2540] text-xs font-black uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Day</th>
                    <th className="px-6 py-4 text-right">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[#0A2540] font-bold">
                  <tr>
                    <td className="px-6 py-3.5 text-gray-500 font-semibold">Mon – Thu</td>
                    <td className="px-6 py-3.5 text-right">8:00 AM – 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 text-gray-500 font-semibold">Friday</td>
                    <td className="px-6 py-3.5 text-right">8:00 AM – 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3.5 text-gray-500 font-semibold">Saturday</td>
                    <td className="px-6 py-3.5 text-right">9:00 AM – 2:00 PM</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-6 py-3.5 text-[#FF6B6B] font-bold">Sunday</td>
                    <td className="px-6 py-3.5 text-right text-[#FF6B6B] font-black">Closed (Emergency Only)</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
