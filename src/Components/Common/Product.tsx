"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { CartLogoSvg, DollarSvg } from "../Svg/SvgContainer";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import p1 from "@/Assets/p1.jpg";
import Link from "next/link";

type ProductData = {
  id: number;
  product_image: (string | StaticImageData)[];
  product_title: string;
  product_price: string;
  is_wishlist: boolean;
};

type ProductProps = {
  product: ProductData;
  is_feathered?: boolean;
  has_wishlist?: boolean;
  has_cart?: boolean;
  has_slider?: boolean;
};

const Product = ({
  product,
  is_feathered,
  has_wishlist = true,
  has_cart = true,
  has_slider = true,
}: ProductProps) => {
  return (
    <div className="rounded-t-lg relative">
      {/* wishlist btn */}
      {has_wishlist && (
        <button className="absolute z-40 top-4 right-5 size-9 rounded-full border border-gray-300 grid place-items-center bg-primary-green cursor-pointer">
          {product?.is_wishlist ? (
            <FaHeart className="text-accent-red" />
          ) : (
            <FaHeart className="text-accent-white" />
          )}
        </button>
      )}

      {/* Product Image Gallery */}
      {has_slider ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="product_swiper rounded-lg"
        >
          {product?.product_image?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <figure
                className={`w-full rounded-lg border border-gray-100 relative ${
                  is_feathered ? "h-[260px]" : "h-[350px]"
                }`}
              >
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
      ) : (
        <figure className="w-full h-[250px] rounded-lg border border-gray-100 relative">
          <div className="absolute inset-0 bg-black/20 rounded-lg" />
          <Image
            src={p1}
            alt="product image"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
      )}

      {/* Product Name */}
      <Link
        href={`/product-details/1`}
        className="text-primary-green text-xl font-semibold py-3 truncate hover:underline block"
      >
        {product?.product_title}
      </Link>

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
        {has_cart && (
          <button className="flex gap-2 items-center px-3 py-1.5 rounded-lg cursor-pointer border border-secondary-gray font-semibold text-secondary-gray">
            <span>Add to Cart</span>
            <span>
              <CartLogoSvg />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
