
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  
  const socialLinks = [
    {
      name: "Telegram",
      url: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.335 4.99c.49 0 .707-.222.98-.484l2.347-2.283l4.883 3.604c.894.498 1.538.242 1.764-.827l3.184-15.013c.325-1.301-.5-1.89-1.444-1.481z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary-500 shrink-0" />,
      text: "+7 (495) 123-4567",
      href: "tel:+74951234567"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-500 shrink-0" />,
      text: "hello@witpower.ru",
      href: "mailto:hello@witpower.ru"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary-500 shrink-0" />,
      text: "просп. Вернадского, 41, стр. 1, Москва, Россия",
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
            {/* Company Info & Social */}
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 transform hover:scale-105 w-fit"
              >
                GlobalLogix
              </button>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    aria-label={social.name}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
