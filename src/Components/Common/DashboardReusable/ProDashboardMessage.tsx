import React from "react";
import Activity from "../../../Assets/activity.png";
import { FaAngleDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const ProDashboardMessage = () => {
  return (
    <div className="flex gap-x-8">
      <div className="border border-[#A7A39C] rounded-[8px] w-1/2">
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
          <div className="flex gap-x-[30px] px-4 items-center">
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
          <div className="flex gap-x-[30px] px-4 items-center">
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
          <div className="flex gap-x-[30px] px-4 items-center">
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
        <div className="py-4 border-t border-[#A7A39C]">
          <div className="flex gap-x-[30px] px-4 items-center">
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
      <div className="bg-[#274F45] px-4 py-5 rounded-[10px] h-fit w-1/2">
        <div className="flex justify-between">
          <h5>Need Help?</h5>
          <RxCross1 />
        </div>
      </div>
    </div>
  );
};

export default ProDashboardMessage;
