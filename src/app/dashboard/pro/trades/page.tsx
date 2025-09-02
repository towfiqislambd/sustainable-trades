"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  const tradetabs = [
    { label: "Pending", count: 7 },
    { label: "Sent", count: 48 },
    { label: "Previous", count: 378 },
    { label: "Canceled", count: 8 },
  ];

  const [isActive, setIsActive] = useState("Pending");

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-[40px] font-semibold text-[#000]">Trades</h3>
        <div className="relative">
          <input
            placeholder="Search..."
            type="search"
            className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[500px]"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-14">
        <ul className="flex justify-between  relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:p-[3px] after:border after:border-[#A7A39C] after:rounded-lg">
          {tradetabs.map(tab => (
            <li
              key={tab.label}
              onClick={() => setIsActive(tab.label)}
              className={`flex gap-x-3 items-center text-[16px] cursor-pointer pb-5 px-20 justify-center
                ${
                  isActive === tab.label
                    ? "font-semibold text-[#000] relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8px]  after:bg-[#274F45] after:rounded-lg"
                    : "text-[#13141D]"
                }`}
            >
              {tab.label}
              <span
                className={`border rounded-[8px] px-2 py-[2px] text-sm border-[#000]
                  ${
                    isActive === tab.label
                      ? " bg-[#D4E2CB] text-[#6D2D4E2CB8D9]"
                      : "text-[#13141D]"
                  }`}
              >
                {tab.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-6 flex gap-x-1 items-center">
        <h3 className="font-semibold text-[16px] text-[#A7A39C]">
          32 Trades - <span className="text-[#274F45]">3 New Offers!</span>
        </h3>
      </div>

      {isActive === "Pending" && "pending"}
      {isActive === "Sent" && "Sent"}
      {isActive === "Previous" && "Previous"}
      {isActive === "Canceled" && "Canceled"}
    </div>
  );
};

export default Page;
