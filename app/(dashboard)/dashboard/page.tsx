"use client"
import { AboutSection } from "./about-section";
import { FaqSection } from "./faq-section";
import { FooterSection } from "./footer-section";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";

export default function(){
    return (
      <div className="min-h-screen bg-white dark:bg-black">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <FaqSection/>
            <FooterSection/>
      </div>
    )
}