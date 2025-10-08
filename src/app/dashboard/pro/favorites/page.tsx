"use client";
import React, { useState } from "react";
import Shop from "@/Components/Common/Shop";
import Product from "@/Components/Common/Product";
import DashBoardHeader from "@/Components/Common/DashBoardHeader";
import { getAllFollowList, getAllShoplist } from "@/Hooks/api/dashboard_api";
import { ProductSkeleton } from "@/Components/Loader/Loader";

const Favourites = () => {
  const tabs: string[] = ["Follow ShopLists", "WishLists"];
  const [isActive, setIsActive] = useState("Follow ShopLists");

  // Fetch wishlists (favorite products)
  const { data: followlist, isLoading: wishlistLoading } = getAllFollowList();

  // Fetch followed shops
  const { data: shopFollowList, isLoading: shoplistLoading } = getAllShoplist();

  const followShops = shopFollowList?.data || [];
  const wishlistProducts = followlist?.data || [];

  return (
    <>
      <DashBoardHeader
        heading="Your Favorites"
        placeholder="Search favorites"
      />

      {/* Tabs */}
      <div className="flex gap-x-10 items-center mt-5">
        {tabs?.map(tab => (
          <h3
            key={tab}
            onClick={() => setIsActive(tab)}
            className={`text-[16px] md:text-[18px] font-bold shrink-0 cursor-pointer transition-all duration-200 uppercase ${
              isActive === tab
                ? "text-[#000] border-b-2 border-black"
                : "text-[#77978F]"
            }`}
          >
            {tab}
          </h3>
        ))}
      </div>

      {/* WISHLISTS SECTION */}
      {isActive === "WishLists" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 mt-10">
          {wishlistLoading ? (
            [1, 2, 3, 4].map((_, index) => <ProductSkeleton key={index} />)
          ) : wishlistProducts?.length > 0 ? (
            wishlistProducts?.map((item: any) => (
              <Product
                key={item?.id}
                product={{
                  id: item?.product?.id,
                  product_name: item?.product?.product_name,
                  product_price: item?.product?.product_price,
                  images: item?.product?.images || [],
                }}
                is_feathered={true}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No products found in your wishlist.
            </p>
          )}
        </div>
      )}

      {/* FOLLOW SHOPLISTS SECTION */}
      {isActive === "Follow ShopLists" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 mb-14 mt-10">
          {shoplistLoading ? (
            [1, 2, 3, 4].map((_, index) => <ProductSkeleton key={index} />)
          ) : followShops.length > 0 ? (
            followShops.map((item: any) => (
              <Shop
                key={item?.id}
                shop={{
                  id: item?.shop?.id,
                  shop_name: item?.shop?.shop_name,
                  shop_image: item?.shop?.shop_image,
                  shop_location: item?.shop?.address?.address_line_1,
                }}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No followed shops found.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Favourites;
