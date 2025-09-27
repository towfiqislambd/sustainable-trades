"use client";
import React from "react";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";
import { getInfringement } from "@/Hooks/api/cms_api";

const Page = () => {
  const { data: infringementData, isLoading } = getInfringement();

  return (
    <>
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow">
              <div
                dangerouslySetInnerHTML={{
                  __html: infringementData?.data?.description,
                }}
                className="text-secondary-gray leading-8 max-w-[900px] [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:pl-5 [&_ol]:list-decimal"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
