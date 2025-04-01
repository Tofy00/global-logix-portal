
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
    const savedLanguage = localStorage.getItem("witline-language") as Language;
    if (savedLanguage && ["ru", "en", "zh", "tr"].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (["ru", "en", "zh", "tr"].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return defaultLanguage;
  });
  
  const setLanguage = (lang: Language) => {
    if (["ru", "en", "zh", "tr"].includes(lang)) {
      setCurrentLanguage(lang);
      localStorage.setItem("witline-language", lang);
      document.documentElement.lang = lang;
    } else {
      console.warn(`Invalid language code: ${lang}`);
    }
  };
  
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  
  const t = (key: string): string => {
    if (!key) return ""; // Handle empty keys
    
    const keys = key.split(".");
    let current: any = translations[currentLanguage];
    
    // Try to get translation from current language
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // If key not found in current language, try to find it in default language
        if (currentLanguage !== defaultLanguage) {
          let fallback: any = translations[defaultLanguage];
          let fallbackFound = true;
          
          for (const fk of keys) {
            if (fallback && fallback[fk] !== undefined) {
              fallback = fallback[fk];
            } else {
              fallbackFound = false;
              break;
            }
          }
          
          if (fallbackFound && typeof fallback === 'string') {
            console.info(`Translation key not found in ${currentLanguage}, using fallback from ${defaultLanguage}: ${key}`);
            return fallback;
          }
        }
        
        console.warn(`Translation key not found: ${key} for language ${currentLanguage}`);
        return key.split('.').pop() || key; // Return the last part of the key as a fallback
      }
    }
    
    // Handle non-string values (should not happen with properly structured translations)
    if (typeof current !== 'string') {
      console.warn(`Translation value for key ${key} is not a string:`, current);
      return key.split('.').pop() || key;
    }
    
    return current;
  };
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
