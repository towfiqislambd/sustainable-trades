"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  GoalSvg,
  GuidelineSvg,
  StorySvg,
  VisionSvg,
  WorksSvg,
} from "@/Components/Svg/SvgContainer";

const navLinks = [
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
];

const AboutUsTab = () => {
  const pathname = usePathname();

  return (
    <div className="w-[250px] py-8 px-5 shrink-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.08),_0_3px_10px_0_rgba(0,0,0,0.12)] space-y-7 rounded-lg">
      {navLinks?.map((item, idx) => (
        <Link
          key={idx}
          href={item?.path}
          className={`flex gap-2.5 items-center text-secondary-black text-lg duration-300 transition-all hover:text-primary-green ${
            pathname === item?.path && "font-semibold "
          }`}
        >
          <span>{item?.icon}</span>
          <span>{item?.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default AboutUsTab;
