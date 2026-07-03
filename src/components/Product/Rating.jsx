import React from "react";
import { Star } from "lucide-react";

const Rating = ({
  rating = 0,
  maxRating = 5,
  size = 14,
  showCount = false,
  reviewCount = 0,
}) => {
  return (
    <div className="flex items-center gap-1">
      {/* Stars */}
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            size={size}
            className={
              index < rating
                ? "fill-orange-400 text-orange-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Review Count */}
      {showCount && (
        <span className="text-sm text-gray-500">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;