import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  icon = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",

    secondary:
      "bg-white border border-green-600 text-green-600 hover:bg-green-50",

    outline:
      "border border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-600",

    dark:
      "bg-gray-900 text-white hover:bg-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        font-semibold
        transition-all
        duration-300

        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
    >
      {children}

      {icon && <ArrowRight size={18} />}
    </button>
  );
};

export default Button;