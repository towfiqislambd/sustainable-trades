import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import Container from "@/Components/Common/Container";

type FeaturedItem = {
  id: number;
  shop_info: {
    shop_image: string;
    shop_name: string;
    address: {
      address_line_1: string;
    };
  };
};

interface FeaturedProps {
  data: FeaturedItem[];
  featured: boolean;
}

const FeaturedShops = ({ data, featured }: FeaturedProps) => {
  return (
    <section className="mt-50 md:mt-0 py-20">
      <Container>
        {/* Title */}
        <h2 className="section_title md:text-start text-center ">
          {featured ? "Featured Shops" : "All Shops"}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data?.map(({ id, shop_info }) => (
            <Link
              href={`/shop-details/${id}`}
              key={id}
              className="text-center space-y-1.5"
            >
              {/* Shop Image */}
              <figure className="size-30 xl:size-64 mx-auto cursor-pointer rounded-full border border-gray-100 group relative">
                <div className="absolute bg-black/50 size-full rounded-full inset-0 opacity-0 duration-500 transition-all group-hover:opacity-100 flex justify-center items-center group-hover:backdrop-blur-[1px]">
                  <IoLink className="text-white text-2xl" />
                </div>

                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${shop_info?.shop_image}`}
                  alt="shop_image"
                  fill
                  className="size-full rounded-full object-cover"
                />
              </figure>

              {/* Shop Name */}
              <h3 className="mt-4 text-sm md:text-xl font-semibold text-primary-green">
                {shop_info?.shop_name}
              </h3>

              {/* Shop Reviews */}
              <div className="flex gap-2 items-center justify-center">
                <div className="flex gap-1 items-center justify-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className="text-primary-green text-xs md:text-base"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-secondary-black">
                  (4)
                </p>
              </div>

              {/* Shop Address */}
              <h4 className="text-secondary-black text-xs md:text-[15px]">
                {shop_info?.address?.address_line_1}
              </h4>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedShops;
