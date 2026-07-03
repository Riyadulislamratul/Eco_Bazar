import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products = [],
  columns = 4,
  className = "",
}) => {
  const gridColumns = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  };

  return (
    <div
      className={`grid gap-6 ${
        gridColumns[columns] || gridColumns[4]
      } ${className}`}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <div className="col-span-full py-16 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No Products Found
          </h3>

          <p className="mt-2 text-gray-500">
            Try another category or search keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;