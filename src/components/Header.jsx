import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Phone,
  Search,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import Dropdown from "./Dropdown";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const navMenus = [
  // {
  //   title: "Home",
  // },
  {
    title: "Shop",
    items: [
      { name: "Shop", path: "/shop" },
      { name: "Product Details", path: "/product-details" },
      { name: "Cart", path: "/cart" },
      { name: "Checkout", path: "/checkout" },
    ],
  },
  {
    title: "Pages",
    items: [
      { name: "Wishlist", path: "/wishlist" },
      { name: "FAQ", path: "/faq" },
      { name: "My Account", path: "/my-account" },
    ],
  },
  {
    title: "Blog",
    items: [
      { name: "Blog", path: "/blog" },
      { name: "Blog Details", path: "/blog-details" },
    ],
  },
];

export default function Header() {
  const [language, setLanguage] = useState("Eng");
  const [currency, setCurrency] = useState("USD");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const { cartCount, cartTotal } = useCart();

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex container flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div className="hidden items-center gap-2 text-xs text-gray-500 md:flex">
            <MapPin size={14} />
            <span>Store Location: Lincoln-344, Illinois, Chicago, USA</span>
          </div>

          <div className="flex items-center justify-center gap-5 text-xs text-gray-500 md:justify-end">
            <Dropdown
              title={language}
              width="w-28"
              items={["English", "Bangla", "Arabic", "Spanish"]}
              onSelect={setLanguage}
            />

            <Dropdown
              title={currency}
              width="w-24"
              items={["USD", "EUR", "GBP", "BDT"]}
              onSelect={setCurrency}
            />

            <div className="hidden h-4 w-px bg-gray-300 md:block" />

            <div className="flex items-center gap-2">
              <Link to="/login" className="font-semibold hover:text-green-600">
                Sign In
              </Link>

              <span>/</span>

              <Link
                to="/register"
                className="font-semibold hover:text-green-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE HEADER ================= */}

      <div className="bg-white">
        <div className="mx-auto flex container justify-between flex-wrap items-center gap-4  lg:gap-50 px-4 py-5 lg:flex-nowrap">
          {/* Logo */}

          <div className="flex w-full items-center lg:w-auto">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-10" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto lg:hidden"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Search */}

          <div className="order-3 flex w-full overflow-hidden rounded-md border border-gray-300 lg:order-none lg:flex-1">
            <div className="flex items-center px-4">
              <Search size={18} className="text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-3 outline-none"
            />

            <button className="bg-green-600 px-6 text-white transition hover:bg-green-700">
              Search
            </button>
          </div>

          {/* Right Side */}

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              to="/wishlist"
              className="relative flex items-center justify-center"
            >
              <Heart size={24} />

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <div className="h-8 w-px bg-gray-300" />

            <div className="flex items-center gap-3">
              <Link to="/cart" className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag size={28} className="text-gray-700" />

                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                      {cartCount > 9 ? "9+" : cartCount}
                    </span>
                  )}
                </div>

                <div className="hidden sm:block">
                  <p className="text-xs text-gray-500">Shopping cart</p>

                  <p className="font-semibold">${cartTotal.toFixed(2)}</p>
                </div>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
      {/* ================= DESKTOP NAVBAR ================= */}

      <nav className="hidden bg-[#333333] text-white lg:block">
        <div className="mx-auto flex container items-center justify-between px-4">
          <ul className="flex items-center gap-10 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition ${
                  isActive ? "text-green-400" : "hover:text-green-400"
                }`
              }
            >
              Home
            </NavLink>

            {navMenus.map((menu) => (
              <li key={menu.title}>
                <Dropdown
                  title={menu.title}
                  items={menu.items}
                  textColor="text-white hover:text-green-400"
                />
              </li>
            ))}

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg transition ${
                    isActive ? "text-green-400" : "hover:text-green-400"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg transition ${
                    isActive ? "text-green-400" : "hover:text-green-400"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} />
            <span>(219) 555-0114</span>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-screen border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/wishlist"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 ${
                isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-100"
              }`
            }
          >
            Contact Us
          </NavLink>

          <div className="my-4 border-t border-gray-200" />

          <div className="flex items-center justify-between">
            <Link
              to="/wishlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100"
            >
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>

            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100"
            >
              <ShoppingBag size={20} />
              <span>Cart</span>
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-gray-200 pt-4 text-sm text-gray-700">
            <Phone size={18} />
            <span>(219) 555-0114</span>
          </div>
        </div>
      </div>
    </header>
  );
}
