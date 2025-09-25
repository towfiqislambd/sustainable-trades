"use client";
import React, { useState } from "react";
import { data2, shopdata } from "@/Components/Data/data";
import Product from "@/Components/Common/Product";
import DashBoardHeader from "@/Components/Common/DashBoardHeader";
import Shop from "@/Components/Common/Shop";

const Favourites = () => {
  const tabs: string[] = ["Follow ShopLists", "WishLists"];
  const [isActive, setIsActive] = useState("Follow ShopLists");

  return (
    <>
      <DashBoardHeader
        heading="Yours favorites"
        placeholder="Search favorites"
      />
      <div className="flex gap-x-3 items-center mt-5">
        {tabs.map((tab) => (
          <h3
            key={tab}
            onClick={() => setIsActive(tab)}
            className={`text-[16px] md:text-[20px] font-bold    shrink-0 cursor-pointer ${
              isActive === tab ? "text-[#000] border-b-2" : "text-[#77978F]"
            }`}
          >
            {tab}
          </h3>
        ))}
      </div>
      {isActive === "WishLists" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 mt-10">
          {data2?.map((product) => (
            <Product key={product?.id} product={product} is_feathered={true} />
          ))}
        </div>
      )}
      {isActive === "Follow ShopLists" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-x-6 gap-y-10 mb-14 mt-10">
          {shopdata?.map((shopInfo) => (
            <Shop key={shopInfo?.id} shop={shopInfo} />
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
