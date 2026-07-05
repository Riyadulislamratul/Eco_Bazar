import React from "react";

import WishlistItem from "./WishlistItem";

const WishlistTable = ({ products }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

      {/* Table Header */}

      <div className="hidden grid-cols-4 border-b bg-gray-50 px-6 py-4 text-sm font-semibold uppercase text-gray-600 md:grid">

        <div>Product</div>

        <div>Price</div>

        <div>Stock Status</div>

        <div className="text-center">Action</div>

      </div>

      {/* Table Body */}

      <div>
        {products.map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default WishlistTable;