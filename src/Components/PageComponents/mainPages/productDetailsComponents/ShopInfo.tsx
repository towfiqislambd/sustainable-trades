import { Love2Svg } from "@/Components/Svg/SvgContainer";
import Image from "next/image";
import React from "react";
import author from "@/Assets/shop_author.jpg";

const ShopInfo = () => {
  return (
    <>
      <div className="flex gap-4 items-center mb-7">
        <Image src={author} alt="author" className="size-14 rounded-full" />

        <div>
          <h3 className="font-semibold text-xl">Jimmy Shaw, Veterenarian</h3>
          <p className="text-secondary-gray">
            Organic Bath Soaps, Est. 2023, Location: Houston TX
          </p>
        </div>
      </div>

      <button className="bg-[#B0DEDB] text-xl font-semibold flex gap-3 items-center text-primary-green px-5 py-2 rounded-lg cursor-pointer hover:scale-95 transition-transform duration-500">
        <span>Follow Shop</span>
        <Love2Svg />
      </button>
    </>
  );
};

export default ShopInfo;
