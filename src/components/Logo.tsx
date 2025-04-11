
import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleLogoClick}
      className={`flex items-center focus:outline-none transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <img 
        src="/lovable-uploads/947d1a0b-7c19-4a68-adf4-70d5427a44b9.png" 
        alt="WitLine Logo" 
        className="h-8 md:h-10 w-auto" 
      />
    </button>
  );
};

export default Logo;
