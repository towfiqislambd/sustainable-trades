"use client";
import React, { useState } from "react";
import AllOrders from "./AllOrders";
import PendingOrders from "./PendingOrders";
import DeliveredOrders from "./DeliveredOrders";
import ShippedOrders from "./ShippedOrders";

const ProordersTabs = () => {
  const tabs = ["All Orders", "Pending", "Shipped", "Completed"];
  const [isActive, setIsActive] = useState("All Orders");
  return (
    <div>
      <div className="flex gap-x-10">
        {tabs.map(tab => (
          <h3
            key={tab}
            onClick={() => setIsActive(tab)}
            className={`cursor-pointer text-[20px] font-semibold ${
              isActive === tab
                ? "border-b-2 border-[#13141D] text-[#13141D]"
                : "text-[#77978F]"
            }`}
          >
            {tab}
          </h3>
        ))}
      </div>
      <div className="pt-12">
        {isActive === "All Orders" && <AllOrders />}
        {isActive === "Pending" && <PendingOrders />}
        {isActive === "Shipped" && <ShippedOrders />}
        {isActive === "Completed" && <DeliveredOrders />}
      </div>
    </div>
  );
};

export default ProordersTabs;
