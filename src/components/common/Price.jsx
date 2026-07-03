import React from "react";

const Price = ({
  price,
  oldPrice,
}) => {
  return (
    <div className="flex items-center gap-2">

      <span className="font-semibold text-lg">
        ${price}
      </span>

      {oldPrice && (
        <span className="line-through text-gray-400">
          ${oldPrice}
        </span>
      )}

    </div>
  );
};

export default Price;