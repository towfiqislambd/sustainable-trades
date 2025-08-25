"use client";
import { useParams } from "next/navigation";
import React from "react";
import { orders } from "@/Components/Data/data";
import Image from "next/image";

const OrderDetailsPage = () => {
  const params = useParams();
  const orderId = params.id;

  const order = orders.find(order => order.id === orderId);

  if (!order) {
    return <p className="text-red-500">Order not found</p>;
  }

  return (
    <>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Order Details
      </h2>
      <div className="border border-[#BFBEBE] rounded-[8px] my-10">
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="flex gap-x-10">
              <div>
                <h3 className="text-[#67645F] font-sans font-bold">
                  Order Placed
                </h3>
                <p className="font-sans font-normal text-[#000] text-[16px]">
                  {order.placedDate}
                </p>
              </div>
              <div>
                <h3 className="text-[#67645F] font-sans font-bold">Total</h3>
                <p className="font-sans font-normal text-[#000] text-[16px]">
                  {order.total}
                </p>
              </div>
            </div>
            <div className="flex gap-x-10">
              <div>
                <h3 className="text-[#67645F] font-sans font-bold">
                  Order Number
                </h3>
                <p className="font-sans font-normal text-[#000] text-[16px]">
                  {order.id}
                </p>
              </div>
              <div>
                <h3 className="text-[#1F4038] font-sans font-bold underline cursor-pointer">
                  View Invoice
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#BFBEBE] h-[1px]"></div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
