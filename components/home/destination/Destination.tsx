import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="py-20">
      <SectionHeader heading="Exploring Popular Destination" />
      <div className="w-[80%] mt-14 mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
