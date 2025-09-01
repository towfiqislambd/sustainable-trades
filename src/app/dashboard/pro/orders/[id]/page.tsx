"use client";

import OrderNote from "@/Components/Modals/OrderNote";
import OrderSummary from "@/Components/Prodashboardcomponents/OrderSummary";
import Proorderproduct from "@/Components/Prodashboardcomponents/Proorderproduct";
import { Pen } from "@/Components/Svg/SvgContainer";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import EditOrderModal from "@/Components/Modals/EditOrderModal";
// import SendMessageModal from "@/Components/Modals/SendMessageModal";

const Page = () => {
  const [status, setStatus] = useState("Order Confirmed");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Separate modal states
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  const steps = [
    { label: "Order Confirmed", date: "25 Jun 2024" },
    { label: "Order Packaged", date: "25 Jun 2024" },
    { label: "Package Shipped", date: "" },
    { label: "Package Delivered", date: "" },
  ];

  const currentStep = steps.findIndex(step => step.label === status);

  // refs for sidebar accordion
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<Array<string>>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref, idx) => {
      if (!ref) return "0px";
      return openIndex === idx ? `${ref.scrollHeight}px` : "0px";
    });
    setHeights(newHeights);
  }, [openIndex]);

  const accordionData = [
    {
      title: "Customer Details",
      content: (
        <div className="text-[#4B4A47] text-[14px] py-2">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
        </div>
      ),
    },
    {
      title: "Shipping Address",
      content: (
        <div className="text-[#4B4A47] text-[14px] py-2">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
        </div>
      ),
    },
    {
      title: "Billing Address",
      content: (
        <div className="text-[#4B4A47] text-[14px] py-2">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Address:</strong> 456 Street, City, Country
          </p>
        </div>
      ),
    },
    {
      title: "Order Note",
      content: <></>,
      isModal: true,
    },
  ];

  return (
    <div className="px-6 py-4">
      {/* Header */}
      <div className="flex justify-between">
        <h3 className="text-[40px] font-semibold text-[#000]">Order Details</h3>
        <div className="flex gap-x-3">
          <button
            className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out"
            onClick={() => setMessageModalOpen(true)}
          >
            Track Package
          </button>
          <button
            className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out flex gap-x-1 items-center"
            onClick={() => setEditModalOpen(true)}
          >
            <Pen /> Edit Order
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-8 flex justify-between gap-x-6">
        {/* Left Side */}
        <div className="w-[75%]">
          {/* Order Status Dropdown */}
          <h4 className="text-[#000] font-bold text-[16px]">Order Status</h4>
          <div className="relative my-3">
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="border border-[#A7A39C] rounded-[8px] cursor-pointer appearance-none outline-0 px-2 py-[10px] w-[190px] text-[#274F45] text-[14px] font-normal"
            >
              {steps.map(step => (
                <option key={step.label} value={step.label}>
                  {step.label}
                </option>
              ))}
            </select>
            <FaAngleDown className="absolute top-3 left-40 size-5" />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center my-6">
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div
                  className={`p-[1px] w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                    index <= currentStep
                      ? "border-[#274F45]"
                      : "border-[#A7A39C]"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      index <= currentStep ? "bg-[#274F45]" : "bg-[#A7A39C]"
                    }`}
                  ></div>
                </div>
                {index !== steps.length - 1 && (
                  <div
                    className={`border-dashed border-t w-[190px] ${
                      index < currentStep
                        ? "border-[#274F45]"
                        : "border-[#A7A39C]"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Labels */}
          <div className="flex gap-x-[70px]">
            {steps.map(step => (
              <div key={step.label}>
                <h5 className="text-[16px] font-normal text-[#000] font-sans">
                  {step.label}
                </h5>
                {step.date && (
                  <p className="text-[14px] font-normal text-[#4B4A47]">
                    {step.date}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="mt-6">
            <Proorderproduct />
          </div>

          {/* Step Buttons */}
          {status === "Package Delivered" && (
            <div className="my-6 flex justify-between stepbutton gap-x-3">
              <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out w-[175px]">
                Track Package
              </button>
              <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out w-[175px]">
                Return or replace
              </button>
              <button className="py-4 px-6 rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out w-[175px]">
                Get Help
              </button>
              <button className="py-4 px-6  rounded-[8px] border border-[#77978F] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:border-green-500 duration-300 ease-in-out">
                Request a Review
              </button>
            </div>
          )}

          {/* Order Summary */}
          <div className="mt-6">
            <OrderSummary />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[21%] space-y-4">
          {accordionData.map((item, idx) => (
            <div
              key={item.title}
              className="border border-[#E1E2E2] rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => {
                  if (item.isModal) setNoteModalOpen(true);
                  else setOpenIndex(openIndex === idx ? null : idx);
                }}
              >
                <h4 className="text-[#000] font-bold text-[16px]">
                  {item.title}
                </h4>
                {item.isModal ? (
                  <Pen className="text-[#000]" />
                ) : (
                  <FaAngleDown
                    className={`transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {!item.isModal && (
                <div
                  ref={(el: HTMLDivElement | null): void => {
                    contentRefs.current[idx] = el;
                  }}
                  style={{ maxHeight: heights[idx] }}
                  className="overflow-hidden transition-all duration-500 ease-in-out px-3"
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}
          <div className="">sdfhgklfdh</div>

          {status === "Package Delivered" ? (
            ""
          ) : (
            <div className="mt-[560px]">
              <button className="py-4 px-6 rounded-[8px] border border-[#8E2F2F] bg-[#FFE8E8] text-[16px] font-semibold text-[#8E2F2F] cursor-pointer hover:border-green-500 duration-300 ease-in-out w-full">
                Cancel Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <OrderNote
        isOpen={noteModalOpen}
        onClose={() => setNoteModalOpen(false)}
        note="This is the detailed order note info."
      />
      {/* <EditOrderModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      />
      <SendMessageModal
        isOpen={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
      /> */}
    </div>
  );
};

export default Page;
