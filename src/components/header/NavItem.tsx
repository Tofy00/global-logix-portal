
import { Link } from "react-router-dom";

interface NavItemProps {
  id: string;
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ id, label, path, isActive, onClick }: NavItemProps) => {
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
