import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white py-20 text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

        <ShoppingCart
          size={42}
          className="text-green-600"
        />

      </div>

      <h2 className="mt-6 text-3xl font-semibold">
        Your Cart is Empty
      </h2>

      <p className="mt-3 text-gray-500">
        Looks like you haven't added any products yet.
      </p>

      <Link
        to="/shop"
        className="mt-8 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
      >
        Continue Shopping
      </Link>

    </div>
  );
};

export default EmptyCart;