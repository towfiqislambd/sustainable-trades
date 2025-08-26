import React from "react";
import { FaSearch } from "react-icons/fa";

const DashboardReusable = () => {
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <div className="relative w-full">
          <input
            placeholder={"Search..."}
            type="search"
            className="py-[10px] pl-4 outline-0 border border-[#274F45] rounded-[8px] text-[16px] text-[#67645F] font-normal w-full"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#274F45] h-[45px]"></div>
        </div>
      </div>
      <div className="py-9 flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[24px] font-semibold text-[#13141D] tracking-[2.4px]">
            Hi Jenn,
          </h3>
          <h3 className="text-[24px] font-semibold text-[#13141D] tracking-[2.4px]">
            Here’s your store: Earth’s Essence
          </h3>
        </div>
        <button className="px-[58px] py-4 rounded-[8px] bg-[#E48872] text-[18px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872]">
          Edit Shop
        </button>
      </div>
      <div className="border border-[#A7A39C] py-3 rounded-[8px]">
        <div className="flex justify-between items-center">
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Orders
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              12
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Trades
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              4
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Revenue
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              $458.32
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Visits
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              32
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReusable;
