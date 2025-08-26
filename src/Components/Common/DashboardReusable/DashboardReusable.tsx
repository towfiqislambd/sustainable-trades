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
    </div>
  );
};

export default DashboardReusable;
