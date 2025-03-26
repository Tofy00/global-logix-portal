
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderControlsProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderControls = ({ isMobile, isMenuOpen, toggleMenu }: HeaderControlsProps) => {
  return (
    <div className={`flex items-center ${isMobile ? "" : "space-x-2"}`}>
      <LanguageSwitcher />
      
      <div className="ml-2">
        <ThemeSwitcher />
      </div>
      
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu}
          className="transition-transform duration-300 ml-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      )}
    </div>
  );
};

export default HeaderControls;
