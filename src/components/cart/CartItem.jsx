import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="border-b border-gray-200 p-6">

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:items-center">

        {/* Product */}
        <div className="col-span-2 flex items-center gap-4">

          <Link to={`/product/${item.slug}`}>
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 object-contain"
            />
          </Link>

          <div>
            <Link
              to={`/product/${item.slug}`}
              className="font-medium hover:text-green-600"
            >
              {item.name}
            </Link>
          </div>

        </div>

        {/* Price */}
        <div>
          ${item.price.toFixed(2)}
        </div>

        {/* Quantity */}
        <div>

          <div className="flex w-fit items-center rounded-full border">

            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-4 py-2 hover:bg-red-300 hover:rounded-full"
            >
              −
            </button>

            <span className="w-10 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-4 py-2 hover:bg-green-200 hover:rounded-full"
            >
              +
            </button>

          </div>

        </div>

        {/* Subtotal */}
        <div className="flex items-center justify-between">

          <span className="font-semibold">
            ${subtotal}
          </span>

          <button
            onClick={() => removeFromCart(item.id)}
            className="rounded-full p-2 hover:bg-red-100 hover:text-red-600"
          >
            <X size={18} />
          </button>

        </div>

      </div>

      {/* Mobile */}
      <div className="space-y-4 lg:hidden">

        <div className="flex gap-4">

          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 object-contain"
          />

          <div className="flex-1">

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="mt-1 text-green-600">
              ${item.price.toFixed(2)}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Subtotal: ${subtotal}
            </p>

          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="self-start rounded-full p-2 hover:bg-red-100 hover:text-red-600"
          >
            <X size={18} />
          </button>

        </div>

        <div className="flex w-fit items-center rounded-full border">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-4 py-2"
          >
            −
          </button>

          <span className="w-10 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-4 py-2"
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
};

export default CartItem;