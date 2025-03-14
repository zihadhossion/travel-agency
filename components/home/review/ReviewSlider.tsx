"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const ReviewSlider = () => {
    return (<div>
        <Swiper modules={[EffectCards]} effect="cards"
            grabCursor={true}
            className="w-[90%] md:w-[450px] h-[300px] md:h-[350px]">
            {reviewData.map((slide) => (
                <SwiperSlide key={slide.id} className="bg-white block rounded-3xl">
                    <div className="w-[80%] mx-auto mt-16">
                        <p className="text-xs sm:text-sm md:text-base font-semibold">{slide.review}</p>
                        <div className="flex items-center mt-4">
                            <FaStar className="w-3 h-3 md:w-6 md:h-6 text-yellow-600" />
                            <FaStar className="w-3 h-3 md:w-6 md:h-6 text-yellow-600" />
                            <FaStar className="w-3 h-3 md:w-6 md:h-6 text-yellow-600" />
                            <FaStar className="w-3 h-3 md:w-6 md:h-6 text-yellow-600" />
                            <FaStar className="w-3 h-3 md:w-6 md:h-6 text-yellow-600" />
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center space-x-4">
                                <Image src={slide.image} alt={slide.name} width={60} height={60} className="rounded-full" />
                                <div>
                                    <p className="text-sm sm:text-lg font-semibold">{slide.name}</p>
                                    <p className="text-xs sm:text-base text-gray-600 ">Marketer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))};
        </Swiper>
    </div>);
};

export default ReviewSlider;