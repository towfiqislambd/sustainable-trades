import Community from "@/app/(main)/community-member-spotlight/page";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-[40px] font-semibold text-[#000] flex items-center gap-x-2">
          Member Spotlight
        </h3>
        <div className="">
          <button className="py-4 px-6 bg-[#D4E2CB] rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out  h-[50px] flex items-center justify-center">
            Apply for Community Member Spotlight
          </button>
        </div>
      </div>
      <Community />
    </div>
  );
};

export default page;
