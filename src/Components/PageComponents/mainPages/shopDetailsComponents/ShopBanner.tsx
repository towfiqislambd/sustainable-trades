"use client";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import award from "@/Assets/award.png";
import badge from "@/Assets/badge.png";
import { CgSpinnerTwo } from "react-icons/cg";
import { useFollowShop } from "@/Hooks/api/cms_api";
import Container from "@/Components/Common/Container";
import { LocationSvg, StarSvg } from "@/Components/Svg/SvgContainer";

const ShopBanner = ({ data }: any) => {
  const { user } = useAuth();
  const bannerUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${data?.shop_info?.shop_banner}`;
  const { mutate: followShopMutation, isPending } = useFollowShop(
    data?.shop_info?.id
  );

  const handleFollowShop = () => {
    if (!user) {
      return toast.error("Please login first");
    }
    followShopMutation();
  };

  const handleMessage = () => {
    if (!user) {
      return toast.error("Please login first");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bannerUrl})`,
      }}
      className=" md:h-[600px] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-overlay py-10 bg-fixed mb-10"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left - Shop Info */}
          <div className="space-y-4">
            {/* Shop Profile */}
            <div className="flex md:justify-start justify-center items-center ">
              <figure className="size-22 md:size-[153px] rounded-full relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data?.shop_info?.shop_image}`}
                  alt="profile image"
                  fill
                  className="size-full rounded-full object-cover"
                />
              </figure>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
              {/* Shop Name */}
              <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-[36px]">
                {data?.shop_info?.shop_name}
              </h3>

              <div className="flex gap-3 items-center">
                <figure className="size-6 md:size-10 bg-[#D4E2CB] rounded-full grid place-items-center cursor-pointer">
                  <Image
                    src={award}
                    alt="award"
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </figure>

                <figure className="size-6 md:size-10 bg-[#E48872] rounded-full grid place-items-center cursor-pointer">
                  <Image
                    src={badge}
                    alt="badge"
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </figure>
              </div>
            </div>

            {/* Description */}
            <p className="md:max-w-[350px] text-accent-white md:text-lg">
              {data?.shop_info?.about?.statement}
            </p>

            {/* Location */}
            <div className="flex gap-3 items-center md:pt-3">
              <LocationSvg />
              <p className="text-accent-white md:text-lg">
                {data?.shop_info?.address?.address_line_1}
              </p>
            </div>

            {/* Reviews */}
            <div className="flex gap-3 items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <p
                  key={idx}
                  className="size-9 shrink-0 shadow border border-gray-600 rounded-full bg-primary-green grid place-items-center"
                >
                  <StarSvg />
                </p>
              ))}

              <p className="font-semibold text-lg text-gray-200">4.8</p>
            </div>

            {/* btns */}
            <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 items-center md:pt-5">
              <button
                onClick={handleFollowShop}
                className="px-8 md:py-3.5 rounded-lg cursor-pointer shadow md:text-lg font-semibold text-primary-green bg-[#D4E2CB] duration-300 transition-transform hover:scale-105 w-full md:w-auto py-1.5"
              >
                {isPending ? (
                  <p className="flex gap-2 items-center justify-center">
                    <CgSpinnerTwo className="animate-spin text-xl" />
                    <span>Please wait...</span>
                  </p>
                ) : data?.is_followed ? (
                  "Unfollow Shop"
                ) : (
                  "Follow Shop"
                )}
              </button>

              <button
                onClick={handleMessage}
                className="px-8 md:py-3.5 rounded-lg cursor-pointer shadow md:text-lg font-semibold text-accent-white bg-black/10 duration-300 transition-transform hover:scale-105 border border-accent-white w-full md:w-auto py-1.5"
              >
                Message Seller
              </button>
            </div>
          </div>

          {/* Right - Shop Author Info */}
          <div className="hidden md:block mt-4 md:w-[300px] border border-gray-600 rounded-lg shadow-lg px-6 py-3 bg-black/30 md:self-end">
            <div className="flex gap-5 items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">
                  {data?.first_name} {data?.last_name}
                </h3>
                <p className="text-accent-white">
                  {data?.shop_info?.shop_name}
                </p>
              </div>

              <figure className="size-14 rounded-full relative grid place-items-center text-xl text-white font-semibold bg-accent-red">
                {data?.avatar ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data?.avatar}`}
                    alt="author"
                    fill
                    className="size-full rounded-full"
                  />
                ) : (
                  <span>{data?.first_name.at(0)}</span>
                )}
              </figure>
            </div>

            <p className="py-1 w-fit rounded-full font-semibold my-4 px-3 text-sm bg-accent-white text-secondary-black">
              Veterinarian
            </p>

            <div className="flex gap-2 items-center mb-2">
              <p className="size-5 rounded-full bg-[#D4E2CB]"></p>
              <p className="text-lg text-[#A7A39C] font-semibold">340 Trades</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="size-5 rounded-full bg-[#E48872]"></p>
              <p className="text-lg text-[#A7A39C] font-semibold">2340 Sales</p>
            </div>
          </div>

          <div className="md:hidden block relative mt-14 md:w-[320px] border border-gray-600 rounded-lg shadow-lg px-6 py-5 bg-black/30">
            {/* Profile Image - floating top center */}
            <figure className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full size-14 grid place-items-center text-xl text-white font-semibold bg-accent-red">
              {data?.avatar ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data?.avatar}`}
                  alt="author"
                  fill
                  className="size-full rounded-full"
                />
              ) : (
                <span>{data?.first_name.at(0)}</span>
              )}
            </figure>

            {/* Name & Description */}
            <div className="flex justify-between items-center ">
              <div className="">
                <h3 className="text-white font-semibold text-xl">
                  {data?.first_name} {data?.last_name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {data?.shop_info?.shop_name}
                </p>
              </div>

              {/* Veterinarian Tag */}
              <p className=" rounded-full font-medium px-3 py-1 text-xs bg-white text-black">
                Veterinarian
              </p>
            </div>

            <div className="flex  gap-3 items-center mt-4">
              {/* Trades */}
              <div className="flex  items-center gap-2">
                <span className="flex items-center justify-center size-7 rounded-full bg-[#D4E2CB]">
                  <p className="size-5 rounded-full bg-[#D4E2CB]"></p>
                </span>
                <p className="text-lg text-gray-300 font-semibold">
                  340 Trades
                </p>
              </div>

              {/* Sales */}
              <div className="flex items-center gap-2">
                <p className="size-5 rounded-full bg-[#E48872]"></p>
                <p className="text-lg text-gray-300 font-semibold">
                  2,430 Sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShopBanner;
