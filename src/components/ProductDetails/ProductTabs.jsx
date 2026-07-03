import React, { useState } from "react";

import DescriptionTab from "./DescriptionTab";
import AdditionalInfoTab from "./AdditionalInfoTab";
import ReviewsTab from "./ReviewsTab";

const tabs = [
  "Description",
  "Additional Information",
  "Customer Reviews",
];

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] =
    useState("Description");

  return (
    <section className="mt-20">

      {/* Tab Buttons */}

      <div className="flex flex-wrap justify-center border-b">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-8 py-5 font-semibold transition

            ${
              activeTab === tab
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-600"
            }
            `}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Tab Content */}

      <div className="mt-10">

        {activeTab === "Description" && (
          <DescriptionTab
            description={product.description}
            features={product.features}
          />
        )}

        {activeTab ===
          "Additional Information" && (
          <AdditionalInfoTab
            product={product}
          />
        )}

        {activeTab ===
          "Customer Reviews" && (
          <ReviewsTab
            reviews={product.reviewsList}
          />
        )}

      </div>

    </section>
  );
};

export default ProductTabs;