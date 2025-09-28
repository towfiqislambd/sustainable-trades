"use client";
import React, { useState } from "react";
import Banner from "@/Components/Common/Banner";
import { getTutorials } from "@/Hooks/api/cms_api";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";
import { SearchSvg } from "@/Components/Svg/SvgContainer";

type videoItem = {
  id: number;
  video: string;
  name: string;
  description: string;
};

const page = () => {
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("owner");
  const { data: tutorialsData, isLoading } = getTutorials(search, activeTab);

  return (
    <>
      <Banner
        title="How-To Tutorials"
        bgImg={`${process.env.NEXT_PUBLIC_SITE_URL}/${tutorialsData?.data?.banner?.image}`}
      />

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
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Video Tabs */}
              <div className="flex gap-5 items-center mb-12">
                <button
                  onClick={() => setActiveTab("owner")}
                  className={`text-lg cursor-pointer px-10 pb-1 ${
                    activeTab === "owner"
                      ? "text-primary-green font-semibold border-b-2 border-primary-green"
                      : "text-gray-500"
                  }`}
                >
                  Shop Owners
                </button>

                <button
                  onClick={() => setActiveTab("buyer")}
                  className={`text-lg cursor-pointer px-10 pb-1 ${
                    activeTab === "buyer"
                      ? "text-primary-green font-semibold border-b-2 border-primary-green"
                      : "text-gray-500"
                  }`}
                >
                  Buyers
                </button>
              </div>

              {/* Maps */}
              <div className="grid grid-cols-3 gap-6">
                {isLoading ? (
                  Array.from({ length: 3 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="border border-[#CBC8C2] rounded-lg animate-pulse"
                    >
                      <div className="w-full h-[200px] bg-gray-300 rounded-t-lg"></div>
                      <div className="p-5 space-y-3">
                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                  ))
                ) : tutorialsData?.data?.tutorials?.length === 0 ? (
                  <p className="text-lg font-medium text-red-500">
                    No Data found!!
                  </p>
                ) : (
                  tutorialsData?.data?.tutorials?.map((item: videoItem) => (
                    <div
                      key={item?.id}
                      className="border border-[#CBC8C2] rounded-lg"
                    >
                      <video
                        controls
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.video}`}
                        className="w-full h-[200px] rounded-t-lg object-cover"
                      ></video>

                      <div className="p-5">
                        <h3 className="text-secondary-gray text-xl font-semibold mb-2">
                          {item?.name}
                        </h3>
                        <p className="text-[#595753]">{item?.description}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
