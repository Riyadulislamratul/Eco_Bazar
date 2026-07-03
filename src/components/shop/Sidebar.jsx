import React from "react";

import FilterSection from "./FilterSection";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import TagFilter from "./TagFilter";
import SaleProducts from "./SaleProducts";

const Sidebar = ({
  onCategoryChange,
  onPriceChange,
  onRatingChange,
  onTagsChange,
}) => {
  return (
    <aside className="space-y-8">

      {/* Categories */}

      <FilterSection title="All Categories">
        <CategoryFilter
          onCategoryChange={onCategoryChange}
        />
      </FilterSection>

      {/* Price */}

      <FilterSection title="Price">
        <PriceFilter
          min={0}
          max={500}
          defaultValue={250}
          onPriceChange={onPriceChange}
        />
      </FilterSection>

      {/* Rating */}

      <FilterSection title="Rating">
        <RatingFilter
          onRatingChange={onRatingChange}
        />
      </FilterSection>

      {/* Tags */}

      <FilterSection title="Popular Tag">
        <TagFilter
          onTagsChange={onTagsChange}
        />
      </FilterSection>

      {/* Sale Products */}

      <SaleProducts />

    </aside>
  );
};

export default Sidebar;