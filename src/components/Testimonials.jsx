import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Amazing service! Everything arrived fresh and exactly as expected. Highly recommended to anyone looking for quality products.",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=16",
    review:
      "Absolutely love shopping here. Great customer support, fast delivery, and top-notch product quality every time.",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=24",
    review:
      "One of the best online grocery stores I've used. The interface is clean and ordering is effortless.",
  },
  {
    id: 5,
    name: "Jacob Jones",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=48",
    review:
      "Excellent experience from start to finish. I will definitely be ordering again!",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-14"
        >
          <div>
            <p className="text-green-600 font-semibold uppercase tracking-widest">
              Testimonials
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Client Testimonials
            </h2>
          </div>

          <div className="flex gap-3">

            <button
              ref={prevRef}
              className="group h-12 w-12 rounded-full border bg-white shadow hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition" />
            </button>

            <button
              ref={nextRef}
              className="group h-12 w-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>

          </div>
        </motion.div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={900}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: .3,
                }}
                className="group bg-white/90 backdrop-blur rounded-2xl p-8 shadow hover:shadow-2xl border border-transparent hover:border-green-500 transition-all duration-500 h-full"
              >
                {/* Quote */}

                <FaQuoteLeft
                  size={38}
                  className="text-green-500 mb-6 transition duration-500 group-hover:rotate-12 group-hover:scale-125"
                />

                {/* Review */}

                <p className="text-gray-600 leading-8 mb-8">
                  {item.review}
                </p>

                {/* Footer */}

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-green-500 transition duration-500 group-hover:scale-110"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {item.role}
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-1">

                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-orange-400 transition duration-300 group-hover:scale-125"
                      />
                    ))}

                  </div>

                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}