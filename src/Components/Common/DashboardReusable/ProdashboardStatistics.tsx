import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ProdashboardStatistics = () => {
  return (
    <div className="border border-[#A7A39C] rounded-[8px] pt-5 px-6">
      <h3 className="text-[#13141D] text-[16px] font-semibold">
        Order/Store Statistics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-20 lg:gap-y-12 pt-4 lg:pt-8 pb-8 lg:pb-24 lg:px-20">
        <div className="border border-[#A7A39C] p-4 rounded-[8px]">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <h5 className="text-[16px] text-[#000] font-semibold text-center">
                Listings
              </h5>
              <h6 className="text-[16px] text-[#000] font-semibold text-center flex gap-x-1 items-center cursor-pointer">
                More
                <FaAngleRight />
              </h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Active
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">4</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Expired
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">2</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Sold out
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">0</h6>
            </div>
          </div>
        </div>
        <div className="border border-[#A7A39C] p-4 rounded-[8px]">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <h5 className="text-[16px] text-[#000] font-semibold text-center">
                Orders
              </h5>
              <h6 className="text-[16px] text-[#000] font-semibold text-center flex gap-x-1 items-center cursor-pointer">
                More
                <FaAngleRight />
              </h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                New
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">4</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Shipped
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">2</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Completed
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">0</h6>
            </div>
          </div>
        </div>
        <div className="border border-[#A7A39C] p-4 rounded-[8px]">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <h5 className="text-[16px] text-[#000] font-semibold text-center">
                Trades
              </h5>
              <h6 className="text-[16px] text-[#000] font-semibold text-center flex gap-x-1 items-center cursor-pointer">
                More
                <FaAngleRight />
              </h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                New
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">4</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Pending
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">2</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Completed
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">0</h6>
            </div>
          </div>
        </div>
        <div className="border border-[#A7A39C] p-4 rounded-[8px]">
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <h5 className="text-[16px] text-[#000] font-semibold text-center">
                Visitors
              </h5>
              <h6 className="text-[16px] text-[#000] font-semibold text-center flex gap-x-1 items-center cursor-pointer">
                More
                <FaAngleRight />
              </h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                New
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">4</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Returning
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">2</h6>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[14px] text-[#000] font-semibold text-center">
                Last Visit Before July
              </h5>
              <h6 className="text-[14px] text-[#000] font-semibold">0</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdashboardStatistics;
