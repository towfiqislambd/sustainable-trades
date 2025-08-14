"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "@/Shared/Navbar";
import DashboardSidebar from "@/Shared/DashboardSidebar";
import {
  PEightSvg,
  PElevenSvg,
  PFifteenSvg,
  PFiveSvg,
  PFourSvg,
  PFourteenSvg,
  PNineSvg,
  POneSvg,
  PSevenSvg,
  PSixSvg,
  PTenSvg,
  PThirteenSvg,
  PThreeSvg,
  PTwelveSvg,
  PTwoSvg,
} from "@/Components/Svg/SvgContainer";

const proNavLinks = [
  { id: 1, label: "Dashboard", path: "/dashboard/pro/home", icon: <POneSvg /> },
  { id: 2, label: "Orders", path: "/dashboard/pro/orders", icon: <PTwoSvg /> },
  {
    id: 3,
    label: "Trades/Barter",
    path: "/dashboard/pro/trades",
    icon: <PThreeSvg />,
  },
  {
    id: 4,
    label: "Listings & Inventory",
    path: "/dashboard/pro/listing",
    icon: <PFourSvg />,
  },
  {
    id: 5,
    label: "Payments",
    path: "/dashboard/pro/payments",
    icon: <PFiveSvg />,
  },
  {
    id: 6,
    label: "Accounting",
    path: "/dashboard/pro/accounting",
    icon: <PSixSvg />,
  },
  {
    id: 7,
    label: "Membership",
    path: "/dashboard/pro/membership",
    icon: <PSevenSvg />,
  },
  {
    id: 8,
    label: "Discounts",
    path: "/dashboard/pro/discounts",
    icon: <PEightSvg />,
  },
  {
    id: 9,
    label: "Shipping",
    path: "/dashboard/pro/shipping",
    icon: <PNineSvg />,
  },
  {
    id: 10,
    label: "Favorites",
    path: "/dashboard/pro/favorites",
    icon: <PTenSvg />,
  },
  {
    id: 11,
    label: "Member Spotlight",
    path: "/dashboard/pro/member-spotlight",
    icon: <PElevenSvg />,
  },
  {
    id: 12,
    label: "Notification",
    path: "/dashboard/pro/notification",
    icon: <PTwelveSvg />,
  },
  {
    id: 13,
    label: "Messages",
    path: "/dashboard/pro/messages",
    icon: <PThirteenSvg />,
  },
  {
    id: 14,
    label: "Reviews",
    path: "/dashboard/pro/reviews",
    icon: <PFourteenSvg />,
  },
  {
    id: 15,
    label: "Settings",
    path: "/dashboard/pro/settings",
    icon: <PFifteenSvg />,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="min-h-screen max-h-screen flex flex-col">
      {/* Dashboard Header */}
      <Navbar />

      {/* Dashboard Content */}
      <main className="flex overflow-x-hidden">
        {/* Left - Sidebar */}
        <DashboardSidebar
          open={open}
          setOpen={setOpen}
          dashboardNavLinks={proNavLinks}
        />

        {/* Right - Outlet */}
        <section className="flex-1 p-5 bg-[#FFFCF9] overflow-y-auto">
          {children}
        </section>

        {/* Blur Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] transition-opacity duration-300 2xl:hidden z-50 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      </main>
    </section>
  );
}
