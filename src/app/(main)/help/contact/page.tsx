"use client";
import React from "react";
import Banner from "@/Components/Common/Banner";
import { getContact } from "@/Hooks/api/cms_api";
import HelpUsTab from "@/Components/Common/HelpUsTab";
import Container from "@/Components/Common/Container";

const Page = () => {
  const { data: contactData, isLoading } = getContact();

  return (
    <>
      <Banner
        title="Contact"
        bgImg={`${process.env.NEXT_PUBLIC_SITE_URL}/${contactData?.data?.image}`}
      />

      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow">
              <div
                dangerouslySetInnerHTML={{
                  __html: contactData?.data?.description,
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
