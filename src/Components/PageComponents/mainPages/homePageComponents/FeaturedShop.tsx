import Container from "@/Components/Common/Container";
import { FaStar } from "react-icons/fa";
import React from "react";
import f1 from "@/Assets/f1.jpg";
import f2 from "@/Assets/f2.jpg";
import f3 from "@/Assets/f3.jpg";
import f4 from "@/Assets/f4.jpg";
import Image from "next/image";
import { IoLink } from "react-icons/io5";
import Link from "next/link";

const data = [
  {
    id: 1,
    shop_image: f1,
    shop_name: "Pressed Juicery",
    review_count: 23,
    review: 5,
    desc: "Barters & Trades",
  },
  {
    id: 2,
    shop_image: f2,
    shop_name: "The Blade Artistry",
    review_count: 20,
    review: 3,
    desc: "For Sale",
  },
  {
    id: 3,
    shop_image: f3,
    shop_name: "Soap Alchemy",
    review_count: 56,
    review: 4,
    desc: "Barters & Trades",
  },
  {
    id: 4,
    shop_image: f4,
    shop_name: "Tranquil Tree Yoga",
    review_count: 32,
    review: 5,
    desc: "Barters & Trades",
  },
];

const FeaturedShops = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="section_title">Featured Shops</h2>
        <div className="grid grid-cols-4 gap-10">
          {data?.map(item => (
            <Link
              href={`/shop-details/${item?.id}`}
              key={item?.id}
              className="text-center space-y-1.5"
            >
              <figure className="size-64 mx-auto cursor-pointer rounded-full border border-gray-100 group relative">
                <div className="absolute bg-black/50 size-full rounded-full inset-0 opacity-0 duration-500 transition-all group-hover:opacity-100 flex justify-center items-center group-hover:backdrop-blur-[1px]">
                  <IoLink className="text-white text-2xl" />
                </div>

                <Image
                  src={item?.shop_image}
                  alt="shop_image"
                  className="size-full rounded-full object-cover"
                />
              </figure>

              <h3 className="mt-4 text-xl font-semibold text-primary-green">
                {item?.shop_name}
              </h3>

              <div className="flex gap-2 items-center justify-center">
                <div className="flex gap-1 items-center justify-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="text-primary-green" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-secondary-black">
                  ({item?.review_count})
                </p>
              </div>

              <h4 className="text-secondary-black text-[15px]">{item?.desc}</h4>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedShops;
