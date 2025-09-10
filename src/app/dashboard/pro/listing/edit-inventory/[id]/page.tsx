import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="text-[40px] font-semibold text-[#13141D]">
            Organic Cherry Tomatoes
          </h3>
          <div className="flex gap-x-2 items-center pt-2 cursor-pointer">
            <h4 className="text-[16px] font-normal text-[#13141D]">Listings</h4>
            <FaAngleRight className="mt-1" />
            <h5 className="text-[16px] font-normal text-[#13141D]">
              Add a Listing
            </h5>
          </div>
        </div>
        <button className="text-[#13141D] text-[16px] font-semibold flex gap-x-1 items-center border-2 border-[#13141D] rounded-lg py-5 px-8 cursor-pointer hover:bg-black hover:text-white duration-500 ease-in-out">
          <MdArrowOutward />
          View Listings{" "}
        </button>
      </div>
    </>
  );
};

export default page;
