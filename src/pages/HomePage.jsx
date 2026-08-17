import React from "react";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import PopularCategories from "../components/PopularCategories";
import useAuth from "../hooks/useAuth";
import Testimonials from "../components/Testimonials";
import BrandSlider from "../components/BrandSlider";
import InstagramGallery from "../components/InstagramGallery";
import DiscountBanner from "../components/DiscountBanner";
import PopularProducts from "../components/PopularProducts";
import PromoBanners from "../components/PromoBanners";

const HomePage = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <Hero />
      <FeatureBar />
      <PopularCategories />
      <PopularProducts />
      <PromoBanners />
      <DiscountBanner />
      <Testimonials />
      <BrandSlider />
      <InstagramGallery />
    </>
  );
};

export default HomePage;