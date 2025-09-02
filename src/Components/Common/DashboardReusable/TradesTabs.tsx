import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Reload } from "@/Components/Svg/SvgContainer";
import { FaAngleRight } from "react-icons/fa";

export type TradeItem = {
  image: StaticImageData;
  title: string;
  store: string;
  quantity: string;
  totalAmount: number;
};

export type TradeRequest = {
  id: number;
  date: string;
  inquiryNumber: number;
  status: "Pending" | "Sent" | "Previous" | "Canceled";
  items: TradeItem[];
};

type TradesTabsProps = {
  tradeRequests: TradeRequest[];
};

const TradesTabs: React.FC<TradesTabsProps> = ({ tradeRequests }) => {
  const [rotateId, setRotateId] = useState<number | null>(null);

  return (
    <>
      <div className="h-screen overflow-y-auto p-6 flex flex-col gap-6">
        {tradeRequests.map(trade => (
          <div
            key={trade.id}
            className="border border-[#BFBEBE] p-6 rounded-[8px] flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex justify-between pb-4">
              <div className="flex gap-x-5 items-center">
                <h3 className="font-semibold text-[16px] text-[#274F45]">
                  Trade Request
                </h3>
                <h4 className="font-semibold text-[16px] text-[#A7A39C]">
                  {trade.date}
                </h4>
                <h5 className="font-semibold text-[16px] text-[#A7A39C]">
                  Inquiry # {trade.inquiryNumber}
                </h5>
              </div>
              <button
                className={`px-2 py-1 rounded-[8px] text-white min-w-[100px] inline-block  cursor-pointer ${
                  trade.status === "Pending"
                    ? "bg-[#E48872]"
                    : trade.status === "Sent"
                    ? "bg-blue-500"
                    : trade.status === "Previous"
                    ? "bg-gray-400"
                    : "bg-red-500"
                }`}
              >
                {trade.status}
              </button>
            </div>

            {/* Items */}
            {trade.items.map((item, idx) => (
              <div
                key={idx}
                className="pt-4 border-t border-[#BFBEBE] flex justify-between items-end"
              >
                <div className="flex gap-x-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={150}
                    width={150}
                    className="object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[20px] font-semibold text-[#13141D]">
                      {item.title}
                    </h3>
                    <h4 className="text-[20px] font-normal text-[#4B4A47]">
                      {item.store}
                    </h4>
                    <h5 className="text-[#13141D] font-normal text-[16px] mt-3">
                      Qty: {item.quantity}
                    </h5>
                  </div>
                </div>
                <h2 className="text-[20px] font-normal text-[#4B4A47]">
                  Total amount:{" "}
                  <span className="font-semibold text-[#13141D]">
                    ${item.totalAmount}
                  </span>
                </h2>
              </div>
            ))}

            {/* Reload Line */}
            <div className="flex gap-x-5 items-center">
              <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
              <div className="inline-block">
                <Reload
                  className={`cursor-pointer transform transition-transform duration-500 ease-in-out ${
                    rotateId === trade.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex gap-x-5 flex-wrap">
                {["Approve", "Deny", "Counter", "Message"].map((btn, i) => (
                  <button
                    key={i}
                    className={`relative cursor-pointer py-[10px] border px-4 rounded-md font-lato font-semibold overflow-hidden
                  hover:scale-110 duration-500 ease-in-out
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-[#274F45] after:transition-all after:duration-500 hover:after:h-full hover:after:left-0 hover:text-white`}
                  >
                    <span className="relative z-10">{btn}</span>
                  </button>
                ))}
              </div>
              <div className="bg-gray-200 px-3 py-2 flex justify-center items-center cursor-pointer">
                <FaAngleRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 mt-10 border border-gray-300 rounded-lg p-6 ml-5"></div>
    </>
  );
};

export default TradesTabs;
