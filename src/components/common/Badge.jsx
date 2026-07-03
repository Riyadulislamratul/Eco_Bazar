import React from "react";

const variants = {
  sale: "bg-red-500 text-white",
  new: "bg-blue-500 text-white",
  hot: "bg-orange-500 text-white",
  organic: "bg-green-500 text-white",
  stock: "bg-gray-800 text-white",
};

const Badge = ({
  children,
  variant = "sale",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        rounded
        px-3
        py-1
        text-xs
        font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;