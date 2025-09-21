"use client";
import "swiper/css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/Components/Common/Container";
import { Pagination, Autoplay } from "swiper/modules";

const staticButtons = [
  { btn_text: "Learn More", btn_link: "#how-it-works" },
  {
    btn_text: "Create a Shop",
    btn_link: "/auth/on_boarding",
  },
  {
    btn_text: "Join the Local Revolution",
    btn_link: "/auth/choose-package",
  },
];

type bannerItem = {
  id: number;
  title: string;
  sub_title: string;
  description: string;
  image: string;
  btn_text?: string;
  btn_link?: string;
};

interface bannerProps {
  data: bannerItem[];
}

const HomeBanner = ({ data }: bannerProps) => {
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
        {data?.map((item, idx) => {
          const sliderData = {
            ...item,
            ...staticButtons[idx],
          };

          return (
            <SwiperSlide key={item?.id}>
              <div className="relative h-[600px]">
                {/* Background image */}
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${sliderData?.image}`}
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
                        {sliderData?.title}
                      </h2>

                      <h3 className="text-3xl font-semibold text-secondary-black mb-5">
                        {sliderData?.sub_title}
                      </h3>

                      <p className="text-secondary-black text-lg mb-6">
                        {sliderData?.description}
                      </p>

                      <Link
                        href={sliderData?.btn_link}
                        className="w-[416px] text-center hover:bg-primary-green hover:text-white duration-500 transition-all mx-auto block border text-lg text-secondary-black cursor-pointer py-4 bg-accent-white rounded-lg shadow-lg hover:scale-105"
                      >
                        {sliderData?.btn_text}
                      </Link>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
};

export default HomeBanner;
