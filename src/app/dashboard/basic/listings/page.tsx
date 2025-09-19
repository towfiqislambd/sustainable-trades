import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="text-[40px] font-semibold text-[#13141D]">Listings</h3>
      <div className="flex gap-x-6">
        <div>
          <p className="text-[#13141D] text-[16px] font-semibold">Sort by :</p>
          <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-[190px] cursor-pointer">
            <option>Name: A - Z</option>
            <option>Name: Z - A</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div>
          <p className="text-[#13141D] text-[16px] font-semibold">
            Listing Status
          </p>
          <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-[190px] cursor-pointer">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default page;
