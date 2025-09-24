import React from "react";

const OrderSummary = () => {
  return (
    <div className="mt-10 flex flex-col gap-[20px] sm:flex-row justify-between">
      <div className="flex flex-row sm:flex-col justify-between sm:justify-normal">
        <h3 className="text-[16px] font-bold text-[#13141D]">Payment</h3>
        <h4 className="text-[16px] font-normal text-[#13141D]">
          Visa ending in 6789
        </h4>
      </div>
      <div className="">
        <h3 className="text-[16px] font-bold text-[#13141D]">Order Summary</h3>
        <div className="flex gap-x-10 flex justify-between sm:justify-normal">
          <ul className="flex flex-col gap-y-3 font-sans">
            <li className="text-[16px] font-normal text-[#13141D]">
              Items Subtotal:
            </li>
            <li className="text-[16px] font-normal text-[#13141D]">
              Shipping and Handling:
            </li>
            <li className="text-[16px] font-normal text-[#13141D]">
              Total before tax:
            </li>
            <li className="text-[16px] font-normal text-[#13141D]">
              Estimated tax to be collected:
            </li>
            <li className="text-[16px] font-bold text-[#13141D]">
              Grand Total
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3 font-sans">
            <li className="text-[16px] font-normal text-[#13141D]">$31.36</li>
            <li className="text-[16px] font-normal text-[#13141D]"> $35.35</li>
            <li className="text-[16px] font-normal text-[#13141D]"> $2.47</li>
            <li className="text-[16px] font-normal text-[#13141D]"> $37.82</li>
            <li className="text-[16px] font-bold text-[#13141D]"> $37.82</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
