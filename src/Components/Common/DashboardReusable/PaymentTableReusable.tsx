import React from "react";
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
        <tr className="border-b border-gray-300 text-[#13141D] text-[14px] font-semibold">
          <td className="py-3 px-4">#INV-5496</td>
          <td className="py-3 px-4">Jun 25, 2024</td>
          <td className="py-3 px-4">Amy Woods</td>
          <td className="py-3 px-4">$16.78</td>
          <td className="py-3 px-4">Pending</td>
          <td className="py-3 px-4">Stripe</td>
          <td className="py-3 px-4 flex justify-center"><FaDotCircle /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentTableReusable;
