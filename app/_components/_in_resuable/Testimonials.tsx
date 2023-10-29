import React from "react";
import SectionHeader from "../reusable/SectionHeader";
import Swipertest from "./Swipertest";

const Testimonials = () => {
  return (
    <section id="testimonials_section">
      <div className="container testimonials_container">
        <SectionHeader
          heading="TESTIMONIALS"
          subheading="What my students say"
        />
        {/* testimonials swiper */}
        <Swipertest />
      </div>
    </section>
  );
};

export default Testimonials;
