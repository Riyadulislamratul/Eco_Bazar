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
    slug: "fresh-fruit",
    image: categoryImages["Fresh Fruit"],
  },
  {
    title: "Fresh Vegetables",
    category: "Fresh Vegetables",
    slug: "fresh-vegetables",
    image: categoryImages["Vegetables"],
  },
  {
    title: "Meat & Fish",
    category: "Meat & Fish",
    slug: "meat-fish",
    image: categoryImages["Meat & Fish"],
  },
  {
    title: "Cleaning Needs",
    category: "Cleaning Needs",
    slug: "cleaning-needs",
    image: categoryImages["Cleaning Needs"],
  },
  {
    title: "Beverages",
    category: "Beverages",
    slug: "beverages",
    image: categoryImages["Beverages"],
  },
  {
    title: "Beauty & Health",
    category: "Beauty & Health",
    slug: "beauty-health",
    image: categoryImages["Beauty & Health"],
  },
  {
    title: "Bread & Bakery",
    category: "Bread & Bakery",
    slug: "bread-bakery",
    image: categoryImages["Bread & Bakery"],
  },
  {
    title: "Baking Needs",
    category: "Baking Needs",
    slug: "baking-needs",
    image: categoryImages["Baking Needs"],
  },
  {
    title: "Cooking",
    category: "Cooking",
    slug: "cooking",
    image: categoryImages["Cooking"],
  },
  {
    title: "Diabetic Food",
    category: "Diabetic Food",
    slug: "diabetic-food",
    image: categoryImages["Diabetic Food"],
  },
  {
    title: "Dish Detergents",
    category: "Dish Detergents",
    slug: "dish-detergents",
    image: categoryImages["Dish Detergents"],
  },
  {
    title: "Oil",
    category: "Oil",
    slug: "oil",
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
    (product) => product.category === category.title
  ).length;

  return (
    <CategoryCard
      key={category.id}
      image={category.image}
      title={category.title}
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