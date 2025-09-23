"use client";
import { Order } from "@/Types/type";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { statusColors } from "../Data/data";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

type OrdersTableProps = {
  data: Order[];
  itemsPerPage?: number;
};

const OrdersTable: React.FC<OrdersTableProps> = ({
  data,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openRow, setOpenRow] = useState<number | null>(null);
  const router = useRouter();

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const toggleDropdown = (index: number) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b-2 border-gray-300 text-[#13141D] text-[15px] xl:text-[16px] font-semibold">
              <th className="py-3 px-4 text-left">Order #</th>
              <th className="py-3 px-4 text-left">Order Date</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Opt In</th>
              <th className="py-3 px-4 text-left">Items</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">FullFillment</th>
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
                    className={`min-w-[100px] inline-block text-center px-3 py-1 rounded-full text-sm font-medium  ${
                      statusColors[order.status] ?? "bg-gray-300 text-black"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">{order.fullfill}</td>
                <td className="py-3 px-4 text-center relative">
                  <BsThreeDotsVertical
                    onClick={() => toggleDropdown(i)}
                    className="inline-block cursor-pointer"
                  />
                  {openRow === i && (
                    <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-10">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setOpenRow(null);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setOpenRow(null);
                          router.push(`/dashboard/pro/orders/${order.id}`);
                        }}
                      >
                        View Details
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
                        onClick={() => {
                          setOpenRow(null);
                        }}
                      >
                        Canceled
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {paginatedData.map((order, i) => (
          <div key={i} className=" rounded-lg  overflow-hidden relative">
            <div className="flex justify-between items-center  px-4 py-2">
              <div>
                <p className="font-semibold">#{order.id}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[order.status] ?? "bg-gray-300 text-black"
                  }`}
                >
                  {order.status}
                </span>

                <div className="relative">
                  <BsThreeDotsVertical
                    onClick={() => toggleDropdown(i)}
                    className="cursor-pointer"
                  />
                  {openRow === i && (
                    <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-10">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => setOpenRow(null)}
                      >
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setOpenRow(null);
                          router.push(`/dashboard/pro/orders/${order.id}`);
                        }}
                      >
                        View Details
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
                        onClick={() => setOpenRow(null)}
                      >
                        Canceled
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="text-sm">
              <div className="flex justify-between px-4 py-2 bg-[#F0EEE9]">
                <span className="text-gray-600">Customer</span>
                <span className="font-medium">{order.customer}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="text-gray-600">Email</span>
                <span className="text-gray-800">{order.email}</span>
              </div>
              <div className="flex justify-between px-4 py-2 bg-[#F0EEE9]">
                <span className="text-gray-600">Opt In</span>
                <span className="font-medium">{order.optIn}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span className="text-gray-600">Items</span>
                <span className="font-medium">{order.items}</span>
              </div>
              <div className="flex justify-between px-4 py-2 bg-[#F0EEE9]">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">{order.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            {startIndex + 1}-{Math.min(startIndex + itemsPerPage, data.length)}{" "}
            of {data.length} orders
          </p>

          <div className="flex items-center gap-3">
            <button
              className="px-2 py-1 text-gray-600 disabled:opacity-50 cursor-pointer"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              <FaAngleDoubleLeft />
            </button>

            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-2 py-1 text-gray-600 disabled:opacity-50 cursor-pointer"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
