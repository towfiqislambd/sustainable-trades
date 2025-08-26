import Image from "next/image";
import React from "react";
import { FaAngleRight, FaSearch } from "react-icons/fa";
import Inventory from "../../../Assets/inventory.png";

const DashboardReusable = () => {
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <div className="relative w-full">
          <input
            placeholder={"Search..."}
            type="search"
            className="py-[10px] pl-4 outline-0 border border-[#274F45] rounded-[8px] text-[16px] text-[#67645F] font-normal w-full"
          />
          <div className="absolute top-4 right-3">
            <FaSearch />
          </div>
          <div className="absolute top-0 right-10 w-[2px] bg-[#274F45] h-[45px]"></div>
        </div>
      </div>
      <div className="py-9 flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[24px] font-semibold text-[#13141D] tracking-[2.4px]">
            Hi Jenn,
          </h3>
          <h3 className="text-[24px] font-semibold text-[#13141D] tracking-[2.4px]">
            Here’s your store: Earth’s Essence
          </h3>
        </div>
        <button className="px-[58px] py-4 rounded-[8px] bg-[#E48872] text-[18px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872]">
          Edit Shop
        </button>
      </div>
      <div className="border border-[#A7A39C] py-3 rounded-[8px]">
        <div className="flex justify-between items-center">
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Orders
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              12
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Trades
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              4
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Revenue
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              $458.32
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Visits
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              32
            </h4>
          </div>
        </div>
      </div>
      <div className="pt-[77px] pb-8">
        <div className="border border-[#A7A39C] rounded-[10px] w-fit">
          <div className="p-3">
            <div className="flex justify-between">
              <h5 className="text-[16px] text-[#000] font-semibold text-center">
                Inventory
              </h5>
              <h6 className="text-[16px] text-[#000] font-semibold text-center flex gap-x-1 items-center cursor-pointer">
                More
                <FaAngleRight />
              </h6>
            </div>
            <div className="pt-6 pb-3 flex gap-x-2 items-center">
              <Image
                src={Inventory}
                alt="Inventory"
                height={60}
                width={80}
                className="shrink-0"
              />
              <div className="">
                <div className="flex justify-between shrink-0">
                  <h4 className="text-[14px] text-[#000] font-semibold">
                    Lavender Soap Bars
                  </h4>
                  <h4 className="text-[14px] text-[#274F45] font-semibold">
                    134 items
                  </h4>
                </div>
                <p className="text-[12px] text-[#000] font-normal py-1">
                  Handmade soap bars infused with lavender essential oils...
                </p>
                <h6 className="text-[10px] text-[#000] font-semibold">
                  In Stock
                </h6>
              </div>
            </div>
          </div>
          <div className="border-t border-b border-[#C8C8C8]">
            <div className="p-3 w-full">
              <div className="flex gap-x-2">
                <Image
                  src={Inventory}
                  alt="Inventory"
                  height={60}
                  width={80}
                  className="shrink-0"
                />
                <div className="w-full">
                  <div className="flex justify-between shrink-0 w-full">
                    <h4 className="text-[14px] text-[#000] font-semibold">
                      LHandmade Cocoa Butter
                    </h4>
                    <h4 className="text-[14px] text-[#274F45] font-semibold">
                      134 items
                    </h4>
                  </div>

                  <h6 className="text-[10px] text-[#000] font-semibold  pt-10">
                    In Stock
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 w-full">
            <div className="flex gap-x-2">
              <Image
                src={Inventory}
                alt="Inventory"
                height={60}
                width={80}
                className="shrink-0"
              />
              <div className="w-full">
                <div className="flex justify-between shrink-0 w-full">
                  <h4 className="text-[14px] text-[#000] font-semibold">
                    Cold-pressed Rosemary Oil
                  </h4>
                  <h4 className="text-[14px] text-[#274F45] font-semibold">
                    134 items
                  </h4>
                </div>

                <h6 className="text-[10px] text-[#E48872] font-semibold mt-10">
                  Running Low
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReusable;
