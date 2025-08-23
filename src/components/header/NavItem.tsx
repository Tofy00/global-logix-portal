
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  id: string;
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ id, label, path, isActive, onClick }: NavItemProps) => {
  const location = useLocation();
  
  // Check if this is a hash link targeting the home page
  const isHomeHashLink = path.includes('#') && path.startsWith('/');
  
  // For hash links on the home page, we need special handling to ensure proper scrolling
  if (isHomeHashLink) {
    return (
      <Link
        key={id}
        to={path}
        className={`px-3 py-2 text-sm rounded-md transition-all duration-300 relative group ${
          isActive
            ? "text-primary font-medium" 
            : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
        }`}
        onClick={(e) => {
          // If we're not already on the home page, let the regular navigation happen
          if (location.pathname !== '/') {
            return;
          }
          
          // If we're already on the home page, prevent default navigation
          // and scroll to the target section instead
          e.preventDefault();
          onClick();
        }}
      >
        {label}
        <span 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
            isActive ? "w-1/2" : "w-0 group-hover:w-1/3"
          }`}
        />
      </Link>
    );
  }
  
  // Regular links without hashes
  return (
    <Link
      key={id}
      to={path}
      className={`px-3 py-2 text-sm rounded-md transition-all duration-300 relative group ${
        isActive
          ? "text-primary font-medium" 
          : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
      }`}
      onClick={onClick}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
          isActive ? "w-1/2" : "w-0 group-hover:w-1/3"
        }`}
      />
    </Link>
  );
};

export default NavItem;
