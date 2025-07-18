
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";
import { smoothScrollToTop } from "@/lib/smoothScroll";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className = "", onClick }: LogoProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  
  // Определяем актуальную тему на основе классов документа
  useEffect(() => {
    const updateResolvedTheme = () => {
      const root = document.documentElement;
      const isDark = root.classList.contains('dark');
      setResolvedTheme(isDark ? 'dark' : 'light');
    };

    // Обновляем тему при изменении
    updateResolvedTheme();

    // Создаем наблюдатель для отслеживания изменений классов
    const observer = new MutationObserver(updateResolvedTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Слушаем изменения системной темы для случая theme === "system"
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateResolvedTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);
  
  // Выбираем логотип в зависимости от реально применённой темы
  const logoSrc = resolvedTheme === 'dark'
    ? "/lovable-uploads/821f42e1-349c-45a1-9e6f-429b572ee290.png" 
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
      // Если на главной, просто прокручиваем в начало страницы с плавной анимацией
      smoothScrollToTop();
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
