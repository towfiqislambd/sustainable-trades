import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Listings
      </h2>
      <div className="flex justify-between mt-6">
        <div className="flex gap-x-6">
          <div className="">
            <p className="text-[#13141D] text-[16px] font-semibold">
              sort by :
            </p>
            <select
              name=""
              id=""
              className="p-4 rounded-[10px] border border-[#A7A39C] mt-2  w-[190px] cursor-pointer"
            >
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
              <option
                value=""
                className="text-[#13141D] text-[16px] font-normal"
              >
                Name: A - Z
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
