import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <article>
      <div className="w-full h-[300px] relative rounded-lg cursor-pointer group overflow-hidden">
        {/* ADD TO FAV BUTTON */}
        <div className="w-8 h-8 text-black bg-white absolute top-4 right-4 flex items-center justify-center flex-col rounded-full">
          <FaHeart className="w-3 h-3" />
        </div>
        {/* OVERLAY */}
        <div className="bg-black absolute inset-0 opacity-20 z-10"></div>
        <Image
          src={hotel?.image}
          alt={hotel?.name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition group-hover:scale-110 overflow-hidden"
        />
      </div>
      {/* TEXT CONTENT   */}
      <div>
        <h1 className="text-base font-semibold text-blue-950 hover:text-black mt-4 cursor-pointer transition">
          {hotel?.name}
        </h1>
        <p className="text-sm text-gray-600 font-medium mt-3 mb-6">
          {hotel?.location}
        </p>
        <div className="flex items-center space-x-2">
          <div className="text-xs text-white font-bold bg-blue-800 px-2 py-2 rounded-md">
            {hotel?.rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">
            {hotel?.reviews} Reviews
          </p>
        </div>
        {/* PRICES */}
        <p className="text-gray-700 font-medium mt-3">
          Starting from{" "}
          <span className="text-blue-600 font-bold">${hotel?.price}</span>
        </p>
      </div>
    </article>
  );
};

export default HotelCard;
