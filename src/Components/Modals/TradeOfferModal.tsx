import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LocationTwoSvg, SendSvg, Reload } from "@/Components/Svg/SvgContainer";
import { getAllListings } from "@/Hooks/api/cms_api";
import useAuth from "@/Hooks/useAuth";
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-6 bg-gray-200 rounded w-1/3"></div>
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>

      <div className="space-y-2">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>

      <div className="h-24 bg-gray-200 rounded"></div>

      <div className="flex gap-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};
const TradeOfferModal = ({ id, productId }: any) => {
  const { user } = useAuth();
  // My Shop Listing
  const { data: myListings, isLoading: myListingsLoading } = getAllListings(
    user?.shop_info?.id
  );
  const { data: allListings, isLoading: listingsLoading } = getAllListings(id);
  const [price, setPrice] = useState<null | number>(null);
  const [senderPrice, setSenderPrice] = useState<null | number>(null);

  if (listingsLoading || myListingsLoading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <h3 className="text-light-green font-semibold text-lg mb-2">
        Trade Offer
      </h3>

      {/* Shop Name */}
      <h4 className="text-2xl font-semibold text-secondary-black mb-2">
        Organic Bath Soaps
      </h4>

      {/* Shop Review */}
      <div className="flex gap-1 items-center mb-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <FaStar key={index} className="text-primary-green text-sm" />
        ))}
      </div>

      {/* Shop Location */}
      <div className="flex gap-1 items-center mb-3">
        <LocationTwoSvg />
        <span className="text-light-green">13 mi. away</span>
      </div>

      {/* ---------- My Offer Section ---------- */}
      <div className="border border-gray-200 shadow rounded-xl p-3 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <select
            defaultValue={
              allListings?.data?.data?.find(
                (item: any) => item?.id === productId
              )?.id
            }
            onChange={e => setPrice(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 flex-1"
          >
            {allListings?.data?.data.map((item: any) => (
              <option key={item?.id} value={item?.id}>
                {item?.product_name}
              </option>
            ))}
          </select>

          <input
            type="number"
            defaultValue={1}
            className="border border-gray-300 rounded-md p-2 w-20 text-center"
            // value={item.quantity}
          />

          <input
            className="border border-gray-300 rounded-md p-2 w-24 text-center"
            value={
              price
                ? price
                : allListings?.data?.data?.find(
                    (item: any) => item?.id === productId
                  )?.product_price
            }
          />

          <button className="cursor-pointer">
            <RiDeleteBin6Line className="text-red-600 text-2xl" />
          </button>
        </div>

        <button className="text-light-green text-sm hover:underline cursor-pointer">
          + Add another product/service
        </button>
      </div>

      {/* hr */}
      <div className="flex gap-x-5 items-center my-4">
        <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
        <div className="inline-block">
          <Reload className="cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out" />
        </div>
        <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
      </div>

      {/* ---------- Their Offer Section ---------- */}
      <div className="border border-gray-200 shadow rounded-xl p-3 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <select
            onChange={e => setSenderPrice(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 flex-1"
          >
            {myListings?.data?.data.map((item: any) => (
              <option key={item?.id} value={item?.id}>
                {item?.product_name}
              </option>
            ))}
          </select>

          <input
            type="number"
            defaultValue={1}
            className="border border-gray-300 rounded-md p-2 w-20 text-center"
            // value={item.quantity}
          />

          <input
            className="border border-gray-300 rounded-md p-2 w-24 text-center"
            value={
              senderPrice
                ? senderPrice
                : myListings?.data?.data?.find(
                    (item: any) => item?.shop_info_id === user?.shop_info?.id
                  )?.product_price
            }
          />

          <button className="cursor-pointer">
            <RiDeleteBin6Line className="text-red-600 text-2xl" />
          </button>
        </div>

        <button className="text-light-green text-sm hover:underline cursor-pointer">
          + Add another product/service
        </button>
      </div>

      <div className="mb-5">
        <label
          htmlFor="msg"
          className="text-light-green font-semibold mb-2 block"
        >
          Message to the Seller
        </label>
        <textarea
          id="msg"
          className="border border-gray-300 rounded-md p-2 w-full block"
          rows={3}
          placeholder="Type message here..."
        ></textarea>
      </div>

      <div className="flex gap-4 items-center">
        <button className="w-full py-1.5 md:py-3 hover:bg-primary-green hover:text-accent-white text-[14px] font-semibold md:text-[17px] duration-300 transition-all hover:scale-[0.97] rounded-lg shadow cursor-pointer bg-transparent text-primary-green border-2 border-primary-green text-center flex-1">
          <span>Cancel</span>
        </button>
        <button className="primary_btn flex-1 !flex gap-2 items-center justify-center">
          <SendSvg />
          <span>Send offer</span>
        </button>
      </div>
    </>
  );
};

export default TradeOfferModal;
