"use client";
import "swiper/css";
import React from "react";
import Image from "next/image";
import Container from "@/Components/Common/Container";
import sliderOne from "@/Assets/sliderOne.png";
import sliderTwo from "@/Assets/sliderTwo.png";
import sliderThree from "@/Assets/sliderThree.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";

const bannerData = [
  {
    id: 1,
    bannerImg: sliderOne,
    title: "EAT, TRADE, SELL, AND BUY LOCALLY",
    sub_title: "Welcome to Sustainable Trades",
    description:
      "Your destination for trading, selling, eating, and buying local, organic, and sustainable goods and services. Join our eco-conscious community, where connections go beyond transactions.",
    btn_text: "Learn More",
    btn_link: "/about/how-it-works",
  },
  {
    id: 2,
    bannerImg: sliderTwo,
    title: "MAGIC MAKERS LOCALIZED GLOBALLY",
    sub_title: "Are You a Magic Maker?",
    description:
      "A Magic Maker is someone who offers products or services that benefit people or the planet. They include organic farmers, gardeners, local artists, and entrepreneurs supporting sustainability.",
    btn_text: "Create a Shop",
    btn_link: "/",
  },
  {
    id: 3,
    bannerImg: sliderThree,
    title: "OUR MISSION AND FUTURE VISION",
    sub_title: "Sustainable Trades Farms",
    description:
      "Membership fees support the creation of Sustainable Trades Farms, dedicated to fair compensation, work-life balance, land regeneration, and wholesome food.",
    btn_text: "Join the Local Revolution",
    btn_link: "/",
  },
];

const HomeBanner = () => {
  return (
    <header className="relative h-[600px] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="banner_swiper"
      >
        {bannerData?.map((item, idx) => (
          <SwiperSlide key={item?.id}>
            <div className="relative h-[600px]">
              {/* Background image */}
              <Image
                src={item?.bannerImg}
                alt="slider"
                fill
                priority
                className="object-cover object-center -z-10"
              />

              {/* Content */}
              <Container>
                <div
                  className={`flex items-center w-full  h-[600px] ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-[560px] bg-[rgba(246,245,240,0.90)] rounded-2xl px-8 py-12 shadow-[0_3px_8px_0_rgba(0,0,0,0.09),_0_3px_12px_0_rgba(0,0,0,0.10)]">
                    <h2 className="text-2xl font-bold text-primary-green mb-3">
                      {item?.title}
                    </h2>
                    <h3 className="text-3xl font-semibold text-secondary-black mb-5">
                      {item?.sub_title}
                    </h3>
                    <p className="text-secondary-black text-lg mb-6">
                      {item?.description}
                    </p>
                    <Link
                      href={item?.btn_link}
                      className="w-[416px] text-center hover:bg-primary-green hover:text-white duration-500 transition-all mx-auto block border text-lg text-secondary-black cursor-pointer py-4 bg-accent-white rounded-lg shadow-lg hover:scale-105"
                    >
                      {item?.btn_text}
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default HomeBanner;
