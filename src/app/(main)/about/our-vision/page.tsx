import Banner from "@/Components/Common/Banner";
import React from "react";
import visionBg from "@/Assets/vision.jpg";
import Container from "@/Components/Common/Container";
import AboutUsTab from "@/Components/Common/AboutUsTab";

const page = () => {
  return (
    <>
      <Banner title="Our Vision" bgImg={visionBg.src} />
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <AboutUsTab />

            {/* Right */}
            <div className="grow">
              <h3 className="text-secondary-black text-xl font-semibold mb-5">
                We dream of a different world
              </h3>
              <p className="text-secondary-black text-lg">
                A world where we are encouraged to slow down. Take care of
                ourselves, do what we love, and reestablish our connection with
                community and nature. A world where food is grown in harmony
                with nature. Children are blessed to run freely, play, be
                creative, and have the support of their community. A world where
                most adults dare to do what makes their soul sing. Start that
                business that speaks to their heart, live in purpose, and make
                good money doing it! 
              </p>
              <br />
              <p className="text-secondary-black text-lg">
                By supporting local economies and organic biodiverse farming,
                we’ll heal so much. Not only do we heal our bodies and start to
                reverse the current health crisis we’re currently facing, but we
                also promote diversity by encouraging people to bring their
                magic to the world. We also begin to heal human’s relationship
                with the earth. This is powerful! This is becoming the change so
                many of us wish to see. Who doesn’t want local organic food,
                organic lotions, and natural fibers?  Who doesn’t want to
                decrease the toxic load we constantly find ourselves bombarded
                with? 
              </p>
              <br />
              <br />
              <h3 className="text-secondary-black text-xl font-semibold mb-5">
                Our Vision: Build sustainable trade farms
              </h3>
              <p className="text-secondary-black text-lg">
                A world where we are encouraged to slow down. Take care of
                ourselves, do what we love, and reestablish our connection with
                community and nature. A world where food is grown in harmony
                with nature. Children are blessed to run freely, play, be
                creative, and have the support of their community. A world where
                most adults dare to do what makes their soul sing. Start that
                business that speaks to their heart, live in purpose, and make
                good money doing it! 
              </p>
              <br />
              <p className="text-secondary-black text-lg">
                By supporting local economies and organic biodiverse farming,
                we’ll heal so much. Not only do we heal our bodies and start to
                reverse the current health crisis we’re currently facing, but we
                also promote diversity by encouraging people to bring their
                magic to the world. We also begin to heal human’s relationship
                with the earth. This is powerful! This is becoming the change so
                many of us wish to see. Who doesn’t want local organic food,
                organic lotions, and natural fibers?  Who doesn’t want to
                decrease the toxic load we constantly find ourselves bombarded
                with? 
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
