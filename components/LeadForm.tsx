"use client";

import React, { useState, FormEvent } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Show Toast
    setToastMessage("We'll call you within 1 hour ✓");
    
    // Reset Form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
    });

    // Clear Toast
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent relative scroll-mt-16 overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl translate-y-12 -translate-x-12" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal reveal-slide-right">
          
          {/* Form Headline */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 text-[#0A2540]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Book Your Free Consultation
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-3">
              Secure your slot within seconds. Our coordinator will contact you shortly.
            </p>
          </div>

          {/* Main Form container */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border border-[#0D9E75]/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="form-name" className="text-[10px] md:text-xs font-extrabold text-[#0A2540] uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="bg-[#F7FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#0D9E75] focus:ring-1 focus:ring-[#0D9E75] min-h-[48px]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="form-phone" className="text-[10px] md:text-xs font-extrabold text-[#0A2540] uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter phone number"
                  className="bg-[#F7FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#0D9E75] focus:ring-1 focus:ring-[#0D9E75] min-h-[48px]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="form-email" className="text-[10px] md:text-xs font-extrabold text-[#0A2540] uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="bg-[#F7FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#0D9E75] focus:ring-1 focus:ring-[#0D9E75] min-h-[48px]"
                />
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="form-service" className="text-[10px] md:text-xs font-extrabold text-[#0A2540] uppercase tracking-wider mb-2">
                  Select Service *
                </label>
                <select
                  id="form-service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="bg-[#F7FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#0D9E75] focus:ring-1 focus:ring-[#0D9E75] min-h-[48px]"
                >
                  <option value="">Choose Service</option>
                  <option value="teeth-whitening">Teeth Whitening</option>
                  <option value="invisalign">Invisalign</option>
                  <option value="implants">Dental Implants</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="kids">Kids Dentistry</option>
                  <option value="routine-checkup">Routine Checkup</option>
                </select>
              </div>

              {/* Date Picker */}
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="form-date" className="text-[10px] md:text-xs font-extrabold text-[#0A2540] uppercase tracking-wider mb-2">
                  Preferred Date
                </label>
                <input
                  id="form-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-[#F7FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#0D9E75] focus:ring-1 focus:ring-[#0D9E75] min-h-[48px]"
                />
              </div>

            </div>

            {/* Submit CTA */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#FF6B6B] hover:bg-[#FF8585] text-white py-4 rounded-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] active:translate-y-[1px] min-h-[48px] flex items-center justify-center cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A2540] text-white border-l-4 border-[#FF6B6B] px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-300 animate-slide-left-immediate">
          <svg className="w-6 h-6 text-[#0D9E75]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-extrabold text-sm tracking-tight">{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
