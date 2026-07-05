import React from "react";
import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";

import Container from "../components/Common/Container";

const OrderSuccess = () => {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-20">

      <div className="max-w-xl rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

          <CircleCheckBig
            size={48}
            className="text-green-600"
          />

        </div>

        <h1 className="mt-8 text-4xl font-bold">
          Order Successful!
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for your purchase.
          Your order has been placed successfully.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/shop"
            className="rounded-full bg-green-600 px-8 py-3 text-white hover:bg-green-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="rounded-full border border-gray-300 px-8 py-3 hover:bg-gray-100"
          >
            Go Home
          </Link>

        </div>

      </div>

    </Container>
  );
};

export default OrderSuccess;