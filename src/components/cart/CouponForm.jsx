import React, { useState } from "react";

const CouponForm = () => {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Coupon "${coupon}" feature will be added later.`);
  };

  return (
    <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Coupon Code
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:flex-row"
      >

        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) =>
            setCoupon(e.target.value)
          }
          className="flex-1 rounded-full border px-5 py-3 outline-none focus:border-green-600"
        />

        <button
          type="submit"
          className="rounded-full bg-gray-900 px-8 py-3 text-white hover:bg-black"
        >
          Apply Coupon
        </button>

      </form>

    </div>
  );
};

export default CouponForm;