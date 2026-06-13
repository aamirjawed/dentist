"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import Doctor from "@/components/Doctor";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll Reveal triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-[#0D9E75]/30 selection:text-[#0A2540]">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <LeadForm />
        <Testimonials />
        <Doctor />
        <LocationHours />
      </main>
      
      <Footer />
    </div>
  );
}
