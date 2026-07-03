import React from "react";

// Replace this later with your own image
import FarmerImage from "../assets/about/about-1.png";

const AboutSectionOne = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              100% Trusted
              <br />
              Organic Food Store
            </h2>

            <p className="mt-8 text-gray-500 leading-8">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare.
            </p>

            <p className="mt-6 text-gray-500 leading-8">
              Vivamus ornare commodo ante, et commodo felis congue vitae.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={FarmerImage}
              alt="Organic Farmer"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;