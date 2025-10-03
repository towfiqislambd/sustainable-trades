"use client";
import React, { useState } from "react";
import Community from "@/app/(main)/community-member-spotlight/page";


const Page = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-[30px] md:text-[40px] font-semibold text-[#000] flex items-center gap-x-2">
          Member Spotlight
        </h3>

        {/* Button that opens popup */}
        <button
          onClick={() => setShowPopup(true)}
          className="py-2 sm:py-4 px-6 bg-[#D4E2CB] rounded-[8px] border border-[#77978F] text-[13px] md:text-[16px] font-semibold text-[#13141D] cursor-pointer hover:translate-y-1 duration-300 ease-in-out h-[40px] md:h-[50px] w-full sm:w-fit flex items-center justify-center"
        >
          Apply for Community Member Spotlight
        </button>
      </div>

      {/* Render your Community component */}
      <Community />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#13141D] mb-3">
              Only Pro members can apply
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Upgrade to a Pro Membership today to apply and unlock this
              feature!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  window.location.href = "/dashboard/basic/membership";
                }}
                className="px-4 py-2 rounded-lg bg-[#77978F] text-white font-semibold hover:bg-[#5c7d75] duration-200 cursor-pointer"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
