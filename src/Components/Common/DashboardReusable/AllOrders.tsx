"use client";
import { ordersData } from "@/Components/Data/data";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";





const statusColors = {
  Pending: "bg-[#E48872] text-[#fff] text-[14px] font-semibold",
  Shipped: "bg-[#D4E2CB] text-[14px] font-semibold text-[#000]",
  Delivered: "bg-[#274F45] text-white",
  Canceled: "bg-[#8B200C] text-white",
};

const AllOrders = () => {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = ordersData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300 text-[#13141D] text-[16px] font-semibold">
            <th className="py-3 px-4 text-left">Order #</th>
            <th className="py-3 px-4 text-left">Order Date</th>
            <th className="py-3 px-4 text-left">Customer</th>
            <th className="py-3 px-4 text-left">Opt In</th>
            <th className="py-3 px-4 text-left">Items</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((order, i) => (
            <tr
              key={i}
              className="border-b border-gray-300 text-[#13141D] text-[14px] font-semibold"
            >
              <td className="py-3 px-4">{order.id}</td>
              <td className="py-3 px-4">{order.date}</td>
              <td className="py-3 px-4">
                <div className="flex flex-col">
                  <span>{order.customer}</span>
                  <span className="text-sm text-gray-500">{order.email}</span>
                </div>
              </td>
              <td className="py-3 px-4">{order.optIn}</td>
              <td className="py-3 px-4">{order.items}</td>
              <td className="py-3 px-4">{order.amount}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-4 text-center">
                <BsThreeDotsVertical className="inline-block cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          {startIndex + 1}-
          {Math.min(startIndex + itemsPerPage, ordersData.length)} of{" "}
          {ordersData.length} orders
        </p>
        <div className="flex items-center gap-3">
          <button
            className="px-2 py-1 text-gray-600 disabled:opacity-50 cursor-pointer"
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaAngleDoubleLeft />
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-2 py-1 text-gray-600 disabled:opacity-50 cursor-pointer"
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
