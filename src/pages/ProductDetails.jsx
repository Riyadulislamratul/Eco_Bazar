import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../data/products";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Breadcrumb from "../components/common/Breadcrumb";

// import ProductGallery from "../components/productdetails/ProductGallery";
// import ProductInfo from "../components/productdetails/ProductInfo";
// import ProductTabs from "../components/productdetails/ProductTabs";
// import RelatedProducts from "../components/productdetails/RelatedProducts";
import ProductGallery from "../components/product_details/ProductGallery";
import ProductInfo from "../components/product_details/ProductInfo";
import ProductTabs from "../components/product_details/ProductTabs";
import RelatedProducts from "../components/product_details/RelatedProducts";

import { useCart } from "../context/CartContext";

import Banner from "../assets/banner/product-banner.png";

const ProductDetails = () => {
  const { slug } = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    return products.find((item) => item.slug === slug);
  }, [slug]);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>

        <p className="mt-3 text-gray-500">
          The requested product doesn't exist.
        </p>
      </Container>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

 const handleAddToCart = () => {
  addToCart(product, quantity);
};

  const handleWishlist = () => {
    console.log(product);
  };

  return (
    <>
      {/* Page Header */}

      <PageHeader title={product.name} backgroundImage={Banner}>
        <Breadcrumb items={["Home", "Shop", product.category, product.name]} />
      </PageHeader>

      {/* Product */}

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Gallery */}

          <ProductGallery
            images={product.gallery}
            sale={product.sale}
            discount={product.discount}
          />

          {/* Info */}

          <ProductInfo
            product={product}
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        </div>

        {/* Tabs */}

        <ProductTabs product={product} />

        {/* Related */}

        <RelatedProducts currentProduct={product} />
      </Container>
    </>
  );
};

export default ProductDetails;
