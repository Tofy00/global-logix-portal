
import { Link, useLocation } from "react-router-dom";

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
  const currentLocation = useLocation();
  
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg animate-in slide-in-from-top duration-300">
      <div className="container py-4 flex flex-col space-y-2">
        {navItems.map((item) => {
          // Check if this is a hash link targeting the home page
          const isHomeHashLink = item.path.includes('#') && item.path.startsWith('/');
          
          // For hash links on the home page when we're already there, we need special handling
          if (isHomeHashLink && currentLocation.pathname === '/') {
            return (
              <a
                key={item.id}
                href={item.path}
                className={`px-4 py-3 rounded-md transition-all duration-300 relative ${
                  (item.path === location.pathname || (location.pathname === "/" && activeSection === item.section))
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavLinkClick();
                  if (item.section) {
                    const element = document.getElementById(item.section);
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }
                }}
              >
                {item.label}
              </a>
            );
          }
          
          // Regular navigation links
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`px-4 py-3 rounded-md transition-all duration-300 relative ${
                (item.path === location.pathname || (location.pathname === "/" && activeSection === item.section))
                  ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent"
              }`}
              onClick={onNavLinkClick}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
