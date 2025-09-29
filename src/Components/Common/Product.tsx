"use client";
import "swiper/css";
import React, { useState } from "react";
import Link from "next/link";
import "swiper/css/pagination";
import p1 from "@/Assets/p1.jpg";
import { FaHeart } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CartLogoSvg, DollarSvg } from "../Svg/SvgContainer";
import { useAddFavorite } from "@/Hooks/api/cms_api";
import { LuLoaderPinwheel } from "react-icons/lu";
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";

type imageItem = {
  id: number;
  image: string;
};

type ProductData = {
  id?: number;
  images?: imageItem[];
  product_name?: string;
  product_price?: string;
  is_favorite?: boolean;
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
  const { user } = useAuth();
  const { mutate: addFavoriteMutation, isPending } = useAddFavorite();

  const handleAddFavorite = (product_id: any) => {
    if (!user) {
      return toast.error("Please login first to proceed");
    }
    addFavoriteMutation({ endpoint: `/api/add-favorites/${product_id}` });
  };

  return (
    <div className="rounded-t-lg relative">
      {/* wishlist btn */}
      {has_wishlist && (
        <button
          onClick={() => handleAddFavorite(product?.id)}
          className="absolute z-40 top-4 right-5 size-9 rounded-full border border-gray-300 grid place-items-center bg-primary-green cursor-pointer"
        >
          {isPending ? (
            <LuLoaderPinwheel className="animate-spin text-white" />
          ) : (
            <FaHeart
              className={`${
                product?.is_favorite ? "text-accent-red" : "text-accent-white"
              }`}
            />
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
          {product?.images?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <figure
                className={`w-full rounded-lg border border-gray-100 relative ${
                  is_feathered
                    ? "h-[170px] md:h-[250px"
                    : "h-[170px] md:h-[350px]"
                }`}
              >
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${img?.image}`}
                  alt="product image"
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <figure className="w-full h-[200px] md:h-[250px] rounded-lg border border-gray-100 relative">
          <div className="absolute inset-0 bg-black/20 rounded-lg" />
          <Image
            src={p1}
            alt="product image"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
      )}

      <div className="flex justify-between items-center">
        {/* Product Name */}
        <Link
          href={`/product-details/1`}
          className="text-primary-green md:text-lg sm:text-base text-sm lg:text-xl font-semibold py-3 truncate hover:underline block"
        >
          {product?.product_name}
        </Link>

        {/* Badge */}
        <p className="size-6 rounded-full bg-accent-red grid place-items-center">
          <DollarSvg />
        </p>
      </div>

      <div className="flex  justify-between mt-2 items-center">
        {/* Product Price */}
        <p className="md:text-lg sm:text-base text-sm lg:text-xl font-semibold text-secondary-black">
          ${product?.product_price}
        </p>

        {/* Cart btn */}
        {has_cart && (
          <div className="">
            <button className="hidden sm:flex gap-2 items-center px-3 py-1.5 rounded-[5px] cursor-pointer border border-secondary-gray font-semibold text-secondary-gray duration-500 transition-all hover:bg-primary-green md:text-lg sm:text-base text-sm lg:text-xl hover:text-accent-white hover:scale-95">
              <span className="md:text-lg sm:text-base text-sm lg:text-xl">
                Add to Cart
              </span>
              <span>
                <CartLogoSvg />
              </span>
            </button>
            <button className="flex sm:hidden gap-2 items-center px-3 py-1.5 rounded-[5px] cursor-pointer border border-secondary-gray font-semibold text-secondary-gray duration-500 transition-all hover:bg-primary-green md:text-lg sm:text-base text-sm lg:text-xl hover:text-accent-white hover:scale-95">
              <span className="md:text-lg sm:text-base text-sm lg:text-xl">
                Add
              </span>
              <span>
                <CartLogoSvg />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
