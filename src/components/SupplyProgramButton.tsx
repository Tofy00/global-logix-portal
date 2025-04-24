
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { ExternalLink } from "lucide-react";

export const SupplyProgramButton = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    window.open("/lovable-uploads/3fccfe06-38cc-4af3-8c26-b8a70b6d3f1d.png", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="group mt-8 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/80 dark:text-white/90 dark:hover:bg-white/10 dark:hover:border-white"
    >
      <span>{t("home.about.supplyProgram")}</span>
      <ExternalLink className="transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
};
