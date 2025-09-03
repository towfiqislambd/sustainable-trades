"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import TradeLayout from "../../TradeLayout";
import { LocationSvg1 } from "@/Components/Svg/SvgContainer";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import DetailsImage from "../../../../../../Assets/e1.jpg";

const page = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as "Pending";
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div>
      <TradeLayout initialTab={tabParam ?? "Pending"}>
        <div className="my-16">
          <h3 className="text-[#13141D] font-semibold text-[20px] pb-4">
            Counter Offer
          </h3>
          <div className="py-4 border-t border-b border-[#BFBEBE] flex justify-between">
            <div className="flex gap-x-10">
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
              </div>
            </div>
            <div className="">
              <h4 className="text-[#4B4A47] font-semibold text-[14px]">
                Product/Service Trade
              </h4>
              <div className="flex gap-x-5 mt-1">
                <select
                  name=""
                  id=""
                  className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-[500px]"
                >
                  <option
                    value="Coconut"
                    className="font-semibold text-[16px] text-[#13141D]"
                  >
                    Coconut
                  </option>
                  <option
                    value="Coconut"
                    className="font-semibold text-[16px] text-[#13141D]"
                  >
                    Coconut Oil
                  </option>
                  <option
                    value="Coconut"
                    className="font-semibold text-[16px] text-[#13141D]"
                  >
                    Organic Soap
                  </option>
                  <option
                    value="Coconut"
                    className="font-semibold text-[16px] text-[#13141D]"
                  >
                    Soap Bar
                  </option>
                </select>
                <div className="px-4 py-2 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                  <button
                    onClick={handleDecrement}
                    className="font-bold text-[20px] text-[#000] cursor-pointer"
                  >
                    -
                  </button>
                  <button className="font-bold text-[20px] text-[#000]">
                    {count}
                  </button>
                  <button
                    onClick={handleIncrement}
                    className="font-bold text-[20px] text-[#000] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <h5 className="flex gap-x-2 te4xt-[16px] font-semibold text-[#4B4A47] items-center justify-end py-2">
                Total amount: <span className="text-[20px]">$30 </span>
              </h5>
              <div className="flex gap-x-5 items-center justify-end">
                <h6 className="text-[16px] font-semibold text-[#A7A39C]">+</h6>
                <p className="text-[16px] font-semibold text-[#A7A39C]">
                  Add another product/service
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </TradeLayout>
    </div>
  );
};

export default page;
