"use client";
import Image from "next/image";
import React, { useState } from "react";
import DetailsImage from "../../../Assets/e1.jpg";
import { useParams, useRouter } from "next/navigation";
import TradeDetaillsBottom from "./TradeDetaillsBottom";
import { FaAngleDown, FaRegStar } from "react-icons/fa6";
import { LocationSvg1, Reload } from "@/Components/Svg/SvgContainer";

const TradeDetailsReusable = () => {
  const params = useParams();
  const router = useRouter();
  const tradeId = params?.id;
  const [isOpen, setIsOpen] = useState(false);
  const actionButtons = ["Approve", "Deny", "Counter"];


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
            className="h-[100px] w-[100px] rounded-lg"
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
          <h4 className="text-[20px] font-semibold text-[#274F45]">
            Organic Bath Soaps
          </h4>
          <h3 className="text-[32px] font-semibold text-[#000] py-3">
            Coconut Bar Soap
          </h3>
          <ul>
            <li className="text-[20px] font-semibold text-[#274F45]">
              Product Description
            </li>
            <li className="text-[16px] font-semibold text-[#13141D] list-disc ml-5">
              Made with 100% organic coconut oil, ensuring a natural and
              chemical-free cleansing experience.
            </li>
            <li className="text-[16px] font-semibold text-[#13141D] list-disc ml-5">
              Free from synthetic additives, parabens, and harsh chemicals for a
              gentle and nourishing bath.
            </li>
          </ul>
          <div className="flex gap-x-2 mt-4 items-center">
            <h4 className="text-[14px] font-bold text-[#000] underline">
              Organic Bath Soaps
            </h4>
            <div className="flex gap-x-[2px]">
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
              <FaRegStar className="fill-green-950" />
            </div>
          </div>
          <div className="flex gap-x-2 items-center mt-1">
            <LocationSvg1 />
            <h5 className="text-[14px] underline cursor-pointer text-[#000] font-lato">
              13 mi. away -
            </h5>
            <h5 className="text-[14px] underline cursor-pointer text-[#000] font-lato">
              Denver, CO
            </h5>
          </div>
          <div className="border-b">
            {/* Header */}
            <div
              className="flex justify-between py-4 cursor-pointer items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h5 className="text-[20px] font-normal text-[#274F45]">
                Shop FAQ
              </h5>
              <FaAngleDown
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Content with smooth transition */}
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="pb-4 text-gray-600">
                You can shop from our store anytime. Orders are usually
                processed within 24 hours. Shipping times vary based on your
                location.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-5 items-center mt-16">
        <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
        <div className="inline-block">
          <Reload
            className={`cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out`}
          />
        </div>
        <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
      </div>
      <div className="mt-14 py-6 border-b border-[#BFBEBE]">
        <div className="flex gap-x-4">
          <Image
            src={DetailsImage}
            alt="DetailsImage"
            height={100}
            width={100}
            className="h-[100px] w-[100px] rounded-lg"
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
      </div>
      <div className="flex gap-x-5 flex-wrap mt-6">
        {actionButtons.map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              if (btn === "Counter") {
                router.push(`/dashboard/pro/trades/counter/${tradeId}`);
              } else if (btn === "Approve") {
                router.push(`/dashboard/pro/trades/approve/${tradeId}`);
              } else if (btn === "Deny") {
                router.push(`/dashboard/pro/trades/deny/${tradeId}`);
              }
            }}
            className={`relative cursor-pointer py-[10px] border px-4 rounded-md font-lato font-semibold overflow-hidden
            hover:scale-110 duration-500 ease-in-out
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-[#274F45] after:transition-all after:duration-500 hover:after:h-full hover:after:left-0 hover:text-white`}
          >
            <span className="relative z-10">{btn}</span>
          </button>
        ))}
      </div>
      <div className="my-20">
        <TradeDetaillsBottom />
      </div>
    </div>
  );
};

export default TradeDetailsReusable;
