"use client"
import { AboutSection } from "./about-section";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";

export default function(){
    return (
      <div className="min-h-screen bg-white dark:bg-black">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
      </div>
    )
}