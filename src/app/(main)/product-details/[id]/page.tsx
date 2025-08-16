"use client";
import React, { useState, use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import d1 from "@/Assets/d1.jpg";
import d2 from "@/Assets/d2.jpg";
import d3 from "@/Assets/d3.jpg";

interface Props {
  params: Promise<{ id: string }>;
}

const PrevArrow = () => (
  <div className="swiper-button-prev custom-prev-arrow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        transform="rotate(-180 16 16)"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M17.1767 11.9053C16.9212 11.6498 16.5069 11.6499 16.2515 11.9053C15.9959 12.1609 15.9959 12.5751 16.2516 12.8307L18.7658 15.3449L11.485 15.3456C11.1237 15.3457 10.8308 15.6385 10.8308 16C10.8309 16.3614 11.1238 16.6542 11.4851 16.6542L18.7661 16.6535L16.2513 19.1681C15.9958 19.4237 15.9958 19.8381 16.2513 20.0935C16.3791 20.2212 16.5465 20.2852 16.714 20.2852C16.8814 20.2852 17.0488 20.2212 17.1766 20.0936L20.8083 16.462C20.9311 16.3393 21 16.1729 21 15.9993C20.9999 15.8257 20.931 15.6595 20.8082 15.5365L17.1767 11.9053Z"
        fill="#007BFF"
      />
    </svg>
  </div>
);

const NextArrow = () => (
  <div className="swiper-button-next custom-next-arrow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M14.8233 20.0947C15.0788 20.3502 15.4931 20.3501 15.7485 20.0947C16.0041 19.8391 16.0041 19.4249 15.7484 19.1693L13.2342 16.6551L20.515 16.6544C20.8763 16.6543 21.1692 16.3615 21.1692 16C21.1691 15.6386 20.8762 15.3458 20.5149 15.3458L13.2339 15.3465L15.7487 12.8319C16.0042 12.5763 16.0042 12.1619 15.7487 11.9065C15.6209 11.7788 15.4535 11.7148 15.286 11.7148C15.1186 11.7148 14.9512 11.7788 14.8234 11.9064L11.1917 15.538C11.0689 15.6607 11 15.8271 11 16.0007C11.0001 16.1743 11.069 16.3405 11.1918 16.4635L14.8233 20.0947Z"
        fill="#007BFF"
      />
    </svg>
  </div>
);

const page = ({ params }: Props) => {
  const { id } = use(params);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = [d1, d2, d3, d1];

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-2 gap-10">
          {/* Left - Product Gallery */}
          <div>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[450px] rounded-xl mb-8 product_img"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt="slider image"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={30}
              navigation={false}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={4}
              className="rounded-xl"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt="slider image"
                    className="w-[200px] h-[120px] object-cover cursor-pointer rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right - Product Description */}
          <div className=""></div>
        </div>
      </Container>
    </section>
  );
};

export default page;
