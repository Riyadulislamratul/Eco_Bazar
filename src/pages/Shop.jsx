import React, { useMemo, useState } from "react";
import { X } from "lucide-react";

import productsData from "../data/products";

import PageHeader from "../components/Common/PageHeader";
import Breadcrumb from "../components/Common/Breadcrumb";
import Container from "../components/Common/Container";

import Sidebar from "../components/Shop/Sidebar";
import ShopToolbar from "../components/Shop/ShopToolbar";

import ProductGrid from "../components/Product/ProductGrid";

// Banner Image
import ShopBanner from "../assets/shop-banner.jpg";

const Shop = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [selectedPrice, setSelectedPrice] =
    useState(500);

  const [selectedRating, setSelectedRating] =
    useState(null);

  const [selectedTags, setSelectedTags] =
    useState([]);

  const [sortBy, setSortBy] =
    useState("Latest");

  const [showCount, setShowCount] =
    useState(12);

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Category Filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category
            .toLowerCase()
            .replace(/\s+/g, "-") ===
          selectedCategory
      );
    }

    // Price Filter
    result = result.filter(
      (product) => product.price <= selectedPrice
    );

    // Rating Filter
    if (selectedRating) {
      result = result.filter(
        (product) =>
          product.rating >= selectedRating
      );
    }

    // Tag Filter
    if (selectedTags.length > 0) {
      result = result.filter((product) =>
        product.tags?.some((tag) =>
          selectedTags.includes(
            tag.toLowerCase().replace(/\s+/g, "-")
          )
        )
      );
    }

    // Sorting
    switch (sortBy) {
      case "Price Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Highest Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result.slice(0, showCount);
  }, [
    selectedCategory,
    selectedPrice,
    selectedRating,
    selectedTags,
    sortBy,
    showCount,
  ]);

  return (
    <>
      {/* Header */}

      <PageHeader
        title="Shop"
        backgroundImage={ShopBanner}
      >
        <Breadcrumb
          items={["Home", "Shop"]}
        />
      </PageHeader>

      <Container className="py-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Desktop Sidebar */}

          <div className="hidden lg:col-span-3 lg:block">

            <div className="sticky top-28">

              <Sidebar
                onCategoryChange={
                  setSelectedCategory
                }
                onPriceChange={
                  setSelectedPrice
                }
                onRatingChange={
                  setSelectedRating
                }
                onTagsChange={
                  setSelectedTags
                }
              />

            </div>

          </div>

          {/* Products */}

          <div className="lg:col-span-9">

            <ShopToolbar
              totalProducts={
                filteredProducts.length
              }
              sortBy={sortBy}
              show={showCount}
              onSortChange={setSortBy}
              onShowChange={setShowCount}
              onFilterClick={() =>
                setShowSidebar(true)
              }
            />

            <ProductGrid
              products={filteredProducts}
            />

          </div>

        </div>

      </Container>

      {/* Mobile Sidebar */}

      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">

          <div className="h-full w-80 overflow-y-auto bg-white p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                onClick={() =>
                  setShowSidebar(false)
                }
              >
                <X size={24} />
              </button>

            </div>

            <Sidebar
              onCategoryChange={
                setSelectedCategory
              }
              onPriceChange={
                setSelectedPrice
              }
              onRatingChange={
                setSelectedRating
              }
              onTagsChange={
                setSelectedTags
              }
            />

          </div>

        </div>
      )}
    </>
  );
};

export default Shop;