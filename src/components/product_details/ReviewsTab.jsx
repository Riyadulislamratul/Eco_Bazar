import React from "react";
import Rating from "../product/Rating";

const ReviewsTab = ({ reviews = [] }) => {
  return (
    <div className="space-y-6">

      {reviews.length === 0 && (
        <p className="text-gray-500">
          No reviews yet.
        </p>
      )}

      {reviews.map((review) => (
        <div
          key={review.id}
          className="rounded-xl border p-6"
        >
          <div className="flex items-center justify-between">

            <div>

              <h4 className="font-semibold">
                {review.name}
              </h4>

              <p className="text-sm text-gray-400">
                {review.date}
              </p>

            </div>

            <Rating rating={review.rating} />

          </div>

          <p className="mt-4 text-gray-600 leading-7">
            {review.comment}
          </p>

        </div>
      ))}
    </div>
  );
};

export default ReviewsTab;