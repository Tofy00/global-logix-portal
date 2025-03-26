
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent/30 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 w-24 h-24 bg-accent rounded-full mx-auto flex items-center justify-center">
          <FileSearch className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-8">{t("common.notFound")}</p>
        
        <Button asChild size="lg">
          <Link to="/">{t("common.backToHome")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
