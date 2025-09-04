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
    </div>
  );
};

export default page;
