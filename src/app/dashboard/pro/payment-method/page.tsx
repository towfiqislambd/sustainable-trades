import { Paypal } from "@/Components/Svg/SvgContainer";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-[30px] md:text-[40px] font-lato font-semibold text-[#000]">
        Store Payments
      </h2>
      <h5 className="text-[15px] md:text-[20px] text-[#3D4145] font-normal pt-4">
        Connect and manage how you'd like to receive
        <br /> payments from buyers.
        <span className="underline cursor-pointer">Learnmore</span>.
      </h5>
      <div className="mt-9 md:mt-18 border border-[#BFBEBE] rounded-[10px] p-6 w-full max-w-[480px]">
        <Paypal />
        <p className="font-normal text-[14px] md:text-[16px] text-[#3D4145]  pt-2">
          Customers can check out from your store with a PayPal or Venmo Account
        </p>
        <button className="mt-5 md:mt-10 p-2 md:p-3 border border-[#274F45] rounded-md text-[12px] md:text-[14px] font-semibold text-[#274F45] cursor-pointer hover:text-white hover:bg-[#274F45] duration-500 ease-in-out uppercase">
          Manage
        </button>
      </div>
    </div>
  );
};

export default page;
