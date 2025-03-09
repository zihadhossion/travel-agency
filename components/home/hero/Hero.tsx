import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full sm:h-screen">
      <div className="w-full h-full bg-gray-500 opacity-70 absolute top-0 left-0 "></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <h1>Hero</h1>
    </section>
  );
};

export default Hero;
