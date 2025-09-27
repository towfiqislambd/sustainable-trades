import Container from "@/Components/Common/Container";
import Image from "next/image";
import React from "react";
import about from "@/Assets/about.png";
import author from "@/Assets/shop_author.jpg";

const AboutShop = () => {
  return (
    <section id="About" className="mt-16">
      <Container>
        <h2 className="section_sub_title">About us</h2>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-center">
          <div className="flex flex-col sm:flex-row gap-5 md:gap-10 ">
            {/* Left - Shop Image */}
            <figure className="size-auto xs:size-[220px] md:size-[280px] lg:size-[350px] shrink-0 border border-gray-50 rounded-xl relative">
              <div className="absolute inset-0 bg-black/20 rounded-xl" />
              <Image
                src={about}
                alt="about image"
                className="size-full rounded-xl"
              />
            </figure>

            {/* Center - Content */}
            <div className="">
              <h3 className="mb-2.5 md:mb-5 text-secondary-black text-sm sm:text-base md:text-lg lg:text-xl  xl:text-2xl font-semibold">
                Organic Bath Soaps
              </h3>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-secondary-black mb-2.5 md:mb-5">
                Making magic since 2023
              </h4>
              <p className="text-secondary-gray text-xs sm:text-sm md:text-base">
                Welcome to Organic Bath Soaps, where nature meets luxury in
                every bar of soap. Founded with a passion for organic skincare
                and a commitment to sustainability, we bring you a collection of
                indulgent bath soaps crafted with care. We believe that
                self-care should be a sensorial experience that nourishes both
                the body and the soul. Inspired by the... view all
              </p>
            </div>
          </div>
          {/* Right - Meet the seller */}
          <div className="shrink-0">
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-secondary-black mb-4 md:mb-7">
              Meet the Sellers
            </h4>

            <div className="flex gap-4 items-center">
              <Image
                src={author}
                alt="author"
                className="size-8 md:size-14 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                  Jimmy
                </h3>
                <p className="text-secondary-gray">Organic Bath Soaps</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-5">
              <Image
                src={author}
                alt="author"
                className="size-8 md:size-14 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                  Jimmy
                </h3>
                <p className="text-secondary-gray text-xs sm:text-sm md:text-base">
                  Organic Bath Soaps
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center mt-5">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                orgbathsoap.com
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutShop;
