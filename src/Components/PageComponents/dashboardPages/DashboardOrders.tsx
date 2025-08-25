import React from "react";
import Image from "next/image";
import { orders } from "@/Components/Data/data";
import { Again } from "@/Components/Svg/SvgContainer";

const DashboardOrders = () => {


  return (
    <div className="flex flex-col gap-6">
      {orders.map(order => (
        <div key={order.id} className="border border-[#BFBEBE] rounded-[8px]">
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
          <div className="pt-2 px-4 pb-6">
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
                    <button className="p-2 rounded-[8px] bg-[#D4E2CB] flex gap-x-2 text-[16px] font-normal text-[#000] cursor-pointer group">
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
                <button className="p-2 rounded-[8px] border border-[#BFBEBE] text-[16px] font-normal text-[#000] cursor-pointer w-[250px] hover:scale-105 duration-500 ease-in-out">
                  View Order
                </button>
                <button className="p-2 rounded-[8px] border border-[#BFBEBE] text-[16px] font-normal text-[#000] cursor-pointer w-[250px] hover:scale-105 duration-500 ease-in-out">
                  Get Help
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOrders;
