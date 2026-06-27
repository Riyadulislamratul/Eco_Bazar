import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="w-full h-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
          
          {/* Image */}
          <div className="pt-8 sm:pt-12 md:pt-15 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[550px] lg:max-w-[700px]">
            <img
              src="/notfound.png"
              alt="Not Found"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h3 className="font-roboto text-[28px] sm:text-[34px] md:text-[40px] text-center mt-6 sm:mt-8">
            Oops! page not found
          </h3>

          {/* Description */}
          <p className="text-[#808080] font-roboto text-[16px] sm:text-[18px] md:text-[20px] text-center mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] leading-relaxed px-2">
            The recipe you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          {/* Button */}
          <Link to="/" className="mt-6 sm:mt-8">
            <GreenButton className="cursor-pointer">
              Go Back Home
            </GreenButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

const GreenButton = ({ children, className = "" }) => (
  <button
    className={`
      bg-[#195A00] text-white
      px-5 sm:px-6 md:px-8
      py-3 sm:py-3.5 md:py-4
      text-sm sm:text-base md:text-lg
      rounded-[43px]
      hover:bg-[#154500]
      hover:scale-105
      transition duration-300
      ${className}
    `}
  >
    {children}
  </button>
);