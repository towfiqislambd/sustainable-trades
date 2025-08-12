"use client";
import Image from "next/image";
import React, { useState } from "react";
import welcomeBg from "@/Assets/welcome.jpg";
import magic from "@/Assets/magic.png";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const data = [
  {
    id: 1,
    package_name: "Magic Maker (Shop Owner)",
    feathers: [
      "You want to create a shop and sell your magic to your community.",
      "You want to connect with like-minded individuals who share your passion for a sustainable future.",
      "You want to barter and trade with other members.",
      "Your goods and services are good for the people and the planet.",
    ],
  },
  {
    id: 2,
    package_name: "Sustainable Shopper",
    feathers: [
      "You want to buy local organic produce.",
      "You want to support local businesses.",
      "You want to support entrepreneurs supporting sustainability.",
      "You want to be part of a community dedicated to ethical and sustainable living.",
    ],
  },
];

const Page = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const handleStartedBtnClicked = () => {
    if (!selectedId) {
      return toast.error("Please select a package");
    } else {
      router.push(`/auth/register?selectedId=${selectedId}`);
    }
  };

  return (
    <section className="min-h-screen max-h-screen flex">
      {/* Left */}
      <div className="flex-1 relative">
        <Image
          src={welcomeBg}
          alt="welcome_img"
          className="w-full h-full object-cover"
          placeholder="blur"
          fill
        />
      </div>

      {/* Right */}
      <div className="flex-1 grid place-items-center overflow-y-auto">
        <div className="w-[750px] mx-auto p-10">
          <h2 className="auth-heading">Welcome!</h2>

          <p className="text-xl font-semibold text-primary-green mb-7">
            Choose your member type:
          </p>

          {/* packages */}
          <div className="flex gap-8 mb-20">
            {data.map(item => (
              <div
                key={item.id}
                className={`flex-1 px-4 py-5 border border-[#D1D1D1] rounded-xl transition-colors duration-300 ${
                  selectedId === item.id ? "bg-[#EDF3F1]" : "bg-[#F7F7F7]"
                }`}
              >
                <div className="flex justify-between items-center mb-7">
                  <h3 className="text-[22px] font-semibold text-secondary-black">
                    {item.package_name}
                  </h3>

                  <input
                    type="checkbox"
                    checked={selectedId === item.id}
                    onChange={() =>
                      setSelectedId(prev => (prev === item.id ? null : item.id))
                    }
                    className="size-8 cursor-pointer appearance-none rounded-full border border-gray-300  checked:bg-primary-green checked:border-transparent focus:outline-none"
                  />
                </div>

                {/* Feathers */}
                <div className="space-y-5">
                  {item.feathers.map((list, idx) => (
                    <div key={idx} className="flex gap-2">
                      {/* Left - Icon */}
                      <figure className="shrink-0 w-7 h-7">
                        <Image
                          src={magic}
                          alt="magic"
                          className="w-full h-full object-cover"
                        />
                      </figure>

                      {/* Right - description */}
                      <p className="text-secondary-black">{list}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* get started btn */}
          <div
            onClick={handleStartedBtnClicked}
            className="flex justify-end mb-5"
          >
            <button className="px-10 py-4 border-2 border-primary-green rounded-lg bg-primary-green text-accent-white font-semibold cursor-pointer duration-500 transition-all hover:bg-transparent hover:text-primary-green text-lg">
              Get Started!
            </button>
          </div>

          <div className="flex justify-end gap-1 items-center text-lg text-secondary-black">
            <p className="">Already have an account?</p>
            <Link
              className="text-primary-green font-semibold underline"
              href="/auth/login"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
