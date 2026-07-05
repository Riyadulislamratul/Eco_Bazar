import React from "react";

const CategoryFilter = ({
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
}) => {
  const handleChange = (slug) => {
    if (onCategoryChange) {
      onCategoryChange(slug);
    }
  };

  return (
    <div className="space-y-4">
      {/* All Categories */}
      <label className="group flex cursor-pointer items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "all"}
            onChange={() => handleChange("all")}
            className="h-4 w-4 accent-green-600"
          />

          <span
            className={`transition-colors ${
              selectedCategory === "all"
                ? "font-semibold text-green-600"
                : "text-gray-700 group-hover:text-green-600"
            }`}
          >
            All
          </span>
        </div>
      </label>

      {/* Categories */}
      {categories.length > 0 &&
        categories.map((category) => (
          <label
            key={category.slug}
            className="group flex cursor-pointer items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.slug}
                onChange={() => handleChange(category.slug)}
                className="h-4 w-4 accent-green-600"
              />

              <span
                className={`transition-colors ${
                  selectedCategory === category.slug
                    ? "font-semibold text-green-600"
                    : "text-gray-700 group-hover:text-green-600"
                }`}
              >
                {category.name}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              ({category.productCount})
            </span>
          </label>
        ))}
    </div>
  );
};

export default CategoryFilter;