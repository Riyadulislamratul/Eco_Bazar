import React, { useState } from "react";
import { Star } from "lucide-react";

const ratingOptions = [
  { id: 5, label: "5.0" },
  { id: 4, label: "4.0 & Up" },
  { id: 3, label: "3.0 & Up" },
  { id: 2, label: "2.0 & Up" },
  { id: 1, label: "1.0 & Up" },
];

const RatingFilter = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSelect = (rating) => {
    const value = selectedRating === rating ? null : rating;

    setSelectedRating(value);

    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="space-y-4">
      {ratingOptions.map((item) => (
        <label
          key={item.id}
          className="flex cursor-pointer items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedRating === item.id}
              onChange={() => handleSelect(item.id)}
              className="h-4 w-4 rounded accent-green-600"
            />

            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= item.id
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>

          <span className="text-sm text-gray-500">
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;