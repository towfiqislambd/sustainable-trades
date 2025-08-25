"use client";
import { useParams } from "next/navigation";
import React from "react";
import { orders } from "@/Components/Data/data";
import Image from "next/image";
import Link from "next/link";
import { Again } from "@/Components/Svg/SvgContainer";

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
        <div className="p-6">
          <ul className="flex justify-between">
            <div className="">
              <li className="text-[#000] font-sans font-bold text-[16px]">
                Shipping Address
              </li>
              <ul className="flex flex-col gap-2">
                <li className="text-[#000] font-sans font-normal text-[16px]">
                  Jane Doe
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px]">
                  1234 Hollywood Ave
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px]">
                  Los Angeles, CA 90032
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px]">
                  United States
                </li>
              </ul>
            </div>
            <div className="">
              <li className="text-[#000] font-sans font-bold text-[16px]">
                Payment
              </li>
              <ul className="flex flex-col gap-2">
                <li className="text-[#000] font-sans font-normal text-[16px]">
                  Visa ending in 3333
                </li>
              </ul>
            </div>
            <div className="">
              <li className="text-[#000] font-sans font-bold text-[16px] text-start">
                Order Summary
              </li>
              <ul className="flex flex-col gap-2 w-full">
                <li className="text-[#000] font-sans font-normal text-[16px] flex justify-between gap-10">
                  Items Subtotal:
                  <span> $36.00</span>
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px] flex justify-between gap-10">
                  Shipping and Handling:
                  <span> $36.00</span>
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px] flex justify-between gap-10">
                  Total before tax
                  <span> $36.00</span>
                </li>
                <li className="text-[#000] font-sans font-normal text-[16px] flex justify-between gap-10">
                  Estimated tax to be collected:
                  <span> $36.00</span>
                </li>
                <li className="text-[#000] font-sans font-bold text-[16px] text-start flex justify-between gap-10">
                  Grand Total
                  <span> $36.00</span>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="pt-2 px-4 pb-6 border border-[#BFBEBE] rounded-[8px]">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-[20px] font-bold text-[#000]">
              {order.arrivingText}
            </h4>
            <p className="font-sans font-normal text-[#000] text-[16px] pt-2 pb-3">
              {order.packageNote}
            </p>
            <div className="flex gap-x-3">
              <Image
                src={order.productImage}
                alt={order.productName}
                height={117}
                width={115}
              />
              <div className="flex flex-col gap-y-10">
                <h5 className="text-[20px] font-bold text-[#000]">
                  {order.productName}
                </h5>

                <button className="p-2 rounded-[8px] w-fit bg-[#D4E2CB] flex gap-x-2 text-[16px] font-normal text-[#000] cursor-pointer group">
                  <Again className="transition-transform duration-500 group-hover:rotate-[260deg]" />
                  Buy it again
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="p-2 rounded-[8px] border border-[#BFBEBE] text-[16px] font-normal text-[#000] cursor-pointer w-[250px] hover:scale-105 duration-500 ease-in-out">
              Track Package
            </button>
            <Link href={`/dashboard/customer/orders/${order.id}`}>
              <button className="p-2 rounded-[8px] border border-[#BFBEBE] text-[16px] font-normal text-[#000] cursor-pointer w-[250px] hover:scale-105 duration-500 ease-in-out">
                View Order
              </button>
            </Link>
            <button className="p-2 rounded-[8px] border border-[#BFBEBE] text-[16px] font-normal text-[#000] cursor-pointer w-[250px] hover:scale-105 duration-500 ease-in-out">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
