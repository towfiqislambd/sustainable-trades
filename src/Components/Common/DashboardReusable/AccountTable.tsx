import React from "react";

type titleprops = {
  title: string;
};

const AccountTable: React.FC<titleprops> = ({ title }) => {
  const data = [
    {
      order: "23486 +0% /mo",
      revenue: "$83 +0% /mo",
      profit: "$40 +0% /mo",
      expenses: "$25",
      shipping: "$12 +0% /mo",
      salesTax: "$6 +0% /mo",
      date: "10/31/23",
    },
    {
      order: "23487 +0% /mo",
      revenue: "$90 +2% /mo",
      profit: "$45 +1% /mo",
      expenses: "$30",
      shipping: "$15 +0% /mo",
      salesTax: "$7 +0% /mo",
      date: "11/01/23",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 border-b border-gray-400 pb-2">
        <h4 className="text-[20px] sm:text-[24px] font-semibold text-[#000]">
          {title}
        </h4>
        <select className="w-full sm:w-[150px] border rounded-lg p-2 text-sm sm:text-base">
          <option value="30 Days">30 Days</option>
          <option value="07 Days">07 Days</option>
          <option value="10 Days">10 Days</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="overflow-x-auto mt-5">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-[#274F45] text-[#fff] text-[14px] sm:text-[16px] font-semibold">
              <th className="py-2 px-4 text-left">Order #</th>
              <th className="py-2 px-4 text-left">Revenue</th>
              <th className="py-2 px-4 text-left">Profit</th>
              <th className="py-2 px-4 text-left">Expenses</th>
              <th className="py-2 px-4 text-left">Shipping</th>
              <th className="py-2 px-4 text-left">Sales Tax</th>
              <th className="py-2 px-4 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-300 text-[#13141D] text-[14px] font-medium"
              >
                <td className="py-3 px-4 text-[#3470E5]">{row.order}</td>
                <td className="py-3 px-4">{row.revenue}</td>
                <td className="py-3 px-4">{row.profit}</td>
                <td className="py-3 px-4">{row.expenses}</td>
                <td className="py-3 px-4">{row.shipping}</td>
                <td className="py-3 px-4">{row.salesTax}</td>
                <td className="py-3 px-4 text-center">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountTable;
