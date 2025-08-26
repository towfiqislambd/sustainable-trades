"use client"
import React, { useState } from "react";

const ProordersTabs = () => {
  const tabs: string[] = ["All Orders", "Pending", "Shipped", "Completed"];
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
    </div>
  );
};

export default ProordersTabs;
