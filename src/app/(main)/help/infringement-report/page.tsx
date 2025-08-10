import Banner from "@/Components/Common/Banner";
import React from "react";
import reportBg from "@/Assets/report.jpg";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";

const Page = () => {
  return (
    <>
      <Banner title="Infringement Report" bgImg={reportBg.src} />
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow">
              <h3 className="text-secondary-black text-xl font-semibold mb-1">
                When to Submit
              </h3>
              <p className="text-secondary-black text-lg">
                If you have questions about your order, please reach out
                directly to the seller. If you’re unable to contact the seller,
                email us at buyersupport@sustainabletrades.org. Feel free to
                include your phone number, and we’ll get back to you shortly.
              </p>
              <br />
              <h3 className="text-secondary-black text-xl font-semibold mb-1">
                What to Include
              </h3>
              <p className="text-secondary-black text-lg">
                Need assistance with your shop? Email us at
                members@sustainabletrades.org.  Feel free to include your phone
                number, and we’ll get back to you shortly.
              </p>
              <br />
              <h3 className="text-secondary-black text-xl font-semibold mb-1">
                Why Submit
              </h3>
              <p className="text-secondary-black text-lg">
                Have questions or feedback about Sustainable Trades? Contact us
                at hello@sustainabletrades.org.  We love hearing from you!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
