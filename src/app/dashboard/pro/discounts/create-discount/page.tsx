"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";

const Page = () => {
  const [discountType, setDiscountType] = useState("code");

  return (
    <div className="p-8">
      {/* Title */}
      <h2 className="text-[40px] font-semibold text-[#13141D]">
        Create Discount
      </h2>

      {/* Back */}
      <div className="border-b border-gray-300">
        <h4 className="flex gap-x-1 items-center text-[#13141D] font-normal py-4 cursor-pointer">
          <FaAngleLeft />
          Back
        </h4>
      </div>

      {/* Name */}
      <div className="pt-8 pb-12">
        <h4 className="text-[20px] font-normal text-[#13141D]">Name</h4>
        <input
          type="text"
          placeholder="Example: 15% Off Order"
          className="px-4 py-5 border-2 border-[#67645F] rounded-[8px] text-[16px] font-bold text-[#67645F] my-3 w-[750px]"
        />
        <p className="text-[16px] font-bold text-[#13141D]">
          The name that shoppers will see at checkout.
        </p>
      </div>

      {/* Discount Type */}
      <div className="pb-8">
        <h4 className="text-[20px] font-normal text-[#13141D]">
          Discount Type
        </h4>
        <div className="flex mt-3 ">
          <button
            onClick={() => setDiscountType("code")}
            className={`px-4 py-[18px] rounded-l-md cursor-pointer text-[20px] text-[#274F45] font-semibold ${
              discountType === "code"
                ? "bg-[#D4E2CB] border-2 border-[#274F45] "
                : "bg-white border-2 border-[#67645F]"
            }`}
          >
            Discount Code
          </button>
          <button
            onClick={() => setDiscountType("auto")}
            className={`px-6 py-2 rounded-r-md cursor-pointer  text-[20px] text-[#274F45] font-semibold ${
              discountType === "auto"
                ? "bg-[#D4E2CB] border-2 border-[#274F45] "
                : "bg-white border-2 border-[#67645F]"
            }`}
          >
            Automatic Discount
          </button>
        </div>
      </div>

      {/* Discount Code */}
      {discountType === "code" && (
        <div className="pb-8">
          <h4 className="text-[20px] font-normal text-[#13141D]">
            Discount Code
          </h4>
          <div className="flex gap-2 mt-3 w-[750px] relative">
            <input
              type="text"
              placeholder="Discount Code (Ex. SALE15)"
              className="px-4 py-5 border-2 border-[#67645F] rounded-[8px] text-[16px] font-bold text-[#67645F] my-3 w-[750px]"
            />
            <button className="absolute top-[35px] right-5 cursor-pointer text-[#5C7F60] font-bold text-[16px]">
              Generate Code
            </button>
          </div>
          <p className="text-[16px] font-bold text-[#13141D]">
            Shoppers enter this code at checkout.
          </p>
        </div>
      )}

      {/* Promotion */}
      <div className="pb-8">
        <h4 className="text-[20px] font-normal text-[#13141D]">Promotion</h4>
        <div className="flex mt-3 w-[750px] border border-[#67645F]  rounded-md ">
          <select className="px-4 py-5 w-full bg-[#D4E2CB] rounded-l-md text-[#5C7F60] font-bold text-[16px] outline-0">
            <option>Percent Off</option>
            <option>Fixed Amount</option>
            <option>Free Shipping</option>
          </select>
          <input
            type="number"
            placeholder="0%"
            className="rounded-md px-4 py-2 flex- text-[#13141D] font-bold text-[16px] outline-0"
          />
        </div>
      </div>

      {/* Applies To */}
      <div className="pb-8">
        <h4 className="text-[20px] font-normal text-[#13141D]">Applies To</h4>
        <select className="mt-3 border border-[#3D3D3D] rounded-md px-4 py-5  w-[750px] bg-[#D4E2CB] text-[16px] font-bold text-[#274F45]">
          <option>Any Order</option>
          <option>Single Product</option>
        </select>
      </div>

      {/* Discount Limits */}
      <div className="pb-8">
        <h4 className="text-[20px] font-normal text-[#13141D]">
          Discount Limits
        </h4>
        <div className="mt-3 flex flex-col gap-2">
          <label className="flex items-center gap-2 text-[16px] font-semibold text-[#13141D]">
            <input type="checkbox" className="w-4 h-4 " />
            Limit One Per Shopper
          </label>
          <label className="flex items-center gap-2 text-[16px] font-semibold text-[#13141D]">
            <input type="checkbox" className="w-4 h-4 " />
            Limit number of times this discount can be used in total
          </label>
          <input
            type="number"
            placeholder="Enter usage limit (ex: 5)"
            className="px-4 py-5 border border-[#3D3D3D] rounded-[8px] text-[16px] font-bold text-[#67645F] my-1 w-[750px]"
          />
        </div>
      </div>

      {/* Active Dates */}
      <div className="pb-8">
        <h4 className="text-[20px] font-normal text-[#13141D]">Active Dates</h4>
        <div className="grid grid-cols-2 gap-6 mt-3 w-[800px]">
          {/* Start Date */}
          <div>
            <label className="block text-[16px] font-normal text-[#13141D] mb-2">
              Start Date
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-5 gap-2 bg-[#E6F5F4]">
              <FiCalendar />
              <input
                type="date"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[16px] font-normal text-[#13141D] mb-2">
              Start Time (PDT)
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-5 gap-2 bg-[#E6F5F4]">
              <FiClock />
              <input
                type="time"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-[16px] font-normal text-[#13141D] mb-2">
              End Date
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-5 gap-2 bg-[#E6F5F4]">
              <FiCalendar />
              <input
                type="date"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[16px] font-normal text-[#13141D] mb-2">
              End Time (PDT)
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-5 gap-2 bg-[#E6F5F4]">
              <FiClock />
              <input
                type="time"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
        <label className="flex items-center gap-2 mt-3">
          <input type="checkbox" className="w-4 h-4" />
          Never Expires
        </label>
      </div>
      <div className="flex justify-end mt-12 gap-x-10">
        <button className="text-[#274F45] border-[#274F45] border rounded-[8px] px-16 py-4 text-[20px] font-semibold cursor-pointer hover:bg-[#D4E2CB] duration-500 ease-in-out">
          Discrad
        </button>
        <button className="hover:border-[#D4E2CB] hover:border border hover:bg-transparent rounded-[8px] px-16 py-4 text-[20px] font-semibold cursor-pointer bg-[#D4E2CB] text-[#274F45] duration-500 ease-in-out">
          Save Discount
        </button>
      </div>
    </div>
  );
};

export default Page;
