import React from "react";
import { FaStar } from "react-icons/fa6";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <section className="bg-[#13357b] flex items-center justify-center flex-col py-20">
      <article className="w-[80%] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto">
        <div>
          <h1 className="text-2xl text-white font-semibold ">
            What our customers are saying us?
          </h1>
          <p className="text-gray-200 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt fugiat praesentium dolores facilis delectus modi culpa
            aliquid deserunt ad!
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <div>
              <p className="text-2xl text-white font-bold">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </article>
    </section>
  );
};

export default Review;
