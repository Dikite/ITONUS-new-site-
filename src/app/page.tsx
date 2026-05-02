"use client";

import { useEffect } from "react";
import HeroSection from "@/app/components/mainpage";
import ServicesSection from "@/app/components/servicesSection"
import AboutUs from "@/app/components/About"
import OurPartners from "./components/Ourpartners";
import FoundersSection from "./components/founders";

export default function HomePage() {
  useEffect(() => {
    // Simple hash scroll effect
    if (window.location.hash === '#founders') {
      setTimeout(() => {
        const element = document.getElementById('founders');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

    useEffect(() => {
    // Simple hash scroll effect
    if (window.location.hash === '#about') {
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <OurPartners />
      <FoundersSection />
    </>
  );
}