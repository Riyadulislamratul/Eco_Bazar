import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Heart,
  ShoppingBag,
} from "lucide-react";

import products from "../data/products";

const PopularProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Show first 10 products
  const popularProducts = products.slice(0, 10);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* ================= Header ================= */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Popular Products
        </h2>

        <Link
          to="/shop"
          className="group flex items-center gap-1 text-sm font-medium text-green-600 transition-colors hover:text-green-700"
        >
          View All

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* ================= Products Grid ================= */}
      <div className="grid grid-cols-2 border-l border-t border-gray-200 sm:grid-cols-3 lg:grid-cols-5">
        {popularProducts.map((product) => {
          const isHovered = hoveredProduct === product.id;

          return (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className={`group relative border-b border-r border-gray-200 bg-white transition-all duration-300 ${
                isHovered
                  ? "z-10 border-green-500 shadow-md"
                  : ""
              }`}
            >
              {/* ================= Image ================= */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden p-4 sm:h-44">
                {/* Sale Badge */}
                {product.discount && (
                  <span className="absolute left-2 top-2 z-10 rounded-sm bg-red-500 px-2 py-1 text-[9px] font-medium text-white">
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

                {/* Hover Actions */}
                <div
                  className={`absolute right-2 top-2 flex flex-col gap-2 transition-all duration-300 ${
                    isHovered
                      ? "translate-x-0 opacity-100"
                      : "translate-x-3 opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-green-600 hover:text-white"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={15} />
                  </button>

                  <Link
                    to={`/product/${product.slug}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-green-600 hover:text-white"
                    aria-label="View product"
                  >
                    <Eye size={15} />
                  </Link>
                </div>
              </div>

              {/* ================= Product Info ================= */}
              <div className="px-2.5 pb-2.5 pt-1">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to={`/product/${product.slug}`}
                      className="block truncate text-[11px] text-gray-600 transition-colors hover:text-green-600"
                    >
                      {product.name}
                    </Link>

                    {/* Price */}
                    <div className="mt-0.5 flex items-center gap-1">
                      <span className="text-[12px] font-medium text-gray-900">
                        ${product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-[9px] text-gray-400 line-through">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="mt-1 flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-[10px] leading-none text-orange-400"
                        >
                          ★
                        </span>
                      ))}

                      <span className="ml-1 text-[8px] text-gray-400">
                        ({product.rating || 5})
                      </span>
                    </div>
                  </div>

                  {/* Cart Button */}
                  <button
                    type="button"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isHovered
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;