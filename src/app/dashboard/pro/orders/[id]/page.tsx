import { Pen } from "@/Components/Svg/SvgContainer";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-[40px] font-semibold text-[#000]">Order Details</h3>
        <div className="flex gap-x-3">
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out">
            Track Package
          </button>
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out flex gap-x-1 items-center">
            <Pen /> Edit Order
          </button>
        </div>
      </div>
      <div className="pt-8 flex gapx-8">
        <div className="">
          <h4 className="text-[#000] font-bold text-[16px]">Order Status</h4>
          <div className="relative my-3">
            <select
              name=""
              id=""
              className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 py-[10px] w-[190px] text-[#274F45] text-[14px] font-normal"
            >
              <option value="Order Confirmed">Order Confirmed</option>
              <option value="Order Packaged">Order Packaged</option>
              <option value="Package Shipped">Package Shipped</option>
              <option value="Package Delivered">Package Delivered</option>
            </select>
            <FaAngleDown className="absolute top-3 left-40 size-5" />
          </div>
          <div className="flex items-center my-10">
            <div className="p-[1px] w-6 h-6  border-2 rounded-full border-[#274F45] flex justify-center items-center">
              <div className=" w-4 h-4 bg-[#274F45] rounded-full"></div>
            </div>
            <div className="border-dashed border-t border-[#274F45] w-[190px]"></div>
            <div className="p-[1px] w-6 h-6  border-2 rounded-full border-[#274F45] flex justify-center items-center">
              <div className=" w-4 h-4 bg-[#274F45] rounded-full"></div>
            </div>
            <div className="border-dashed border-t border-[#274F45] w-[190px]"></div>
            <div className="p-[1px] w-6 h-6  border-2 rounded-full border-[#A7A39C] flex justify-center items-center">
              <div className=" w-4 h-4 bg-[#A7A39C] rounded-full"></div>
            </div>
            <div className="border-dashed border-t border-[#274F45] w-[190px]"></div>
            <div className="p-[1px] w-6 h-6  border-2 rounded-full border-[#A7A39C] flex justify-center items-center">
              <div className=" w-4 h-4 bg-[#A7A39C] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-x-[53px]"></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default page;
