import { Pen } from "@/Components/Svg/SvgContainer";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-[40px] font-semibold text-[#000]">Order Details</h3>
        <div className="flex gap-x-3">
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out">
            Track Package
          </button>
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out flex gap-x-1 items-center">
            <Pen/> Edit Order
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
