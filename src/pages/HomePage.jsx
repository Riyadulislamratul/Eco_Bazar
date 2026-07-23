import React from "react";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import PopularCategories from "../components/PopularCategories";
import useAuth from "../hooks/useAuth";
import Testimonials from "../components/Testimonials";
import BrandSlider from "../components/BrandSlider";
import InstagramGallery from "../components/InstagramGallery";

const HomePage = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <Hero />
      <FeatureBar />
      <PopularCategories />
      <Testimonials />
      <BrandSlider />
      <InstagramGallery />
    </>
  );
};

export default HomePage;