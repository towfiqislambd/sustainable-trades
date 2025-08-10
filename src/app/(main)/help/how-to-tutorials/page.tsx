"use client";
import Banner from "@/Components/Common/Banner";
import React, { useState } from "react";
import tutorialBg from "@/Assets/tutorial.png";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";
import { SearchSvg } from "@/Components/Svg/SvgContainer";

const data = [
  {
    id: 1,
    video_url: "/videos/video.mp4",
    title: "How to Set Up Your Shop",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 2,
    video_url: "/videos/video.mp4",
    title: "How to Make a Trade Offer",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 3,
    video_url: "/videos/video.mp4",
    title: "How to Set Up Your Shipping Calculator",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("Shop Owners");

  return (
    <>
      <Banner title="How-To Tutorials" bgImg={tutorialBg.src} />
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow">
              {/* Upper Part */}
              <div className="flex justify-between items-center mb-10">
                {/* Title */}
                <h2 className="text-primary-green text-4xl font-semibold">
                  How-To Tutorials
                </h2>

                {/* Search bar */}
                <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-2 rounded-[6px] w-[280px]">
                  <SearchSvg />
                  <input
                    type="text"
                    placeholder="Search Tutorials..."
                    className="w-full border-none outline-none"
                  />
                </div>
              </div>

              {/* Video Tabs */}
              <div className="flex gap-5 items-center mb-12">
                <button
                  onClick={() => setActiveTab("Shop Owners")}
                  className={`text-lg cursor-pointer px-10 pb-1 ${
                    activeTab === "Shop Owners"
                      ? "text-primary-green font-semibold border-b-2 border-primary-green"
                      : "text-gray-500"
                  }`}
                >
                  Shop Owners
                </button>

                <button
                  onClick={() => setActiveTab("Buyers")}
                  className={`text-lg cursor-pointer px-10 pb-1 ${
                    activeTab === "Buyers"
                      ? "text-primary-green font-semibold border-b-2 border-primary-green"
                      : "text-gray-500"
                  }`}
                >
                  Buyers
                </button>
              </div>

              {/* Maps */}
              <div className="grid grid-cols-3 gap-6">
                {data?.map(item => (
                  <div
                    key={item?.id}
                    className="border border-[#CBC8C2] rounded-lg"
                  >
                    <video
                      controls
                      src={item?.video_url}
                      className="w-full h-[237px] rounded-t-lg object-cover"
                    ></video>

                    <div className="p-5">
                      <h3 className="text-secondary-gray text-xl font-semibold mb-2">
                        {item?.title}
                      </h3>
                      <p className="text-[#595753]">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
