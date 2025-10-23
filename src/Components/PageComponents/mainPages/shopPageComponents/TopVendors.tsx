"use client";
import "swiper/css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/Components/Common/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SingleShopSkeleton } from "@/Components/Loader/Loader";

type vendorItem = {
  id: number;
  shop_info: {
    user_id: number;
    shop_image: string;
    shop_name: string;
    address: {
      address_line_1: string;
      address_10_mile: string;
      display_my_address: string;
      city: string;
      state: string;
    };
  };
};

interface vendorProps {
  data: vendorItem[];
  vendorLoading: any;
}

const TopVendors = ({ data, vendorLoading }: vendorProps) => {
  return (
    <section className="mb-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-10 capitalize">
          Top Local Vendors And Business
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
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="!mx-10"
          >
            {vendorLoading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <SingleShopSkeleton />
                  </SwiperSlide>
                ))
              : data?.map(item => (
                  <SwiperSlide key={item?.id}>
                    <Link
                      href={`/shop-details/${item?.shop_info?.user_id}`}
                      className="text-center"
                    >
                      <figure className="size-44 mx-auto cursor-pointer rounded-full overflow-hidden relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.shop_info?.shop_image}`}
                          alt="shop_image"
                          fill
                          className="size-full rounded-full object-cover hover:scale-105 duration-500 transition-transform"
                        />
                      </figure>

                      <h3 className="mt-4 text-primary-green font-semibold truncate">
                        {item?.shop_info?.shop_name}
                      </h3>

                      <h5 className="mt-1 text-secondary-gray text-sm">
                        {item?.shop_info?.address?.display_my_address
                          ? item?.shop_info?.address?.address_line_1
                          : `${item?.shop_info?.address?.city}, ${item?.shop_info?.address?.state}`}
                      </h5>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TopVendors;
