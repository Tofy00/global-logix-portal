
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SupplyProgramButton = () => {
  const { t } = useLanguage();

  const openSupplyProgram = () => {
    window.open("/lovable-uploads/witline_supply_program_combined.png", "_blank");
  };

  return (
    <Button
      onClick={openSupplyProgram}
      variant="outline"
      className="mt-8 transition-all duration-300 hover:scale-105 flex gap-2 items-center group"
    >
      <span>{t("home.about.supplyProgramButton")}</span>
      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
};

export default SupplyProgramButton;
