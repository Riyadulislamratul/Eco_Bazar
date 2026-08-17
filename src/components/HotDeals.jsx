import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Eye,
  ShoppingBag,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

const HotDeals = () => {
  const { addToCart } = useCart();

  const [hoveredProduct, setHoveredProduct] = useState(null);

  // ===============================
  // Featured Product
  // ===============================

  const featuredProduct = products[0];

  // ===============================
  // Other Products
  // ===============================

  const otherProducts = products.slice(1, 12);

  // ===============================
  // Countdown
  // ===============================

  const saleEndDate = new Date("2026-08-31T23:59:59");

  const calculateTimeLeft = () => {
    const difference =
      saleEndDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) =>
    String(value).padStart(2, "0");

  // ===============================
  // Add To Cart
  // ===============================

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="mx-auto container px-4 py-20 sm:px-6 lg:px-8">

      {/* =================================
          Header
      ================================= */}

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-4xl font-bold text-gray-900">
          Hot Deals
        </h2>

        <Link
          to="/shop"
          className="group flex items-center gap-1 text-xl font-medium text-green-600 transition hover:text-green-700 cursor-pointer"
        >
          View All

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

      {/* =================================
          Main Grid
      ================================= */}

      <div className="grid grid-cols-2 border-l border-t border-gray-200 md:grid-cols-4">

        {/* =================================
            FEATURED PRODUCT
        ================================= */}

        {featuredProduct && (
          <div
            className="group relative col-span-2 row-span-2 border-b border-r border-green-500 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >

            {/* ===============================
                Badges
            =============================== */}

            <div className="absolute left-3 top-3 z-20 flex gap-1.5">

              {featuredProduct.discount && (
                <span className="rounded-sm bg-red-500 px-2 py-1 text-[13px] font-medium text-white">
                  Sale {featuredProduct.discount}%
                </span>
              )}

              <span className="rounded-sm bg-blue-500 px-2 py-1 text-[13px] font-medium text-white">
                Best Deal
              </span>

            </div>

            {/* ===============================
                Product Image
            =============================== */}

            <Link
              to={`/product/${featuredProduct.slug}`}
              className="flex h-[290px] items-center justify-center overflow-hidden"
            >
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* ===============================
                Action Buttons
            =============================== */}

            <div className="flex items-center gap-2">

              <button
                type="button"
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white"
                aria-label="Add to wishlist"
              >
                <Heart size={22} />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleAddToCart(featuredProduct)
                }
                className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-green-600 text-lg font-medium text-white transition-all duration-300 hover:bg-green-700"
              >
                Add to Cart

                <ShoppingBag size={20} />
              </button>

              <Link
                to={`/product/${featuredProduct.slug}`}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white"
                aria-label="View product"
              >
                <Eye size={24} />
              </Link>

            </div>

            {/* ===============================
                Product Information
            =============================== */}

            <div className="mt-4 text-center">

              <Link
                to={`/product/${featuredProduct.slug}`}
                className="text-lg font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                {featuredProduct.name}
              </Link>

              {/* Price */}

              <div className="mt-4 flex items-center justify-center gap-2">

                <span className="text-xl font-semibold text-gray-900">
                  ${featuredProduct.price}
                </span>

                {featuredProduct.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${featuredProduct.oldPrice}
                  </span>
                )}

              </div>

              {/* Rating */}

              <div className="mt-3 flex items-center justify-center gap-1">

                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="text-[15px] text-gray-400">
                  ({featuredProduct.rating || 5} Feedback)
                </span>

              </div>

              {/* ===============================
                  Countdown
              =============================== */}

              <div className="mt-4">

                <p className="text-[17px] text-gray-400">
                  Hurry up! Offer ends in:
                </p>

                <div className="mt-2 flex justify-center gap-3">

                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatTime(timeLeft.days)}
                    </p>

                    <p className="text-[17px] uppercase text-gray-400">
                      Days
                    </p>
                  </div>

                  <span className="text-lg text-gray-400">
                    :
                  </span>

                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatTime(timeLeft.hours)}
                    </p>

                    <p className="text-[17px] uppercase text-gray-400">
                      Hours
                    </p>
                  </div>

                  <span className="text-lg text-gray-400">
                    :
                  </span>

                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatTime(timeLeft.minutes)}
                    </p>

                    <p className="text-[17px] uppercase text-gray-400">
                      Mins
                    </p>
                  </div>

                  <span className="text-lg text-gray-400">
                    :
                  </span>

                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatTime(timeLeft.seconds)}
                    </p>

                    <p className="text-[17px] uppercase text-gray-400">
                      Secs
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* =================================
            OTHER PRODUCTS
        ================================= */}

        {otherProducts.map((product) => {
          const isHovered =
            hoveredProduct === product.id;

          return (
            <div
              key={product.id}
              onMouseEnter={() =>
                setHoveredProduct(product.id)
              }
              onMouseLeave={() =>
                setHoveredProduct(null)
              }
              className={`group relative border-b border-r border-gray-200 bg-white transition-all duration-300 ${
                isHovered
                  ? "z-10 border-green-500 shadow-md"
                  : ""
              }`}
            >

              {/* ===============================
                  Product Image
              =============================== */}

              <div className="relative flex h-36 items-center justify-center overflow-hidden p-3">

                {/* Sale */}

                {product.discount && (
                  <span className="absolute left-2 top-2 z-10 rounded-sm bg-red-500 px-4 py-3 text-[12px] font-medium text-white">
                    Sale {product.discount}%
                  </span>
                )}

                <Link
                  to={`/product/${product.slug}`}
                  className="flex h-full w-full items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Hover buttons */}

                <div
                  className={`absolute right-2 top-2 flex flex-col gap-1.5 transition-all duration-300 ${
                    isHovered
                      ? "translate-x-0 opacity-100"
                      : "translate-x-3 opacity-0"
                  }`}
                >

                  <button
                    type="button"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-600 shadow-sm transition hover:bg-green-600 hover:text-white"
                  >
                    <Heart size={17} />
                  </button>

                  <Link
                    to={`/product/${product.slug}`}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-600 shadow-sm transition hover:bg-green-600 hover:text-white"
                  >
                    <Eye size={17} />
                  </Link>

                </div>

              </div>

              {/* ===============================
                  Product Info
              =============================== */}

              <div className="px-2.5 pb-2.5">

                <Link
                  to={`/product/${product.slug}`}
                  className="block truncate text-[16px] text-gray-600 transition hover:text-green-600"
                >
                  {product.name}
                </Link>

                <div className="mt-0.5 flex items-center justify-between">

                  <div>

                    <span className="text-lg font-medium text-gray-900">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="ml-1 text-[17px] text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    className={`flex h-7 cursor-pointer w-7 items-center justify-center rounded-full transition-all duration-300 ${
                      isHovered
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ShoppingBag size={20} />
                  </button>

                </div>

                {/* Rating */}

                <div className="mt-1 flex items-center">

                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-[17px]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="ml-1 text-[17px] text-gray-400">
                    ({product.rating || 5})
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default HotDeals;