"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Common/Container";
import { CartSvg, DownSvg, ProfileSvg } from "@/Components/Svg/SvgContainer";

const DefaultNavbar = ({ siteSettings }: any) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  useEffect(() => {
    const handleWindowClick = () => {
      setShowPopover(false);
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
          {/* Left - Logo */}
          <Link href="/">
            <figure className="size-14 rounded-full relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettings?.logo}`}
                alt="logo"
                fill
                className="size-full object-cover rounded-full"
              />
            </figure>
          </Link>

          {/* Right */}
          <div className="flex gap-4 items-center">
            <Link
              href="/auth/create-shop"
              className="px-4 py-2 block rounded-lg bg-accent-red text-secondary-black cursor-pointer shadow-[0_3px_10px_0_rgba(0\,0\,0\,0.12),_0_3px_8px_0_rgba(0\,0\,0\,0.08)] duration-300 transition-all hover:text-accent-red hover:bg-transparent border border-accent-red hover:scale-95"
            >
              Create a Shops
            </Link>

            <button
              onClick={e => {
                e.stopPropagation();
                setShowPopover(!showPopover);
              }}
              className="cursor-pointer flex gap-2 items-center relative"
            >
              <ProfileSvg />
              <DownSvg />

              {/* Popover */}
              <div
                onClick={e => e.stopPropagation()}
                className={`absolute top-16 bg-white drop-shadow z-50 space-y-2 w-[100px] py-3 px-4 border-gray-50 rounded-lg ${
                  showPopover ? "block" : "hidden"
                }`}
              >
                <Link
                  href="/auth/choose-package"
                  onClick={() => setShowPopover(false)}
                  className={`flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold`}
                >
                  Sign Up
                </Link>

                <Link
                  href="/auth/login"
                  onClick={() => setShowPopover(false)}
                  className={`flex gap-2.5 items-center text-primary-green text-[17px] duration-300 transition-all hover:font-semibold`}
                >
                  Log In
                </Link>
              </div>
            </button>

            <Link href="/dashboard/customer/cart" className="cursor-pointer">
              <CartSvg />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DefaultNavbar;
