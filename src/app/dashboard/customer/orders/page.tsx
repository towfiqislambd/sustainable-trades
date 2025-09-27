"use client";
import React, { useState } from "react";
import DashBoardHeader from "@/Components/Common/DashBoardHeader";
import DashboardOrders from "@/Components/PageComponents/dashboardPages/DashboardOrders";
import BuyAgain from "@/Components/PageComponents/dashboardPages/BuyAgain";
import NotShipted from "@/Components/PageComponents/dashboardPages/NotShipted";
import CancelOrders from "@/Components/PageComponents/dashboardPages/CancelOrders";

const page = () => {
  const [isActive, setIsActive] = useState("Orders");

  const tabs: string[] = [
    "Orders",
    "Buy Again",
    "Not Shipped",
    "Cancelled Orders",
  ];

  return (
    <section className="">
      <DashBoardHeader heading="Yours Orders" placeholder="Search Orders" />
      <div className="py-6">
        <ul className="flex flex-wrap md:flex-nowrap gap-2 lg:gap-x-6">
          {tabs.map((tab: string, index: number) => (
            <li
              key={tab}
              onClick={() => setIsActive(tab)}
              className={`text-[15px] lg:text-[20px] font-bold text-[#000] px-3 md:px-6 py-2 w-fit flex-1 text-nowrap cursor-pointer ${
                isActive === tab
                  ? "border-b-[3px] border-[#77978F]"
                  : "border-b border-[#BFBEBE]"
              } ${index === tabs.length - 1 ? "flex-1" : "sm:shrink-0"}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        {isActive === "Buy Again" && <BuyAgain />}
        {isActive === "Not Shipped" && <NotShipted />}
        {isActive === "Orders" && <DashboardOrders />}
        {isActive === "Cancelled Orders" && <CancelOrders />}
      </div>
    </section>
  );
};

export default page;
