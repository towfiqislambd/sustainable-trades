"use client";
import React from "react";
import Link from "next/link";
import h1 from "@/Assets/h1.svg";
import h2 from "@/Assets/h2.svg";
import h3 from "@/Assets/h3.svg";
import h4 from "@/Assets/h4.svg";
import h5 from "@/Assets/h5.svg";
import { usePathname } from "next/navigation";

import {
  ContactSvg,
  FAQSvg,
  ReportSvg,
  TermsSvg,
  TutorialSvg,
} from "@/Components/Svg/SvgContainer";
import Image from "next/image";

const navLinks = [
  {
    id: Math.random(),
    page_title: "How-To Tutorials",
    path: "/help/how-to-tutorials",
    logo: h1,
  },
  {
    id: Math.random(),
    page_title: "FAQs",
    path: "/help/faqs",
    logo: h2,
  },
  {
    id: Math.random(),
    page_title: "Contact",
    path: "/help/contact",
    logo: h3,
  },
  {
    id: Math.random(),
    page_title: "Terms and Conditions",
    path: "/help/terms-and-conditions",
    logo: h4,
  },
  {
    id: Math.random(),
    page_title: "Infringement Report",
    path: "/help/infringement-report",
    logo: h5,
  },
];
const HelpUsTab = () => {
  const pathname = usePathname();

  return (
    <div className="w-[260px] py-8 px-5 shrink-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.08),_0_3px_10px_0_rgba(0,0,0,0.12)] space-y-4 rounded-lg">
      {navLinks?.map(({ id, page_title, path, logo }: any) => (
        <Link
          key={id}
          href={path}
          className={`flex gap-2.5 items-center text-lg border-l-2 pl-1 py-2 duration-300 transition-all hover:text-primary-green ${
            pathname === path
              ? "font-semibold text-primary-green border-primary-green"
              : "text-[#77978F] border-transparent"
          }`}
        >
          <figure className="size-[24px] relative">
            <Image
              src={logo}
              alt="logo"
              fill
              className="size-full object-cover"
            />
          </figure>
          <span>{page_title}</span>
        </Link>
      ))}
    </div>
  );
};

export default HelpUsTab;
