import React, { useMemo } from "react";

import products from "../../data/products";

import ProductGrid from "../product/ProductGrid";
import SectionHeading from "../common/SectionHeading";

const RelatedProducts = ({
  currentProduct,
  limit = 4,
}) => {
  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.id !== currentProduct.id &&
          product.category === currentProduct.category
      )
      .slice(0, limit);
  }, [currentProduct, limit]);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <SectionHeading
        title="Related Products"
        subtitle="You may also like"
      />

      <ProductGrid
        products={relatedProducts}
        columns={4}
      />
    </section>
  );
};

export default RelatedProducts;