"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { CartLogoSvg, DollarSvg } from "../Svg/SvgContainer";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type ProductData = {
  id: number;
  product_image: (string | StaticImageData)[];
  product_title: string;
  product_price: string;
  is_wishlist: boolean;
};

type ProductProps = {
  product: ProductData;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="rounded-t-lg relative">
      {/* wishlist btn */}
      <button className="absolute z-40 top-4 right-5 size-9 rounded-full border border-gray-300 grid place-items-center bg-primary-green cursor-pointer">
        {product?.is_wishlist ? (
          <FaHeart className="text-lg text-accent-red" />
        ) : (
          <FaHeart className="text-lg text-accent-white" />
        )}
      </button>

      {/* Product Image Gallery */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        className="product_swiper rounded-lg"
      >
        {product?.product_image?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <figure className="w-full h-[350px] rounded-lg border border-gray-100 relative">
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <Image
                src={img}
                alt="product image"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Name */}
      <h3 className="text-primary-green text-xl font-semibold py-3">
        {product?.product_title}
      </h3>

      {/* Badge */}
      <p className="size-6 rounded-full bg-accent-red grid place-items-center">
        <DollarSvg />
      </p>

      <div className="flex justify-between mt-2 items-center">
        {/* Product Price */}
        <p className="text-xl font-semibold text-secondary-black">
          ${product?.product_price}
        </p>

        {/* Cart btn */}
        <button className="flex gap-2 items-center px-3 py-1.5 rounded-lg cursor-pointer border border-secondary-gray font-semibold text-secondary-gray">
          <span>Add to Cart</span>
          <span>
            <CartLogoSvg />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
