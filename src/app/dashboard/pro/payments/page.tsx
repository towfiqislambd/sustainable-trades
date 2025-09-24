"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PaidPayments from "@/Components/Common/DashboardReusable/PaidPayments";
import FailedPayment from "@/Components/Common/DashboardReusable/FailedPayment";
import PendingPaymnet from "@/Components/Common/DashboardReusable/PendingPaymnet";
import AllPaymentTable from "@/Components/Common/DashboardReusable/AllPaymentTable";

const page = () => {
  const tabs = ["All Payments", "Pending", "Paid", "Failed"];
  const [isactive, setisActive] = useState("All Payments");

  return (
    <>
      <div className="flex flex-col gap-2.5 md:gap-0 md:flex-row justify-between md:items-center">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Payments
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-[300px]">
            <div className="flex items-center border border-[#BFBEBE] rounded-[8px] overflow-hidden">
              <input
                type="search"
                placeholder="Search Payments"
                className="flex-1 py-[10px] pl-4 pr-2 outline-0 text-[16px] text-[#67645F] font-normal"
              />
              {/* Divider */}
              <div className="w-[1px] h-6 bg-[#BFBEBE]" />
              {/* Icon */}
              <button className="p-3 text-[#67645F]">
                <FaSearch />
              </button>
            </div>
          </div>

          <button
            className="relative w-full sm:w-fit cursor-pointer py-[10px] border px-9 rounded-md text-[#274F45] font-lato font-semibold overflow-hidden
              hover:scale-110 duration-500 ease-in-out
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-[#274F45] after:transition-all after:duration-500 hover:after:h-full hover:after:left-0 hover:text-white"
          >
            <span className="relative z-10">Manage Methods</span>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex gap-5 md:gap-x-10">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setisActive(tab)}
              className={`cursor-pointer text-[17px] md:text-[20px] font-semibold ${
                isactive === tab
                  ? "text-[#13141D] border-b-2"
                  : "text-[#77978F]"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          {isactive === "All Payments" && <AllPaymentTable />}
          {isactive === "Pending" && <PendingPaymnet />}
          {isactive === "Paid" && <PaidPayments />}
          {isactive === "Failed" && <FailedPayment />}
        </div>
      </div>
    </>
  );
};

export default page;
