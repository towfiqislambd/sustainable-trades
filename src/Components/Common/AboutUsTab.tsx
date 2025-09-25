"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AboutUsTab = ({ dynamicPage }: any) => {
  const pathname = usePathname();

  return (
    <div className="w-[280px] py-8 px-5 shrink-0 shadow-[0_3px_8px_0_rgba(0,0,0,0.08),_0_3px_10px_0_rgba(0,0,0,0.12)] space-y-4 rounded-lg">
      {dynamicPage?.map(({ id, page_title, page_slug, icon }: any) => (
        <Link
          key={id}
          href={`/about/${page_slug}`}
          className={`flex gap-2.5 items-center text-lg border-l-2 pl-1 py-2 duration-300 transition-all hover:text-primary-green ${
            pathname === `/about/${page_slug}`
              ? "font-semibold text-primary-green border-primary-green"
              : "text-[#77978F] border-transparent"
          }`}
        >
          <figure className="size-[24px] relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${icon}`}
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

export default AboutUsTab;
