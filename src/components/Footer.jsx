import React from "react";
import ApplePay from "../assets/icons/applepay.png";
import Visa from "../assets/icons/visa.png";
import Mastercard from "../assets/icons/mastercard.png";
import Discover from "../assets/icons/discover.png";
import SecurePayment from "../assets/icons/securepayment.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[336px_1fr_1fr_1fr_1fr] gap-10">

          {/* Company Info */}
          <div className="lg:col-span-1 w-[336px] ">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <img src="/footerlogo.png" alt="Logo" />
            </div>

            <p className="text-gray-400 text-sm leading-6 mb-6">
              Morbi cursus porttitor enim lobortis molestie.
              Duis gravida turpis dui, eget bibendum magna
              congue nec.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <a
                href="tel:+12195550114"
                className="border-b border-green-500 pb-1 hover:text-green-400"
              >
                (219) 555-0114
              </a>

              <span className="text-gray-500">or</span>

              <a
                href="mailto:Proxy@gmail.com"
                className="border-b border-green-500 pb-1 hover:text-green-400"
              >
                Proxy@gmail.com
              </a>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              My Account
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Order History
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Shopping Cart
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Helps
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms & Condition
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Proxy
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Product
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Fruit & Vegetables
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Meat & Fish
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Bread & Bakery
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Beauty & Health
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            Ecobazar eCommerce © 2026. All Rights Reserved. Developed by{" "}
            <a
              href="https://riyadulislamratul-pearl-omega-kwze47xo7e.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-600"
            >
              Md Riyadul Islam Ratul
            </a>
          </p>

          <div className="flex items-center gap-3">

            <img src={ApplePay} alt="Apple Pay" className="cursor-pointer hover:transition duration-300 hover:scale-110"/>
            <img src={Visa} alt="Visa" className="cursor-pointer hover:transition duration-300 hover:scale-110"/>
            <img src={Mastercard} alt="Mastercard" className="cursor-pointer hover:transition duration-300 hover:scale-110"/>
            <img src={Discover} alt="Discover" className="cursor-pointer hover:transition duration-300 hover:scale-110"/>
            <img src={SecurePayment} alt="Secure Payment" className="cursor-pointer hover:transition duration-300 hover:scale-110"/>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;