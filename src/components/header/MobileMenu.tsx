
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: {
    id: string;
    label: string;
    path: string;
    section: string;
  }[];
  activeSection: string;
  location: {
    pathname: string;
  };
  onNavLinkClick: () => void;
}

const MobileMenu = ({ 
  isOpen, 
  navItems, 
  activeSection, 
  location, 
  onNavLinkClick 
}: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg animate-fade-in">
      <div className="container py-4 flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`px-4 py-3 rounded-md transition-all duration-300 ${
              (item.path === location.pathname || (location.pathname === "/" && activeSection === item.section))
                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3"
                : "text-foreground/80 hover:text-foreground hover:bg-accent"
            }`}
            onClick={onNavLinkClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
