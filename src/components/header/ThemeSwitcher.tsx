
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  // Определяем, используется ли тёмная тема (как явно установленная, так и системная)
  const isDarkTheme = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="w-8 h-8 transition-colors duration-300"
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Переключить на светлую тему" : "Переключить на тёмную тему"}
    >
      {isDarkTheme ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4 text-primary-800" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
