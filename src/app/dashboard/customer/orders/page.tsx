import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <section className="mb-[1000px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Messages
        </h2>
        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <input
              placeholder="Search messages..."
              type="search"
              className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[300px]"
            />
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
            <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
          </div>
          <button className="cursor-pointer bg-[#D4E2CB] py-3 px-4 rounded-[100px] text-[#274F45] font-lato font-semibold hover:scale-110 duration-500 ease-in-out">
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
