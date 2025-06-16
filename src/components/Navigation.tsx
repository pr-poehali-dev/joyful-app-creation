import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/games", icon: "Gamepad2", label: "Игры" },
    { path: "/achievements", icon: "Trophy", label: "Награды" },
    { path: "/challenges", icon: "Target", label: "Вызовы" },
    { path: "/gallery", icon: "Image", label: "Галерея" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg z-50 border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            JoyApp ✨
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 hover-scale ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-1">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-gray-600 hover:bg-purple-50"
                }`}
              >
                <Icon name={item.icon} size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
