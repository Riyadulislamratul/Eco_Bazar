import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FarmerImage from "../assets/farmer.jpg";

const faqs = [
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisl, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, et commodo felis congue vitae.",
  },
  {
    question: "Etiam lobortis massa eu nibh tempor elementum.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Suspendisse potenti. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  },
  {
    question: "Aenean quis quam nec lacus semper dignissim.",
    answer:
      "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    question: "Nulla tincidunt eros id tempus accumsan.",
    answer:
      "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f8f6] py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold leading-tight text-gray-900 mb-10">
            Welcome, Let's Talk
            <br />
            About Our Ecobazar
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? "border-green-300 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span
                    className={`font-medium ${
                      openIndex === index
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-gray-500 text-sm leading-7">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={FarmerImage}
            alt="Farmer"
            className="max-h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}