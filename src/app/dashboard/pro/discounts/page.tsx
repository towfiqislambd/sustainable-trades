"use client";

import { Delete, Pen } from "@/Components/Svg/SvgContainer";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const DiscountsPage = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [selected, setSelected] = useState<string[]>([]);

  // All discounts
  const discounts = [
    {
      id: "d1",
      title: "15% Off Order",
      description: "15% off the shopper’s entire order",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "July 1, 2024 at 9:00am",
      code: "SUSTAIN15",
      uses: "0 of 100 Uses",
      status: "Active",
    },
    {
      id: "d2",
      title: "New Member Code",
      description: "10% off entire order for new shoppers",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "Never Expires",
      code: "NEWMEMBER10",
      uses: "Unlimited Uses",
      status: "Scheduled",
    },
    {
      id: "d3",
      title: "Free Shipping Over $100",
      description:
        "Free Shipping will be applied when a shopper makes a purchase of over $100",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "Never Expires",
      code: "SHIPPING100",
      uses: "Unlimited Uses",
      status: "Inactive",
    },
    {
      id: "d4",
      title: "Free Shipping Over $100",
      description:
        "Free Shipping will be applied when a shopper makes a purchase of over $100",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "Never Expires",
      code: "SHIPPING100",
      uses: "Unlimited Uses",
      status: "Inactive",
    },
    {
      id: "d5",
      title: "Free Shipping Over $100",
      description:
        "Free Shipping will be applied when a shopper makes a purchase of over $100",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "Never Expires",
      code: "SHIPPING100",
      uses: "Unlimited Uses",
      status: "Inactive",
    },
    {
      id: "d6",
      title: "Free Shipping Over $100",
      description:
        "Free Shipping will be applied when a shopper makes a purchase of over $100",
      starts: "Jan 1, 2024 at 9:00am",
      ends: "Never Expires",
      code: "SHIPPING100",
      uses: "Unlimited Uses",
      status: "Active",
    },
  ];

  // Filtered discounts by active tab
  const filtered = discounts.filter(d => d.status === activeTab);

  // Handle selection
  const toggleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Handle delete
  const handleDelete = () => {
    if (selected.length === 0) return;
    alert(`Deleting discounts: ${selected.join(", ")}`);
    setSelected([]);
  };

  const tabs = [
    { label: "Active" },
    { label: "Scheduled" },
    { label: "Inactive" },
    { label: "", icon: <Delete className="w-5 h-5" />, action: handleDelete },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-[30px] md:text-[40px] font-lato font-semibold text-[#000]">
          Discounts
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          {/* Search */}
          <div className="relative">
            <input
              placeholder={"Search..."}
              type="search"
              className="py-[10px] pl-4 outline-0 border border-[#274F45] rounded-[8px] text-[16px] text-[#67645F] font-normal w-full md:w-[300px]"
            />
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
            <div className="absolute top-0 right-10 w-[2px] bg-[#274F45] h-[45px]"></div>
          </div>

          {/* Create button */}
          <Link href="/dashboard/pro/discounts/create-discount">
            <button className="hover:border-[#D4E2CB] hover:border border hover:bg-transparent rounded-[8px] py-1.5 md:py-3 px-5 text-[18px] md:text-[20px] font-semibold cursor-pointer w-full md:w-fit bg-[#D4E2CB] text-[#274F45] duration-500 ease-in-out">
              Create Discount
            </button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap border-t border-b border-[#BFBEBE] py-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() =>
              tab.action ? tab.action() : setActiveTab(tab.label)
            }
            className={`flex items-center justify-center gap-2 border-2 font-semibold border-[#274F45] rounded-[6px] px-4 py-1 text-[13px] text-base md:py-2 duration-300 cursor-pointer ${
              activeTab === tab.label
                ? "bg-[#D4E2CB] text-[#274F45]"
                : "text-[#274F45] hover:bg-[#D4E2CB]"
            }`}
          >
            {tab.icon ? tab.icon : tab.label}
          </button>
        ))}
      </div>

      {/* Discounts list */}
      <div className="divide-y">
        {filtered.length === 0 ? (
          <div className="py-6 text-center text-gray-500">
            No discounts in {activeTab}.
          </div>
        ) : (
          filtered.map(d => (
            <div
              key={d.id}
              className="py-4 flex flex-col md:flex-row md:items-start md:justify-between"
            >
              {/* Left side */}
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={selected.includes(d.id)}
                  onChange={() => toggleSelect(d.id)}
                  className="mt-2"
                />
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#13141D]">
                    {d.title}
                  </h3>
                  <p className="text-[#67645F] font-bold text-[16px]">
                    {d.description}
                  </p>
                  <div className="mt-3 md:mt-7 text-[14px] md:text-[18px]">
                    <span className="font-bold text-[12px] md:text-[16px] text-[#13141D]">
                      STARTS
                    </span>
                    {d.starts}
                    <span className="sm:ml-4 font-bold text-[14px] md:text-[18px] text-[#13141D]">
                      ENDS
                    </span>
                    {d.ends}
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-end  w-full md:w-fit md:justify-end flex-col   space-y-2">
                <div className="text-[15px] md:text-[20px] font-bold text-[#13141D]">
                  {d.code}
                </div>
                <div className="flex justify-end my-0.5 md:my-2">
                  <Link
                    href={`/dashboard/pro/discounts/create-discount/${d.id}`}
                  >
                    <button className="py-1.5 px-3  md:p-3 md:text-sm rounded bg-[#D4E2CB] text-[#274F45] cursor-pointer flex gap-x-2 font-semibold">
                      <Pen />
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="text-[16px]] text-[#13141D] font-bold">
                  {d.uses}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiscountsPage;
