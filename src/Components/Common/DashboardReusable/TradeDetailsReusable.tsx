import React from "react";
import DetailsImage from "../../../Assets/e1.jpg";
import Image from "next/image";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaRegStar } from "react-icons/fa6";
import { LocationSvg1 } from "@/Components/Svg/SvgContainer";

const TradeDetailsReusable = () => {
  return (
    <div>
      <div className="flex gap-x-5 items-center mt-6">
        <h3 className="text-[16px] text-[#274F45] font-semibold">
          Trade Details
        </h3>
        <h4 className="text-[16px] text-[#A7A39C] font-semibold">11/28/2023</h4>
        <h5 className="text-[16px] text-[#A7A39C] font-semibold">
          Inquiry <span># 378</span>
        </h5>
      </div>
      <div className="flex justify-between my-10">
        <div className="flex gap-x-4">
          <Image
            src={DetailsImage}
            alt="DetailsImage"
            height={100}
            width={100}
            className="h-[100px] w-[100px]"
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="text-[20px] font-semibold text-[#13141D]">
              8oz Watermelon Sustainable Bar Soap
            </h3>
            <h4 className="text-[20px] font-normal text-[#4B4A47] flex gap-x-5 items-center">
              The Soap Shop
              <span className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                View Shop
              </span>
            </h4>
            <div className="flex gap-x-[2px]">
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
            </div>
            <div className="flex gap-x-2 items-center">
              <LocationSvg1 />
              <h5 className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                13 mi. away -
              </h5>
              <h5 className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                Denver, CO
              </h5>
            </div>
            <ul className="flex flex-col gap-y-2">
              <li className="flex gap-x-2 te4xt-[16px] font-normal text-[#4B4A47] items-center">
                Qty: <span className="font-bold">3 Bars </span>
              </li>
              <li className="flex gap-x-2 te4xt-[16px] font-normal text-[#4B4A47] items-center">
                Item Price: <span className="font-bold">$10</span>
              </li>
              <li className="flex gap-x-2 te4xt-[16px] font-normal text-[#4B4A47] items-center">
                Total amount: <span className="font-bold">$30 </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h4>Organic Bath Soaps</h4>
        </div>
      </div>
    </div>
  );
};

export default TradeDetailsReusable;
