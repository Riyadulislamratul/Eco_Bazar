import React, { useState } from "react";

const ProductGallery = ({
  images = [],
  sale = false,
  discount = 0,
}) => {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || ""
  );

  return (
    <div className="space-y-5">

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* Sale Badge */}
        {sale && (
          <span className="absolute left-5 top-5 z-10 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white">
            Sale {discount}% OFF
          </span>
        )}

        <div className="aspect-square overflow-hidden">

          <img
            src={selectedImage}
            alt=""
            className="h-full w-full object-contain transition duration-500 hover:scale-110"
          />

        </div>
      </div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-4">

        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-lg border-2 transition

            ${
              selectedImage === image
                ? "border-green-600"
                : "border-gray-200 hover:border-green-400"
            }
            `}
          >
            <div className="aspect-square bg-white">

              <img
                src={image}
                alt=""
                className="h-full w-full object-contain p-2"
              />

            </div>
          </button>
        ))}

      </div>

    </div>
  );
};

export default ProductGallery;