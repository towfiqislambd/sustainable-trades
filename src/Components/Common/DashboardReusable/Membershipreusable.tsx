"use client";
import React, { useState } from "react";
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
import PauseMembershipModal from "@/Components/Modals/PauseMembershipModal";

// 🔹 Types
interface Feature {
  id: number;
  icon: React.ReactNode;
  name: string;
  desc: string;
}

interface MembershipPackage {
  id: number;
  package_name: string;
  package_icon: React.ReactNode;
  description: string;
  amount: string;
  submit_btn: string;
  feathers: Feature[];
}

interface MembershipReusableProps {
  membershipType: "Basic" | "Pro" | "Shopper";
}

// 🔹 Membership Packages Data
const data: MembershipPackage[] = [
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
        desc: "No limitations for barter and trade",
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

const Membershipreusable: React.FC<MembershipReusableProps> = ({
  membershipType,
}) => {
  const tabs = ["Yearly (Save 38%)", "Monthly"];
  const [isactive, setIsactive] = useState<string>("Yearly (Save 38%)");
  const [pauseOpen, setPauseOpen] = useState<boolean>(false);

  const membershipMessages: Record<
    MembershipReusableProps["membershipType"],
    string
  > = {
    Basic: "You currently have a Basic membership.",
    Pro: "You currently have a Pro membership.",
    Shopper: "You currently have a Shopper membership.",
  };

  return (
    <div>
      {/* Header and Tabs */}
      <div className="flex gap-3.5 md:gap-0 flex-col md:flex-row justify-between items-center">
        <h2 className="text-[30px] md:text-[40px] font-lato font-semibold text-[#000]">
          Membership Details
        </h2>
        <div className="flex gap-x-2 items-center border border-[#A7A39C] rounded-[8px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setIsactive(tab)}
              className={`p-2 md:p-4 text-[12px] md:text-[16px] font-normal rounded-md transition cursor-pointer ${
                tab === isactive
                  ? "text-white bg-black"
                  : "text-black bg-transparent hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Membership Cards */}
      <div className="mt-10 md:mt-20">
        <div className="flex gap-10 justify-center flex-wrap">
          {data?.map((item) => (
            <div
              key={item.id}
              className={`border border-primary-green shadow rounded-2xl p-6 w-full lg:w-[400px] flex flex-col justify-between ${
                item.id === 2 ? "bg-[#EDF3F1]" : ""
              }`}
            >
              <div>
                <p className="size-12 rounded-full">{item.package_icon}</p>
                <h3 className="py-1.5 md:py-3 text-xl md:text-2xl font-semibold text-secondary-black">
                  {item.package_name}
                </h3>
                <p className="text-secondary-gray text-[13px] md:text-base mb-3.5 md:mb-7">
                  {item.description}
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold text-secondary-black">
                  ${item.amount}
                </h2>
                <hr className="my-2.5 md:my-5 text-gray-500" />

                <div className="space-y-5 mb-5 md:mb-10">
                  {item.feathers.map((feather) => (
                    <div
                      key={feather.id}
                      className="flex gap-1.5 md:gap-3 items-center mb-[10px] md:mb-5"
                    >
                      <p className="size-10 rounded-full bg-[#B0DEDB] grid place-items-center">
                        {feather.icon}
                      </p>
                      <div>
                        <h4 className="text-secondary-black font-semibold">
                          {feather.name}
                        </h4>
                        <p className="text-secondary-gray text-[15px]">
                          {feather.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full block duration-500 transition-all text-base md:text-lg cursor-pointer py-1.5 md:py-3 border-2 border-primary-green font-semibold rounded-lg shadow-lg hover:scale-105 ${
                  item.id === 1
                    ? "text-primary-green hover:bg-primary-green hover:text-accent-white"
                    : "text-accent-white hover:text-primary-green bg-primary-green hover:bg-transparent"
                }`}
              >
                {item.submit_btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Status + Pause */}
      <div className="mt-10 border border-[#274F45] rounded-lg p-6 max-w-[850px] mx-auto">
        <p className="text-[#2D2D2D] font-semibold text-[20px] mb-4">
          {membershipMessages[membershipType]}
        </p>
        <p className="text-[#2D2D2D] text-sm mb-6">
          Cancel or upgrade to Pro by choosing premium above. Refunds will not
          be issued for canceled memberships, however we will prorate the Pro
          membership if you are upgrading from Basic.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setPauseOpen(true)}
            className="px-6 py-2 bg-yellow-500  cursor-pointer rounded-lg shadow hover:bg-yellow-600 text-[#2D2D2D] font-semibold text-[16px]"
          >
            Pause Membership
          </button>
          <button className="px-6 py-2 bg-red-500  cursor-pointer rounded-lg shadow hover:bg-red-600 text-[#2D2D2D] font-semibold text-[16px]">
            Cancel
          </button>
        </div>
      </div>

      {/* Pause Modal */}
      <PauseMembershipModal
        isOpen={pauseOpen}
        onClose={() => setPauseOpen(false)}
        onConfirm={(duration: number) => {
          console.log(`Paused ${membershipType} for ${duration} months`);
          setPauseOpen(false);
        }}
        membershipType={membershipType}
      />
    </div>
  );
};

export default Membershipreusable;
