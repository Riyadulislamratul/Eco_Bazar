import React from "react";
import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";

// Images
import Fruit from "../assets/categories/fruit.png";
import Vegetables from "../assets/categories/vegetables.png";
import Fish from "../assets/categories/fish.png";
import Cleaner from "../assets/categories/cleaner.png";
import Beverages from "../assets/categories/beverages.png";
import Beauty from "../assets/categories/beauty.png";
import Bakery from "../assets/categories/bakery.png";
import Baking from "../assets/categories/baking.png";
import Cooking from "../assets/categories/cooking.png";
import Diabetic from "../assets/categories/diabetic.png";
import Dish from "../assets/categories/cooking.png";
import Oil from "../assets/categories/oil.png";

const categories = [
  {
    title: "Fresh Fruit",
    image: Fruit,
  },
  {
    title: "Fresh Vegetables",
    image: Vegetables,
  },
  {
    title: "Meat & Fish",
    image: Fish,
  },
  {
    title: "Cleaning Needs",
    image: Cleaner,
  },
  {
    title: "Beverages",
    image: Beverages,
  },
  {
    title: "Beauty & Health",
    image: Beauty,
  },
  {
    title: "Bread & Bakery",
    image: Bakery,
  },
  {
    title: "Baking Needs",
    image: Baking,
  },
  {
    title: "Cooking",
    image: Cooking,
  },
  {
    title: "Diabetic Food",
    image: Diabetic,
  },
  {
    title: "Dish Detergents",
    image: Dish,
  },
  {
    title: "Oil",
    image: Oil,
  },
];

const PopularCategories = () => {
  return (
    <section className="py-20">
      <div className="mx-auto container px-4 lg:px-6">

        {/* Heading */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>

          <button className="flex items-center gap-2 font-semibold text-green-600 transition-all hover:gap-4 cursor-pointer">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;