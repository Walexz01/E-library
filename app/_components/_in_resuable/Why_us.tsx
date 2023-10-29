import Image from "next/image";
import React from "react";

const Why_us = () => {
  return (
    <div className="why_us">
      <div className="why_left">
        {/* svg or icon */}
        <Image
          className="why_icon"
          alt="icon"
          src={"/images/logo.png"}
          width={64}
          height={64}
        />
        <span>Fast-track your learning</span>
        <h3>No fluff, just the good stuff!</h3>
        <p className="desc">
          I don&apos;t want to waste your time with boring stuff you don&apos;t
          need. So I&apos;ve made sure my courses are clear, concise, to the
          point, and free of technical jargon. No rambling or repetition, just
          the essentials you need to succeed, explained in plain English.
        </p>
      </div>
      <div className="why_right">
        <img className="why_image" alt="icon" src={"/images/feature-01.webp"} />
      </div>
    </div>
  );
};

export default Why_us;
