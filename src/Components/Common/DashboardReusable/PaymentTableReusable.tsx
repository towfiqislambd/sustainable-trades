import { Order } from "@/Types/type";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { getStatusColor, PaymentData, paymentData } from "@/Components/Data/data";

type paymentdataprops = {
  data: PaymentData[];
  itemsPerPage?: number;
};

const PaymentTableReusable: React.FC<paymentdataprops> = ({
  data,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openRow, setOpenRow] = useState<number | null>(null);
  const router = useRouter();

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const toggleDropdown = (index: number) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <div className="">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300 text-[#13141D] text-[16px] font-semibold">
            <th className="py-3 px-4 text-left">Invoice #</th>
            <th className="py-3 px-4 text-left">Purchase Date</th>
            <th className="py-3 px-4 text-left">Billing to</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Payment Method</th>
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
              <td className="py-3 px-4">{order.invoice}</td>
              <td className="py-3 px-4">{order.purchaseDate}</td>
              <td className="py-3 px-4">
                <div className="flex flex-col">
                  <span>{order.billingTo}</span>
                </div>
              </td>
              <td className="py-3 px-4">{order.amount}</td>
              <td className="py-3 px-4">{order.paymentMethod}</td>
              <td className="py-3 px-4">
                <span
                  className={`min-w-[100px] inline-block text-center px-3 py-1 rounded-full text-sm font-medium ${
                    getStatusColor(order.status) ?? "bg-gray-300 text-black"
                  }`}
                >
                  {order.status}
                </span>
              </td>
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
                        router.push(`/dashboard/pro/orders/${order.invoice}`);
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            {startIndex + 1}-{Math.min(startIndex + itemsPerPage, data.length)}
            of {data.length} orders
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
      )}
    </div>
  );
};

export default PaymentTableReusable;
