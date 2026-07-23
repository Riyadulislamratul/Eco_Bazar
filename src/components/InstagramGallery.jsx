import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Instra1 from "../assets/instra/instra1.png";
import Instra2 from "../assets/instra/instra2.png";
import Instra3 from "../assets/instra/instra3.png";
import Instra4 from "../assets/instra/instra4.png";
import Instra5 from "../assets/instra/instra5.png";
import Instra6 from "../assets/instra/instra6.png";


const images = [
  Instra1,
  Instra2,
  Instra3,
  Instra4,
  Instra5,
  Instra6,
];

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Follow us on Instagram
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .08,
                duration: .5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-xl shadow cursor-pointer"
            >
              <img
                src={image}
                alt=""
                className="
                w-full
                aspect-square
                object-cover
                transition-all
                duration-700
                group-hover:scale-125
                "
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-green-700/65
                opacity-0
                transition-all
                duration-500
                flex
                items-center
                justify-center
                group-hover:opacity-100
                "
              >
                <FaInstagram
                  className="
                  text-white
                  text-4xl
                  scale-0
                  rotate-180
                  transition-all
                  duration-500
                  group-hover:scale-100
                  group-hover:rotate-0
                  "
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}