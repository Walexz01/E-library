"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import SwiperCard from "./SwiperCard";

const Swipertest = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const setSlidesPerview = () => {
    setSlidesPerView(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 2
        : 0
    );
  };
  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipertest;
