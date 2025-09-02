"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const tradetabs = [
    { label: "Pending", count: 5 },
    { label: "Sent", count: 3 },
    { label: "Previous", count: 12 },
    { label: "Canceled", count: 1 },
  ];
  const [isActive, setIsActive] = useState("Pending");
  return (
    <div>
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
      <div className="mt-14">
        <div className="">
          <ul className="flex justify-between px-20">
            {tradetabs.map(tab => (
              <li
                key={tab.label}
                className={`flex gap-x-3 items-center text-[16px] font-normal text-[#13141D] pb-3 ${isActive === tab.label ? "font-semibold border-b-8 rounded-[8px]" : ""}`}
              >
                {tab.label}{" "}
                <span className="border border-[#13141D] rounded-[8px] px-1 py-[2px]">
                  {tab.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
