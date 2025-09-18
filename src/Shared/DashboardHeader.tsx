"use client";
import logo from "@/Assets/logo.svg";
import author from "@/Assets/shop_author.jpg";
import React, { useEffect, useState } from "react";
import {
  CartSvg2,
  ContactSvg,
  DownSvg,
  FAQSvg,
  GoalSvg,
  GuidelineSvg,
  LoveSvg2,
  MessageSvg,
  NotificationSvg,
  ReportSvg,
  StorySvg,
  TermsSvg,
  TutorialSvg,
  VisionSvg,
  WorksSvg,
} from "@/Components/Svg/SvgContainer";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLins = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  {
    id: 3,
    label: "Community Member Spotlight",
    path: "/community-member-spotlight",
  },
  {
    id: 4,
    label: "About",
    path: "/about",
    sub_menu: [
      { label: "Our Goal", path: "/about/our-goal", icon: <GoalSvg /> },
      { label: "Our Vision", path: "/about/our-vision", icon: <VisionSvg /> },
      { label: "Our Story", path: "/about/our-story", icon: <StorySvg /> },
      {
        label: "How It Works",
        path: "/about/how-it-works",
        icon: <WorksSvg />,
      },
      {
        label: "Sustainability Guidelines",
        path: "/about/sustainable-guidelines",
        icon: <GuidelineSvg />,
      },
    ],
  },
  {
    id: 5,
    label: "Help",
    path: "/help",
    sub_menu: [
      {
        label: "How-To Tutorials",
        path: "/help/how-to-tutorials",
        icon: <TutorialSvg />,
      },
      { label: "FAQs", path: "/help/faqs", icon: <FAQSvg /> },
      { label: "Contact", path: "/help/contact", icon: <ContactSvg /> },
      {
        label: "Terms and Conditions",
        path: "/help/terms-and-conditions",
        icon: <TermsSvg />,
      },
      {
        label: "Infringement Report",
        path: "/help/infringement-report",
        icon: <ReportSvg />,
      },
    ],
  },
];

const DashboardHeader = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowClick = () => {
      setShowMenu(false);
      setShowPopover(false);
      setNavOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <header className="bg-primary-green py-3 px-6 2xl:px-20 relative">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div className="flex gap-6 xl:gap-12 items-center">
          {/* Logo */}
          <Link href="/">
            <figure className="size-14">
              <Image
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </figure>
          </Link>

          {/* Toggle Button (for < xl) */}
          <button
            className="xl:hidden text-white text-2xl"
            onClick={e => {
              e.stopPropagation();
              setNavOpen(!navOpen);
            }}
          >
            ☰
          </button>

          {/* NavLinks */}
          <div
            className={`fixed xl:static top-0 left-0 h-full xl:h-auto w-64 xl:w-auto bg-primary-green xl:bg-transparent transform transition-transform duration-300 ease-in-out z-40 flex flex-col xl:flex-row gap-6 xl:gap-10 items-start xl:items-center p-6 xl:p-0 ${
              navOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
            }`}
            onClick={e => e.stopPropagation()}
          >
            {navLins?.map(item => {
              const isActive = pathname === item?.path;
              return (
                <Link
                  className={`text-lg text-[#FEFEFE] ${
                    isActive && "font-semibold "
                  }`}
                  key={item?.id}
                  href={item?.id == 4 || item?.id == 5 ? "#" : item?.path}
                  onClick={e => {
                    e.stopPropagation();
                    if (item?.id == 4 || item?.id == 5) {
                      e.preventDefault();
                    }
                    setShowMenu(true);
                    setActiveSubMenu(item?.id);
                  }}
                >
                  {item?.label}
                </Link>
              );
            })}

            {/* Sub Menu */}
            <div
              onClick={e => e.stopPropagation()}
              className={`absolute top-12 ${
                activeSubMenu === 4 ? "-right-32" : "-right-56"
              } bg-white drop-shadow w-[260px] py-7 px-5 border-gray-50 rounded-lg flex flex-col gap-7 ${
                showMenu && (activeSubMenu === 4 || activeSubMenu === 5)
                  ? "block"
                  : "hidden"
              }`}
            >
              {navLins?.map(
                item =>
                  item?.id === activeSubMenu &&
                  item?.sub_menu?.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link?.path}
                      onClick={() => setShowMenu(false)}
                      className={`flex gap-2.5 items-center text-[#77978F] text-[17px] duration-300 transition-all hover:text-primary-green ${
                        pathname === link?.path &&
                        "font-semibold text-primary-green"
                      }`}
                    >
                      <span>{link?.icon}</span>
                      <span>{link?.label}</span>
                    </Link>
                  ))
              )}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-5 items-center">
          <button className="cursor-pointer text-accent-white">
            <MessageSvg />
          </button>
          <button className="cursor-pointer">
            <NotificationSvg />
          </button>
          <button className="cursor-pointer">
            <CartSvg2 />
          </button>
          <button className="cursor-pointer">
            <LoveSvg2 />
          </button>

          {/* profile */}
          <button
            onClick={e => {
              e.stopPropagation();
              setShowPopover(!showPopover);
            }}
            className="cursor-pointer flex gap-2 items-center relative"
          >
            <Image
              src={author}
              alt="author"
              className="size-10 rounded-full border-2 border-white"
            />
            <DownSvg />

            {/* Popover */}
            <div
              onClick={e => e.stopPropagation()}
              className={`absolute top-16 bg-white drop-shadow z-50 space-y-2 w-[120px] py-3 px-4 border-gray-50 rounded-lg ${
                showPopover ? "block" : "hidden"
              }`}
            >
              <Link
                href="/auth/choose-package"
                onClick={() => setShowPopover(false)}
                className="flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold"
              >
                Dashboard
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setShowPopover(false)}
                className="flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold"
              >
                Log Out
              </Link>
            </div>
          </button>

          <Link
            href="/shop-details/1"
            className="px-5 py-2 block rounded-lg bg-accent-red text-secondary-black cursor-pointer shadow-[0_3px_10px_0_rgba(0,0,0,0.12),_0_3px_8px_0_rgba(0,0,0,0.08)] duration-300 transition-all hover:text-accent-red hover:bg-transparent border border-accent-red hover:scale-95"
          >
            View Shop
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
