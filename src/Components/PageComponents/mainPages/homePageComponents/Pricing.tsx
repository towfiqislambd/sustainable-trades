"use client";
import Container from "@/Components/Common/Container";
import {
  BasicSvg,
  PricingEightSvg,
  PricingFiveSvg,
  PricingFourSvg,
  PricingNineSvg,
  PricingSevenSvg,
  PricingSixSvg,
  PricingThreeSvg,
  PricingTwoSvg,
  ProSvg,
} from "@/Components/Svg/SvgContainer";
import React, { useState } from "react";
const data = [
  {
    id: 1,
    package_name: "Basic",
    package_icon: <BasicSvg />,
    description:
      "Ideal for members seeking an entry-level position in the market place. buy, sell, and trade.",
    amount: "57.97",
    submit_btn: "Choose Basic",
    feathers: [
      {
        id: 1,
        icon: <PricingFiveSvg />,
        name: "Shop Creation",
        desc: "Create your own online shop",
      },
      {
        id: 2,
        icon: <PricingTwoSvg />,
        name: "Barter and Trade",
        desc: "No limitations for bater and trade",
      },
      {
        id: 3,
        icon: <PricingThreeSvg />,
        name: "Message Board",
        desc: "Access to the message board",
      },
      {
        id: 4,
        icon: <PricingFourSvg />,
        name: "Transactions",
        desc: "Final transactions are finalized off platform",
      },
    ],
  },
  {
    id: 2,
    package_name: "Pro",
    package_icon: <ProSvg />,
    description:
      "Ideal for members looking for more capabilities and features for their shop.",
    amount: "297.97",
    submit_btn: "Choose Premium",
    feathers: [
      {
        id: 1,
        icon: <PricingFiveSvg />,
        name: "Everything in Basic",
        desc: "Upgrade to pro to get everything in basic and more",
      },
      {
        id: 2,
        icon: <PricingSixSvg />,
        name: "Online Payments",
        desc: "Accept online payments within the platform",
      },
      {
        id: 3,
        icon: <PricingSevenSvg />,
        name: "Inventory",
        desc: "Track your shop inventory",
      },
      {
        id: 4,
        icon: <PricingEightSvg />,
        name: "Reports",
        desc: "Accounting, Sales Tax, and Order History Reports",
      },
      {
        id: 5,
        icon: <PricingNineSvg />,
        name: "Shipping Calculator",
        desc: "Calculate shipping costs",
      },
    ],
  },
];
type pricingData = {};
type PricingProps = {
  description: string;
  button1: string;
  button2: string;
  data?: pricingData;
};

const Pricing = ({ description, button1, button2 }: PricingProps) => {
  const [activeTab, setActiveTab] = useState<string>("Monthly Billing");

  return (
    <section id="membership_plan" className="py-20">
      <Container>
        <h2 className="section_title text-center !mb-7">Plans & Benefits</h2>

        <p className="text-center text-xl text-[#4B4A47] mb-7">{description}</p>

        {/* Tabs */}
        <div className="flex gap-5 p-3 rounded-xl shadow w-[350px] mx-auto bg-primary-green mb-14">
          <button
            onClick={() => setActiveTab("Monthly Billing")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "Monthly Billing"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            {button1}
          </button>

          <button
            onClick={() => setActiveTab("Annual Billing")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "Annual Billing"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            {button2}
          </button>
        </div>

        {/* Pricing Plan */}
        <div className="flex gap-10 justify-center">
          {data?.map(item => (
            <div
              key={item?.id}
              className={`border border-primary-green shadow rounded-2xl p-6 w-[400px] flex flex-col justify-between ${
                item?.id === 2 && "bg-[#EDF3F1]"
              }`}
            >
              <div>
                <p className="size-12 rounded-full">{item?.package_icon}</p>
                <h3 className="py-3 text-2xl font-semibold text-secondary-black">
                  {item?.package_name}
                </h3>
                <p className="text-secondary-gray mb-7">{item?.description}</p>
                <h2 className="text-4xl font-semibold text-secondary-black">
                  ${item?.amount}
                </h2>
                <hr className="my-5 text-gray-500" />

                <div className="space-y-5 mb-10">
                  {item?.feathers?.map(feather => (
                    <div key={feather?.id} className="flex gap-3 items-center">
                      <p className="size-10 rounded-full bg-[#B0DEDB] grid place-items-center">
                        {feather?.icon}
                      </p>
                      <div>
                        <h4 className="text-secondary-black font-semibold">
                          {feather?.name}
                        </h4>
                        <p className="text-secondary-gray text-[15px]">
                          {feather?.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full block duration-500 transition-all text-lg cursor-pointer py-3 border-2 border-primary-green font-semibold rounded-lg shadow-lg hover:scale-105 ${
                  item?.id === 1
                    ? "text-primary-green hover:bg-primary-green hover:text-accent-white"
                    : "text-accent-white hover:text-primary-green bg-primary-green hover:bg-transparent"
                }`}
              >
                {item?.submit_btn}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
