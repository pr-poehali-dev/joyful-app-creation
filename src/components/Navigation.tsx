import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/iphone", icon: "Smartphone", label: "iPhone" },
    { path: "/ipad", icon: "Tablet", label: "iPad" },
    { path: "/mac", icon: "Monitor", label: "Mac" },
    { path: "/airpods", icon: "Headphones", label: "AirPods" },
    { path: "/accessories", icon: "Package", label: "Аксессуары" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🍎</div>
            <div className="text-xl font-semibold text-gray-800">
              Apple Store
            </div>
            <div className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
              Новый год
            </div>
          </div>

          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 hover-scale text-sm font-medium ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Icon name="ShoppingCart" size={20} />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon} size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
