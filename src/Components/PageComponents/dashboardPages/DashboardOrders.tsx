import React from "react";

const DashboardOrders = () => {
  return (
    <div className="border border-[#BFBEBE] rounded-[8px]">
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="flex gap-x-10">
            <div className="">
              <h3 className="text-[#67645F] font-sans font-bold">
                Order Placed
              </h3>
              <p className="font-sans font-normal text-[#000] text-[16px]">
                July 5, 2024
              </p>
            </div>
            <div className="">
              <h3 className="text-[#67645F] font-sans font-bold">Total</h3>
              <p className="font-sans font-normal text-[#000] text-[16px]">
                $46.97
              </p>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div className="">
              <h3 className="text-[#67645F] font-sans font-bold">
                Order Number
              </h3>
              <p className="font-sans font-normal text-[#000] text-[16px]">
                114-4026893
              </p>
            </div>
            <div className="">
              <h3 className="text-[#1F4038] font-sans font-bold underline cursor-pointer">
                View Invoice
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#BFBEBE] h-[1px]"></div>
      <div className="pt-2 px-4 pb-6">
        <div className="flex justify-between">
          <div className="">
            <h4 className="text-[20px] font-bold text-[#000]">
              Arriving Tomorrow
            </h4>
            <p className="font-sans font-normal text-[#000] text-[16px] pt-2 pb-3">
              Your package was left near the front door or porch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrders;
