import { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Phone,
  Search,
  MapPin,
  Leaf,
} from "lucide-react";

import Dropdown from "./Dropdown";

const navMenus = [
  {
    title: "Home",
    items: ["Home 1", "Home 2", "Home 3"],
  },
  {
    title: "Shop",
    items: [
      "Shop Grid",
      "Shop List",
      "Product Details",
      "Cart",
      "Checkout",
    ],
  },
  {
    title: "Pages",
    items: [
      "About Us",
      "Wishlist",
      "FAQ",
      "My Account",
    ],
  },
  {
    title: "Blog",
    items: ["Blog Grid", "Blog Details"],
  },
];

export default function Header() {
  const [language, setLanguage] = useState("Eng");
  const [currency, setCurrency] = useState("USD");

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={14} />
            <span>
              Store Location: Lincoln- 344, Illinois,
              Chicago, USA
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-gray-500 cursor-pointer">
            <Dropdown
              title={language}
              width="w-28"
              items={[
                "English",
                "Bangla",
                "Arabic",
                "Spanish",
              ]}
              onSelect={setLanguage}
            />

            <Dropdown
              title={currency}
              width="w-24"
              items={[
                "USD",
                "EUR",
                "GBP",
                "BDT",
              ]}
              onSelect={setCurrency}
            />

            <div className="h-4 w-px bg-gray-300" />

            <div className="flex items-center gap-2 text-gray-500">
              <button className="hover:text-green-600 cursor-pointer font-poppins font-semibold">
              Sign In
            </button>
            <span className="mx-1">/</span>
              <button className="hover:text-green-600 cursor-pointer font-poppins font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE HEADER */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
          </div>

          {/* Search */}
          <div className="flex flex-1 overflow-hidden rounded-md border border-gray-300">
            <div className="flex items-center px-4">
              <Search
                size={18}
                className="text-gray-500"
              />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 outline-none"
            />

            <button className="bg-green-600 px-8 font-medium text-white hover:bg-green-700 cursor-pointer">
              Search
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <button>
              <Heart
                size={25}
                className="text-gray-700 hover:text-green-600 cursor-pointer"
              />
            </button>

            <div className="h-8 w-px bg-gray-300" />

            <div className="flex items-center gap-3">
              <button className="relative">
                <ShoppingBag
                  size={25}
                  className="text-gray-700 hover:text-green-600 cursor-pointer"
                />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-semibold text-white">
                  2
                </span>
              </button>

              <div>
                <p className="text-xs text-gray-500">
                  Shopping cart:
                </p>

                <p className="font-semibold text-gray-900">
                  $57.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-[#333333] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <ul className="flex items-center gap-10 py-4">
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
              <a
                href="#"
                className="text-sm hover:text-green-400"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm hover:text-green-400"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} />
            <span>(219) 555-0114</span>
          </div>
        </div>
      </nav>
    </header>
  );
}