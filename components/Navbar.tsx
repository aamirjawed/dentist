"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#CBD6DC]/95 backdrop-blur-md shadow-lg border-b border-gray-300/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Clinic Name */}
        <a href="#" className="flex items-center space-x-2 group">
          <svg
            className="w-8 h-8 text-[#0D9E75] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8 1 1.5 2 3.5 1.5 5a1 1 0 0 0 1.5 1c2-1 4-1 6 0a1 1 0 0 0 1.5-1c-.5-1.5.5-3.5 1.5-5 1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6Z" />
            <path d="M9 8h6M12 5v6" />
          </svg>
          <span className="font-extrabold text-xl tracking-tight text-[#0A2540]">
            Apex<span className="text-[#0D9E75]">Dental</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-sm transition-colors">
            Services
          </a>
          <a href="#why-choose-us" className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-sm transition-colors">
            About
          </a>
          <a href="#reviews" className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-sm transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-sm transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:4155550199"
            className="flex items-center space-x-2 text-[#0A2540] hover:text-[#0D9E75] font-extrabold text-sm transition-colors"
          >
            <svg className="w-4 h-4 text-[#0D9E75]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(415) 555-0199</span>
          </a>
          <a
            href="#contact"
            className="bg-[#FF6B6B] hover:bg-[#FF8585] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg animate-cta-pulse inline-block"
          >
            Book Now
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#0A2540] hover:bg-black/5 active:bg-black/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Slidedown with Slide & Fade Animation */}
      <div
        className={`md:hidden bg-[#CBD6DC]/95 backdrop-blur-md shadow-xl border-b border-gray-300/40 absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 transition-all duration-300 ease-in-out origin-top z-40 ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto visible"
            : "opacity-0 scale-y-95 pointer-events-none invisible"
        }`}
      >
        <a
          href="#services"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-lg transition-colors py-2"
        >
          Services
        </a>
        <a
          href="#why-choose-us"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-lg transition-colors py-2"
        >
          About
        </a>
        <a
          href="#reviews"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-lg transition-colors py-2"
        >
          Reviews
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-[#0A2540] hover:text-[#0D9E75] font-semibold text-lg transition-colors py-2"
        >
          Contact
        </a>
        <hr className="border-gray-300/30" />
        <div className="flex flex-col space-y-4 pt-2">
          <a
            href="tel:4155550199"
            className="flex items-center space-x-3 text-[#0A2540] font-bold text-lg"
          >
            <svg className="w-5 h-5 text-[#0D9E75]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(415) 555-0199</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#FF6B6B] hover:bg-[#FF8585] text-white text-center py-3.5 rounded-full font-bold text-lg shadow-md hover:shadow-lg active:scale-95 transition-all w-full min-h-[48px] flex items-center justify-center"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
