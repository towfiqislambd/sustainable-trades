import Container from "@/Components/Common/Container";
import logo from "@/Assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookSvg,
  GlobeSvg,
  InstagramSvg,
  LinkedinSvg,
  PinterestSvg,
} from "@/Components/Svg/SvgContainer";

const aboutUsLinks = [
  { id: 1, label: "Our Goal", path: "/about/our-goal" },
  { id: 2, label: "Our Vision", path: "/about/our-vision" },
  { id: 3, label: "Our Story", path: "/about/our-story" },
  { id: 4, label: "How it Works", path: "/about/how-it-works" },
  {
    id: 5,
    label: "Sustainability Guidelines",
    path: "/about/sustainable-guidelines",
  },
];

const helpUsLinks = [
  { id: 1, label: "How-To Tutorials", path: "/help/how-to-tutorials" },
  { id: 2, label: "FAQs", path: "/help/faqs" },
  { id: 3, label: "Contacts", path: "/help/contact" },
];

const followUsLinks = [
  { id: 1, label: "Facebook", path: "/", logo: <FacebookSvg /> },
  { id: 2, label: "Instagram", path: "/", logo: <InstagramSvg /> },
  { id: 3, label: "Pinterest", path: "/", logo: <PinterestSvg /> },
  { id: 4, label: "LinkedIn", path: "/", logo: <LinkedinSvg /> },
];

const Footer = () => {
  const footer_title_class =
    "text-xl font-bold text-accent-white leading-[ 140%] tracking-[0.2px] mb-3";

  return (
    <footer className="bg-primary-green pt-10 pb-5">
      {/* Upper Part */}
      <Container>
        <div className="flex flex-wrap justify-between">
          {/* Left - Logo */}
          <div className="mb-7 md:mb-0">
            <figure className="size-24 md:size-40">
              <Image
                src={logo}
                alt="logo"
                className="w-full h-full object-cover "
              />
            </figure>
          </div>
          {/* Right */}
          <div className="flex flex-wrap gap-5 xl:gap-24">
            {/* About */}
            <div>
              <h3 className={footer_title_class}>About</h3>
              <ul className="flex flex-col gap-3">
                {aboutUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white text-sm md:text-base tracking-[0.16px]"
                  >
                    {item?.label}
                  </Link>
                ))}
              </ul>
            </div>
            {/* Follow Us */}
            <div className="block md:hidden">
              <h3 className={footer_title_class}>Follow Us</h3>
              <ul className="flex flex-col gap-3">
                {followUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white tracking-[0.16px] text-sm md:text-base flex gap-2 items-center"
                  >
                    <span>{item?.logo}</span>
                    <span>{item?.label}</span>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className={footer_title_class}>Help</h3>
              <ul className="flex flex-col gap-3">
                {helpUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white text-sm md:text-base tracking-[0.16px]"
                  >
                    {item?.label}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="hidden md:block">
              <h3 className={footer_title_class}>Follow Us</h3>
              <ul className="flex flex-col gap-3">
                {followUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white text-sm md:text-base tracking-[0.16px] flex gap-2 items-center"
                  >
                    <span>{item?.logo}</span>
                    <span>{item?.label}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <hr className="text-accent-white my-5" />

      {/* Lower Part */}
      <Container>
        <div className="flex flex-col md:flex-row w-full md:items-center justify-between text-accent-white tracking-[0.16px] mb-5">
          {/* Left - Copyright */}
          <p className="md:text-base text-xs text-center md:text-left mb-7 md:mb-0">
            ©sustainabletrades.org 2023, All right reserved.
          </p>

          {/* Right */}
          <div className="flex flex-col md:flex-row gap-2.5 sm:gap-4 md:gap-10 md:items-center md:text-base text-sm">
            <Link href="/">Acceptable Use Policy</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-center md:justify-start">
          <GlobeSvg />
          <p className="text-accent-white tracking-[0.16px] cursor-pointer md:text-base text-sm">
            English (United States)
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
