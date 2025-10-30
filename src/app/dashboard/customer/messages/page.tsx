"use client";
import React, { useState } from "react";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
import LocalPickupMessage from "@/Components/PageComponents/dashboardPages/messageComponents/LocalPickupMessage";
import InboxMessage from "@/Components/PageComponents/dashboardPages/messageComponents/InboxMessage";

const page = () => {
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("");

  const tabs = [
    { id: 1, label: "Inbox", path: "" },
    { id: 2, label: "Sent", path: "sent" },
    { id: 3, label: "Unread", path: "unread" },
    { id: 4, label: "Local Pickup", path: "local pickup" },
  ];

  return (
    <>
      {/* Upper Part */}
      <div className="flex items-center justify-between mb-7">
        <h3 className="text-3xl text-secondary-black font-semibold">
          Messages
        </h3>

        <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-1 md:py-2 rounded-[6px] w-full md:w-[280px]">
          <SearchSvg />
          <input
            type="text"
            placeholder="Search Messages..."
            className="w-full border-none outline-none"
            onChange={e => {
              setSearch(e.target.value);
              setActiveTab("");
            }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 items-center mb-10">
        {tabs?.map(item => (
          <button
            key={item?.id}
            onClick={() => setActiveTab(item?.path)}
            className={`font-semibold cursor-pointer border-b-2 px-2 text-lg ${
              activeTab === item?.path
                ? "text-secondary-black border-secondary-black"
                : "text-light-green border-transparent"
            }`}
          >
            {item?.label}
          </button>
        ))}
      </div>

      {/* Message Body */}
      {activeTab === "local pickup" ? (
        <LocalPickupMessage />
      ) : (
        <InboxMessage search={search} activeTab={activeTab} />
      )}
    </>
  );
};

export default page;
