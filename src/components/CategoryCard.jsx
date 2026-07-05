import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, products }) => {
  return (
    <Link to={`/shop?category=${encodeURIComponent(title)}`}>
      <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-green-500 hover:shadow-xl w-50 h-53.25">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Text */}
        <div className="mt-2.5 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
