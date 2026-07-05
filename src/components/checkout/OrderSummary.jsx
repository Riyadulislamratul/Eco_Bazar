import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
const { cart, cartTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const shipping = 0;
  const total = cartTotal + shipping;
  const navigate = useNavigate();



  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    clearCart();

    navigate("/order-success");
};

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">

      {/* Heading */}

      <h2 className="mb-6 text-2xl font-semibold">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-5">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between gap-3"
          >

            <div className="flex items-center gap-3">

              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 object-contain"
              />

              <div>

                <h3 className="text-sm font-medium">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  x{item.quantity}
                </p>

              </div>

            </div>

            <span className="font-semibold">
              $
              {(item.price * item.quantity).toFixed(2)}
            </span>

          </div>

        ))}

      </div>

      {/* Totals */}

      <div className="mt-8 space-y-4 border-t pt-6">

        <div className="flex justify-between text-gray-700">

          <span>Subtotal</span>

          <span>${cartTotal.toFixed(2)}</span>

        </div>

        <div className="flex justify-between text-gray-700">

          <span>Shipping</span>

          <span>Free</span>

        </div>

        <div className="flex justify-between border-t pt-4 text-lg font-semibold">

          <span>Total</span>

          <span>${total.toFixed(2)}</span>

        </div>

      </div>

      {/* Payment */}

      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold">
          Payment Method
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="accent-green-600"
            />

            Cash on Delivery

          </label>

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="accent-green-600"
            />

            PayPal

          </label>

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="amazon"
              checked={paymentMethod === "amazon"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="accent-green-600"
            />

            Amazon Pay

          </label>

        </div>

      </div>

      {/* Button */}

      <button
        onClick={handlePlaceOrder}
        className="mt-8 w-full rounded-full bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        Place Order
      </button>

    </div>
  );
};

export default OrderSummary;