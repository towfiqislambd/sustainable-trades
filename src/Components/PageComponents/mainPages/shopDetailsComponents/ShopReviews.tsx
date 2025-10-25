"use client";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/Components/Common/Container";
import React, { useState } from "react";
import r1 from "@/Assets/r1.jpg";
import r2 from "@/Assets/r2.jpg";
import r3 from "@/Assets/r3.jpg";
import r4 from "@/Assets/r4.jpg";
import r5 from "@/Assets/r5.jpg";
import r6 from "@/Assets/r6.jpg";
import r7 from "@/Assets/r7.jpg";
import r8 from "@/Assets/r8.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RightArrowSvg } from "@/Components/Svg/SvgContainer";
import { FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type ImageItem = {
  image: string;
};

type ReviewItem = {
  id: number;
  rating: number;
  message: string;
  images: ImageItem[];
  product: {
    product_name: string;
  }
  user: {
    avatar: string;
    first_name: string;
    last_name: string;
  };
};

interface ReviewProps {
  data: ReviewItem[];
}

const ShopReviews = ({ data }: ReviewProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreId, setShowMoreId] = useState<number>(0);

  return (
    <section id="Reviews" className="mt-24">
      <Container>
        <h2 className="section_sub_title !mb-3">Read Our Reviews</h2>

        <div>
          {data?.map(item => (
            <div
              key={item?.id}
              className="flex flex-col lg:flex-row gap-5 sm:gap-10 md:gap-20 lg:items-center border-b last:border-b-0 border-gray-200 py-4 md:py-8"
            >
              {/* Left - Reviews */}
              <div className="grow flex flex-col sm:flex-row gap-5 items-start">
                {/* Author Image */}
                <figure className="shrink-0 size-16 grid place-items-center rounded-full relative bg-accent-red text-accent-white text-2xl font-semibold">
                  {item?.user?.avatar ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.user?.avatar}`}
                      alt="author_img"
                      fill
                    />
                  ) : (
                    <span>{item?.user?.first_name?.at(0)}</span>
                  )}
                </figure>

                {/* Content */}
                <div className="flex gap-10">
                  <div>
                    {/* Author Name */}
                    <h3 className=" text-sm sm:text-base md:text-lg font-semibold text-primary-green">
                      {item?.user?.first_name} {item?.user?.last_name}
                    </h3>

                    {/* Review Count */}
                    <div className="flex gap-1 items-center py-2">
                      {Array.from({ length: item?.rating }).map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-primary-green text-sm"
                        />
                      ))}

                      {Array.from({ length: 5 - item?.rating }).map(
                        (_, index) => (
                          <FaRegStar
                            key={index}
                            className="text-primary-green text-xs md:text-sm"
                          />
                        )
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-secondary-gray text-xs sm:text-sm md:text-[15px]">
                      {showMore && item?.id === showMoreId
                        ? item?.message
                        : item?.message?.slice(0, 150)}

                      {item?.message?.length > 150 && (
                        <button
                          onClick={() => {
                            setShowMore(!showMore);
                            setShowMoreId(item?.id);
                          }}
                          className="text-primary-green font-semibold cursor-pointer pl-2"
                        >
                          {showMore && item?.id === showMoreId
                            ? "read less"
                            : "read more...."}
                        </button>
                      )}
                    </p>
                  </div>

                  {/* Reviewed Image */}
                  <div className="flex gap-3 items-center rounded-lg w-[130px] h-[100px] shrink-0">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={10}
                      pagination={{ clickable: true }}
                      className="review_swiper rounded-lg"
                    >
                      {item?.images?.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <figure className="w-[130px] h-[100px] rounded-lg border border-gray-100 relative">
                            <div className="absolute bg-black/10 z-50 inset-0 rounded-lg" />
                            <Image
                              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${img?.image}`}
                              alt="Reviewed img"
                              className="w-full h-full rounded-lg"
                              fill
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Right - Product under review */}
              <div className="xl:w-[300px] shrink-0">
                <h4 className="text-primary-green text-sm font-semibold mb-3">
                  Purchased product:
                </h4>
                <div className="flex items-center gap-5">
                  <Image
                    src={`${item?.images[0]}`}
                    alt="product image"
                    className="size-16"
                  />
                  <h3 className="text-sm font-semibold text-primary-green">
                    {item?.product?.product_name}
                  </h3>
                  <RightArrowSvg />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopReviews;
