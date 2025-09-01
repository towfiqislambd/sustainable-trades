"use client";
import AllPaymentTable from "@/Components/Common/DashboardReusable/AllPaymentTable";
import FailedPayment from "@/Components/Common/DashboardReusable/FailedPayment";
import PaidPayments from "@/Components/Common/DashboardReusable/PaidPayments";
import PendingPaymnet from "@/Components/Common/DashboardReusable/PendingPaymnet";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  const tabs = ["All Payments", "Pending", "Paid", "Failed"];
  const [isactive, setisActive] = useState("All Payments");

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Orders
        </h2>
        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <input
              placeholder="Search Payments"
              type="search"
              className="py-[10px] pl-4 outline-0 border border-[#BFBEBE] rounded-[8px] text-[16px] text-[#67645F] font-normal w-[300px]"
            />
            <div className="absolute top-4 right-3">
              <FaSearch />
            </div>
            <div className="absolute top-0 right-10 w-[2px] bg-[#BFBEBE] h-[45px]"></div>
          </div>
          <button
            className="relative cursor-pointer py-[10px] border px-9 rounded-md text-[#274F45] font-lato font-semibold overflow-hidden
              hover:scale-110 duration-500 ease-in-out
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:bg-[#274F45] after:transition-all after:duration-500 hover:after:h-full hover:after:left-0 hover:text-white"
          >
            <span className="relative z-10">Manage Methods</span>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex gap-x-10">
          {tabs.map(tab => (
            <li
              key={tab}
              onClick={() => setisActive(tab)}
              className={`cursor-pointer text-[20px] font-semibold ${
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
