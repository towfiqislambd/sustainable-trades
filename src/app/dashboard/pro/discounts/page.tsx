import { Delete } from "@/Components/Svg/SvgContainer";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const tabs = [
    { label: "Active" },
    { label: "Scheduled" },
    { label: "Inactive" },
    { label: "", icon: <Delete className="w-5 h-5" /> }, 
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Discounts
        </h2>
        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <input
              placeholder="Search Discounts"
              type="search"
              className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[300px]"
            />
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
            <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
          </div>
          <Link href={"discounts/create-discount"}>
            <button className="hover:border-[#D4E2CB] hover:border border hover:bg-transparent rounded-[8px] p-4 text-[20px] font-semibold cursor-pointer bg-[#D4E2CB] text-[#274F45] duration-500 ease-in-out">
              Create Discount
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
