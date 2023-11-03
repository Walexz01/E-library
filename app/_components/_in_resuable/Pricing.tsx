import React from "react";
import SectionHeader from "../reusable/SectionHeader";
import PriceCard from "./PriceCard";
import Link from "next/link";
import { Prices } from "@/data/Prices";

const Pricing = () => {
  return (
    <section id="pricing_section">
      <div className="container pricing_container">
        <SectionHeader
          heading="Pricing"
          subheading="Get Your eBookVerse account setup asap "
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum unde consectetur."
          descClass="intro_desc"
        />
        <div className="prices">
          {Prices.map(({ lists, price, title, tag }, index) => (
            <PriceCard
              lists={lists}
              price={price}
              title={title}
              key={index}
              tag={tag}
            />
          ))}
        </div>
        <p className="desc contact">
          Looking for a team license? <Link href={"/rec"}>Contact us</Link>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
