
import { useTheme } from "@/components/ThemeProvider";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className = "", onClick }: LogoProps) => {
  const { theme } = useTheme();
  
  // Определяем, используется ли тёмная тема (как явно установленная, так и системная)
  const isDarkTheme = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  // Выбираем соответствующий логотип в зависимости от темы
  const logoSrc = isDarkTheme 
    ? "/lovable-uploads/33f1efa3-d706-465e-b10d-ae682493841d.png" 
    : "/lovable-uploads/9bac3ed1-a616-47c2-8716-23badd6336a2.png";
  
  return (
    <button 
      onClick={onClick}
      className={`flex items-center group transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <img 
        src={logoSrc} 
        alt="WitLine Logo" 
        className="h-8 md:h-10" 
      />
    </button>
  );
};

export default Logo;
