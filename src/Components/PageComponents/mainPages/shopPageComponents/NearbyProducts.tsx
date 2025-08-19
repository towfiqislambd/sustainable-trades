"use client";
import React from "react";
import Image from "next/image";
import E1 from "@/Assets/e1.jpg";
import E2 from "@/Assets/e2.jpg";
import E3 from "@/Assets/e3.png";
import E4 from "@/Assets/e4.jpg";
import E5 from "@/Assets/e5.png";
import E6 from "@/Assets/e6.png";
import Container from "@/Components/Common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  { id: 1, product_name: "Local Organic Produce", product_image: E1 },
  { id: 2, product_name: "Sustainable Clothing & Textiles", product_image: E2 },
  { id: 3, product_name: "Organic Bath & Beauty", product_image: E3 },
  { id: 4, product_name: "Handcrafted Gifts", product_image: E4 },
  { id: 5, product_name: "Artisan Goods", product_image: E5 },
  { id: 6, product_name: "Wellness Services", product_image: E6 },
  { id: 7, product_name: "Organic Bath & Beauty", product_image: E3 },
  { id: 8, product_name: "Handcrafted Gifts", product_image: E1 },
];

const NearbyProducts = () => {
  return (
    <section className="mb-20">
      <Container>
        <h2 className="text-3xl font-semibold text-secondary-black mb-10">
          Explore Sustainable Products & Services Nearby
        </h2>

        <div className="relative">
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 shadow-md rounded-full p-3 bg-primary-green text-white transition cursor-pointer">
            <FaArrowLeft />
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 shadow-md rounded-full p-3 bg-primary-green text-white transition cursor-pointer">
            <FaArrowRight />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="!mx-10"
          >
            {data?.map(item => (
              <SwiperSlide key={item?.id} className="">
                <Link
                  href={`/product-details/${item?.id}`}
                  className="text-center"
                >
                  <figure className="size-44 mx-auto cursor-pointer rounded-full overflow-hidden">
                    <Image
                      src={item?.product_image}
                      alt="shop_image"
                      className="size-full rounded-full object-cover hover:scale-105 duration-500 transition-transform"
                    />
                  </figure>

                  <h3 className="mt-4 text-primary-green font-semibold">
                    {item?.product_name}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default NearbyProducts;
