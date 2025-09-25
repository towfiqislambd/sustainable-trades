"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Common/Container";
import {
  ContactSvg,
  FAQSvg,
  ReportSvg,
  SearchSvg,
  TermsSvg,
  TutorialSvg,
} from "@/Components/Svg/SvgContainer";

const LowerNavbar = ({ dynamicPage }: any) => {
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
      sub_menu: dynamicPage,
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

  const pathname = usePathname();
  const [activeSubMenu, setActiveSubMenu] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowClick = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div className="bg-white py-4 drop-shadow">
      <Container>
        <div className="flex justify-between items-center">
          {/* Left - NavLinks */}
          <div className="flex gap-10 items-center relative">
            {navLins?.map(item => {
              const isActive = pathname === item?.path;

              return (
                <Link
                  className={`text-lg text-primary-green ${
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
                  item?.sub_menu?.map(
                    ({ id, page_title, page_slug, icon }: any) => (
                      <Link
                        key={id}
                        href={`/about/${page_slug}`}
                        onClick={() => setShowMenu(false)}
                        className={`flex gap-2.5 items-center text-[#77978F] text-[17px] duration-300 transition-all hover:text-primary-green ${
                          pathname === page_title &&
                          "font-semibold text-primary-green"
                        }`}
                      >
                        <figure className="size-[24px] relative border">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_SITE_URL}/${icon}`}
                            alt="logo"
                            fill
                            className="size-[24px] object-cover"
                          />
                        </figure>

                        <span>{page_title}</span>
                      </Link>
                    )
                  )
              )}
            </div>
          </div>

          {/* Right - Searchbar */}
          <div className="flex gap-1 items-center border border-primary-green px-3 py-2 rounded-lg w-[528px]">
            <SearchSvg />
            <input
              type="text"
              placeholder="Search by product or company name "
              className="w-full border-none outline-none"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LowerNavbar;
