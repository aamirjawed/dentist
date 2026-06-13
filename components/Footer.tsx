"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Top visual separator bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D9E75] via-[#FF6B6B] to-[#0D9E75]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Strip Above Footer */}
        <div className="bg-gradient-to-r from-[#16365C] to-[#0D9E75]/20 rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Ready for a healthier, brighter smile?
            </h3>
            <p className="text-sm text-gray-300 font-semibold mt-1">
              Book your free initial consultation online in less than a minute.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#FF6B6B] hover:bg-[#FF8585] text-white text-center py-3.5 px-8 rounded-full font-bold transition-all duration-200 animate-cta-pulse inline-block text-base shadow min-h-[48px] flex items-center justify-center cursor-pointer"
          >
            Book Consultation Now
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Logo / Bio */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-[#0D9E75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8 1 1.5 2 3.5 1.5 5a1 1 0 0 0 1.5 1c2-1 4-1 6 0a1 1 0 0 0 1.5-1c-.5-1.5.5-3.5 1.5-5 1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6Z" />
                <path d="M9 8h6M12 5v6" />
              </svg>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Apex<span className="text-[#0D9E75]">Dental</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 font-semibold leading-relaxed max-w-sm">
              Providing modern, gentle, and comprehensive family dental services designed to keep your smile beautiful and lasting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0D9E75] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Schedule Consultation</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0D9E75] mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Google */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-sm" aria-label="Google">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.72 5.72 0 018.2 12.8a5.72 5.72 0 015.79-5.714c1.558 0 2.977.587 4.07 1.545l3.056-3.056c-1.92-1.785-4.46-2.87-7.126-2.87A9.8 9.8 0 004 12.8a9.8 9.8 0 009.99 9.8c5.442 0 9.81-3.9 9.81-9.8 0-.585-.054-1.125-.15-1.515H12.24z" />
                </svg>
              </a>

            </div>
            <div className="text-xs text-gray-400 font-bold leading-normal">
              Apex Dental Clinic, LLC <br />
              San Francisco Center
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-semibold">
          <div>
            &copy; 2025 Apex Dental. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
