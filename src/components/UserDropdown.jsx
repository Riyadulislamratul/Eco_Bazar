import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  Heart,
  ShoppingCart,
  CreditCard,
  LogOut,
} from "lucide-react";

import useAuth from "../hooks/useAuth";
import { LayoutDashboard } from "lucide-react";

const UserDropdown = () => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src={user.photoURL || "https://ui-avatars.com/api/?name=User"}
          alt="User"
          className="h-10 w-10 rounded-full border-2 border-green-500 object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="font-semibold">
          {user.displayName || "My Account"}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <div
        className={`absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 ease-out z-50 overflow-hidden ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="border-b p-5">
          <p className="font-semibold text-lg">{user.displayName || "User"}</p>
        </div>

        <Link
  to="/dashboard"
  onClick={() => setOpen(false)}
  className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-green-50 hover:text-green-600"
>
  <LayoutDashboard size={18} />
  Dashboard
</Link>

        <Link
          to="/wishlist"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <Heart size={18} />
          Wishlist
        </Link>

        <Link
          to="/cart"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <ShoppingCart size={18} />
          Shopping Cart
        </Link>

        <Link
          to="/checkout"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <CreditCard size={18} />
          Checkout
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 cursor-pointer px-5 py-3 text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
