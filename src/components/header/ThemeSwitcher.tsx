
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="w-8 h-8 transition-colors duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4 text-primary-800" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
