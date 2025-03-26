
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    // In a real app, here you would send this to your backend
    console.log("Subscribed email:", email);
    
    toast({
      title: t("common.success"),
      description: t("common.successMessage"),
      duration: 3000,
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">GlobalLogix</h3>
            <p className="text-primary-100 text-sm max-w-xs">
              {t("home.about.description").substring(0, 150)}...
            </p>
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
              <Link to="/#" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.careers")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.legal")}</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/#" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="/#" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/#" className="text-primary-100 hover:text-white transition-colors">
                {t("footer.cookies")}
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
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t("footer.subscribe")}</h3>
              <p className="text-primary-100 text-sm max-w-md mb-4">{t("footer.subscribeText")}</p>
              <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-800/50 border-primary-700 text-white placeholder:text-primary-300"
                />
                <Button type="submit" variant="secondary">
                  {t("common.subscribe")}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-primary-200 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
