"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setSelectedOption(null);
  };

  return (
    <>
      <div className="border-b border-[#BFBEBE] pb-4">
        <h2 className="text-[40px] font-lato font-semibold text-[#000]">
          Shipping
        </h2>
        <h5 className="cursor-pointer flex items-center gap-x-1 text-[#13141D] font-normal text-[16px]">
          <FaAngleLeft />
          Back
        </h5>
      </div>

      <div className="pt-6">
        <h4 className="text-[#13141D] text-[24px] font-bold">
          Shipping Settings
        </h4>
        <p className="text-[#13141D] text-[16px] font-normal ">
          You can manage available shipping options for customers and set up
          your preferred shipping calculator.
        </p>

        <div className="pt-6 flex flex-col gap-y-4">
          <h5 className="text-[#13141D] text-[16px] font-semibold">
            Shipping Options
          </h5>
          <p className="text-[#13141D] text-[16px] font-normal max-w-[570px]">
            You can choose how you want to apply shipping costs to your order.
            Shipping cost can be calculated with a flat rate, by weight, or
            connect your store to ShipStation and enjoy full shipping
            integration including automated shipping labels!
          </p>

          {/* Example existing card */}
          <div className="border-2 border-[#67645F] bg-[#E6F5F4] px-6 py-4 rounded-lg max-w-[700px]">
            <h4 className="text-[16px] font-bold text-[#13141D] pb-3">
              USPS MAIL
            </h4>
            <h6 className="text-[16px] font-medium text-[#13141D]">
              Flat Rate: $6.00 per order, $1.00 per item
            </h6>
            <p className="text-[16px] font-medium text-[#13141D]">
              United States (54 of 54), Canada (13 of 13)
            </p>
          </div>

          {/* Dropdown button */}
          <div className="relative max-w-[250px]">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#274F45] text-white px-4 py-2 rounded-lg w-full font-semibold flex gap-x-5 items-center"
            >
              <FaAngleDown />
              Add Shipping Option
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-5 w-full flex flex-col gap-y-4">
                <div
                  onClick={() => handleOptionClick("Flat Rate")}
                  className="px-4 py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-[700px]"
                >
                  <h3 className="text-[#274F45] font-bold text-[16px]">
                    Flat Rate
                  </h3>
                  <p className="text-[16px] text-[#3D3D3D] font-medium pt-1">
                    Define a charge for every order and a flat fee for each
                    item.
                  </p>
                </div>
                <div
                  onClick={() => handleOptionClick("Depending on Weight")}
                  className="px-4 py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-[700px]"
                >
                  <h3 className="text-[#274F45] font-bold text-[16px]">
                    Depending on Weight
                  </h3>
                  <p className="text-[16px] text-[#3D3D3D] font-medium pt-1">
                    Define a charge for every order and a flat fee for each
                    item.
                  </p>
                </div>
                <div
                  onClick={() => handleOptionClick("Connect ShipStation")}
                  className="px-4 py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-[700px]"
                >
                  <h3 className="text-[#274F45] font-bold text-[16px]">
                    Connect ShipStation
                  </h3>
                  <p className="text-[16px] text-[#3D3D3D] font-medium pt-1">
                    Define a charge for every order and a flat fee for each
                    item.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Flat Rate */}
      {selectedOption === "Flat Rate" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center"></div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Depending on Weight */}
      {selectedOption === "Depending on Weight" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Depending on Weight</h2>
            <p>
              Let the shipping cost depend on the total weight of the purchase.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Connect ShipStation */}
      {selectedOption === "Connect ShipStation" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Connect ShipStation</h2>
            <p>
              Automatically sync your orders with a shipping solution to
              streamline your fulfillment workflow.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
