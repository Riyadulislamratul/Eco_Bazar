import React from "react";
import { ArrowRight, Check } from "lucide-react";

// Replace with your own image
import DeliveryMan from "../assets/about/about-3.png";

const features = [
  "Sed in metus pellentesque.",
  "Fusce et commodo, aliquam nulla efficitur, tempus lorem.",
  "Maecenas ut urna rhoncus erat.",
];

const DeliverySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="p-10 lg:p-16">

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                We Delivered,
                <br />
                You Enjoy Your Order.
              </h2>

              <p className="mt-6 text-gray-500 leading-8">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </p>

              {/* Bullet List */}

              <div className="mt-8 space-y-4">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check
                        size={14}
                        className="text-green-600"
                      />
                    </div>

                    <p className="text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              {/* Button */}

              <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:gap-5">
                Shop Now
                <ArrowRight size={18} />
              </button>

            </div>

            {/* Right Image */}

            <div className="w-223.75 h-151.5">

              <img
                src={DeliveryMan}
                alt="Delivery Man"
                className="w-full h-full"
              />

            </div>

          </div>
      </div>
    </section>
  );
};

export default DeliverySection;