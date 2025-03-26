
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email && !telegram) return;
    
    // In a real app, here you would send this to your backend
    console.log("Subscribed:", { email, telegram });
    
    toast({
      title: t("common.success"),
      description: t("common.successMessage"),
      duration: 3000,
    });
    
    setEmail("");
    setTelegram("");
  };

  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">GlobalLogix</h3>
            <p className="text-primary-100 text-sm max-w-xs">
              {t("home.about.description") ? t("home.about.description").substring(0, 150) + "..." : ""}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://t.me/globallogix" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701l-.335 4.99c.49 0 .707-.222.98-.484l2.347-2.283l4.883 3.604c.894.498 1.538.242 1.764-.827l3.184-15.013c.325-1.301-.5-1.89-1.444-1.481z"/>
                </svg>
              </a>
              <a href="https://youtube.com/globallogix" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://instagram.com/globallogix" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.company")}</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/#about" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.about")}
              </Link>
              <Link to="/#services" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.services")}
              </Link>
              <Link to="/#team" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.team")}
              </Link>
              <Link to="/#contact" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.contact")}
              </Link>
              <Link to="/catalog" className="text-primary-100 hover:text-white transition-colors">
                {t("nav.catalog")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.contact")}</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary-300 shrink-0 mt-0.5" />
                <span className="text-primary-100">{t("footer.phone")}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary-300 shrink-0 mt-0.5" />
                <span className="text-primary-100">{t("footer.email")}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-300 shrink-0 mt-0.5" />
                <span className="text-primary-100">{t("footer.address")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.subscribe")}</h3>
            <p className="text-primary-100 text-sm max-w-md mb-2">{t("footer.subscribeText")}</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-800/50 border-primary-700 text-white placeholder:text-primary-300"
              />
              <Input
                type="text"
                placeholder={t("footer.telegramPlaceholder")}
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className="bg-primary-800/50 border-primary-700 text-white placeholder:text-primary-300"
              />
              <Button type="submit" variant="secondary" className="w-full">
                {t("common.subscribe")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-800/50 text-center text-primary-200 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
