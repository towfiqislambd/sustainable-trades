import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-[40px] font-semibold text-[#000]">Trades</h3>
        <div className="relative">
          <input
            placeholder="Search..."
            type="search"
            className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[500px]"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
