import React from "react";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import PopularCategories from "../components/PopularCategories";
import useAuth from "../hooks/useAuth";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <Hero />
      <FeatureBar />
      <PopularCategories />
      <Testimonials />
    </>
  );
};

export default HomePage;