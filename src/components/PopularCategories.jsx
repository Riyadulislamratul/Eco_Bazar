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
import products from "../data/products";
import categoryImages from "../data/categoryImages";

const categories = [
  {
    title: "Fresh Fruit",
    category: "Fresh Fruit",
    image: categoryImages["Fresh Fruit"],
  },
  {
    title: "Fresh Vegetables",
    category: "Vegetables",
    image: categoryImages["Vegetables"],
  },
  {
    title: "Meat & Fish",
    category: "Meat & Fish",
    image: categoryImages["Meat & Fish"],
  },
  {
    title: "Cleaning Needs",
    category: "Cleaning Needs",
    image: categoryImages["Cleaning Needs"],
  },
  {
    title: "Beverages",
    category: "Beverages",
    image: categoryImages["Beverages"],
  },
  {
    title: "Beauty & Health",
    category: "Beauty & Health",
    image: categoryImages["Beauty & Health"],
  },
  {
    title: "Bread & Bakery",
    category: "Bread & Bakery",
    image: categoryImages["Bread & Bakery"],
  },
  {
    title: "Baking Needs",
    category: "Baking Needs",
    image: categoryImages["Baking Needs"],
  },
  {
    title: "Cooking",
    category: "Cooking",
    image: categoryImages["Cooking"],
  },
  {
    title: "Diabetic Food",
    category: "Diabetic Food",
    image: categoryImages["Diabetic Food"],
  },
  {
    title: "Dish Detergents",
    category: "Dish Detergents",
    image: categoryImages["Dish Detergents"],
  },
  {
    title: "Oil",
    category: "Oil",
    image: categoryImages["Oil"],
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
          {categories.map((category) => {
            const count = products.filter(
              (product) => product.category === category.category,
            ).length;

            return (
              <CategoryCard
                key={category.title}
                image={category.image}
                title={category.title}
                category={category.category} // <-- IMPORTANT
                count={count}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
