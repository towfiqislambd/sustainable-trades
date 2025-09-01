import React from "react";

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
          <th className="py-3 px-4 text-left">Amount</th>
          <th className="py-3 px-4 text-left">Status</th>
          <th className="py-3 px-4 text-center">Action</th>
        </tr>
      </thead>
    </table>
  );
};

export default PaymentTableReusable;
