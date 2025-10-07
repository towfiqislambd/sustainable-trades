"use client";
import "swiper/css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import { FaHeart } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { CgSpinnerTwo } from "react-icons/cg";
import { LuLoaderPinwheel } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAddFavorite, useAddToCart } from "@/Hooks/api/cms_api";
import { AddToCartSvg, DollarSvg, SignSvg } from "../Svg/SvgContainer";

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
  selling_option?: string;
  product_quantity?: number;
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
  is_feathered = false,
  has_wishlist = true,
  has_cart = true,
}: ProductProps) => {
  const { user } = useAuth();
  const { mutate: addFavoriteMutation, isPending } = useAddFavorite();
  const { mutate: addToCartMutation, isPending: addCardPending } = useAddToCart(
    product?.id
  );

  // Func for add to favorite
  const handleAddFavorite = (product_id: any) => {
    if (!user) {
      return toast.error("Please login first to proceed");
    }
    addFavoriteMutation({ endpoint: `/api/add-favorites/${product_id}` });
  };

  // Func for add to cart
  const handleAddToCart = () => {
    if (!user) {
      return toast.error("Please login first to proceed");
    }
    addToCartMutation({ quantity: 1 });
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

      {/* Stock Info */}
      {product?.product_quantity ? (
        <button className="absolute top-3 left-3 shadow-lg font-medium px-3 py-1 rounded-full bg-primary-green text-white z-10 text-sm">
          In Stock
        </button>
      ) : (
        <button className="absolute top-3 left-3 shadow-lg font-medium px-3 py-1 rounded-full bg-accent-red text-white z-10 text-sm">
          Stock Out
        </button>
      )}

      {/* Product Image Gallery */}
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
                is_feathered ? "h-[350px]" : "h-[270px]"
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

      {/* Product Name */}
      <Link
        href={`/product-details/${product?.id}`}
        className="text-primary-green md:text-lg sm:text-base text-sm lg:text-xl font-semibold py-3 truncate hover:underline block"
      >
        {product?.product_name}
      </Link>

      {/* Badge */}
      {product?.selling_option === "Trader/Barter" && (
        <p className="size-6 shrink-0 rounded-full bg-[#D4E2CB] grid place-items-center">
          <SignSvg />
        </p>
      )}
      {product?.selling_option === "For Sale" && (
        <p className="size-6 shrink-0 rounded-full bg-accent-red grid place-items-center">
          <DollarSvg />
        </p>
      )}
      {product?.selling_option === "For Sale or Trade Barter" && (
        <div className="flex gap-2 items-center">
          <p className="size-6 shrink-0 rounded-full bg-accent-red grid place-items-center">
            <DollarSvg />
          </p>
          <p className="size-6 shrink-0 rounded-full bg-[#D4E2CB] grid place-items-center">
            <SignSvg />
          </p>
        </div>
      )}

      <div className="flex  justify-between mt-2 items-center">
        {/* Product Price */}
        <p className="md:text-lg sm:text-base text-sm lg:text-xl font-semibold text-secondary-black">
          ${product?.product_price}
        </p>

        {/* Cart btn */}
        {has_cart && (
          <button
            onClick={handleAddToCart}
            disabled={
              addCardPending || product?.selling_option === "Trader/Barter"
            }
            className={`flex gap-2 items-center px-3 py-1.5 rounded-[5px] border font-semibold text-secondary-gray duration-500 transition-all sm:text-base text-sm ${
              addCardPending || product?.selling_option === "Trader/Barter"
                ? "cursor-not-allowed opacity-75 border-gray-400"
                : "cursor-pointer border-secondary-gray hover:bg-primary-green hover:text-accent-white hover:scale-95"
            }
              `}
          >
            {addCardPending ? (
              <p className="flex gap-2 items-center justify-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Adding...</span>
              </p>
            ) : (
              <p className="flex gap-2 items-center">
                <span>Add to Cart</span>
                <AddToCartSvg />
              </p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
