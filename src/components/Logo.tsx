
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className = "", onClick }: LogoProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Определяем, используется ли тёмная тема (как явно установленная, так и системная)
  const isDarkTheme = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  // Выбираем логотип в зависимости от темы
  const logoSrc = isDarkTheme 
    ? "/lovable-uploads/fa8a27a2-dbaa-4134-909c-8aabee292780.png" 
    : "/lovable-uploads/34a5c9ef-abdf-4c12-811a-b5e37451a3dd.png";
  
  // Обработчик клика по логотипу
  const handleLogoClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    if (location.pathname !== '/') {
      // Если не на главной странице, перенаправляем на главную
      navigate('/');
    } else {
      // Если на главной, просто прокручиваем в начало страницы
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <button
      onClick={handleLogoClick}
      className={`flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none ${className}`}
      aria-label="WIT Line logo, return to homepage"
    >
      <img 
        src={logoSrc} 
        alt="WIT Line" 
        className="h-8 md:h-10 w-auto object-contain"
      />
    </button>
  );
};

export default Logo;
