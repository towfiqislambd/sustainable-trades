import Link from "next/link";
import React from "react";

const ListingsPage = () => {
  return (
    <div className="md:p-8">
      {/* Page title */}
      <h3 className="text-[30px] md:text-[40px] font-semibold text-[#13141D]">
        Listings
      </h3>

      {/* Filters */}
      <div className="flex sm:flex-row flex-col gap-3 md:gap-6 pt-3 pb-4 md:pt-6 md:pb-8">
        <div>
          <p className="text-[#13141D] text-[16px] font-semibold">Sort by :</p>
          <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-full md:w-[190px] cursor-pointer">
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
          <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-full md:w-[190px] cursor-pointer">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Empty state box */}
      <div className="flex flex-col items-center justify-center border-3 border-dashed border-[#13141D] rounded-lg h-[300px] md:h-[350px] bg-[#F0EEE9]">
        <p className="text-[#13141D] text-[18px] md:text-[20px] mb-4">
          Oops, you don’t have any listings yet!
        </p>
        <Link href={"/dashboard/basic/create-listing"}>
          <button className="bg-[#E48872] text-black px-6 py-3 md:py-5 rounded-lg hover:bg-[#d9655a] transition text-[14px] md:text-[16px] font-semibold cursor-pointer">
            + Add New Listing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingsPage;
