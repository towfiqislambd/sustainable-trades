"use client";
import React from "react";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";
import { getInfringement } from "@/Hooks/api/cms_api";

const Page = () => {
  const { data: infringementData, isLoading } = getInfringement();

  return (
    <>
      <section className="mb-15 lg:mb-40 mt-10 lg:mt-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-5 md:gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow px-2.5 sm:px-0">
              <div
                dangerouslySetInnerHTML={{
                  __html: infringementData?.data?.description,
                }}
                className="text-secondary-gray leading-8 text-sm lg:text-base  xl:max-w-[900px] [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
