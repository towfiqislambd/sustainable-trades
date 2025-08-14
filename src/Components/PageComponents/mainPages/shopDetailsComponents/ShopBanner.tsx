import React from "react";
import bannerBg from "@/Assets/shop_cover.jpg";
import profileBg from "@/Assets/shop_profile.png";
import award from "@/Assets/award.png";
import badge from "@/Assets/badge.png";
import author from "@/Assets/shop_author.jpg";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import { LocationSvg, StarSvg } from "@/Components/Svg/SvgContainer";

const ShopBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg.src})` }}
      className="h-[600px] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-overlay py-10 bg-fixed mb-10"
    >
      <Container>
        <div className="flex justify-between">
          {/* Left - Shop Info */}
          <div className="space-y-4">
            {/* Shop Profile */}
            <figure className="size-[153px] rounded-full">
              <Image
                src={profileBg}
                alt="profile"
                className="size-full rounded-full object-cover"
              />
            </figure>

            <div className="flex gap-6 items-center">
              {/* Shop Name */}
              <h3 className="text-white text-4xl font-semibold">
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

            {/* Description */}
            <p className="max-w-[350px] text-accent-white text-lg">
              Hand made, environmentally friendly soaps, shampoo, and bath items
            </p>

            {/* Location */}
            <div className="flex gap-3 items-center pt-3">
              <LocationSvg />
              <p className="text-accent-white text-lg">Denver, Colorado</p>
            </div>

            {/* Reviews */}
            <div className="flex gap-3 items-center">
              {Array.from({ length: 5 }).map(() => (
                <p className="size-9 shrink-0 shadow border border-gray-600 rounded-full bg-primary-green grid place-items-center">
                  <StarSvg />
                </p>
              ))}
              <p className="font-semibold text-lg text-gray-200">4.8</p>
            </div>

            {/* btns */}
            <div className="flex gap-5 items-center pt-5">
              <button className="px-8 py-3.5 rounded-lg cursor-pointer shadow text-lg font-semibold text-primary-green bg-[#D4E2CB] duration-300 transition-transform hover:scale-105">
                Follow Shop
              </button>
              <button className="px-8 py-3.5 rounded-lg cursor-pointer shadow text-lg font-semibold text-accent-white bg-black/10 duration-300 transition-transform hover:scale-105 border border-accent-white">
                Message Seller
              </button>
            </div>
          </div>

          {/* Right - Shop Author Info */}
          <div className="w-[300px] border border-gray-600 rounded-lg shadow-lg px-6 py-3 bg-black/30 self-end">
            <div className="flex gap-5 items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">Jimmy</h3>
                <p className="text-accent-white">Organic Bath Soaps</p>
              </div>
              <Image
                src={author}
                alt="author"
                className="size-14 rounded-full"
              />
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
        </div>
      </Container>
    </section>
  );
};

export default ShopBanner;
