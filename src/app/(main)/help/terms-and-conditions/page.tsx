"use client";
import React from "react";
import { getTerms } from "@/Hooks/api/cms_api";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";

const Page = () => {
  const { data: termsData, isLoading } = getTerms();

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
                  __html: termsData?.data?.description,
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
