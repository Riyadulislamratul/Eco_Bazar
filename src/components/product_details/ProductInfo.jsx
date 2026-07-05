import React from "react";

import Rating from "../product/Rating";
import Price from "../common/Price";
import QuantitySelector from "./QuantitySelector";


// import Rating from "../product/Rating";
// import Price from "../common/Price";
// import QuantitySelector from "./QuantitySelector";

const ProductInfo = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
  onWishlist,
}) => {
  return (
    <div className="space-y-6">

      {/* Product Name */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Rating rating={product.rating} />
            <span className="text-sm text-gray-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          <p className="text-sm">
            <span className="text-gray-500">SKU:</span>{" "}
            <span className="font-medium">{product.sku}</span>
          </p>

          <p className="text-sm">
            <span className="text-gray-500">Brand:</span>{" "}
            <span className="font-medium">{product.brand}</span>
          </p>
        </div>
      </div>

      {/* Price */}
      <Price
        price={product.price}
        oldPrice={product.oldPrice}
      />

      {/* Description */}
      <p className="leading-7 text-gray-600">
        {product.description}
      </p>

      {/* Category */}
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="font-semibold">Category:</span>
        <span>{product.category}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold">Tags:</span>

        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <hr />

      {/* Cart Section */}
      <div className="flex flex-col gap-4 lg:flex-row">

        <QuantitySelector
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

        <button
          onClick={onAddToCart}
          className="flex-1 rounded-full bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Add To Cart
        </button>

        <button
          onClick={onWishlist}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          {/* <Heart size={22} /> */}
        </button>

      </div>

      <hr />

      {/* Social Share */}
      <div className="flex flex-wrap items-center justify-between gap-4">

        <span className="font-semibold">
          Share Item:
        </span>

        <div className="flex gap-3">

          <button className="rounded-full border p-3 hover:bg-green-600 hover:text-white">
            {/* <Facebook size={18} /> */}
          </button>

          <button className="rounded-full border p-3 hover:bg-green-600 hover:text-white">
            {/* <Twitter size={18} /> */}
          </button>

          <button className="rounded-full border p-3 hover:bg-green-600 hover:text-white">
            {/* <Instagram size={18} /> */}
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductInfo;