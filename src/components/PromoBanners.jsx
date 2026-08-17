import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PromoBanner1 from "../assets/promo/promo-1.png";
import PromoBanner2 from "../assets/promo/promo-2.png";
import PromoBanner3 from "../assets/promo/promo-3.png";

const PromoBanners = () => {
  /*
   * Sale end date
   *
   * Change this date whenever you want to set
   * a new sale deadline.
   *
   * Format:
   * YYYY-MM-DDTHH:MM:SS
   *
   * Example:
   * August 31, 2026 at 11:59:59 PM
   */
  const saleEndDate = new Date("2026-08-31T23:59:59");

  const calculateTimeLeft = () => {
    const difference = saleEndDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /*
   * Add leading zero
   *
   * 5  -> 05
   * 12 -> 12
   */
  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  const banners = [
    {
      id: 1,
      label: "BEST DEALS",
      title: "Sale of the Month",
      countdown: true,
      buttonText: "Shop Now",
      image: PromoBanner3,
    },

    {
      id: 2,
      label: "85% FAT FREE",
      title: "Low-Fat Meat",
      price: "$79.99",
      buttonText: "Shop Now",
      image: PromoBanner1,
    },

    {
      id: 3,
      label: "SUMMER SALE",
      title: "100% Fresh Fruit",
      offer: "Up to",
      discount: "64% OFF",
      buttonText: "Shop Now",
      image: PromoBanner2,
    },
  ];

  return (
    <section className="mx-auto container px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {banners.map((banner) => (
          <div
            key={banner.id}
            className="group relative min-h-[560px] overflow-hidden rounded-md bg-gray-200 cursor-pointer"
          >
            {/* ================= Background Image ================= */}

            {banner.image ? (
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-sm text-gray-400">
                  Add Banner Image
                </span>
              </div>
            )}

            {/* ================= Content ================= */}

            <div className="relative z-10 flex h-full flex-col items-center px-5 pt-7 text-center">

              {/* Label */}

              <p className="text-[20px] font-semibold uppercase tracking-wide text-white">
                {banner.label}
              </p>

              {/* Title */}

              <h3 className="mt-4 text-4xl font-bold leading-tight text-white">
                {banner.title}
              </h3>

              {/* ================= Countdown ================= */}

              {banner.countdown && (
                <div className="mt-6 flex items-center gap-3 text-white">

                  {/* Days */}

                  <div className="text-center">
                    <p className="text-lg font-semibold leading-none">
                      {formatTime(timeLeft.days)}
                    </p>

                    <p className="mt-1 text-[7px] uppercase">
                      Days
                    </p>
                  </div>

                  <span className="text-lg font-bold">
                    :
                  </span>

                  {/* Hours */}

                  <div className="text-center">
                    <p className="text-lg font-semibold leading-none">
                      {formatTime(timeLeft.hours)}
                    </p>

                    <p className="mt-1 text-[7px] uppercase">
                      Hours
                    </p>
                  </div>

                  <span className="text-lg font-bold">
                    :
                  </span>

                  {/* Minutes */}

                  <div className="text-center">
                    <p className="text-lg font-semibold leading-none">
                      {formatTime(timeLeft.minutes)}
                    </p>

                    <p className="mt-1 text-[7px] uppercase">
                      Mins
                    </p>
                  </div>

                  <span className="text-lg font-bold">
                    :
                  </span>

                  {/* Seconds */}

                  <div className="text-center">
                    <p className="text-lg font-semibold leading-none">
                      {formatTime(timeLeft.seconds)}
                    </p>

                    <p className="mt-1 text-[7px] uppercase">
                      Secs
                    </p>
                  </div>

                </div>
              )}

              {/* ================= Meat Price ================= */}

              {banner.price && (
                <p className="mt-4 text-lg text-white">
                  Started at{" "}
                  <span className="font-bold text-yellow-300">
                    {banner.price}
                  </span>
                </p>
              )}

              {/* ================= Fruit Discount ================= */}

              {banner.discount && (
                <div className="mt-4 flex items-center gap-2 text-lg text-gray-900">

                  <span>
                    {banner.offer}
                  </span>

                  <span className="rounded  px-2 py-3 font-semibold text-white">
                    {banner.discount}
                  </span>

                </div>
              )}

              {/* ================= Button ================= */}

              <Link
                to="/shop"
                className="group/button mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[17px] font-semibold text-green-600 shadow-sm transition-all duration-300 hover:bg-green-600 hover:text-white"
              >
                {banner.buttonText}

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PromoBanners;