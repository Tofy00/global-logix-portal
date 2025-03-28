
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const location = useLocation();
  const initialRender = useRef(true);

  useEffect(() => {
    // Всегда прокручиваем в начало страницы при переходе на главную
    window.scrollTo(0, 0);
    initialRender.current = true;
  }, [location.pathname]);

  useEffect(() => {
    // Обрабатываем якори в URL (hash fragments)
    if (location.hash && initialRender.current) {
      initialRender.current = false;
      
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Index;
