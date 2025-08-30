
"use client"
import { Pen } from "@/Components/Svg/SvgContainer";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const page = () => {
  const [status, setStatus] = useState("Order Confirmed");

  const steps = [
    { label: "Order Confirmed", date: "25 Jun 2024" },
    { label: "Order Packaged", date: "25 Jun 2024" },
    { label: "Package Shipped", date: "" },
    { label: "Package Delivered", date: "" },
  ];

  // Get current step index
  const currentStep = steps.findIndex(step => step.label === status);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-[40px] font-semibold text-[#000]">Order Details</h3>
        <div className="flex gap-x-3">
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out">
            Track Package
          </button>
          <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out flex gap-x-1 items-center">
            <Pen /> Edit Order
          </button>
        </div>
      </div>

      <div className="pt-8 flex gap-x-8">
        <div>
          <h4 className="text-[#000] font-bold text-[16px]">Order Status</h4>
          <div className="relative my-3">
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 py-[10px] w-[190px] text-[#274F45] text-[14px] font-normal"
            >
              {steps.map(step => (
                <option key={step.label} value={step.label}>
                  {step.label}
                </option>
              ))}
            </select>
            <FaAngleDown className="absolute top-3 left-40 size-5" />
          </div>

          <div className="flex items-center my-6">
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div
                  className={`p-[1px] w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                    index <= currentStep
                      ? "border-[#274F45]"
                      : "border-[#A7A39C]"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      index <= currentStep ? "bg-[#274F45]" : "bg-[#A7A39C]"
                    }`}
                  ></div>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`border-dashed border-t w-[190px] ${
                      index < currentStep
                        ? "border-[#274F45]"
                        : "border-[#A7A39C]"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Labels */}
          <div className="flex gap-x-[70px]">
            {steps.map(step => (
              <div key={step.label}>
                <h5 className="text-[16px] font-normal text-[#000] font-sans">
                  {step.label}
                </h5>
                {step.date && (
                  <p className="text-[14px] font-normal text-[#4B4A47]">
                    {step.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
