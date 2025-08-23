import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import NavItem from "./NavItem";
import HeaderControls from "./HeaderControls";
import MobileMenu from "./MobileMenu";
import Logo from "@/components/Logo";

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: t("nav.home"), path: "/", section: "hero" },
    { id: "services", label: t("nav.services"), path: "/#services", section: "services" },
    { id: "about", label: t("nav.about"), path: "/#about", section: "about" },
    { id: "team", label: t("nav.team"), path: "/#team", section: "team" },
    { id: "contact", label: t("nav.contact"), path: "/#contact", section: "contact" },
    { id: "catalog", label: t("nav.catalog"), path: "/catalog", section: "" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const hash = location.hash.replace('#', '');
    if (hash && location.pathname === '/') {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      setIsScrolled(scrollPosition > 50);
      setLastScrollY(scrollPosition);
      
      if (location.pathname === "/") {
        const sections = ["hero", "services", "about", "team", "contact"];
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const threshold = 100;
            
            if (rect.top <= threshold && rect.bottom >= threshold) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, lastScrollY]);

  const handleNavLinkClick = (section: string, path: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === "/" && section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/85 backdrop-blur-md shadow-md dark:bg-background/90" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              path={item.path}
              isActive={item.path === location.pathname || (location.pathname === "/" && activeSection === item.section)}
              onClick={() => handleNavLinkClick(item.section, item.path)}
            />
          ))}

          <div className="ml-4 flex items-center space-x-2">
            <HeaderControls
              isMobile={false}
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </nav>

        <div className="flex items-center md:hidden">
          <HeaderControls
            isMobile={true}
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        location={location}
        onNavLinkClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
