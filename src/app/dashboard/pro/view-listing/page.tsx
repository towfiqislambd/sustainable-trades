import React from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Listings
      </h2>
      <div className="flex justify-between mt-6">
        <div className="flex gap-x-6">
          <div className="">
            <p className="text-[#13141D] text-[16px] font-semibold">
              sort by :
            </p>
            <select
              name=""
              id=""
              className="p-4 rounded-[10px] border border-[#A7A39C] mt-2  w-[190px] cursor-pointer"
            >
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
            </select>
          </div>
          <div className="">
            <p className="text-[#13141D] text-[16px] font-semibold">
              Listing Status
            </p>
            <select
              name=""
              id=""
              className="p-4 rounded-[10px] border border-[#A7A39C] mt-2  w-[190px] cursor-pointer"
            >
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                All
              </option>
            </select>
          </div>
        </div>
        <div className="">
          <button className="h-[60px] rounded-[8px] bg-[#E48872] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872] w-[190px] flex gap-x-2 justify-center items-center">
            <FaPlus />
            Add New Listing
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
