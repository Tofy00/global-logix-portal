
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      // Handle anchors on the home page
      const anchor = path.replace('/#', '');
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home page first with the anchor
        navigate('/', { state: { scrollToId: anchor } });
      } else {
        // If already on home page, just scroll to the section
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation to other pages
      navigate(path);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary-500 shrink-0" />,
      text: t("footer.phone"),
      href: "tel:+79251903340"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-500 shrink-0" />,
      text: t("footer.email"),
      href: "mailto:hello@witpower.ru"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary-500 shrink-0" />,
      text: t("footer.address"),
      href: "https://maps.google.com/?q=просп.+Вернадского,+41,+стр.+1,+Москва,+Россия"
    }
  ];

  const navigationLinks = [
    { name: t("footer.about"), path: "/#about" },
    { name: t("footer.services"), path: "/#services" },
    { name: t("footer.team"), path: "/#team" },
    { name: t("footer.contact"), path: "/#contact" },
    { name: t("nav.catalog"), path: "/catalog" }
  ];

  return (
    <footer className="bg-background">
      <Separator className="bg-border/40" />
      <ScrollReveal>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info - Social icons removed */}
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 transform hover:scale-105 w-fit"
              >
                WitLine
              </button>
            </div>

            {/* Company Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold mb-2">{t("footer.company")}</h3>
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((link, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleNavigation(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 w-fit group relative"
                  >
                    <span>{link.name}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold mb-2">{t("footer.contact")}</h3>
              <div className="flex flex-col space-y-4">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group w-fit"
                    target={contact.href.startsWith("https") ? "_blank" : undefined}
                    rel={contact.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {contact.icon}
                    </span>
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/40 text-center text-muted-foreground text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
