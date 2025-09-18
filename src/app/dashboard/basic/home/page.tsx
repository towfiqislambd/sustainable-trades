import React from "react";
import Image from "next/image";
import Activity from "../../../../Assets/activity.png";
import Inventory from "../../../../Assets/inventory.png";

import { FaAngleDown, FaAngleRight, FaSearch } from "react-icons/fa";
import Link from "next/link";
import ProDashboardMessage from "@/Components/Common/DashboardReusable/ProDashboardMessage";
import { RxCross1 } from "react-icons/rx";

const Page = () => {
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
        <Link href={"/view-my-shop/id"}>
          <button className="px-[58px] py-4 rounded-[8px] bg-[#E48872] text-[18px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872]">
            Edit Shop
          </button>
        </Link>
      </div>
      <div className="border border-[#A7A39C] py-3 rounded-[8px]">
        <div className="flex justify-between items-center">
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Open Orders/Trades
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              12
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Active Listings
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              4
            </h4>
          </div>
          <div className="px-[65px]">
            <p className="text-[16px] text-[#67645F] font-semibold text-center">
              Visits
            </p>
            <h4 className="text-[40px] text-[#274F45] font-semibold text-center">
              $458.32
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
                      2 items left
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
                    76 items
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
      <div className="border border-[#A7A39C] rounded-[8px]">
        <div className="flex justify-between p-4">
          <h5 className="text-[16px] text-[#000] font-semibold text-center">
            Recent Activity
          </h5>
          <div className="relative">
            <select
              name=""
              id=""
              className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 w-[90px]"
            >
              <option value="">All</option>
            </select>
            <FaAngleDown className="absolute top-1 right-3" />
          </div>
        </div>
        <div className="border-t border-b border-[#A7A39C] py-4">
          <div className="flex gap-x-[200px] px-4 items-center">
            <div className="flex gap-x-2 items-center">
              <Image src={Activity} alt="Activity" width={40} height={40} />
              <div className="">
                <h5 className="text-[14px] text-[#000] font-semibold">You</h5>
                <p className="text-[14px] text-[#67645F] font-normal">
                  Sent 2 hours ago{" "}
                </p>
              </div>
            </div>
            <div className="">
              <h5 className="text-[14px] text-[#000] font-semibold">
                Trade: You began a trade with Rebecca Bennett
              </h5>
              <p className="text-[14px] text-[#67645F] font-normal">
                {" "}
                Rebecca Bennett: So glad that we agreed on ....
              </p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="flex gap-x-[200px] px-4 items-center">
            <div className="flex gap-x-2 items-center">
              <Image src={Activity} alt="Activity" width={40} height={40} />
              <div className="">
                <h5 className="text-[14px] text-[#000] font-semibold">
                  Taylor Lesnicki
                </h5>
                <p className="text-[14px] text-[#67645F] font-normal">
                  Sent 3 hours ago
                </p>
              </div>
            </div>
            <div className="">
              <h5 className="text-[14px] text-[#000] font-semibold">
                Trade: You began a trade with Rebecca Bennett
              </h5>
              <p className="text-[14px] text-[#67645F] font-normal">
                {" "}
                Rebecca Bennett: So glad that we agreed on ....
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-[#A7A39C]">
          <div className="flex gap-x-[200px] px-4 items-center">
            <div className="flex gap-x-2 items-center">
              <Image src={Activity} alt="Activity" width={40} height={40} />
              <div className="">
                <h5 className="text-[14px] text-[#000] font-semibold">
                  Audrey Leitner
                </h5>
                <p className="text-[14px] text-[#67645F] font-normal">
                  Sent 2 hours ago{" "}
                </p>
              </div>
            </div>
            <div className="">
              <h5 className="text-[14px] text-[#000] font-semibold">
                Trade: You began a trade with Rebecca Bennett
              </h5>
              <p className="text-[14px] text-[#67645F] font-normal">
                {" "}
                Rebecca Bennett: So glad that we agreed on ....
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-16">
        <div className="">
          <div className="flex justify-between">
            <div className="border border-[#A7A39C] rounded-[8px] w-3/5">
              <div className="flex justify-between p-4">
                <h5 className="text-[16px] text-[#000] font-semibold text-center">
                  Messages
                </h5>
                <div className="relative">
                  <select
                    name=""
                    id=""
                    className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 w-[90px]"
                  >
                    <option value="">All</option>
                  </select>
                  <FaAngleDown className="absolute top-1 right-3" />
                </div>
              </div>
              <div className="border-t border-b border-[#A7A39C] py-4">
                <div className="flex gap-x-[30px] px-4 items-center">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={Activity}
                      alt="Activity"
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <h5 className="text-[14px] text-[#000] font-semibold">
                        You
                      </h5>
                      <p className="text-[14px] text-[#67645F] font-normal">
                        Sent 2 hours ago{" "}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="text-[14px] text-[#000] font-semibold">
                      Re: Order#123456
                    </h5>
                    <p className="text-[14px] text-[#67645F] font-normal">
                      {" "}
                      Rebecca Bennett: So glad that we agreed on ....
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <div className="flex gap-x-[30px] px-4 items-center">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={Activity}
                      alt="Activity"
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <h5 className="text-[14px] text-[#000] font-semibold">
                        Taylor Lesnicki
                      </h5>
                      <p className="text-[14px] text-[#67645F] font-normal">
                        Sent 3 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="text-[14px] text-[#000] font-semibold">
                      Re: Order#123456
                    </h5>
                    <p className="text-[14px] text-[#67645F] font-normal">
                      {" "}
                      Rebecca Bennett: So glad that we agreed on ....
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-4 border-t border-[#A7A39C]">
                <div className="flex gap-x-[30px] px-4 items-center">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={Activity}
                      alt="Activity"
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <h5 className="text-[14px] text-[#000] font-semibold">
                        Audrey Leitner
                      </h5>
                      <p className="text-[14px] text-[#67645F] font-normal">
                        Sent 2 hours ago{" "}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="text-[14px] text-[#000] font-semibold">
                      Re: Order#123456
                    </h5>
                    <p className="text-[14px] text-[#67645F] font-normal">
                      {" "}
                      Rebecca Bennett: So glad that we agreed on ....
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-4 border-t border-[#A7A39C]">
                <div className="flex gap-x-[30px] px-4 items-center">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={Activity}
                      alt="Activity"
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <h5 className="text-[14px] text-[#000] font-semibold">
                        Audrey Leitner
                      </h5>
                      <p className="text-[14px] text-[#67645F] font-normal">
                        Sent 2 hours ago{" "}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="text-[14px] text-[#000] font-semibold">
                      Re: Order#123456
                    </h5>
                    <p className="text-[14px] text-[#67645F] font-normal">
                      {" "}
                      Rebecca Bennett: So glad that we agreed on ....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#A7A39C] rounded-[8px] p-4 w-1/3 text-center flex flex-col justify-center items-center">
              <h3 className="text-[20px] font-semibold text-[#13141D">
                Want more admin access?
              </h3>
              <p className="text-[16px] font-normal text-[#13141D] max-w-[280px] pt-]10px] pb-10">
                Upgrade at anytime to pro! All you have to do is pay the
                difference for the remainder of the year.
              </p>
              <button className="px-[58px] py-4 rounded-[8px] bg-transparent text-[18px] font-semibold text-[#13141D] cursor-pointer hover:bg-[#E48872]  duration-500 ease-in-out border border-[#E48872]">
                Upgrade To Pro
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <ProdashboardStatistics />
      </div> */}
    </div>
  );
};

export default Page;
