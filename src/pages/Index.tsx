
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const location = useLocation();
  const initialRender = useRef(true);

  useEffect(() => {
    // Scroll to top on initial render
    if (initialRender.current) {
      window.scrollTo(0, 0);
      initialRender.current = false;
      
      // If there's a hash in the URL, scroll to that section
      if (location.hash) {
        const targetId = location.hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
      
      // If we have a scrollToId from state (used when navigating from footer links)
      if (location.state && location.state.scrollToId) {
        const targetElement = document.getElementById(location.state.scrollToId);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location.hash, location.state]);

  return (
    <main className="flex flex-col">
      <HeroSection />
      <CatalogSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Index;
