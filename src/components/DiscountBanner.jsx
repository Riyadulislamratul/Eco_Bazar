import { ArrowRight } from "lucide-react";
import DiscountImage from "../assets/discount-banner.png"; 

const DiscountBanner = () => {
  return (
    <section className="py-8">
      <div
        className="relative overflow-hidden rounded-xl h-[260px] md:h-[320px] lg:h-[360px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${DiscountImage})`, // Use the imported image
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-end px-6 md:px-12 lg:px-20">
          <div className="max-w-sm text-white">
            <p className="text-xs uppercase tracking-[3px] text-gray-200">
              Summer Sale
            </p>

            <h2 className="mt-2 text-4xl md:text-5xl font-light">
              <span className="font-bold text-orange-500">37%</span>{" "}
              <span className="font-medium">OFF</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              Free on all your order, Free Shipping and 30 days
              money-back guarantee.
            </p>

            <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30">
              Shop Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;