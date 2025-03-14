import React from "react";
import Hero from "./hero/Hero";
import Destination from "./destination/Destination";
import Hotel from "./hotel/Hotel";
import WhyChoose from "../whyChoose/WhyChoose";
import Review from "./review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
