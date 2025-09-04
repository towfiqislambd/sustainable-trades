"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAnglesRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import { Reload } from "@/Components/Svg/SvgContainer";

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
  status: "Pending" | "Sent" | "Approved" | "Canceled";
  items: TradeItem[];
};

type TradesTabsProps = {
  tradeRequests: TradeRequest[];
};

const actionButtons: Record<TradeRequest["status"], string[]> = {
  Pending: ["Approve", "Deny", "Counter", "Message"],
  Sent: ["Message"],
  Approved: ["Message", "Write A review"],
  Canceled: ["Message"],
};
const actionButtonStyles: Record<
  string,
  { bg?: string; border?: string; text: string }
> = {
  Approve: {
    bg: "bg-[#274F45]",
    text: "text-white",
  },
  Deny: { border: "border-[#8B200C]", text: "text-[#8B200C]" },
  Counter: {
    bg: "bg-[#E48872]",
    text: "text-black",
    border: "border-[#E48872]",
  },
  Message: { border: "border-gray-200", text: "text-black" },
  "Write A review": {
    bg: "#5B867B",
    text: "text-black",
  },
};

const TradesTabs: React.FC<TradesTabsProps> = ({ tradeRequests }) => {
  const router = useRouter();

  return (
    <div className="h-[600px] overflow-y-auto p-6 flex flex-col gap-6">
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
              className={`px-2 py-1 rounded-[8px] min-w-[100px] inline-block  cursor-pointer ${
                trade.status === "Pending"
                  ? "bg-[#E48872] text-white"
                  : trade.status === "Sent"
                  ? "bg-blue-500"
                  : trade.status === "Approved"
                  ? "bg-[#B0DEDB] text-black"
                  : "bg-[#8B200C] text-white"
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
                  height={100}
                  width={100}
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
                className={`cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out`}
              />
            </div>
            <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-end">
            <div className="flex gap-x-5 flex-wrap">
              {actionButtons[trade.status].map((btn, i) => {
                const style = actionButtonStyles[btn] || {
                  bg: "bg-gray-200",
                  border: "border-gray-400",
                  text: "text-black",
                };

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (btn === "Counter") {
                        router.push(
                          `/dashboard/pro/trades/counter/${trade.id}`
                        );
                      } else {
                        console.log(`${btn} clicked for trade ${trade.id}`);
                      }
                    }}
                    className={`relative cursor-pointer py-[10px] border px-4 rounded-md font-lato font-semibold overflow-hidden
            hover:scale-110 duration-500 ease-in-out
            ${style.bg || ""} ${style.border || "border-2"} ${style.text}
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-[#274F45] after:transition-all after:duration-500 hover:after:h-full hover:text-white`}
                  >
                    <span className="relative z-10">{btn}</span>
                  </button>
                );
              })}
            </div>
            <Link
              href={`/dashboard/pro/trades/${trade.id}?tab=${trade.status}`}
            >
              <div className="bg-gray-200 px-3 py-2 cursor-pointer flex items-center justify-center">
                <FaAnglesRight />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradesTabs;
