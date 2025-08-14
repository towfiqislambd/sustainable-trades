"use client";
import { UpArrowSvg } from "@/Components/Svg/SvgContainer";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import Container from "@/Components/Common/Container";
import { usePathname } from "next/navigation";
import BasicNavbar from "./BasicNavbar";
import DefaultNavbar from "./DefaultNavbar";
import LowerNavbar from "./LowerNavbar";

const Navbar = () => {
  const user = true;
  const pathname = usePathname();

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`bg-accent-red text-secondary-black text-lg font-semibold text-center py-2 ${
          pathname === "/" ? "block" : "hidden"
        }`}
      >
        <Container>
          <Link href="/auth/choose-package" className="">
            Free Month Trial! Sign Up
          </Link>
        </Container>
      </div>

      <nav className="sticky top-0 z-50">
        {/* Upper Navbar */}
        {user ? <BasicNavbar /> : <DefaultNavbar />}

        {/* Lower Navbar*/}
        {user || <LowerNavbar />}
      </nav>

      <ScrollToTop
        smooth={true}
        top={50}
        component={<UpArrowSvg />}
        className="!bg-gray-300 grid place-items-center !size-12 !text-accent-white"
      />
    </>
  );
};

export default Navbar;
