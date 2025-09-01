import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Orders
      </h2>
      <div className="flex gap-x-4 items-center">
        <div className="relative">
          <input
            placeholder="Search Payments"
            type="search"
            className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[300px]"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
        </div>
        <button className="cursor-pointer py-3 border px-9 rounded-md text-[#274F45] font-lato font-semibold hover:scale-110 duration-500 ease-in-out">
          Manage Methods
        </button>
      </div>
    </div>
  );
};

export default page;
