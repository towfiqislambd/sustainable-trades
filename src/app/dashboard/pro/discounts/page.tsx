import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <h2 className="text-[40px] font-semibold text-[#13141D]">
        Create Discount
      </h2>
      <div className="border-b border-gray-300">
        <h4 className="flex gap-x-1 items-center text-[#13141D] font-normal py-4 cursor-pointer">
          <FaAngleLeft />
          Back
        </h4>
      </div>
      <div className="pt-8 pb-12">
        <h4 className="text-[20px] font-normal text-[#13141D]">Name</h4>
        <input
          type="text"
          placeholder="Example: 15% Off Order"
          className="px-4 py-2 border-2 border-[#67645F] rounded-[8px] text-[16px] font-bold text-[#67645F] my-3 w-[750px]"
        />
        <p className="text-[16px] font-bold text-[#13141D]">
          The name that shoppers will see at checkout.
        </p>
      </div>
    </div>
  );
};

export default page;
