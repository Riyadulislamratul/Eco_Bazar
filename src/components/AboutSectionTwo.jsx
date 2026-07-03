import React from "react";
import {
  Leaf,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

// Replace with your own image
import FarmerImage from "../assets/about/about-2.png";

const features = [
  {
    id: 1,
    icon: <Leaf size={22} />,
    title: "100% Organic Food",
    desc: "100% healthy & fresh food.",
  },
  {
    id: 2,
    icon: <Headphones size={22} />,
    title: "Great Support 24/7",
    desc: "Instant access to Contact.",
  },
  {
    id: 3,
    icon: <MessageCircle size={22} />,
    title: "Customer Feedback",
    desc: "Our happy customer.",
  },
  {
    id: 4,
    icon: <ShieldCheck size={22} />,
    title: "100% Secure Payment",
    desc: "We ensure your money is safe.",
  },
  {
    id: 5,
    icon: <Truck size={22} />,
    title: "Free Shipping",
    desc: "Free shipping with discount.",
  },
  {
    id: 6,
    icon: <PackageCheck size={22} />,
    title: "100% Organic Food",
    desc: "100% healthy & fresh food.",
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto pr-4 lg:pr-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src={FarmerImage}
              alt="Farmer"
              className="w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              100% Trusted
              <br />
              Organic Food Store
            </h2>

            <p className="mt-6 text-gray-500 leading-8">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSectionTwo;