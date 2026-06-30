import React from "react";
import {
  Truck,
  Headphones,
  ShoppingBag,
  PackageCheck,
} from "lucide-react";

const features = [
  {
    icon: <Truck size={38} />,
    title: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    icon: <Headphones size={38} />,
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    icon: <ShoppingBag size={38} />,
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: <PackageCheck size={38} />,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

const FeatureBar = () => {
  return (
    <section className="container mx-auto px-4 lg:px-6 mt-6 relative z-20 ">
      <div className="bg-white rounded-xl shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group flex items-center gap-4 py-10 px-8 transition-all duration-300 hover:bg-green-600 hover:text-white cursor-pointer
             `}
            >
              {/* Icon */}
              <div className="text-green-600 transition-colors duration-300 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-[16px] text-[#1A1A1A] font-poppins group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#999999] mt-2 group-hover:text-green-100 font-poppins">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;