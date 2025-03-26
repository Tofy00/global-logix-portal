
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

export type Language = "ru" | "en" | "zh" | "tr";

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const defaultLanguage = "ru";

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("globallogix-language") as Language;
    if (savedLanguage) return savedLanguage;
    
    // Try to detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (["ru", "en", "zh", "tr"].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return defaultLanguage;
  });
  
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("globallogix-language", lang);
    document.documentElement.lang = lang;
  };
  
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  
  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[currentLanguage];
    
    for (const k of keys) {
      if (current && current[k]) {
        current = current[k];
      } else {
        console.warn(`Translation key not found: ${key} for language ${currentLanguage}`);
        return key;
      }
    }
    
    return current;
  };
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
