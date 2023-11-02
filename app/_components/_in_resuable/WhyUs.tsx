import React from "react";
import SectionHeader from "../reusable/SectionHeader";
import Why_us from "./Why_us";
import { why_us } from "@/data/Why_us";

const WhyUs = () => {
  return (
    <section className="why_us_section">
      <div className="container why_us_container">
        <SectionHeader heading="WHY US" subheading="Why Choose eBookVerse?" />
        <div className="why_us_list">
          {why_us.map(({ desc, icon, img, slang, title }, index) => (
            <Why_us
              desc={desc}
              icon={icon}
              img={img}
              slang={slang}
              title={title}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
