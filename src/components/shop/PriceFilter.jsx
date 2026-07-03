import React, { useState, useEffect } from "react";

const PriceFilter = ({
  min = 0,
  max = 100,
  defaultValue = 50,
  onPriceChange,
}) => {
  const [price, setPrice] = useState(defaultValue);

  useEffect(() => {
    if (onPriceChange) {
      onPriceChange(price);
    }
  }, [price, onPriceChange]);

  return (
    <div className="space-y-5">
      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-green-600"
      />

      {/* Price Info */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-600">
          Min: <span className="text-gray-900">${min}</span>
        </span>

        <span className="font-medium text-gray-600">
          Max: <span className="text-gray-900">${price}</span>
        </span>
      </div>

      {/* Filter Button */}
      <button
        onClick={() => onPriceChange?.(price)}
        className="w-full rounded-full bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default PriceFilter;