"use client";
import AllOrders from "./AllOrders";
import React, { useState } from "react";
import PendingOrders from "./PendingOrders";
import ShippedOrders from "./ShippedOrders";
import DeliveredOrders from "./DeliveredOrders";
import Fullfillmentorder from "./Fullfillmentorder";

const ProordersTabs = () => {
  const tabs = [
    "All Orders",
    "Pending",
    "Shipped",
    "Local Pickup",
    "Completed",
  ];
  const [isActive, setIsActive] = useState("All Orders");
  return (
    <div>
      <div className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap gap-2.5 sm:gap-5  md:gap-x-10">
        {tabs.map((tab) => (
          <h3
            key={tab}
            onClick={() => setIsActive(tab)}
            className={`cursor-pointer  text-[16px] md:text-[20px] font-semibold ${
              isActive === tab
                ? "border-b-2 border-[#13141D] text-[#13141D]"
                : "text-[#77978F]"
            }`}
          >
            {tab}
          </h3>
        ))}
      </div>
      <div className="pt-5 md:pt-12">
        {isActive === "All Orders" && <AllOrders />}
        {isActive === "Pending" && <PendingOrders />}
        {isActive === "Shipped" && <ShippedOrders />}
        {isActive === "Local Pickup" && <Fullfillmentorder />}
        {isActive === "Completed" && <DeliveredOrders />}
      </div>
    </div>
  );
};

export default ProordersTabs;
