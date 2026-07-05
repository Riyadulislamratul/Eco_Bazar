import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const EmptyWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-20 px-6 text-center">

      {/* Icon */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <Heart
          size={42}
          className="text-green-600"
          fill="currentColor"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800">
        Your Wishlist is Empty
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-500">
        Looks like you haven't added any products to your wishlist yet.
        Start exploring our products and save your favorites.
      </p>

      {/* Continue Shopping */}
      <Link
        to="/shop"
        className="mt-8 rounded-full bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
      >
        Continue Shopping
      </Link>

    </div>
  );
};

export default EmptyWishlist;