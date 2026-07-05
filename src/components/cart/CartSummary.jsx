import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartTotal } = useCart();

  const shipping = 0;
  const total = cartTotal + shipping;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">

      <h2 className="text-xl font-semibold">
        Cart Total
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-t pt-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between border-t pt-4 text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      </div>

      <Link
        to="/checkout"
        className="mt-8 block rounded-full bg-green-600 py-4 text-center font-semibold text-white transition hover:bg-green-700"
      >
        Proceed to Checkout
      </Link>

    </div>
  );
};

export default CartSummary;