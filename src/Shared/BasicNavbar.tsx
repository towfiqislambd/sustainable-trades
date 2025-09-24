"use client";
import logo from "@/Assets/logo.svg";
import author from "@/Assets/shop_author.jpg";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Common/Container";
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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "@/Hooks/useAuth";
import { useLogout } from "@/Hooks/api/auth_api";
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
const notificationData = [
  {
    id: 1,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 2,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 3,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 4,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 5,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 6,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
  {
    id: 7,
    label: "Item Sold",
    description: "Shipping to 3 buyers today.",
    author: author,
  },
];

const BasicNavbar = () => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number>(0);
  const { mutate: logoutMutation, isPending } = useLogout();

  useEffect(() => {
    const handleWindowClick = () => {
      setShowMenu(false);
      setShowPopover(false);
      setShowNotification(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div className="bg-primary-green py-3">
      <Container>
        <div className="flex justify-between items-center">
          {/* Left */}
          <div className="flex gap-12 items-center">
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

            {/* NavLinks */}
            <div className="flex gap-10 items-center relative">
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
                } bg-white drop-shadow  w-[260px] py-7 px-5 border-gray-50 rounded-lg flex flex-col gap-7 ${
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
            {/* Message */}
            <button className="cursor-pointer text-accent-white">
              <MessageSvg />
            </button>

            {/* Notification */}
            <div className="relative">
              <button
                onClick={e => {
                  e.stopPropagation();
                  setShowNotification(!showNotification);
                }}
                className="cursor-pointer"
              >
                <NotificationSvg />
              </button>

              {showNotification && (
                <div className="notification_container absolute w-[340px] h-[380px] overflow-y-auto bg-white border border-gray-50 rounded-lg top-14 shadow-[0_3px_10px_0_rgba(0,0,0,0.1)] py-4 px-5">
                  <h3 className="text-lg font-semibold text-left mb-4">
                    Notifications
                  </h3>

                  <div className="space-y-4">
                    {notificationData?.map(item => (
                      <div
                        key={item?.id}
                        className="flex gap-3 items-center border-b border-gray-300 pb-4 last:border-b-0 last:pb-0"
                      >
                        <Image
                          src={item?.author}
                          alt="author"
                          className="size-12 rounded-full border border-gray-50"
                        />

                        <div>
                          <h4 className="text-left font-semibold text-secondary-black mb-1">
                            {item?.label}
                          </h4>
                          <p className="text-left text-secondary-gray text-sm">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="cursor-pointer">
              <CartSvg2 />
            </Link>

            {/* Wishlist */}
            <button className="cursor-pointer">
              <LoveSvg2 />
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={e => {
                  e.stopPropagation();
                  setShowPopover(!showPopover);
                }}
                className="cursor-pointer flex gap-2 items-center"
              >
                <figure className="size-10 rounded-full border-2 border-white relative grid place-items-center text-lg text-white font-semibold bg-accent-red">
                  {user?.avatar ? (
                    <Image
                      src={author}
                      alt="author"
                      fill
                      className="size-full rounded-full"
                    />
                  ) : (
                    <span>{user?.first_name.at(0)}</span>
                  )}
                </figure>

                <DownSvg />
              </button>

              {/* Popover */}
              {showPopover && (
                <div
                  onClick={e => e.stopPropagation()}
                  className="absolute top-16 bg-white drop-shadow z-50 space-y-2 w-[135px] py-3 px-4 border-gray-50 rounded-lg"
                >
                  <Link
                    href={`${
                      user?.role === "customer"
                        ? "/dashboard/customer/home"
                        : user?.role === "vendor" &&
                          user?.membership?.membership_type === "pro"
                        ? "/dashboard/pro/home"
                        : "/dashboard/basic/home"
                    }`}
                    className="flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={() => logoutMutation()}
                    className="flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold cursor-pointer"
                  >
                    {isPending ? "Logging out..." : "Log Out"}
                  </button>
                </div>
              )}
            </div>

            {/* View shop */}
            <Link
              href="/shop-details/1"
              className="px-5 py-2 block rounded-lg bg-accent-red text-secondary-black cursor-pointer shadow-[0_3px_10px_0_rgba(0\,0\,0\,0.12),_0_3px_8px_0_rgba(0\,0\,0\,0.08)] duration-300 transition-all hover:text-accent-red hover:bg-transparent border border-accent-red hover:scale-95"
            >
              View Shop
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BasicNavbar;
