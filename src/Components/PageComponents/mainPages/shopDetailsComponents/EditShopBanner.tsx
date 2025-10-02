"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import award from "@/Assets/award.png";
import badge from "@/Assets/badge.png";
import {
  DollarSvg,
  DThreeSvg,
  EditIconDarkSvg,
  EditIconSvg,
  LocationTwoSvg,
  StarSvg,
} from "@/Components/Svg/SvgContainer";
import Container from "@/Components/Common/Container";
import { useUpdateShopBanner, useUpdateShopPhoto } from "@/Hooks/api/cms_api";
import { ImSpinner9 } from "react-icons/im";

const EditShopBanner = ({ shop_id, data }: any) => {
  const bannerUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${data?.shop_info?.shop_banner}`;
  const [shopProfile, setShopProfile] = useState<any>(null);
  const [shopCover, setShopCover] = useState<any>(null);
  const { mutate: updateShopPhoto, isPending: profilePending } =
    useUpdateShopPhoto();
  const { mutate: updateShopBanner, isPending: bannerPending } =
    useUpdateShopBanner();

  return (
    <section className="mb-12">
      {/* Shop Profile and Cover photo */}
      <div
        style={{
          backgroundImage: `url(${bannerPending ? null : bannerUrl})`,
        }}
        className={`h-[350px] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-overlay relative ${
          bannerPending && "animate-pulse"
        }`}
      >
        <Container>
          <div className="flex h-[350px] items-end relative">
            <label
              htmlFor="cover"
              className="absolute top-10 right-0 bg-primary-green size-10 cursor-pointer rounded-full grid place-items-center z-30 border border-gray-500 shadow"
            >
              <EditIconDarkSvg />
            </label>

            <input
              type="file"
              accept="image/*"
              id="cover"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  setShopCover(file);
                  updateShopBanner({ shop_banner: shopCover });
                }
              }}
            />

            <figure className="size-[180px] -mb-10 relative bg-gray-300 grid place-items-center rounded-full border-[5px] border-white">
              {!profilePending && (
                <label
                  htmlFor="profile"
                  className="absolute right-2 top-1 bg-white size-10 cursor-pointer rounded-full grid place-items-center z-30 border border-gray-200"
                >
                  <EditIconSvg />
                </label>
              )}

              <input
                type="file"
                accept="image/*"
                id="profile"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setShopProfile(file);
                    updateShopPhoto({ shop_image: shopProfile });
                  }
                }}
              />
              {profilePending ? (
                <ImSpinner9 className="animate-spin text-6xl text-primary-blue" />
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data?.shop_info?.shop_image}`}
                  alt="shop_profile"
                  fill
                  className="size-full rounded-full"
                />
              )}
            </figure>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex justify-between items-center mt-14">
          {/* Left */}
          <div>
            {/* Shop Name */}
            <div className="flex gap-6 items-center">
              <h3 className="text-secondary-black text-3xl font-semibold">
                {data?.shop_info?.shop_name}
              </h3>
              <div className="flex gap-3 items-center">
                <figure className="size-10 bg-[#D4E2CB] rounded-full grid place-items-center cursor-pointer">
                  <Image src={award} alt="award" className="w-6 h-6" />
                </figure>

                <figure className="size-10 bg-[#E48872] rounded-full grid place-items-center cursor-pointer">
                  <Image src={badge} alt="badge" className="w-6 h-6" />
                </figure>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 items-center py-4">
              <LocationTwoSvg />
              <p className="text-secondary-gray text-lg">
                {data?.shop_info?.address?.address_line_1}
              </p>
            </div>

            {/* Counts */}
            <div className="flex gap-8 items-center">
              <div className="flex gap-2 items-center">
                <p className="flex justify-center items-center size-7 rounded-full bg-primary-green">
                  <StarSvg />
                </p>
                <p className="text-secondary-black font-semibold">4.8</p>
              </div>

              <div className="flex gap-2 items-center">
                <p className="flex justify-center items-center size-7 rounded-full bg-accent-red">
                  <DollarSvg />
                </p>
                <p className="text-secondary-black font-semibold">210 Sales</p>
              </div>

              <div className="flex gap-2 items-center">
                <p className="flex justify-center items-center size-7 rounded-full bg-[#D4E2CB]">
                  <DThreeSvg />
                </p>
                <p className="text-secondary-black font-semibold">460 Trades</p>
              </div>

              <Link
                href={`/edit-my-shop/${shop_id}`}
                className="underline font-semibold text-primary-green duration-300 hover:scale-95 transition-transform"
              >
                Edit Shop
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="flex gap-5 items-center justify-between mb-5">
              <div>
                <h3 className="text-secondary-black font-semibold text-xl mb-1">
                  {data?.first_name} {data?.last_name}
                </h3>
                <p className="text-secondary-gray">
                  {data?.shop_info?.shop_name}
                </p>
              </div>
              <figure className="size-14 rounded-full bg-accent-red grid place-items-center font-semibold text-lg">
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EditShopBanner;
