"use client";

import { destinationData } from "@/data/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DestinationSlider = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {destinationData.map((item) => (
          <div key={item.id} className="m-3">
            {/* IMAGE CONTENT */}
            <div className="relative h-[400px]">
              {/* OVERLAY */}
              <div className="bg-black absolute inset-0 opacity-25 rounded-lg"></div>
              <Image
                src={item?.image}
                alt={item?.country}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* TEXT CONTENT */}
            <h1 className="text-lg font-semibold mt-4">{item?.country}</h1>
            <p className="text-sm text-gray-600">{item?.travelers} Travelers</p>
          </div>
        ))}
      </Carousel>
      ;
    </>
  );
};

export default DestinationSlider;
