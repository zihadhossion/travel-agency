import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyChooseData } from "@/data/data";
import WhyChooseCard from "./WhyCooseCard";

const WhyChoose = () => {
  return (
    <section className="pt-16 pb-20">
      <SectionHeader heading="Why Choose Us" />
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-16 mx-auto mt-16">
        {/* CHOOSE CARD */}
        {whyChooseData.map((item) => (
          <article key={item.id}>
            <WhyChooseCard item={item} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
