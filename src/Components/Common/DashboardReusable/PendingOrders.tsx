import React from "react";

const PendingOrders = () => {
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
      </table>
    </div>
  );
};

export default PendingOrders;
