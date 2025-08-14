"use client";
import React, { useState } from "react";
import coverBg from "@/Assets/cover.jpg";
import profileBg from "@/Assets/shop_author.jpg";
import Image from "next/image";
import author from "@/Assets/shop_author.jpg";
import Container from "@/Components/Common/Container";
import {
  DollarSvg,
  DThreeSvg,
  EditIconDarkSvg,
  EditIconSvg,
  LocationTwoSvg,
  LoveSvg,
  MessSvg,
  StarSvg,
} from "@/Components/Svg/SvgContainer";
import award from "@/Assets/award.png";
import badge from "@/Assets/badge.png";

const EditShopBanner = () => {
  const [open, isOpen] = useState<boolean>(false);
  const [shopProfile, setShopProfile] = useState<any>(null);
  const [shopCover, setShopCover] = useState<any>(null);

  
  return (
    <section className="mb-20">
      {/* Shop Profile and Cover photo */}
      <div
        style={{
          backgroundImage: `url(${shopCover ? shopCover : coverBg.src})`,
        }}
        className="h-[350px] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-overlay relative"
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
                  setShopCover(URL.createObjectURL(file));
                }
              }}
            />

            <div className="size-[180px] -mb-10 relative">
              <label
                htmlFor="profile"
                className="absolute right-2 top-1 bg-white size-10 cursor-pointer rounded-full grid place-items-center z-30 border border-gray-200"
              >
                <EditIconSvg />
              </label>

              <input
                type="file"
                accept="image/*"
                id="profile"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setShopProfile(URL.createObjectURL(file));
                  }
                }}
              />

              <Image
                src={shopProfile || profileBg}
                alt="shop_profile"
                fill
                className="size-full rounded-full border-[5px] border-white"
              />
            </div>
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
                Organic Bath Soaps
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
            <div className="flex gap-3 items-center py-3">
              <LocationTwoSvg />
              <p className="text-secondary-gray text-lg">
                1234 Washington Blvd, Denver, Colorado 12340
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
            </div>

            <div className="flex gap-5 items-center mt-5">
              <button className=" px-3 py-2 rounded-lg cursor-pointer shadow font-semibold text-secondary-black bg-transparent duration-300 transition-transform hover:scale-105 border border-gray-400 flex gap-2 items-center">
                <LoveSvg />
                Follow Shop
              </button>

              <button className="px-3 py-2 rounded-lg cursor-pointer shadow font-semibold text-primary-green bg-transparent duration-300 transition-transform hover:scale-105 border border-gray-400 flex gap-1 items-center underline">
                <EditIconSvg />
                Edit Shop
              </button>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="flex gap-5 items-center justify-between mb-5">
              <div>
                <h3 className="text-secondary-black font-semibold text-xl mb-1">
                  Jimmy
                </h3>
                <p className="text-secondary-gray">Organic Bath Soaps</p>
              </div>
              <Image
                src={author}
                alt="author"
                className="size-14 rounded-full"
              />
            </div>

            <button className="px-7 py-3 rounded-lg cursor-pointer shadow font-semibold text-secondary-black bg-transparent duration-300 transition-transform hover:scale-105 border border-gray-400 flex gap-3 items-center">
              <MessSvg />
              Message Seller
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EditShopBanner;
