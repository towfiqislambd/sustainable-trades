import Community from "@/app/(main)/community-member-spotlight/page";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-[30px] md:text-[40px] font-semibold text-[#000] flex items-center gap-x-2">
          Member Spotlight
        </h3>

        <button className="py-2 sm:py-4 px-6 bg-[#D4E2CB] rounded-[8px] border border-[#77978F] text-[13px] md:text-[16px] font-semibold text-[#13141D] cursor-pointer hover:translate-y-1 duration-300 ease-in-out h-[40px] md:h-[50px] w-full sm:w-fit flex items-center justify-center">
          Apply for Community Member Spotlight
        </button>
      </div>
      <Community />
    </div>
  );
};

export default page;
