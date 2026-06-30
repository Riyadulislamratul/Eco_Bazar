import React from "react";
import { ArrowRight } from "lucide-react";

import HeroImage from "../assets/hero.jpg";
import OfferImage1 from "../assets/offer1.jpg";
import OfferImage2 from "../assets/offer2.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ================= LEFT HERO ================= */}
        <div className="lg:col-span-8">
          <div
            className="relative min-h-[560px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HeroImage})`,
            }}
          >

            {/* Content */}
            <div className="relative z-10 flex h-full items-center p-10">
              <div className="max-w-md text-white">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Fresh & Healthy
                  <br />
                  Organic Food
                </h1>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-1 h-16 bg-green-400 rounded-full"></div>

                  <div>
                    <p className="text-xl">
                      Sale up to{" "}
                      <span className="bg-orange-500 px-3 py-1 rounded font-bold">
                        30% OFF
                      </span>
                    </p>

                    <p className="text-green-100 mt-2">
                      Free shipping on all your order.
                    </p>
                  </div>
                </div>

                <button className="mt-10 bg-white text-green-700 cursor-pointer font-semibold rounded-full px-8 py-4 flex items-center gap-3 hover:bg-green-600 hover:text-white duration-300">
                  Shop Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* ================= TOP OFFER ================= */}
          <div
            className="relative h-69 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${OfferImage1})`,
            }}
          >
            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/10"></div>

            <div className="relative z-10 p-8 max-w-[220px]">
              <p className="uppercase tracking-[3px] text-xs font-semibold text-gray-600">
                Summer Sale
              </p>

              <h2 className="text-4xl font-bold mt-2 text-gray-900">
                75% OFF
              </h2>

              <p className="text-gray-600 mt-2">
                Only Fruit & Vegetable
              </p>

              <button className="mt-8 flex items-center gap-2 text-green-600 font-semibold hover:gap-4 duration-300 cursor-pointer">
                Shop Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* ================= BOTTOM OFFER ================= */}
          <div
            className="relative h-64.75 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${OfferImage2})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-green-950/60"></div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-8">
              <p className="uppercase tracking-[3px] text-xs">
                Best Deal
              </p>

              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
                Special Products
                <br />
                Deal of the Month
              </h2>

              <button className="mt-8 flex items-center gap-2 font-semibold text-green-400 hover:gap-4 duration-300 cursor-pointer">
                Shop Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;