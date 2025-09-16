import Image from "next/image";
import React from "react";
import Profile from "../../../../Assets/notification.png";

const page = () => {
  return (
    <>
      <div className=" bg-[#FFF] rounded-lg w-full mx-auto shadow-2xl">
        <div className="border-b border-[#E5E5E5]">
          <h3 className="text-[40px] font-semibold text-[#000] flex items-center gap-x-2 p-5">
            Notifications
          </h3>
        </div>
        <div className="border-b border-[#E5E5E5] flex  justify-between p-5 items-center">
          <div className="flex gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full h-[80px] w-[80px]"
            />
            <div className="">
              <h3 className="text-[16px] font-bold text-[#000]">Item Sold</h3>
              <h4 className="text-[16px] font-normal text-[#000]">
                Shipping to 3 buyers today.
              </h4>
            </div>
          </div>
          <p className="text-[#969696] text-[13px] font-semibold">2m</p>
        </div>
        <div className="border-b border-[#E5E5E5] flex  justify-between p-5 items-center">
          <div className="flex gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full h-[80px] w-[80px]"
            />
            <div className="">
              <h3 className="text-[16px] font-bold text-[#000]">Item Sold</h3>
              <h4 className="text-[16px] font-normal text-[#000]">
                Shipping to 3 buyers today.
              </h4>
            </div>
          </div>
          <p className="text-[#969696] text-[13px] font-semibold">2m</p>
        </div>
        <div className="border-b border-[#E5E5E5] flex  justify-between p-5 items-center">
          <div className="flex gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full h-[80px] w-[80px]"
            />
            <div className="">
              <h3 className="text-[16px] font-bold text-[#000]">Item Sold</h3>
              <h4 className="text-[16px] font-normal text-[#000]">
                Shipping to 3 buyers today.
              </h4>
            </div>
          </div>
          <p className="text-[#969696] text-[13px] font-semibold">2m</p>
        </div>
        <div className="border-b border-[#E5E5E5] flex  justify-between p-5 items-center">
          <div className="flex gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full h-[80px] w-[80px]"
            />
            <div className="">
              <h3 className="text-[16px] font-bold text-[#000]">Item Sold</h3>
              <h4 className="text-[16px] font-normal text-[#000]">
                Shipping to 3 buyers today.
              </h4>
            </div>
          </div>
          <p className="text-[#969696] text-[13px] font-semibold">2m</p>
        </div>
      </div>
    </>
  );
};

export default page;
