import { getStatusColor, paymentData } from "@/Components/Data/data";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";

const PaymentTableReusable = () => {
  return (
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
        {paymentData.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-300 text-[#13141D] text-[14px] font-semibold"
          >
            <td className="py-3 px-4">{item.invoice}</td>
            <td className="py-3 px-4">{item.purchaseDate}</td>
            <td className="py-3 px-4">{item.billingTo}</td>
            <td className="py-3 px-4">{item.amount}</td>
            <td className="py-3 px-4">{item.paymentMethod}</td>
            <td
              className={`py-3 px-4 font-semibold ${getStatusColor(
                item.status
              )}`}
            >
              {item.status}
            </td>
            <td className="py-3 px-4 text-center  flex justify-center">
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTableReusable;
