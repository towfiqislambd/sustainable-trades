import React from "react";
import Link from "next/link";
import p1 from "@/Assets/p1.jpg";
import Image, { StaticImageData } from "next/image";
import { DollarSvg, LocationTwoSvg } from "../Svg/SvgContainer";

type ShopData = {
  id: number;
  shop_image: string | StaticImageData;
  shop_name: string;
  shop_location: string;
};

type ShopProps = {
  shop: ShopData;
};

const Shop = ({ shop }: ShopProps) => {
  return (
    <Link
      href={`/shop-details/1`}
      className="rounded-t-lg relative block hover:-translate-y-2 duration-400 transition-transform"
    >
      {/* Shop Image */}
      <figure className="w-full h-[200px] md:h-[250px rounded-lg border border-gray-100 relative">
        <div className="absolute inset-0 bg-black/20 rounded-lg" />
        <Image
          src={p1}
          alt="product image"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>

      {/* Shop Name */}
      <h3 className="text-primary-green text-xl font-semibold py-3 truncate">
        {shop?.shop_name}
      </h3>

      {/* Badge */}
      <p className="size-6 rounded-full bg-accent-red grid place-items-center">
        <DollarSvg />
      </p>

      {/* Shop Price */}
      <div className="flex mt-2 gap-2 items-center">
        <LocationTwoSvg />
        <p className="text-secondary-black">{shop?.shop_location}</p>
      </div>
    </Link>
  );
};

export default Shop;
