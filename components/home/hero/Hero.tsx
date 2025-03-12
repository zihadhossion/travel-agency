import React from "react";
import SearchBox from "@/components/ui/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-dvh sm:h-screen">
      {/* OVERLAY */}
      <div className="w-full h-full bg-gray-800 opacity-70 absolute top-0 left-0 "></div>
      {/* <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      /> */}
      {/* TEXT CONTENT */}
      <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="text-white text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[10px] mb-4 md:mb-0">
              Lets Enjoy The Nature
            </h1>
            <p className="text-lg sm:text-base mt-2 [word-spacing:3px]">
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
          {/* SEARCHBOX */}
          <SearchBox />
          <Link
            href={"#"}
            className="text-white bg-rose-600 relative px-14 md:px-28 -mt-4 py-2.5 
            rounded overflow-hidden hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400
             hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition ease-out group"
          >
            <span
              className="w-8 h-32 bg-black absolute right-0 -mt-12 opacity-10 rotate-12 transform translate-x-12 
            group-hover:-translate-x-40 ease transition-all duration-1000"
            ></span>
            <span className="font-bold relative">Search</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
