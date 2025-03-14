import Image from "next/image";
import React from "react";

type Props = {
  item: {
    image: string;
    title: string;
  };
};

const WhyChooseCard = ({ item }: Props) => {
  return (
    <>
      <Image
        src={item?.image}
        width={70}
        height={70}
        alt={item?.title}
        className="mx-auto"
      />
      <h1 className="text-gray-900 text-center text-lg font-medium mt-6">
        {item?.title}
      </h1>
      <p className="text-xs text-gray-700 text-center font-medium mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </>
  );
};

export default WhyChooseCard;
