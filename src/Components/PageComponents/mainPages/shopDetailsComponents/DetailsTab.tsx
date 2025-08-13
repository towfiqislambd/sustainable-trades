"use client";
import Link from "next/link";
import Container from "@/Components/Common/Container";
import React, { useState } from "react";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
const tabs = [
  { id: 1, label: "Listings" },
  { id: 2, label: "About" },
  { id: 3, label: "Reviews" },
  { id: 4, label: "Shop_policies" },
];

const DetailsTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <Container>
      <div className="mt-8 flex justify-between items-center">
        {/* Left - Tabs */}
        <div className="inline-flex items-center border border-gray-300 shadow rounded-lg">
          {tabs?.map(tab => (
            <Link
              key={tab?.id}
              href={`#${tab?.label}`}
              onClick={e => {
                e.preventDefault();
                setActiveTab(tab?.id);

                const section = document.getElementById(tab?.label);
                if (section) {
                  const offset = 180;
                  const y =
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    offset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`px-14 gap-3 py-4 font-semibold 
                  ${
                    activeTab === tab?.id
                      ? "bg-[#D4E2CB] text-secondary-black"
                      : "text-secondary-gray"
                  }
                  ${activeTab === 1 && "rounded-l-lg"}
                  ${activeTab === 4 && "rounded-r-lg"}
                `}
            >
              {tab?.label}
            </Link>
          ))}
        </div>

        {/* Right - Search Bar */}
        <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-2 rounded-[6px] w-[280px]">
          <SearchSvg />
          <input
            type="text"
            placeholder="Search all listings..."
            className="w-full border-none outline-none"
          />
        </div>
      </div>
    </Container>
  );
};

export default DetailsTab;
