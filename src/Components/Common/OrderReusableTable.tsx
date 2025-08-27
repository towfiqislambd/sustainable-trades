import { Order } from "@/Types/type";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { statusColors } from "../Data/data";


type OrdersTableProps = {
  title?: string;
  data: Order[];
};


const OrdersTable: React.FC<OrdersTableProps> = ({ title, data }) => {
  return (
    <div className="p-6">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
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
          {data.map((order, i) => (
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
                    statusColors[order.status] ?? "bg-gray-300 text-black"
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
    </div>
  );
};

export default OrdersTable;
