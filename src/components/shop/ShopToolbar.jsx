import React from "react";
import { SlidersHorizontal } from "lucide-react";

const ShopToolbar = ({
  totalProducts = 0,
  sortBy = "Latest",
  show = 12,
  onSortChange,
  onShowChange,
  onFilterClick,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Filter */}
        <button
          onClick={onFilterClick}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white lg:hidden"
        >
          <SlidersHorizontal size={18} />
          Filter
        </button>

        <p className="text-gray-500">
          <span className="font-semibold text-gray-900">
            {totalProducts}
          </span>{" "}
          Results Found
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap gap-4">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Sort by:</span>

          <select
            value={sortBy}
            onChange={(e) => onSortChange?.(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
          >
            <option>Latest</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Highest Rated</option>
          </select>
        </div>

        {/* Show */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Show:</span>

          <select
            value={show}
            onChange={(e) => onShowChange?.(Number(e.target.value))}
            className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;