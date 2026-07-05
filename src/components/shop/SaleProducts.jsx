import React from "react";
import { Link } from "react-router";
import products from "../../data/products";
import Rating from "../product/Rating";

const SaleProducts = ({
  title = "Sale Products",
  limit = 3,
}) => {
  // Only products on sale
  const saleProducts = products
    .filter((product) => product.sale)
    .slice(0, limit);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <div className="space-y-4">
        {saleProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="group flex gap-4 rounded-lg border border-gray-200 p-3 transition-all duration-300 hover:border-green-500 hover:shadow-md"
          >
            {/* Image */}
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-center">
              <h4 className="line-clamp-2 text-sm font-medium text-gray-800 transition-colors group-hover:text-green-600">
                {product.name}
              </h4>

              <div className="mt-1 flex items-center gap-2">
                <span className="font-semibold text-green-600">
                  ${product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <div className="mt-2">
                <Rating
                  rating={product.rating}
                  size={14}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;