import React from "react";

type titleprops = {
  title: string
}

const AccountTable:React.FC<titleprops> = ({ title}) => {
  return (
    <div>
      <div className="flex justify-between border-b border-gray-400 pb-2">
        <h4 className="text-[24px] font-semibold text-[#000]">{title}</h4>
        <select name="" id="" className="w-[150px] border rounded-lg p-2">
          <option value="30 Days">30 Days</option>
          <option value="07 Days">07 Days</option>
          <option value="10 Days">10 Days</option>
        </select>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr className="border-2 border-gray-300 bg-[#274F45] text-[#fff] text-[16px] font-semibold">
            <th className="py-1 px-4 text-left">Order #</th>
            <th className="py-1 px-4 text-left">Revenue</th>
            <th className="py-1 px-4 text-left">Profit</th>
            <th className="py-1 px-4 text-left">Expenses</th>
            <th className="py-1 px-4 text-left">Shipping</th>
            <th className="py-1 px-4 text-left">Sales Tax</th>
            <th className="py-1 px-4 text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 text-[#13141D] text-[14px] font-semibold">
            <td className="py-3 px-4 text-[#3470E5]">23486 +0% /mo</td>
            <td className="py-3 px-4">$83 +0% /mo</td>
            <td className="py-3 px-4">$40 +0% /mo</td>
            <td className="py-3 px-4">$25</td>
            <td className="py-3 px-4">$12 +0% /mo</td>
            <td className="py-3 px-4">$6 +0% /mo</td>
            <td className="py-3 px-4 text-center">10/31/23</td>
          </tr>
          <tr className="border-b border-gray-300 text-[#13141D] text-[14px] font-semibold">
            <td className="py-3 px-4 text-[#3470E5]">23486 +0% /mo</td>
            <td className="py-3 px-4">$83 +0% /mo</td>
            <td className="py-3 px-4">$40 +0% /mo</td>
            <td className="py-3 px-4">$25</td>
            <td className="py-3 px-4">$12 +0% /mo</td>
            <td className="py-3 px-4">$6 +0% /mo</td>
            <td className="py-3 px-4 text-center">10/31/23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
