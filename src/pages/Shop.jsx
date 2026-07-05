import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import productsData from "../data/products";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Breadcrumb from "../components/common/Breadcrumb";

import Sidebar from "../components/shop/Sidebar";
import ShopToolbar from "../components/shop/ShopToolbar";
import Pagination from "../components/shop/Pagination";

import ProductGrid from "../components/product/ProductGrid";

import ShopBanner from "../assets/banner/shop-banner.png";

const Shop = () => {
  const [searchParams] = useSearchParams();

  // ===========================
  // Sidebar
  // ===========================

  const [showSidebar, setShowSidebar] = useState(false);

  // ===========================
  // Filters
  // ===========================

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedPrice, setSelectedPrice] = useState(500);

  const [selectedRating, setSelectedRating] = useState(null);

  const [selectedTags, setSelectedTags] = useState([]);

  // ===========================
  // Toolbar
  // ===========================

  const [sortBy, setSortBy] = useState("Latest");

  const [showCount, setShowCount] = useState(12);

  // ===========================
  // Pagination
  // ===========================

  const [currentPage, setCurrentPage] = useState(1);

  // ===========================
  // Read Category From URL
  // ===========================

  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      setSelectedCategory(
        category
          .toLowerCase()
          .replace(/\s+/g, "-")
      );
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);
  

  // ===========================
  // Filter Products
  // ===========================

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Category

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category
            .toLowerCase()
            .replace(/\s+/g, "-") === selectedCategory
      );
    }

    // Price

    result = result.filter(
      (product) => product.price <= selectedPrice
    );

    // Rating

    if (selectedRating) {
      result = result.filter(
        (product) => product.rating >= selectedRating
      );
    }

    // Tags

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

      case "Newest":
        result.sort((a, b) => b.id - a.id);
        break;

      case "Oldest":
        result.sort((a, b) => a.id - b.id);
        break;

      default:
        break;
    }

    return result;
  }, [
    selectedCategory,
    selectedPrice,
    selectedRating,
    selectedTags,
    sortBy,
  ]);

  // ===========================
  // Pagination
  // ===========================

  const totalPages = Math.ceil(
    filteredProducts.length / showCount
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  // ===========================
  // Reset Page
  // ===========================

  useEffect(() => {
    setCurrentPage(1);
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
      {/* Banner */}

      <PageHeader
        title="Shop"
        backgroundImage={ShopBanner}
      >
        <Breadcrumb items={["Home", "Shop"]} />
      </PageHeader>

      {/* Shop */}

      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Sidebar */}

          <div className="hidden lg:col-span-3 lg:block">

            <div className="sticky top-28">

              <Sidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onPriceChange={setSelectedPrice}
                onRatingChange={setSelectedRating}
                onTagsChange={setSelectedTags}
              />

            </div>

          </div>

          {/* Products */}

          <div className="lg:col-span-9">

            <ShopToolbar
              totalProducts={filteredProducts.length}
              sortBy={sortBy}
              show={showCount}
              onSortChange={setSortBy}
              onShowChange={setShowCount}
              onFilterClick={() =>
                setShowSidebar(true)
              }
            />

            <ProductGrid
              products={currentProducts}
              columns={3}
            />

            {filteredProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}

          </div>

        </div>
      </Container>

      {/* Mobile Sidebar */}

      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">

          <div className="ml-auto h-full w-80 overflow-y-auto bg-white p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Filters
              </h2>

              <button
                onClick={() =>
                  setShowSidebar(false)
                }
              >
                <X />
              </button>

            </div>

            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={(value) => {
                setSelectedCategory(value);
                setShowSidebar(false);
              }}
              onPriceChange={setSelectedPrice}
              onRatingChange={setSelectedRating}
              onTagsChange={setSelectedTags}
            />

          </div>

        </div>
        
      )}
    </>
  );
};

export default Shop;