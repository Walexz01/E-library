import React from "react";
import SectionHeader from "../reusable/SectionHeader";
import Why_us from "./Why_us";

const WhyUs = () => {
  return (
    <section className="why_us_section">
      <div className="container why_us_container">
        <SectionHeader heading="FEATURES" subheading="Why Code with Mosh?" />
        <div className="why_us_list">
          <Why_us />
          <Why_us />
          <Why_us />
          <Why_us />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
