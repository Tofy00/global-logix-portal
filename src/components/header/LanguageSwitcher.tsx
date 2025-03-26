
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage, type Language } from "@/components/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  
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

  return (
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
  );
};

export default LanguageSwitcher;
