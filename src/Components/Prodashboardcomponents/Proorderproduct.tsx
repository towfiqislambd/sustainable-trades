import React from "react";
import Thumbnail from "../../Assets/Thumbnail.png";
import Thumbnail1 from "../../Assets/Thumbnail (1).png";
import Image from "next/image";

const Proorderproduct = () => {
  return (
    <div className="pt-10 pb-6">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="flex gap-x-1 items-center">
          <h5 className="text-[16px] font-bold text-[#67645F]">Amy Woods</h5>
          <p className="text-[14px] font-normal text-[#000]">#155496</p>
        </div>
        <div className="flex gap-x-1 items-center">
          <h5 className="text-[16px] font-bold text-[#67645F]">Date Ordered</h5>
          <p className="text-[14px] font-normal text-[#000]">Jun 25, 2024</p>
        </div>
        <div className="flex gap-x-1 items-center w-full md:w-fit mb-3.5 md:mb-0">
          <button className="py-2 px-4 rounded-[8px] w-full md:w-fit border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out">
            View Invoice
          </button>
        </div>
      </div>
      <div className="mt-6 border border-[#CCCED0]">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between md:items-center  px-6 py-4">
            <div className="flex flex-col md:flex-row gap-x-6 md:items-center">
              <Image src={Thumbnail} alt="Thumbnail" unoptimized />
              <h3 className="text-[20px] font-semibold text-[#13141D]">
                Handmade Cocoa Butter
              </h3>
            </div>
            <div className="">
              <h3 className="text-[20px] font-semibold text-[#13141D] pb-1">
                $8.46
              </h3>
              <h4 className="text-[18px] font-semibold text-[#13141D]">
                Qty: 2
              </h4>
            </div>
          </div>
          <div className="border border-[#CCCED0]"></div>
          <div className="flex flex-col md:flex-row justify-between md:items-center  px-6 py-4">
            <div className="flex flex-col md:flex-row gap-x-6 md:items-center">
              <Image src={Thumbnail1} alt="Thumbnail" unoptimized />
              <h3 className="text-[20px] font-semibold text-[#13141D]">
                Lavender Soap Bars
              </h3>
            </div>
            <div className="">
              <h3 className="text-[20px] font-semibold text-[#13141D] pb-1">
                $8.46
              </h3>
              <h4 className="text-[18px] font-semibold text-[#13141D]">
                Qty: 2
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proorderproduct;
