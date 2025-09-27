import Image from "next/image";
import React from "react";
import Profile from "../../../../Assets/notification.png";

const page = () => {
  return (
    <>
      <div className=" bg-[#FFF] rounded-lg w-full mx-auto shadow-2xl">
        <div className="border-b border-[#E5E5E5]">
          <h3 className="text-[30px] md:text-[40px] font-semibold text-[#000] flex items-center gap-x-2 p-3 md:p-5">
            Notifications
          </h3>
        </div>
        <div className="border-b border-[#E5E5E5] flex  justify-between p-2.5 md:p-5 items-center">
          <div className="flex gap-2.5 md:gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full w-[50px] h-[50px] md:h-[80px] md:w-[80px]"
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
        <div className="border-b border-[#E5E5E5] flex  justify-between p-2.5 md:p-5 items-center">
          <div className="flex gap-2.5 md:gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full w-[50px] h-[50px] md:h-[80px] md:w-[80px]"
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
        <div className="border-b border-[#E5E5E5] flex  justify-between p-2.5 md:p-5 items-center">
          <div className="flex gap-2.5 md:gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full  w-[50px] h-[50px] md:h-[80px] md:w-[80px]"
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
        <div className="border-b border-[#E5E5E5] flex  justify-between p-2.5 md:p-5 items-center">
          <div className="flex gap-2.5 md:gap-x-5 items-center">
            <Image
              src={Profile}
              alt="Profile"
              height={500}
              width={500}
              className="rounded-full w-[50px] h-[50px] md:h-[80px] md:w-[80px]"
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
