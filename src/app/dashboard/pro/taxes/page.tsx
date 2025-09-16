import React from "react";
import { RxCross2 } from "react-icons/rx";

const page = () => {
  return (
    <div className=" flex justify-center items-center h-full">
      <div className="bg-[#FFFCF9] p-8 shadow-2xl rounded-[20px]">
        <div className="flex justify-between items-center">
          <h4 className="text-[24px] text-[#000] font-bold">Add Tax Rate</h4>
          <RxCross2 className="mt-1 size-5" />
        </div>
        <form action="" className="mt-8"></form>
      </div>
    </div>
  );
};

export default page;
