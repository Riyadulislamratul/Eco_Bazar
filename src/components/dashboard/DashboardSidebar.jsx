import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Heart,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const DashboardSidebar = () => {
  const { logout } = useAuth();

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Wishlist",
      icon: Heart,
      path: "/wishlist",
    },
    {
      title: "Shopping Cart",
      icon: ShoppingCart,
      path: "/cart",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <aside className="overflow-hidden rounded-xl border bg-white">
      <div className="border-b p-5">
        <h2 className="text-xl font-bold">
          Navigation
        </h2>
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 border-l-4 px-5 py-4 transition-all ${
                  isActive
                    ? "border-green-600 bg-green-50 text-green-600"
                    : "border-transparent hover:bg-gray-50"
                }`
              }
            >
              <Icon size={18} />

              {item.title}
            </NavLink>
          );
        })}

        <button
          onClick={logout}
          className="flex w-full items-center gap-3 border-l-4 border-transparent px-5 py-4 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={18} />

          Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;