"use client";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import d1 from "@/Assets/d1.jpg";
import d2 from "@/Assets/d2.jpg";
import d3 from "@/Assets/d3.jpg";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = [d1, d2, d3, d1];

  return (
    <div className="flex gap-4">
      {/* Side Images */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[120px] h-[450px] rounded-xl shrink-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <figure className="w-full h-[100px] object-cover cursor-pointer rounded-lg border border-gray-100">
              <Image
                src={img}
                alt="thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image */}
      <Swiper
        spaceBetween={10}
        // navigation={true}
        speed={1000}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[445px] rounded-xl flex-1 relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="main product"
              fill
              className="w-full h-full rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGallery;
