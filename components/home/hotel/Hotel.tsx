import SectionHeader from "@/components/ui/SectionHeader";
import { hotelsData } from "@/data/data";
import React from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <section className="py-20">
      <SectionHeader heading="Recommended Hotels" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-8 mt-16">
        {hotelsData.map((item) => (
          <div key={item.id}>
            <HotelCard hotel={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotel;
