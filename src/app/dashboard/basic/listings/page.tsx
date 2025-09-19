import React from "react";

const ListingsPage = () => {
  return (
    <div className="p-8">
      {/* Page title */}
      <h3 className="text-[40px] font-semibold text-[#13141D]">Listings</h3>

      {/* Filters */}
      <div className="flex gap-x-6 pt-6 pb-8">
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

      {/* Empty state box */}
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#A7A39C] rounded-lg h-[250px]">
        <p className="text-[#6B6B6B] text-[16px] mb-4">
          Oops, you don’t have any listings yet!
        </p>
        <button className="bg-[#E48872] text-white px-6 py-2 rounded-lg hover:bg-[#d9655a] transition">
          + Add New Listing
        </button>
      </div>
    </div>
  );
};

export default ListingsPage;
