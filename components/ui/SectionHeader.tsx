import React from "react";

type Props = {
  heading?: string;
};

const SectionHeader = ({ heading }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p className="text-sm sm:text-base text-gray-700 font-medium mt-2">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
};

export default SectionHeader;
