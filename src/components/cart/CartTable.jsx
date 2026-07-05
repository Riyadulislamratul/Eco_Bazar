import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartTable = () => {
  const { cart } = useCart();

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

      {/* Table Header */}
      <div className="hidden grid-cols-5 border-b bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 lg:grid">

        <div className="col-span-2">
          Product
        </div>

        <div>Price</div>

        <div>Quantity</div>

        <div>Subtotal</div>

      </div>

      {/* Table Body */}
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col gap-4 border-t border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">

        <Link
          to="/shop"
          className="rounded-full bg-gray-100 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-200"
        >
          Return to Shop
        </Link>

        <button
          className="rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-200"
        >
          Update Cart
        </button>

      </div>

    </div>
  );
};

export default CartTable;