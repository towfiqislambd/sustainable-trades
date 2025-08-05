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
        <div className="flex justify-between">
          {/* Left - Logo */}
          <figure className="size-40">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Right */}
          <div className="flex gap-24">
            {/* About */}
            <div>
              <h3 className={footer_title_class}>About</h3>
              <ul className="flex flex-col gap-3">
                {aboutUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white tracking-[0.16px]"
                  >
                    {item?.label}
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
                    className="text-accent-white tracking-[0.16px]"
                  >
                    {item?.label}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className={footer_title_class}>Follow Us</h3>
              <ul className="flex flex-col gap-3">
                {followUsLinks?.map(item => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className="text-accent-white tracking-[0.16px] flex gap-2 items-center"
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
        <div className="flex items-center justify-between text-accent-white tracking-[0.16px] mb-5">
          {/* Left - Copyright */}
          <p className="">©sustainabletrades.org 2023, All right reserved.</p>

          {/* Right */}
          <div className="flex gap-10 items-center">
            <Link href="/">Acceptable Use Policy</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <GlobeSvg />
          <p className="text-accent-white tracking-[0.16px] cursor-pointer">
            English (United States)
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
