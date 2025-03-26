import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage, type Language } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Globe 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { t, currentLanguage, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: t("nav.home"), path: "/", section: "hero" },
    { id: "services", label: t("nav.services"), path: "/#services", section: "services" },
    { id: "about", label: t("nav.about"), path: "/#about", section: "about" },
    { id: "team", label: t("nav.team"), path: "/#team", section: "team" },
    { id: "contact", label: t("nav.contact"), path: "/#contact", section: "contact" },
    { id: "catalog", label: t("nav.catalog"), path: "/catalog", section: "" },
  ];

  const languages: Record<Language, string> = {
    ru: "Русский",
    en: "English",
    zh: "中文",
    tr: "Türkçe"
  };

  const languageFlags: Record<Language, string> = {
    ru: "🇷🇺",
    en: "🇬🇧",
    zh: "🇨🇳",
    tr: "🇹🇷"
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      setIsScrolled(scrollPosition > 50);
      
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
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            GlobalLogix
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`px-3 py-2 text-sm rounded-md transition-all duration-300 relative ${
                (item.path === location.pathname || (location.pathname === "/" && activeSection === item.section))
                  ? "text-primary font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full" 
                  : "text-foreground/80 hover:text-foreground hover:bg-accent"
              }`}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </Link>
          ))}

          <div className="ml-4 flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="w-8 h-8 transition-colors duration-300">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(languages).map(([code, name]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setLanguage(code as Language)}
                    className={currentLanguage === code ? "bg-accent font-medium" : ""}
                  >
                    <span className="mr-2">{languageFlags[code as Language]}</span>
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="outline" 
              size="icon" 
              className="w-8 h-8 transition-colors duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-primary-800" />
              )}
            </Button>
          </div>
        </nav>

        <div className="flex items-center md:hidden space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="w-8 h-8 transition-colors duration-300">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(languages).map(([code, name]) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => setLanguage(code as Language)}
                  className={currentLanguage === code ? "bg-accent font-medium" : ""}
                >
                  <span className="mr-2">{languageFlags[code as Language]}</span>
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="outline" 
            size="icon" 
            className="w-8 h-8 transition-colors duration-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-primary-800" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-transform duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-3 rounded-md transition-all duration-300 ${
                  (item.path === location.pathname || (location.pathname === "/" && activeSection === item.section))
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent"
                }`}
                onClick={handleNavLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
