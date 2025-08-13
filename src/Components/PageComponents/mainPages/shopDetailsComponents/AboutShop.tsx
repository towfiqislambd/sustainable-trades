import Container from "@/Components/Common/Container";
import Image from "next/image";
import React from "react";
import about from "@/Assets/about.png";
import author from "@/Assets/shop_author.jpg";

const AboutShop = () => {
  return (
    <section id="About" className="mt-16">
      <Container>
        <h2 className="shop_detailed_heading">About us</h2>

        <div className="flex gap-10 items-center">
          {/* Left - Shop Image */}
          <figure className="size-[350px] shrink-0 border border-gray-50 rounded-xl relative">
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
            <Image
              src={about}
              alt="about image"
              className="size-full rounded-xl"
            />
          </figure>

          {/* Center - Content */}
          <div className="">
            <h3 className="mb-5 text-secondary-black text-2xl font-semibold">
              Organic Bath Soaps
            </h3>
            <h4 className="text-xl font-semibold text-secondary-black mb-5">
              Making magic since 2023
            </h4>
            <p className="text-secondary-gray">
              Welcome to Organic Bath Soaps, where nature meets luxury in every
              bar of soap. Founded with a passion for organic skincare and a
              commitment to sustainability, we bring you a collection of
              indulgent bath soaps crafted with care. We believe that self-care
              should be a sensorial experience that nourishes both the body and
              the soul. Inspired by the... view all
            </p>
          </div>

          {/* Right - Meet the seller */}
          <div className="shrink-0">
            <h4 className="text-xl font-semibold text-secondary-black mb-7">
              Meet the Sellers
            </h4>

            <div className="flex gap-4 items-center">
              <Image
                src={author}
                alt="author"
                className="size-14 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-xl">Jimmy</h3>
                <p className="text-secondary-gray">Organic Bath Soaps</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-5">
              <Image
                src={author}
                alt="author"
                className="size-14 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-xl">Jimmy</h3>
                <p className="text-secondary-gray">Organic Bath Soaps</p>
              </div>
            </div>

            <div className="flex gap-5 items-center mt-5">
              <h3 className="text-xl font-semibold">orgbathsoap.com</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutShop;
