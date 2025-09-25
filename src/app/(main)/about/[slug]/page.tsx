import React from "react";
import Banner from "@/Components/Common/Banner";
import Container from "@/Components/Common/Container";
import AboutUsTab from "@/Components/Common/AboutUsTab";
import { getDynamicPages, getSingleDynamicPage } from "@/Hooks/api/cms_api";

const page = async ({ params }: any) => {
  const dynamicPage = await getDynamicPages();
  const { slug } = params;
  const pageData = await getSingleDynamicPage(slug);

  return (
    <>
      <Banner
        title={pageData?.data?.page_title}
        bgImg={`${process.env.NEXT_PUBLIC_SITE_URL}/${pageData?.data?.page_image}`}
      />

      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <AboutUsTab dynamicPage={dynamicPage?.data} />

            {/* Right - Content */}
            <div className="grow">
              {/* Page Title */}
              <h2 className="text-3xl font-semibold text-secondary-black mb-5">
                {pageData?.data?.page_title}
              </h2>

              {/* Page Content */}
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.data?.page_content,
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

export default page;
