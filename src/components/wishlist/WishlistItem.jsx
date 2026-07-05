import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";

const WishlistItem = ({ product }) => {
  const { removeFromWishlist } = useWishlist();

  const {
    id,
    slug,
    image,
    name,
    price,
    oldPrice,
    stock,
  } = product;

  return (
    <div className="grid grid-cols-1 gap-5 border-b border-gray-200 p-6 md:grid-cols-4 md:items-center">

      {/* Product */}

      <div className="flex items-center gap-4">

        <Link to={`/product/${slug}`}>
          <img
            src={image}
            alt={name}
            className="h-24 w-24 object-contain"
          />
        </Link>

        <div>

          <Link
            to={`/product/${slug}`}
            className="font-medium text-gray-800 hover:text-green-600 transition"
          >
            {name}
          </Link>

        </div>

      </div>

      {/* Price */}

      <div className="flex items-center gap-2">

        <span className="text-lg font-semibold text-gray-900">
          ${price}
        </span>

        {oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            ${oldPrice}
          </span>
        )}

      </div>

      {/* Stock */}

      <div>

        {stock > 0 ? (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            In Stock
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
            Out of Stock
          </span>
        )}

      </div>

      {/* Actions */}

      <div className="flex items-center justify-between md:justify-end gap-4">

        <button
          disabled={stock === 0}
          className={`rounded-full px-6 py-3 font-medium transition
            ${
              stock > 0
                ? "bg-green-600 text-white hover:bg-green-700"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
        >
          Add to Cart
        </button>

        <button
          onClick={() => removeFromWishlist(id)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition"
        >
          <X size={18} />
        </button>

      </div>

    </div>
  );
};

export default WishlistItem;