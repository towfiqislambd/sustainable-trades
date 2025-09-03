"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ContactSvg,
  FAQSvg,
  ReportSvg,
  TermsSvg,
  TutorialSvg,
} from "@/Components/Svg/SvgContainer";

const navLinks = [
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
];

const HelpUsTab = () => {
  const pathname = usePathname();

  return (
    <div className="w-[260px] py-8 px-5 shrink-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.08),_0_3px_10px_0_rgba(0,0,0,0.12)] space-y-4 rounded-lg">
      {navLinks?.map((item, idx) => (
        <Link
          key={idx}
          href={item?.path}
          className={`flex gap-2.5 items-center text-lg border-l-2 pl-1 py-2 duration-300 transition-all hover:text-primary-green ${
            pathname === item?.path
              ? "font-semibold text-primary-green border-primary-green"
              : "text-[#77978F] border-transparent"
          }`}
        >
          <span>{item?.icon}</span>
          <span>{item?.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default HelpUsTab;
