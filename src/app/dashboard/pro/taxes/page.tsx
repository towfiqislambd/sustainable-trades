"use client";

import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [chargeOnServices, setChargeOnServices] = useState(true);
  const [chargeOnShipping, setChargeOnShipping] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);

  const handleSave = () => {
    console.log("Saving tax rate:", {
      country,
      state,
      chargeOnServices,
      chargeOnShipping,
    });
  };

  return (
    <main className="h-fit mx-auto flex justify-cente">
      <div className="w-full max-w-md mx-auto mt-28 bg-[#FFFCF9] shadow-2xl rounded-[20px] p-8">
        {/* Header */}
        <div className="">
          <h2 className="text-[24px] font-bold text-[#000000]">Add Tax Rate</h2>
        </div>

        {/* Content */}
        <div className="py-8 space-y-6">
          {/* Country Field */}
          <div className="space-y-2">
            <label className="text-[16px] font-semibold text-[#13141D]">
              Country *
            </label>
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="w-full px-4 py-3 mt-2 text-left bg-white border-2 border-[#67645F] rounded-[8px] focus:outline-none focus:border-[#67645F] text-[16px]"
              >
                <span className={country ? "text-[#13141D]" : "text-[#9CA3AF]"}>
                  {country || "Country"}
                </span>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {countryOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border-2 border-[#67645F] rounded-[8px] shadow-lg p-2">
                  <div className="py-1">
                    {[
                      "United States",
                      "Canada",
                      "United Kingdom",
                      "Australia",
                    ].map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setCountry(option);
                          setCountryOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-[#13141D] hover:bg-gray-50 rounded-md text-[16px]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* State Field */}
          <div className="space-y-2">
            <label className="text-[16px] font-semibold text-[#13141D]">
              State *
            </label>
            <div className="relative">
              <button
                onClick={() => setStateOpen(!stateOpen)}
                className="w-full px-4 py-3 text-left mt-2 bg-white border-2 border-[#67645F ] rounded-[8px] focus:outline-none focus:border-[#67645F] text-[16px]"
              >
                <span className={state ? "text-[#13141D]" : "text-[#9CA3AF]"}>
                  {state || "State"}
                </span>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {stateOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border-2 border-[#67645F] rounded-[8px] shadow-lg p-2">
                  <div className="py-1">
                    {["California", "New York", "Texas", "Florida"].map(
                      option => (
                        <button
                          key={option}
                          onClick={() => {
                            setState(option);
                            setStateOpen(false);
                          }}
                          className="w-full px-3 py-2 text-left text-[#13141D] hover:bg-gray-50 rounded-md text-[16px]"
                        >
                          {option}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* State Rate */}
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-semibold text-[#13141D]">
              State Rate
            </span>
            <span className="text-[16px] font-semibold text-[#13141D]">0%</span>
          </div>

          {/* Toggle Switches */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <label className="text-[16px] font-medium text-[#13141D]">
                  Charge taxes on services and digital products
                </label>
              </div>
              <button
                onClick={() => setChargeOnServices(!chargeOnServices)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                  chargeOnServices ? "bg-[#45A57A]" : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    chargeOnServices ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <label className="text-[16px] font-medium text-[#13141D]">
                  Charge taxes on shipping
                </label>
              </div>
              <button
                onClick={() => setChargeOnShipping(!chargeOnShipping)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                  chargeOnShipping ? "bg-[#45A57A]" : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    chargeOnShipping ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* ZIP Code Rate Link */}
          <div className="pt-4">
            <button className="text-[16px] font-semibold text-[#000] hover:text-[#374151] uppercase tracking-wider">
              ADD A ZIP CODE RATE
            </button>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full bg-[#274F45] hover:bg-[#047857] cursor-pointer text-[#FEFEFE] 
              font-semibold py-4 rounded-[8px] duration-500 ease-in-out text-[20px]"
            >
              Save Tax Rate
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
