import Image from "next/image";
import React from "react";

const SwiperCard = () => {
  return (
    <div className="card test_card">
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor
        temporibus repudiandae facere voluptas maiores dolorem porro,
        necessitatibus quae incidunt eum nemo architecto dolorum nihil soluta
        numquam libero. Possimus velit veniam distinctio ut similique ducimus
        qui rerum vero, perspiciatis, saepe optio cumque
      </p>
      <div className="divider"></div>
      <div className="name_img">
        <Image
          alt="image"
          className="image"
          src={"/images/image1.webp"}
          width={60}
          height={60}
        />
        <div className="name">
          <h5>ADEWALE</h5>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
