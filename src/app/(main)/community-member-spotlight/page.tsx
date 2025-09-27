import Container from "@/Components/Common/Container";
import Image from "next/image";
import React from "react";
import s1 from "@/Assets/s1.png";
import s2 from "@/Assets/s2.png";
import s3 from "@/Assets/s3.png";
import { RightSvg } from "@/Components/Svg/SvgContainer";

const data = [
  {
    id: 1,
    shop_image: s1,
    shop_name: "Aromatic Bliss",
    shop_owner: "Amanda Rachel",
    description:
      "Where nature's finest scents come to life! Our handcrafted aromatherapy products are designed to rejuvenate your mind, body, and soul. Discover the perfect blend of essential oils, candles, and diffusers that transform your space into a sanctuary of wellness and tranquility.",
    date: "09/09/2024",
  },
  {
    id: 2,
    shop_image: s2,
    shop_name: "Bob’s Barnyard Beauties",
    shop_owner: " Bob Smith",
    description:
      "Where nature's finest scents come to life! Our handcrafted aromatherapy products are designed to rejuvenate your mind, body, and soul. Discover the perfect blend of essential oils, candles, and diffusers that transform your space into a sanctuary of wellness and tranquility.",
    date: "09/09/2024",
  },
  {
    id: 3,
    shop_image: s3,
    shop_name: "Comforting Croissants",
    shop_owner: "Amanda Rachel",
    description:
      "Where nature's finest scents come to life! Our handcrafted aromatherapy products are designed to rejuvenate your mind, body, and soul. Discover the perfect blend of essential oils, candles, and diffusers that transform your space into a sanctuary of wellness and tranquility.",
    date: "09/09/2024",
  },
];

const Community = () => {
  return (
    <section className="py-5 md:py-10">
      <Container>
        <div className="space-y-6">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="rounded-xl flex flex-col lg:flex-row lg:items-center border border-gray-300"
            >
              {/* Left - Shop Image */}
              <figure className="w-full lg:w-[229px] h-[300px] lg:h-[230px] shrink-0 rounded-l-xl relative">
                <Image
                  src={item?.shop_image}
                  alt="shop_image"
                  fill
                  className="w-full h-full rounded-tl-xl rounded-tr-xl lg:rounded-l-xl"
                />
              </figure>

              {/* Right */}
              <div className="lg:grow px-4 py-2">
                <div className="flex flex-col sm:flex-row md:justify-between md:items-center">
                  <h3 className="tracking-[0.2px] font-semibold text-secondary-gray text-xl mb-1">
                    {item?.shop_name}
                  </h3>
                  <p className="text-secondary-gray text-sm">
                    <span className="font-semibold">Feature Date : </span>
                    <span>{item?.date}</span>
                  </p>
                </div>

                <p className="mb-3 text-[14px] md:text-base text-gray-500">
                  Owner : {item?.shop_owner}
                </p>

                <p className="text-gray-600 text-[13px] md:text-base max-w-[800px] mb-4">
                  {item?.description}
                </p>

                <button className="px-4 text-[12px]  py-2 rounded-lg font-semibold flex gap-2 items-center bg-[#D4E2CB] text-primary-green cursor-pointer duration-500 transition-transform hover:scale-105">
                  <span>View Shop</span>
                  <span>
                    <RightSvg />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Community;
