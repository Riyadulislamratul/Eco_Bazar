import React from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    price,
    oldPrice,
    discount,
    rating,
    reviews,
    stock,
    slug,
  } = product;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistActive = isInWishlist(product.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-green-500 hover:shadow-xl">
      {/* Sale Badge */}
      {discount && (
        <span className="absolute left-4 top-4 z-20 rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          Sale {discount}%
        </span>
      )}

      {/* Out of Stock Badge */}
      {stock === 0 && (
        <span className="absolute left-4 top-4 z-20 rounded bg-gray-800 px-3 py-1 text-xs font-semibold text-white">
          Out of Stock
        </span>
      )}

      {/* Hover Buttons */}
      <div className="absolute right-3 top-3 z-20 flex translate-x-5 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <button
          onClick={() => toggleWishlist(product)}
          className={`flex h-10 cursor-pointer w-10 items-center justify-center rounded-full border shadow transition-all
  ${
    wishlistActive
      ? "bg-green-600 text-white border-green-600"
      : "bg-white hover:bg-green-600 hover:text-white"
  }`}
        >
          <Heart size={18} fill={wishlistActive ? "currentColor" : "none"} />
        </button>

        <button className="flex h-10 cursor-pointer w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-green-600 hover:text-white">
          <Eye size={18} />
        </button>
      </div>

      {/* Product Image (CLICKABLE) */}
      <Link to={`/product/${slug}`}>
        <div className="flex h-64 items-center justify-center overflow-hidden p-6">
          <img
            src={image}
            alt={name}
            className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            {/* Product Name (CLICKABLE) */}
            <Link to={`/product/${slug}`}>
              <h3 className="text-base font-medium text-gray-700 transition-colors group-hover:text-green-600">
                {name}
              </h3>
            </Link>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                ${price}
              </span>

              {oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${oldPrice}
                </span>
              )}
            </div>

            <div className="mt-2">
              <Rating rating={rating} showCount reviewCount={reviews} />
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => addToCart(product)}
            disabled={stock === 0}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300
  ${
    stock === 0
      ? "cursor-not-allowed bg-gray-200 text-gray-400"
      : "bg-gray-100 hover:bg-green-600 hover:text-white"
  }`}
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
