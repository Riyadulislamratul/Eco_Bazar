import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Brand1 from "../assets/brand/brand-1.png";
import Brand2 from "../assets/brand/brand-2.png";
import Brand3 from "../assets/brand/brand-3.png";
import Brand4 from "../assets/brand/brand-4.png";
import Brand5 from "../assets/brand/brand-5.png";
import Brand6 from "../assets/brand/brand-6.png";

import "swiper/css";

const brands = [
  {
    id: 1,
    name: "Steps",
    logo: Brand1,
  },
  {
    id: 2,
    name: "Mango",
    logo: Brand2,
  },
  {
    id: 3,
    name: "Food",
    logo: Brand3,
  },
  {
    id: 4,
    name: "Food Club",
    logo: Brand4,
  },
  {
    id: 5,
    name: "Book Off",
    logo: Brand5,
  },
  {
    id: 6,
    name: "G Series",
    logo: Brand6,
  },
];

export default function BrandSlider() {
  return (
    <section className="py-12 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4500}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                className="group flex justify-center items-center border-r border-gray-200 py-4 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="
                  h-10
                  object-contain
                  grayscale
                  opacity-60
                  transition-all
                  duration-500
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  "
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}