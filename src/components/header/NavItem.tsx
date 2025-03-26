
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
      className={`px-3 py-2 text-sm rounded-md transition-all duration-300 relative ${
        isActive
          ? "text-primary font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full" 
          : "text-foreground/80 hover:text-foreground hover:bg-accent"
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavItem;
