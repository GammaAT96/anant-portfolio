import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", path: "/" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  // Removed "Notes" from here
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-card/60 backdrop-blur-md px-2 py-2 shadow-soft border border-border/50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link",
                location.pathname === item.path && "nav-link-active"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;