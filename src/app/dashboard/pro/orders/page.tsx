import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import ProordersTabs from "@/Components/Common/DashboardReusable/PrordersTabs";
import { Download } from "@/Components/Svg/SvgContainer";

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Orders
        </h2>
        <div className="flex gap-x-4 items-center">
          <button
            className="py px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer
                      duration-300 ease-in-out flex gap-x-2 items-center h-[50px] hover:translate-y-1"
          >
            <Download />
            Download File
          </button>
          <div className="relative">
            <input
              placeholder="Search Orders"
              type="search"
              className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[300px]"
            />
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
            <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
          </div>
          <div className="relative">
            <select
              name=""
              id=""
              className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 py-[10px] w-[190px] text-[#274F45] text-[14px] font-normal"
            >
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 6 Month">Last 6 Month</option>
              <option value="Last Year">Last Year</option>
            </select>
            <FaAngleDown className="absolute top-4 right-3" />
          </div>
        </div>
      </div>
      <div className="pt-9 pb-12">
        <ProordersTabs />
      </div>
    </>
  );
};

export default page;
