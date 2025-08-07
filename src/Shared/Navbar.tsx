"use client";
import {
  CartSvg,
  ContactSvg,
  FAQSvg,
  GoalSvg,
  GuidelineSvg,
  ProfileSvg,
  ReportSvg,
  SearchSvg,
  StorySvg,
  TermsSvg,
  TutorialSvg,
  VisionSvg,
  WorksSvg,
  UpArrowSvg,
} from "@/Components/Svg/SvgContainer";
import Link from "next/link";
import logo from "@/Assets/logo.svg";
import ScrollToTop from "react-scroll-to-top";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
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

const Navbar = () => {
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
    <>
      {/* Top Navbar */}
      <div className="bg-accent-red text-secondary-black text-lg font-semibold text-center py-2">
        <Container>Free Month Trial! Sign Up</Container>
      </div>

      <nav className="sticky top-0 z-50">
        {/* Upper Navbar */}
        <div className="bg-primary-green py-3">
          <Container>
            <div className="flex justify-between items-center">
              {/* Left - Logo */}
              <Link href="/">
                <figure className="size-14">
                  <Image
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </Link>

              {/* Right */}
              <div className="flex gap-4 items-center">
                <button className="px-3 py-2 rounded-lg bg-accent-red text-secondary-black cursor-pointer shadow-[0_3px_10px_0_rgba(0\,0\,0\,0.12),_0_3px_8px_0_rgba(0\,0\,0\,0.08)] duration-300 transition-all hover:text-accent-red hover:bg-transparent border border-accent-red">
                  Create a Shops
                </button>

                <button className="cursor-pointer">
                  <ProfileSvg />
                </button>

                <button className="cursor-pointer">
                  <CartSvg />
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Lower Navbar */}
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
                      href={item?.id == 4 || item?.id == 5 ? "" : item?.path}
                      onClick={e => {
                        e.stopPropagation();
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
                    activeSubMenu === 4 ? "-right-36" : "-right-60"
                  } bg-white drop-shadow  w-[275px] py-7 px-5 border-gray-50 rounded-lg flex flex-col gap-7 ${
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
                          className={`flex gap-2.5 items-center text-secondary-black text-[17px] duration-300 transition-all hover:text-primary-green ${
                            pathname === link?.path && "font-semibold "
                          }`}
                        >
                          <span>{link?.icon}</span>
                          <span>{link?.label}</span>
                        </Link>
                      ))
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
